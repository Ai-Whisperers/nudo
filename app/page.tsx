"use client"
import Link from "next/link"
import { Music, Calendar, Users, ExternalLink, Quote } from "lucide-react"
import content from "@/content/es.json"

const c = content as any
const h = c.home
const team = c.team
const discography = c.discography
const testimonials = c.testimonials

const iconMap: Record<string, any> = { Music, Calendar, Users }

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative py-28 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 50%, #0d0d0d 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #8B0000 0%, transparent 60%)" }} />
        <div className="max-w-3xl mx-auto relative">
          <h1 className="text-6xl sm:text-7xl font-black text-white mb-4 tracking-tight">{h.hero.headline}</h1>
          <p className="text-lg text-[#a0a0a0] max-w-xl mx-auto mb-8">{h.hero.subheadline}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={h.hero.ctaPrimaryHref} className="bg-[#8B0000] text-white px-8 py-3.5 rounded-lg font-semibold no-underline hover:bg-[#B22222] transition-colors flex items-center gap-2">
              <Music size={18} /> {h.hero.ctaPrimaryText}
            </Link>
            <a href={h.hero.ctaSecondaryHref} target="_blank" rel="noopener noreferrer"
              className="bg-transparent text-white px-8 py-3.5 rounded-lg font-semibold no-underline border-2 border-[#8B0000] hover:bg-[#8B0000]/20 transition-colors flex items-center gap-2">
              <ExternalLink size={18} /> {h.hero.ctaSecondaryText}
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-10">
            {h.hero.trustBadges.map((badge: string, i: number) => (
              <span key={i} className="text-xs text-[#666] uppercase tracking-widest">{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{h.bio.title}</h2>
        <p className="text-[#a0a0a0] leading-relaxed text-lg">{h.bio.short}</p>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-3">
          {h.features.map((f: any, i: number) => {
            const Icon = iconMap[f.icon] || Music
            return (
              <div key={i} className="bg-[#222] border border-[#333] rounded-xl p-8 text-center">
                <Icon className="mx-auto mb-4 text-[#8B0000]" size={32} />
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-[#a0a0a0]">{f.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* SPOTIFY EMBED */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-1">Escuchá a Nüdo</h2>
        <p className="text-sm text-[#666] text-center mb-8">DESAHOGO EP (2025) — Hardcore Metal desde Capiatá</p>
        <iframe
          style={{ borderRadius: "12px", width: "100%", height: "352px" }}
          src="https://open.spotify.com/embed/artist/2N3Z6SOIw7MOSxtRyzgJLv?utm_source=generator"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>

      {/* DISCOGRAPHY */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Discografía</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {discography.map((item: any) => (
              <div key={item.title} className="bg-[#222] border border-[#333] rounded-xl p-6 flex gap-5">
                <img src={item.imageUrl} alt={item.title} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-xs text-[#666] uppercase tracking-wider mb-1">{item.type} · {item.label} · {item.year}</p>
                  <div className="text-xs text-[#a0a0a0] space-y-0.5 mb-3">
                    {item.tracks.map((t: string) => <div key={t}>{t}</div>)}
                  </div>
                  <a href={item.spotifyUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[#e63946] text-xs font-semibold no-underline hover:underline flex items-center gap-1">
                    Escuchar <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">La Banda</h2>
        <p className="text-[#a0a0a0] text-center mb-10">Nüdo está integrada por:</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m: any) => (
            <div key={m.name} className="bg-[#222] border border-[#333] rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8B0000] mx-auto mb-3 flex items-center justify-center text-xl font-bold">
                {m.name.charAt(0)}
              </div>
              <h3 className="font-bold">{m.name}</h3>
              <p className="text-xs text-[#e63946] uppercase tracking-wider mb-2">{m.role}</p>
              <p className="text-sm text-[#a0a0a0]">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="py-16 px-4 bg-[#1a1a1a]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Lo que dicen</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {testimonials.map((t: any, i: number) => (
                <div key={i} className="bg-[#222] border border-[#333] rounded-xl p-6">
                  <Quote className="text-[#8B0000] mb-3" size={20} />
                  <p className="text-sm text-[#ccc] mb-3 italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-xs text-[#666] font-semibold">{t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ background: "linear-gradient(135deg, #8B0000 0%, #B22222 100%)" }}>
        <h2 className="text-3xl font-bold mb-4">¿Querés contratar a Nüdo?</h2>
        <p className="mb-8 text-white/80 max-w-md mx-auto">Contactanos por Instagram o WhatsApp y armamos algo</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href={c.contact.instagram} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-[#8B0000] px-8 py-3.5 rounded-lg font-semibold no-underline hover:bg-white/90 transition-colors">
            Instagram
          </a>
          <a href={`https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(c.whatsappMessage)}`} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-transparent text-white px-8 py-3.5 rounded-lg font-semibold no-underline border-2 border-white/50 hover:border-white transition-colors">
            WhatsApp
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 px-4 max-w-xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-2">{c.newsletter.title}</h3>
        <p className="text-sm text-[#a0a0a0] mb-6">{c.newsletter.subtitle}</p>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder={c.newsletter.placeholder}
            className="flex-1 bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#666] focus:outline-none focus:border-[#8B0000]"
          />
          <button type="submit" className="bg-[#8B0000] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#B22222] transition-colors">
            {c.newsletter.submitLabel}
          </button>
        </form>
      </section>
    </div>
  )
}
