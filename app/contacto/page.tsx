"use client"
import { Mail, Instagram, Facebook, Youtube, ExternalLink, Disc3 } from "lucide-react"
import content from "@/content/es.json"

const c = content as any
const contact = c.contact

export default function ContactoPage() {
  return (
    <div>
      <section className="py-20 px-4 text-center" style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 50%, #0d0d0d 100%)" }}>
        <h1 className="text-4xl font-black mb-3">Contacto</h1>
        <p className="text-[#a0a0a0]">Escribinos — respondemos rápido</p>
      </section>

      <section className="py-16 px-4 max-w-2xl mx-auto">
        <div className="grid gap-6">
          <a href={`https://wa.me/${c.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(c.whatsappMessage)}`} target="_blank" rel="noopener noreferrer"
            className="bg-[#222] border border-[#333] rounded-xl p-6 flex items-center gap-4 no-underline group hover:border-[#25D366] transition-colors">
            <div className="bg-[#25D366]/10 rounded-lg p-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">WhatsApp</h3>
              <p className="text-sm text-[#a0a0a0]">Booking, shows, lo que sea — mandá mensaje</p>
            </div>
            <ExternalLink className="text-[#666] group-hover:text-white transition-colors" size={18} />
          </a>

          <a href={`mailto:${contact.email}`} className="bg-[#222] border border-[#333] rounded-xl p-6 flex items-center gap-4 no-underline group hover:border-[#D14836] transition-colors">
            <div className="bg-[#D14836]/10 rounded-lg p-3"><Mail className="text-[#D14836]" size={28} /></div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Email</h3>
              <p className="text-sm text-[#a0a0a0]">{contact.email}</p>
            </div>
            <ExternalLink className="text-[#666] group-hover:text-white transition-colors" size={18} />
          </a>

          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="bg-[#222] border border-[#333] rounded-xl p-6 flex items-center gap-4 no-underline group hover:border-[#E4405F] transition-colors">
            <div className="bg-[#E4405F]/10 rounded-lg p-3"><Instagram className="text-[#E4405F]" size={28} /></div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Instagram</h3>
              <p className="text-sm text-[#a0a0a0]">@nudo_band</p>
            </div>
            <ExternalLink className="text-[#666] group-hover:text-white transition-colors" size={18} />
          </a>

          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="bg-[#222] border border-[#333] rounded-xl p-6 flex items-center gap-4 no-underline group hover:border-[#1877F2] transition-colors">
            <div className="bg-[#1877F2]/10 rounded-lg p-3"><Facebook className="text-[#1877F2]" size={28} /></div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Facebook</h3>
              <p className="text-sm text-[#a0a0a0]">Nüdo</p>
            </div>
            <ExternalLink className="text-[#666] group-hover:text-white transition-colors" size={18} />
          </a>

          <a href={contact.youtube} target="_blank" rel="noopener noreferrer" className="bg-[#222] border border-[#333] rounded-xl p-6 flex items-center gap-4 no-underline group hover:border-[#FF0000] transition-colors">
            <div className="bg-[#FF0000]/10 rounded-lg p-3"><Youtube className="text-[#FF0000]" size={28} /></div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">YouTube</h3>
              <p className="text-sm text-[#a0a0a0]">@Nudo-fd7mz</p>
            </div>
            <ExternalLink className="text-[#666] group-hover:text-white transition-colors" size={18} />
          </a>

          <a href={contact.spotify} target="_blank" rel="noopener noreferrer" className="bg-[#222] border border-[#333] rounded-xl p-6 flex items-center gap-4 no-underline group hover:border-[#1DB954] transition-colors">
            <div className="bg-[#1DB954]/10 rounded-lg p-3"><Disc3 className="text-[#1DB954]" size={28} /></div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">Spotify</h3>
              <p className="text-sm text-[#a0a0a0]">Escuchá a Nüdo</p>
            </div>
            <ExternalLink className="text-[#666] group-hover:text-white transition-colors" size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
