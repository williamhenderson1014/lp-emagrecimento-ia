import { Revelador, Topo, Formulario, Perguntas, Contador } from './interativo'

const IMG = 'https://images.unsplash.com'

const rostos = [
  `${IMG}/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80`,
  `${IMG}/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&q=80`,
  `${IMG}/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&q=80`,
  `${IMG}/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces&q=80`,
]

const perguntas = [
  {
    q: 'A Vinici substitui o acompanhamento de um nutricionista?',
    a: 'Não, e nem foi feita para isso. A Vinici cuida do dia a dia, do que você come quando ninguém está olhando, e organiza isso de um jeito que dá para enxergar. Acompanhamento clínico continua sendo com profissional de saúde, e o app foi desenhado para andar junto com ele, não no lugar dele.',
  },
  {
    q: 'Preciso pesar tudo o que eu como?',
    a: 'Não. Você escreve a refeição em uma frase, ou manda a foto, e a IA estima as porções. Balança é o motivo número um de gente abandonar app de comida na primeira semana, então a constância do registro vale mais aqui do que a precisão de cada grama.',
  },
  {
    q: 'Funciona para quem come fora todos os dias?',
    a: 'Sim, foi esse o caso que guiou o projeto inteiro. O plano se monta em cima do que existe perto de você e do horário que você realmente tem, não de uma cozinha ideal com três panelas no fogo às sete da manhã.',
  },
  {
    q: 'E se eu sair da linha no fim de semana?',
    a: 'O plano da semana seguinte já nasce sabendo disso. A IA reequilibra sozinha em vez de te devolver o mesmo cardápio que você não conseguiu seguir, que é onde a maioria das pessoas desiste.',
  },
  {
    q: 'Quando o aplicativo vai ser lançado?',
    a: 'A abertura acontece por lotes, para o suporte conseguir acompanhar de perto quem entra. Quem está na lista de espera recebe o convite antes da abertura pública e mantém a condição de fundador.',
  },
]

