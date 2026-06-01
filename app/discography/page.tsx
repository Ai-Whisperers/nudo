'use client'
import { albums, upcomingReleases } from '@/data/discography'
import Link from 'next/link'

export default function DiscographyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-[#2a2a2a]">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,4rem)] text-[#f0f0f0] mb-4">
          DISCOGRAPHY
        </h1>
        <p className="text-[#888] max-w-xl mx-auto">
          Albums, EPs y singles de Nüdo. Escuchalos en tu plataforma favorita.
        </p>
      </section>

      {/* Albums Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-[#f0f0f0] mb-8">Albums & EPs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map(album => (
              <Link key={album.id} href={`/discography/${album.id}`}
                className="group bg-[#111] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#8B0000] transition-all">
                <div className="aspect-square bg-[#1a1a1a] relative overflow-hidden">
                  <img src={album.coverUrl} alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-[#8B0000] font-semibold">{album.type} · {album.year}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#f0f0f0] mb-2">{album.title}</h4>
                  <p className="text-[#888] text-sm line-clamp-2">{album.description}</p>
                  <div className="mt-4 flex gap-2">
                    {album.streamingLinks.spotify && (
                      <a href={album.streamingLinks.spotify} target="_blank" rel="noopener noreferrer"
                        className="text-[#1DB954] hover:text-[#1ed760] text-sm">Spotify</a>
                    )}
                    {album.streamingLinks.youtube && (
                      <a href={album.streamingLinks.youtube} target="_blank" rel="noopener noreferrer"
                        className="text-[#FF0000] hover:text-[#ff3333] text-sm">YouTube</a>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Releases */}
      {upcomingReleases.length > 0 && (
        <section className="py-12 px-6 border-t border-[#2a2a2a]">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-8">Próximos Lanzamientos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingReleases.map(release => (
                <div key={release.id} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 opacity-70">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-[#8B0000] font-semibold">{release.type} · {release.year}</span>
                      <h4 className="text-xl font-bold text-[#f0f0f0] mt-1">{release.title}</h4>
                    </div>
                    <span className="px-3 py-1 bg-[#8B0000]/20 text-[#8B0000] text-xs rounded-full">
                      {release.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Streaming CTA */}
      <section className="py-12 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-[#f0f0f0] mb-4">Escuchá en tu plataforma favorita</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://open.spotify.com/artist/2N3Z6SOIw7MOSxtRyzgJLv" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1DB954] text-white font-semibold rounded-lg hover:bg-[#1ed760] transition-all">
              Spotify
            </a>
            <a href="https://www.youtube.com/results?search_query=N%C3%BCdo+Paraguay" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-[#FF0000] text-white font-semibold rounded-lg hover:bg-[#ff3333] transition-all">
              YouTube
            </a>
            <a href="https://music.apple.com/artist/nudo" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-[#FA243C] text-white font-semibold rounded-lg hover:bg-[#fb344d] transition-all">
              Apple Music
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}