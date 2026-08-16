# Vinici · landing page

Landing page de lançamento para um aplicativo de emagrecimento com inteligência artificial.
Next.js (App Router), sem WordPress, sem backend: a lista de espera roda com dados simulados
dentro do próprio navegador, com a mesma latência e as mesmas respostas que a API real daria.

## Rodar

```bash
npm install
npm run dev
```

## O que já está resolvido aqui

- SEO técnico: metadata completa, canonical, Open Graph e Twitter card, JSON-LD com
  Organization, WebSite, SoftwareApplication e FAQPage, `robots.txt` e `sitemap.xml` gerados
  pelo próprio framework.
- Cadastro com validação, consentimento explícito (LGPD) e estado de sucesso, além da captura
  de `utm_source` e `utm_campaign` junto do lead, para saber qual anúncio trouxe cada cadastro.
- Poppins servida pelo próprio projeto (`app/fonts`), então o build não depende do Google
  responder.
- Paleta fechada em quatro cores, sem nenhum gradiente.
- Texto escrito dentro da política de saúde e bem-estar das plataformas de anúncio: nenhuma
  promessa de peso perdido, nenhum antes e depois, nenhuma imagem de corpo como problema.

## Deploy

Projeto pronto para a Vercel, sem variáveis de ambiente.