export default function Pagina() {
  return (
    <>
      <Revelador />

      <Topo>
        <div className="caixa">
          <a className="marca" href="#topo">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="9" fill="#1E7A4F" />
              <path
                d="M9 11.5l5.2 10.2a2 2 0 003.56 0L23 11.5"
                stroke="#fff"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
            Vinici
          </a>

          <nav className="menu">
            <a href="#como">Como funciona</a>
            <a href="#plano">O plano</a>
            <a href="#vozes">Quem já testou</a>
            <a href="#perguntas">Perguntas</a>
          </nav>

          <a className="botao pequeno" href="#cadastro">
            Entrar na lista
          </a>
        </div>
      </Topo>

      <main id="topo">
        {/* ---------------- herói ---------------- */}
        <section className="heroi">
          <div className="caixa">
            <div>
              <span className="etiqueta linha-mascara">
                <span>Lista de espera aberta · lote de fundadores</span>
              </span>

              <h1>
                <span className="linha-mascara">
                  <span style={{ '--atraso': '80ms' }}>Emagrecer para</span>
                </span>
                <span className="linha-mascara">
                  <span style={{ '--atraso': '180ms' }}>de ser um projeto</span>
                </span>
                <span className="linha-mascara">
                  <span style={{ '--atraso': '280ms' }}>
                    <em>que recomeça</em> segunda.
                  </span>
                </span>
              </h1>

              <p className="sub" data-reveal style={{ '--atraso': '420ms' }}>
                A Vinici olha a sua rotina de verdade, o horário que você tem, o que você come
                quando o dia aperta, e monta um plano que se ajusta sozinho toda semana. Sem
                cardápio impresso, sem balança, sem recomeçar do zero na segunda.
              </p>

              <div data-reveal style={{ '--atraso': '520ms' }}>
                <div id="cadastro">
                  <Formulario id="email-heroi" />
                </div>

                <div className="assinatura">
                  <div className="rostos">
                    {rostos.map((r) => (
                      <img key={r} src={r} alt="" width="34" height="34" loading="eager" />
                    ))}
                  </div>
                  <span>
                    <Contador ate={2847} /> pessoas já estão na fila do primeiro lote
                  </span>
                </div>
              </div>
            </div>

            {/* celular */}
            <div className="palco" data-reveal style={{ '--atraso': '260ms' }}>
              <div className="disco" aria-hidden="true" />
              <div className="disco dois" aria-hidden="true" />

              <div className="celular">
                <div className="tela">
                  <div className="barra">
                    <span>9:41</span>
                    <span>terça</span>
                  </div>

                  <div className="tela-topo">
                    <p>Bom dia, Marina</p>
                    <strong>Seu plano de hoje</strong>
                  </div>

                  <div className="anel">
                    <svg width="66" height="66" viewBox="0 0 66 66" aria-hidden="true">
                      <circle cx="33" cy="33" r="27" fill="none" stroke="#E4DED3" strokeWidth="7" />
                      <circle
                        cx="33"
                        cy="33"
                        r="27"
                        fill="none"
                        stroke="#1E7A4F"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray="170"
                        strokeDashoffset="58"
                        transform="rotate(-90 33 33)"
                      />
                    </svg>
                    <div className="anel-num">
                      <b>1.320 kcal</b>
                      de 1.850 até agora, no ritmo da semana
                    </div>
                  </div>

                  <div className="refeicoes">
                    {[
                      {
                        n: 'Café da manhã',
                        d: 'ovos mexidos, pão integral',
                        k: '380',
                        i: `${IMG}/photo-1512621776951-a57141f2eefd?w=120&h=120&fit=crop&q=80`,
                        atraso: '600ms',
                      },
                      {
                        n: 'Almoço',
                        d: 'no restaurante do trabalho',
                        k: '640',
                        i: `${IMG}/photo-1490645935967-10de6ba17061?w=120&h=120&fit=crop&q=80`,
                        atraso: '760ms',
                      },
                      {
                        n: 'Jantar sugerido',
                        d: 'ajustado ao seu almoço',
                        k: '520',
                        i: `${IMG}/photo-1498837167922-ddd27525d352?w=120&h=120&fit=crop&q=80`,
                        atraso: '920ms',
                      },
                    ].map((m) => (
                      <div className="refeicao" key={m.n} style={{ animationDelay: m.atraso }}>
                        <img src={m.i} alt="" width="40" height="40" />
                        <div>
                          <p>{m.n}</p>
                          <span>{m.d}</span>
                        </div>
                        <span className="kcal">{m.k}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="balao um">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E7A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                </svg>
                Plano refeito
                <span>há 2 min</span>
              </div>

              <div className="balao dois">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E7A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 17l5-5 4 3 8-8" />
                  <path d="M15 7h5v5" />
                </svg>
                Semana no ritmo
                <span>5 de 7 dias</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- faixa ---------------- */}
        <div className="faixa" aria-hidden="true">
          <div className="trilho">
            {[0, 1].map((v) => (
              <div key={v} style={{ display: 'flex', gap: '46px' }}>
                <span>Registro por foto ou por frase</span>
                <span>Plano refeito toda semana</span>
                <span>Funciona comendo fora</span>
                <span>Sem balança de cozinha</span>
                <span>Lista de compras automática</span>
                <span>Conversa em português</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- como funciona ---------------- */}
        <section id="como">
          <div className="caixa">
            <div className="cabeca" data-reveal>
              <span className="etiqueta">Como funciona</span>
              <h2>Três minutos de conversa, e o plano nasce da sua rotina.</h2>
              <p className="sub">
                Nenhuma dieta pronta muda de ideia quando a sua semana muda. Essa é a diferença
                inteira.
              </p>
            </div>

            <div className="passos">
              {[
                {
                  n: '01',
                  t: 'Você conta como é o seu dia',
                  p: 'Horário que acorda, onde almoça, o que você não abre mão de comer. Três minutos, em texto, sem formulário de 40 campos.',
                  icone: (
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  ),
                },
                {
                  n: '02',
                  t: 'A IA monta o plano da semana',
                  p: 'Refeições que cabem no seu horário e no seu bolso, com as substituições já previstas para o dia em que nada sai como planejado.',
                  icone: (
                    <>
                      <path d="M12 2a4 4 0 014 4v1a4 4 0 013 3.87V13a4 4 0 01-3 3.87V18a4 4 0 01-8 0v-1.13A4 4 0 015 13v-2.13A4 4 0 018 7V6a4 4 0 014-4z" />
                      <path d="M12 8v8" />
                    </>
                  ),
                },
                {
                  n: '03',
                  t: 'Ela corrige o rumo sozinha',
                  p: 'Você registra o que comeu de verdade, inclusive o que saiu do plano, e a semana seguinte já nasce reequilibrada. Sem culpa, sem recomeço.',
                  icone: (
                    <>
                      <path d="M3 12a9 9 0 019-9 9 9 0 016.36 2.64L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 01-9 9 9 9 0 01-6.36-2.64L3 16" />
                      <path d="M3 21v-5h5" />
                    </>
                  ),
                },
              ].map((p, i) => (
                <article className="passo" key={p.n} data-reveal style={{ '--atraso': `${i * 110}ms` }}>
                  <span className="passo-num">{p.n}</span>
                  <div className="passo-icone">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E7A4F" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {p.icone}
                    </svg>
                  </div>
                  <h3>{p.t}</h3>
                  <p>{p.p}</p>
                </article>
              ))}
            </div>

            <div className="numeros">
              <div className="numero" data-reveal>
                <Contador ate={3} sufixo=" min" />
                <p>é o que leva a conversa inicial, do primeiro toque ao plano na tela</p>
              </div>
              <div className="numero" data-reveal style={{ '--atraso': '110ms' }}>
                <Contador ate={7} sufixo=" dias" />
                <p>é o ciclo em que o plano se refaz com base no que você realmente comeu</p>
              </div>
              <div className="numero" data-reveal style={{ '--atraso': '220ms' }}>
                <Contador ate={2847} />
                <p>pessoas na lista de espera antes mesmo do app abrir</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- o plano ---------------- */}
        <section id="plano" className="escuro">
          <div className="caixa">
            <div data-reveal>
              <span className="etiqueta">O plano</span>
              <h2>O problema nunca foi saber o que comer.</h2>
              <p className="sub">
                Foi conseguir manter isso numa terça-feira ruim. A Vinici trabalha justamente nas
                terças ruins, que é onde todo plano alimentar costuma morrer.
              </p>

              <ul className="lista">
                {[
                  'Cardápio que se adapta ao restaurante que existe perto de você, não a uma cozinha ideal.',
                  'Registro por foto: você fotografa o prato e segue a vida, a estimativa é da IA.',
                  'Lista de compras montada a partir do plano, já somando o que dá para reaproveitar.',
                  'Um resumo semanal em português claro, mostrando o que mudou e por que mudou.',
                ].map((l) => (
                  <li key={l}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1E7A4F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <div className="foto" data-reveal style={{ '--atraso': '140ms' }}>
              <img
                src={`${IMG}/photo-1544367567-0f2fcb009e0b?w=900&h=1125&fit=crop&q=80`}
                alt="Mulher em uma rotina tranquila de cuidado com o próprio corpo"
                width="900"
                height="1125"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ---------------- vozes ---------------- */}
        <section id="vozes">
          <div className="caixa">
            <div className="cabeca" data-reveal>
              <span className="etiqueta">Quem já testou</span>
              <h2>O grupo fechado usou por seis semanas.</h2>
            </div>

            <div className="vozes">
              {[
                {
                  t: 'Já tinha desistido de três apps porque todos queriam que eu pesasse a comida. Aqui eu escrevo "comi um prato feito no bandejão" e ele entende. Continuei usando, que é o que nunca tinha acontecido antes.',
                  n: 'Marina Alves',
                  c: 'São Paulo, SP',
                  i: `${IMG}/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces&q=80`,
                },
                {
                  t: 'Viajo a trabalho três semanas por mês. É o primeiro plano que não desmonta quando eu entro no aeroporto, ele simplesmente refaz o resto da semana e segue.',
                  n: 'Rafael Prado',
                  c: 'Belo Horizonte, MG',
                  i: `${IMG}/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces&q=80`,
                },
                {
                  t: 'O que me pegou foi o resumo de domingo. Ele mostra o que mudou na semana e explica o porquê, então pela primeira vez eu entendi o que estava acontecendo em vez de só obedecer.',
                  n: 'Juliana Reis',
                  c: 'Curitiba, PR',
                  i: `${IMG}/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces&q=80`,
                },
              ].map((v, i) => (
                <figure className="voz" key={v.n} data-reveal style={{ '--atraso': `${i * 110}ms` }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#E4DED3" aria-hidden="true">
                    <path d="M10 7H6a3 3 0 00-3 3v7h7v-7H6a1 1 0 011-1h3zm11 0h-4a3 3 0 00-3 3v7h7v-7h-4a1 1 0 011-1h3z" />
                  </svg>
                  <p>{v.t}</p>
                  <figcaption className="quem">
                    <img src={v.i} alt="" width="40" height="40" loading="lazy" />
                    <div>
                      <b>{v.n}</b>
                      <span>{v.c}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- perguntas ---------------- */}
        <section id="perguntas">
          <div className="caixa">
            <div className="cabeca" data-reveal style={{ margin: '0 auto 40px', textAlign: 'center' }}>
              <span className="etiqueta">Perguntas</span>
              <h2>O que costumam perguntar antes de entrar.</h2>
            </div>
            <div data-reveal>
              <Perguntas itens={perguntas} />
            </div>
          </div>
        </section>

        {/* ---------------- chamada final ---------------- */}
        <section style={{ paddingTop: 0 }}>
          <div className="caixa">
            <div className="final" data-reveal>
              <span className="etiqueta">Lote de fundadores</span>
              <h2>A próxima segunda pode ser só mais uma segunda.</h2>
              <p className="sub">
                Entre na lista e receba o convite antes da abertura pública, com a condição de
                fundador mantida enquanto você continuar usando.
              </p>
              <Formulario id="email-final" botao="Quero meu convite" />
            </div>
          </div>
        </section>
      </main>

      {/* ---------------- rodapé ---------------- */}
      <footer className="rodape">
        <div className="caixa">
          <div className="rodape-topo">
            <div>
              <a className="marca" href="#topo">
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <rect width="32" height="32" rx="9" fill="#1E7A4F" />
                  <path
                    d="M9 11.5l5.2 10.2a2 2 0 003.56 0L23 11.5"
                    stroke="#fff"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>
                Vinici
              </a>
              <p>
                Um plano alimentar que aprende com a sua rotina em vez de exigir uma rotina nova.
              </p>
            </div>

            <div className="colunas">
              <div className="coluna">
                <h4>Produto</h4>
                <a href="#como">Como funciona</a>
                <a href="#plano">O plano</a>
                <a href="#perguntas">Perguntas</a>
              </div>
              <div className="coluna">
                <h4>Empresa</h4>
                <a href="#topo">Sobre</a>
                <a href="#topo">Contato</a>
                <a href="#topo">Imprensa</a>
              </div>
              <div className="coluna">
                <h4>Legal</h4>
                <a href="#topo">Privacidade</a>
                <a href="#topo">Termos de uso</a>
                <a href="#topo">LGPD</a>
              </div>
            </div>
          </div>

          <p className="aviso">
            A Vinici é uma ferramenta de organização alimentar e não substitui consulta,
            diagnóstico ou tratamento com profissional de saúde. Resultados variam de pessoa para
            pessoa. Não indicada para menores de 18 anos, gestantes ou pessoas em tratamento de
            transtornos alimentares.
          </p>

          <div className="rodape-baixo">
            <span>© 2026 Vinici. Todos os direitos reservados.</span>
            <span>Feito no Brasil</span>
          </div>
        </div>
      </footer>
    </>
  )
}
