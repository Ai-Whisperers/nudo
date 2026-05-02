"use client"
import content from "@/content/es.json"

const c = content as any
const lyrics = c.lyrics
const contact = c.contact

export default function LetrasPage() {
  return (
    <div>
      <section className="py-20 px-4 text-center" style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 50%, #0d0d0d 100%)" }}>
        <h1 className="text-4xl font-black mb-3">Letras</h1>
        <p className="text-[#a0a0a0]">Canciones de Nüdo — letras y significado</p>
      </section>

      <section className="py-16 px-4 max-w-2xl mx-auto">
        {lyrics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#a0a0a0] mb-4">Todavía no tenemos todas las letras disponibles.</p>
            <p className="text-sm text-[#666]">Seguinos en <a href={contact.instagram} target="_blank" className="text-[#e63946] no-underline">Instagram</a> para novedades.</p>
          </div>
        )}
        {lyrics.map((song: any) => (
          <div key={song.title} className="mb-16">
            <h2 className="text-2xl font-bold mb-1">{song.title}</h2>
            <p className="text-xs text-[#666] uppercase tracking-wider mb-6">{song.album}</p>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-8">
              {song.lyrics.map((line: string, i: number) => (
                <p key={i} className={`text-sm leading-relaxed ${line === "" ? "h-4" : "text-[#ccc]"}`}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
