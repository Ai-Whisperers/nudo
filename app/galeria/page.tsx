"use client"
import { useState } from "react"
import content from "@/content/es.json"

const c = content as any
const gallery = c.gallery

const categories = ["Todas", ...new Set(gallery.map((img: any) => img.category))] as string[]

export default function GaleriaPage() {
  const [active, setActive] = useState("Todas")
  const filtered = active === "Todas" ? gallery : gallery.filter((img: any) => img.category === active)

  return (
    <div>
      <section className="py-20 px-4 text-center" style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 50%, #0d0d0d 100%)" }}>
        <h1 className="text-4xl font-black mb-3">Galería</h1>
        <p className="text-[#a0a0a0]">Nüdo en vivo — la furia hecha música</p>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors
                ${active === cat ? "bg-[#8B0000] text-white" : "bg-[#1a1a1a] text-[#a0a0a0] hover:text-white border border-[#333]"}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img: any, i: number) => (
            <div key={i} className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] aspect-[4/3]">
              <img src={img.src} alt={img.alt} loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
