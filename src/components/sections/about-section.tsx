'use client'
import { about } from '@/data/about'

export default function AboutSection() {
  return (
    <section id="about" className="py-[clamp(3rem,6vw,6rem)] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,3rem)] text-[#f0f0f0] mb-2">
          {about.heading}
        </h2>
        <p className="text-[#888] text-sm mb-10 font-[family-name:var(--font-accent)] italic">
          {about.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            {about.bio.map((paragraph, i) => (
              <p key={i} className="text-[#ccc] leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>

          <div className="space-y-3">
            {about.team.map(m => (
              <div key={m.name} className="bg-[#111] border border-[#2a2a2a] rounded-lg p-4 flex items-center gap-4 hover:border-[#8B0000]/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#8B0000]/20 border border-[#8B0000]/30 flex items-center justify-center text-xs font-bold text-[#8B0000] flex-shrink-0 tracking-wider">
                  {m.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm">{m.name}</p>
                  <p className="text-xs text-[#888]">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}