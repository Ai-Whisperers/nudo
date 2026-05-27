import type { Metadata } from 'next'
import './globals.css'
import { CookieConsent } from "@ai-whisperers/seo"
import { WhatsAppFloat } from "@ai-whisperers/whatsapp"

export const metadata: Metadata = {
  title: 'Nüdo — Hardcore Metal desde Capiatá, Paraguay',
  description: 'Hardcore Metal / Metalcore desde Capiatá, Paraguay. Fundada en 2017. DESAHOGO EP (2025) — Bad Vibes Records.',
  openGraph: {
    title: 'Nüdo — Hardcore Metal',
    description: 'Hardcore Metal desde Capiatá, Paraguay. Fundada en 2017.',
    siteName: 'Nüdo',
    type: 'website',
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
