"use client"
import { ExternalLink } from "lucide-react"
import content from "@/content/es.json"
import type { Metadata } from "next"

const c = content as any
const discography = c.discography

export default function MusicaPage() {
  return (
    <div>
      <section className="py-20 px-4 text-center" style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 50%, #0d0d0d 100%)" }}>
        <h1 className="text-4xl font-black mb-3">Música</h1>
        <p className="text-[#a0a0a0]">DESAHOGO EP (2025) — disponible en todas las plataformas</p>
      </section>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-3">Escuchá a Nüdo</h2>
        <p className="text-sm text-[#666] text-center mb-8">Seguinos en Spotify — 47 oyentes mensuales</p>
        <iframe
          style={{ borderRadius: "12px", width: "100%", height: "352px" }}
          src="https://open.spotify.com/embed/artist/2N3Z6SOIw7MOSxtRyzgJLv?utm_source=generator"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>

      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Discografía</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {discography.map((item: any) => (
              <div key={item.title} className="bg-[#222] border border-[#333] rounded-xl overflow-hidden">
                <div className="flex">
                  <img src={item.imageUrl} alt={item.title} className="w-32 h-32 object-cover flex-shrink-0" />
                  <div className="p-5 flex-1">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-xs text-[#e63946] uppercase tracking-wider mb-1">{item.label} · {item.year}</p>
                    <div className="text-xs text-[#a0a0a0] space-y-0.5 mb-2">
                      {item.tracks.map((t: string) => <div key={t}>{t}</div>)}
                    </div>
                    <a href={item.spotifyUrl} target="_blank" rel="noopener noreferrer"
                      className="text-[#e63946] text-xs font-semibold no-underline hover:underline inline-flex items-center gap-1 mt-1">
                      Escuchar en Spotify <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
