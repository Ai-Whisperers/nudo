'use client'
import { discography, streamingPlatforms } from '@/data/discography'

export default function MusicSection() {
  return (
    <section id="music" className="py-[clamp(3rem,6vw,6rem)] px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,3rem)] text-[#f0f0f0] mb-2">
          Music
        </h2>
        <p className="text-[#888] text-sm mb-10 font-[family-name:var(--font-accent)] italic">
          {discography[0].title} EP ({discography[0].year}) — Hardcore Metal desde Capiatá
        </p>

        <div className="mb-12">
          <a
            href={discography[0].spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1DB954] text-white px-8 py-4 rounded-xl font-semibold no-underline hover:bg-[#1ed760] transition-all"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Escuchar en Spotify
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {discography.map(release => (
            <div key={release.id} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 flex gap-5 hover:border-[#8B0000]/50 transition-all">
              <img
                src={release.artwork}
                alt={`${release.title} ${release.type}`}
                className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-lg">{release.title} ({release.type})</h3>
                <p className="text-xs text-[#888] uppercase tracking-wider mb-1">{release.label} · {release.year}</p>
                {release.tracklist.length > 0 && (
                  <div className="text-xs text-[#666] space-y-0.5 mb-2">
                    {release.tracklist.map(track => <div key={track}>{track}</div>)}
                  </div>
                )}
                {release.description && (
                  <p className="text-xs text-[#666] mb-2">{release.description}</p>
                )}
                <a href={release.spotifyUrl} target="_blank" rel="noopener noreferrer"
                  className="text-[#8B0000] text-xs font-semibold no-underline hover:underline">
                  Escuchar en Spotify →
                </a>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-sm uppercase tracking-[0.2em] text-[#666] mb-4">Disponible en todas las plataformas</h3>
        <div className="flex flex-wrap gap-3">
          {streamingPlatforms.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
              className="bg-[#111] border border-[#2a2a2a] text-[#f0f0f0] px-5 py-3 rounded-lg text-sm no-underline hover:border-[#8B0000] hover:bg-[#1a1a1a] transition-all">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}