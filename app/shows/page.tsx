"use client"
import { Calendar } from "lucide-react"
import content from "@/content/es.json"

const c = content as any
const shows = c.shows

export default function ShowsPage() {
  return (
    <div>
      <section className="py-20 px-4 text-center" style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 50%, #0d0d0d 100%)" }}>
        <h1 className="text-4xl font-black mb-3">Shows</h1>
        <p className="text-[#a0a0a0]">Seguí @nudo_band para las próximas fechas</p>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        {shows.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#a0a0a0] mb-4">No hay fechas programadas por ahora.</p>
            <p className="text-sm text-[#666]">Seguinos en Instagram para enterarte de los próximos shows.</p>
          </div>
        )}
        <div className="space-y-4">
          {shows.map((s: any) => (
            <div key={s.title} className="bg-[#222] border border-[#333] rounded-xl p-6 flex items-start gap-4">
              <div className="bg-[#8B0000]/20 rounded-lg p-3 flex-shrink-0">
                <Calendar className="text-[#e63946]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-xs text-[#e63946] uppercase tracking-wider mb-1">{s.date} · {s.venue}</p>
                <p className="text-sm text-[#a0a0a0]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
