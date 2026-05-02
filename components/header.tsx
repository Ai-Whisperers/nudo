"use client"
import Link from "next/link"
import { Menu, X, ExternalLink, Disc3 } from "lucide-react"
import content from "@/content/es.json"
import { useState } from "react"

const c = content as any
const nav = c.navigation
const whatsapp = c.whatsapp

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0d0d0d]/95 backdrop-blur border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-widest text-white no-underline hover:text-[#e63946] transition-colors">
          {c.siteName}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.items.map((item: any) => (
            <Link key={item.href} href={item.href} className="text-sm text-[#a0a0a0] hover:text-white no-underline transition-colors uppercase tracking-wider">
              {item.label}
            </Link>
          ))}
          <a href={nav.ctaHref} target="_blank" rel="noopener noreferrer"
            className="bg-[#8B0000] text-white text-xs px-4 py-2 rounded-full font-semibold no-underline hover:bg-[#B22222] transition-colors flex items-center gap-1.5">
            <Disc3 size={14} /> {nav.ctaText}
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#333] px-4 py-4 space-y-3">
          {nav.items.map((item: any) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
              className="block text-[#ccc] no-underline uppercase text-sm tracking-wider hover:text-white">
              {item.label}
            </Link>
          ))}
          <a href={nav.ctaHref} target="_blank" rel="noopener noreferrer"
            className="block text-center bg-[#8B0000] text-white px-4 py-2.5 rounded-full font-semibold no-underline text-sm">
            {nav.ctaText}
          </a>
        </div>
      )}
    </header>
  )
}
