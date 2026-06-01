import type { Metadata } from 'next'
import './globals.css'
import { CookieConsent } from "@ai-whisperers/seo"
import { WhatsAppFloat } from "@ai-whisperers/whatsapp"

export const metadata: Metadata = {
  title: 'Nüdo — Hardcore Metal desde Capiatá, Paraguay',
  description: 'Hardcore Metal / Metalcore desde Capiatá, Paraguay. Fundada en 2017. DESAHOGO EP (2025) — Bad Vibes Records.',
  openGraph: {
    title: 'Nüdo — Hardcore Metal',
    description: 'Hardcore Metal / Metalcore desde Capiatá, Paraguay. Fundada en 2017. DESAHOGO EP disponible en Spotify.',
    siteName: 'Nüdo',
    type: 'website',
    images: [
      {
        url: 'https://i.scdn.co/image/ab67616d00001e029eb75be054c928ad5c3576e3',
        width: 640,
        height: 640,
        alt: 'DESAHOGO EP — Nüdo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nüdo — Hardcore Metal',
    description: 'Hardcore Metal desde Capiatá, Paraguay. DESAHOGO EP 2025.',
    images: ['https://i.scdn.co/image/ab67616d00001e029eb75be054c928ad5c3576e3'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  )
}
