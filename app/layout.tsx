import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import content from "@/content/es.json"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const c = content as any

export const metadata: Metadata = {
  metadataBase: new URL("https://nudo.paragu-ai.com"),
  title: { default: c.seo.defaultTitle, template: "%s | Nüdo" },
  description: c.seo.defaultDescription,
  openGraph: {
    title: c.seo.defaultTitle,
    description: c.seo.defaultDescription,
    locale: "es_PY",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className}>
      <head>
        <meta name="theme-color" content="#8B0000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
