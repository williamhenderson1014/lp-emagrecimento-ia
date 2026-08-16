'use client'

import { useEffect, useRef, useState } from 'react'

/* ---------------------------------------------------------------
   Backend simulado. Nada sai do navegador: a lista de espera vive
   em memória, com a mesma latência e as mesmas respostas que a API
   real devolveria, inclusive e-mail repetido.
   --------------------------------------------------------------- */

const listaEmMemoria = new Map([
  ['ana@exemplo.com', { origem: 'instagram_stories' }],
])

function pegarOrigem() {
  if (typeof window === 'undefined') return null
  const p = new URLSearchParams(window.location.search)
  const utm = p.get('utm_source')
  const campanha = p.get('utm_campaign')
  if (!utm) return null
  return campanha ? `${utm} · ${campanha}` : utm
}

async function inscrever(email) {
  await new Promise((r) => setTimeout(r, 900))
  const chave = email.trim().toLowerCase()
  if (listaEmMemoria.has(chave)) {
    return { ok: false, motivo: 'Esse e-mail já está na lista, o convite vai chegar nele.' }
  }
  const origem = pegarOrigem()
  listaEmMemoria.set(chave, { origem })
  return { ok: true, posicao: 2841 + listaEmMemoria.size, origem }
}

/* ---------------------------------------------------------------
   Entrada dos blocos conforme a página é rolada
   --------------------------------------------------------------- */

export function Revelador() {
  useEffect(() => {
    const alvos = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visto')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -60px' },
    )
    alvos.forEach((a) => obs.observe(a))
    return () => obs.disconnect()
  }, [])
  return null
}

/* ---------------------------------------------------------------
   Topo que encolhe ao rolar
   --------------------------------------------------------------- */

export function Topo({ children }) {
  const [rolado, setRolado] = useState(false)
  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 18)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])
  return <header className={rolado ? 'topo rolado' : 'topo'}>{children}</header>
}

/* ---------------------------------------------------------------
   Contador que sobe quando o número entra na tela
   --------------------------------------------------------------- */

export function Contador({ ate, sufixo = '', prefixo = '', casas = 0 }) {
  const [valor, setValor] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const no = ref.current
    if (!no) return
    let rodou = false

    const contar = () => {
      if (rodou) return
      rodou = true
      const duracao = 1500
      const inicio = performance.now()
      const passo = (agora) => {
        const t = Math.min((agora - inicio) / duracao, 1)
        const suave = 1 - Math.pow(1 - t, 3)
        setValor(ate * suave)
        if (t < 1) requestAnimationFrame(passo)
      }
      requestAnimationFrame(passo)
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        obs.disconnect()
        contar()
      },
      { threshold: 0.6 },
    )
    obs.observe(no)

    // Rede de segurança: se por qualquer motivo o observador não disparar,
    // o número aparece do mesmo jeito em vez de ficar parado em zero.
    const rede = setTimeout(() => {
      if (!rodou) setValor(ate)
    }, 2500)

    return () => {
      obs.disconnect()
      clearTimeout(rede)
    }
  }, [ate])

  const mostrado = casas
    ? valor.toFixed(casas).replace('.', ',')
    : Math.round(valor).toLocaleString('pt-BR')

  return (
    <b ref={ref}>
      {prefixo}
      {mostrado}
      {sufixo}
    </b>
  )
}

/* ---------------------------------------------------------------
   Cadastro na lista de espera
   --------------------------------------------------------------- */

export function Formulario({ id, botao = 'Entrar na lista' }) {
  const [email, setEmail] = useState('')
  const [aceite, setAceite] = useState(false)
  const [estado, setEstado] = useState('parado')
  const [erro, setErro] = useState('')
  const [resposta, setResposta] = useState(null)

  async function enviar(e) {
    e.preventDefault()
    setErro('')
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email.trim())) {
      setErro('Confere o e-mail, parece que faltou alguma coisa.')
      return
    }
    if (!aceite) {
      setErro('Precisamos do seu aceite para guardar o e-mail.')
      return
    }
    setEstado('enviando')
    const r = await inscrever(email)
    if (!r.ok) {
      setEstado('parado')
      setErro(r.motivo)
      return
    }
    setResposta(r)
    setEstado('pronto')
  }

  if (estado === 'pronto') {
    return (
      <div className="forma">
        <div className="pronto">
          <strong>
            <span className="marca-check">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            Você está na lista
          </strong>
          <p>
            Guardamos {email} na posição {resposta.posicao.toLocaleString('pt-BR')}. O convite do
            primeiro lote chega antes da abertura pública
            {resposta.origem ? `, e já sabemos que você veio de ${resposta.origem}.` : '.'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className="forma" onSubmit={enviar} noValidate>
      <div className="campos">
        <input
          id={id}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="seu melhor e-mail"
          aria-label="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="botao" type="submit" disabled={estado === 'enviando'}>
          {estado === 'enviando' ? 'Guardando...' : botao}
          {estado === 'parado' && (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h13M13 6l6 6-6 6" />
            </svg>
          )}
        </button>
      </div>

      <label className="consentimento">
        <input type="checkbox" checked={aceite} onChange={(e) => setAceite(e.target.checked)} />
        <span>
          Aceito receber o convite de lançamento e novidades da Vinici por e-mail, e sei que posso
          sair da lista a qualquer momento.
        </span>
      </label>

      {erro && <p className="erro">{erro}</p>}
    </form>
  )
}

/* ---------------------------------------------------------------
   Perguntas frequentes
   --------------------------------------------------------------- */

export function Perguntas({ itens }) {
  const [aberta, setAberta] = useState(0)
  return (
    <div className="perguntas">
      {itens.map((item, i) => (
        <div className={aberta === i ? 'pergunta aberta' : 'pergunta'} key={item.q}>
          <button onClick={() => setAberta(aberta === i ? -1 : i)} aria-expanded={aberta === i}>
            {item.q}
            <span className="mais">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          <div className="dobra">
            <div>
              <p>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
