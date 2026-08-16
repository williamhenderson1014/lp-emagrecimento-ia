import localFont from 'next/font/local'
import './globals.css'

// Poppins servida pelo próprio projeto. Nenhuma chamada ao Google no build,
// então o deploy não depende de a rede responder naquele dia.
const poppins = localFont({
  src: [
    { path: './fonts/poppins-300.woff2', weight: '300', style: 'normal' },
    { path: './fonts/poppins-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/poppins-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/poppins-600.woff2', weight: '600', style: 'normal' },
  ],
  display: 'swap',
  variable: '--fonte',
  fallback: ['system-ui', 'sans-serif'],
})

const SITE = 'https://vinici.app'

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Vinici · o app de emagrecimento que aprende a sua rotina',
    template: '%s · Vinici',
  },
  description:
    'A Vinici usa inteligência artificial para montar um plano alimentar que cabe na sua rotina, se ajusta sozinho toda semana e não depende de dieta pronta. Entre na lista de espera.',
  keywords: [
    'app de emagrecimento',
    'emagrecer com inteligência artificial',
    'plano alimentar personalizado',
    'reeducação alimentar',
    'app de nutrição',
    'contador de calorias',
  ],
  authors: [{ name: 'Vinici' }],
  creator: 'Vinici',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE,
    siteName: 'Vinici',
    title: 'Vinici · o app de emagrecimento que aprende a sua rotina',
    description:
      'Plano alimentar montado por IA a partir da sua rotina real, ajustado toda semana. Entre na lista de espera do lançamento.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Prato equilibrado montado pelo plano da Vinici',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinici · o app de emagrecimento que aprende a sua rotina',
    description:
      'Plano alimentar montado por IA a partir da sua rotina real, ajustado toda semana.',
    images: [
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=630&fit=crop&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'health',
}

export const viewport = {
  themeColor: '#12151A',
  width: 'device-width',
  initialScale: 1,
}

// Schema.org: sem isso o Google trata a página como texto solto. Com isso ele
// entende que existe um produto, uma organização e um bloco de perguntas.
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE}/#org`,
      name: 'Vinici',
      url: SITE,
      description:
        'Aplicativo de emagrecimento com inteligência artificial que monta e ajusta o plano alimentar a partir da rotina real de cada pessoa.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#site`,
      url: SITE,
      name: 'Vinici',
      inLanguage: 'pt-BR',
      publisher: { '@id': `${SITE}/#org` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Vinici',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'iOS, Android',
      inLanguage: 'pt-BR',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        description: 'Lista de espera aberta antes do lançamento.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'A Vinici substitui o acompanhamento de um nutricionista?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. A Vinici organiza a rotina alimentar do dia a dia e mostra o que está acontecendo com ela. Acompanhamento clínico continua sendo com profissional de saúde, e o app foi feito para andar junto com ele.',
          },
        },
        {
          '@type': 'Question',
          name: 'Preciso pesar tudo o que eu como?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. Você registra a refeição em uma frase ou por foto, e a IA estima as porções. A precisão importa menos do que a constância do registro.',
          },
        },
        {
          '@type': 'Question',
          name: 'Funciona para quem come fora todos os dias?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim, foi justamente esse o caso que guiou o projeto. O plano se monta em cima do que existe perto de você e do seu horário real, não de uma cozinha ideal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quando o aplicativo será lançado?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O lançamento acontece por lotes. Quem entra na lista de espera recebe o convite antes da abertura pública e mantém a condição de fundador.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
