'use client'
import { useState } from 'react'
import { songs } from '@/data/songs'
import { siteContent as content } from '@/data/content'

export default function LyricsSection() {
  const [openSong, setOpenSong] = useState<string | null>(null)
  const toggleSong = (id: string) => setOpenSong(openSong === id ? null : id)

  return (
    <section id="lyrics" className="py-[clamp(3rem,6vw,6rem)] px-6 bg-[#111]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,3rem)] text-[#f0f0f0] mb-2">
          {content.lyrics.heading}
        </h2>
        <p className="text-[#888] text-sm mb-10 font-[family-name:var(--font-accent)] italic">
          {content.lyrics.subtitle}
        </p>

        <div className="max-w-3xl mx-auto space-y-3">
          {songs.map(song => (
            <div key={song.id} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden">
              <button onClick={() => toggleSong(song.id)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-[#222] transition-colors">
                <div>
                  <h3 className="font-bold text-lg">{song.title}</h3>
                  <p className="text-xs text-[#888]">{song.genre} · {song.duration} · {song.mood}</p>
                </div>
                <svg className={`transition-transform duration-300 ${openSong === song.id ? 'rotate-180' : ''}`}
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {openSong === song.id && (
                <div className="px-5 pb-6 border-t border-[#2a2a2a] pt-4">
                  {song.subtitle && (
                    <p className="text-sm text-[#8B0000] mb-3 italic font-[family-name:var(--font-accent)]">{song.subtitle}</p>
                  )}
                  {song.lyrics ? (
                    <div className="text-sm text-[#ccc] leading-relaxed whitespace-pre-line font-[family-name:var(--font-body)]">
                      {song.lyrics}
                    </div>
                  ) : (
                    <p className="text-sm text-[#666] italic">{content.lyrics.comingSoon}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}