'use client'
import { band, type Band } from '@/data/band.config'
import { socialIcons } from '@/data/socials'

const WA_NUMBER = band.whatsappMasked
const WA_DIGITS = band.whatsappDigits

const contactMessages = {
  booking: 'Hola Nüdo! Queremos contactarlos para un show.',
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-[clamp(3rem,6vw,6rem)] px-6 bg-[#111]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] text-[#f0f0f0] mb-2">
              FOLLOW
            </h2>
            <p className="text-[#888] text-sm mb-6 font-[family-name:var(--font-accent)] italic">
              Seguí a Nüdo en todas las redes
            </p>
            <div className="space-y-3">
              {Object.entries(band.socials).map(([platform, url]) => {
                const iconKey = platform === 'appleMusic' ? 'apple' : platform
                const name = platform === 'appleMusic' ? 'Apple Music' : platform.charAt(0).toUpperCase() + platform.slice(1)
                return (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 no-underline group hover:border-[#8B0000]/50 transition-all">
                    <div className="text-[#8B0000] group-hover:text-[#B22222] transition-colors">
                      {socialIcons[iconKey as keyof typeof socialIcons] || null}
                    </div>
                    <div className="flex-1">
                      <p className="text-[#f0f0f0] text-sm font-semibold">{name}</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" className="group-hover:stroke-[#f0f0f0] transition-colors">
                      <path d="M7 17L17 7M7 7h10v10"/>
                    </svg>
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.5rem)] text-[#f0f0f0] mb-2">
              GET IN TOUCH
            </h2>
            <p className="text-[#888] text-sm mb-6 font-[family-name:var(--font-accent)] italic">
              Booking, shows, lo que sea
            </p>
            <div className="space-y-3">
              <a href={`https://wa.me/${WA_DIGITS}?text=${encodeURIComponent(contactMessages.booking)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 no-underline group hover:border-[#25D366]/50 transition-all">
                <div className="text-[#25D366]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[#f0f0f0] text-sm font-semibold">WhatsApp</p>
                  <p className="text-xs text-[#888]">Message me directly</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" className="group-hover:stroke-[#f0f0f0] transition-colors">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </a>

              <a href={`mailto:${band.email}`}
                className="flex items-center gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 no-underline group hover:border-[#8B0000]/50 transition-all">
                <div className="text-[#8B0000]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[#f0f0f0] text-sm font-semibold">Email</p>
                  <p className="text-xs text-[#888]">{band.email}</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" className="group-hover:stroke-[#f0f0f0] transition-colors">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}