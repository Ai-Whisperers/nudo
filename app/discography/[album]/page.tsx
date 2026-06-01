'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { albums } from '@/data/discography'
import { getSongsByAlbum } from '@/data/songs'

export default function AlbumPage() {
  const params = useParams()
  const album = albums.find(a => a.id === params.album)
  const songs = album ? getSongsByAlbum(album.id) : []

  if (!album) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-[#888]">Álbum no encontrado</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={album.coverUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 to-[#0a0a0a]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[#8B0000] text-sm font-semibold uppercase tracking-wider">{album.type} · {album.year}</span>
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(3rem,8vw,6rem)] text-[#f0f0f0] mt-4 mb-6">
            {album.title}
          </h1>
          <p className="text-[#888] max-w-xl mx-auto mb-8">{album.description}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            {album.streamingLinks.spotify && (
              <a href={album.streamingLinks.spotify} target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1DB954] text-white font-semibold rounded-lg hover:bg-[#1ed760] transition-all">
                Escuchar en Spotify
              </a>
            )}
            {album.streamingLinks.youtube && (
              <a href={album.streamingLinks.youtube} target="_blank" rel="noopener noreferrer"
                className="px-6 py-3 bg-[#FF0000] text-white font-semibold rounded-lg hover:bg-[#ff3333] transition-all">
                Ver en YouTube
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Tracklist */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Tracklist</h3>
          <div className="space-y-2">
            {songs.map(song => (
              <Link key={song.id} href={`/discography/${album.id}/${song.id}`}
                className="flex items-center gap-4 p-4 bg-[#111] border border-[#2a2a2a] rounded-xl hover:border-[#8B0000] transition-all group">
                <span className="text-[#8B0000] font-bold text-lg w-8">{song.trackNumber}</span>
                <div className="flex-1">
                  <h4 className="text-[#f0f0f0] font-semibold group-hover:text-[#8B0000] transition-colors">{song.title}</h4>
                </div>
                <span className="text-[#666] text-sm">{song.duration}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" className="group-hover:stroke-[#8B0000] transition-colors">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="py-12 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Créditos</h3>
          <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
            {album.credits.map(credit => (
              <div key={credit.role} className="flex justify-between items-center py-3 border-b border-[#2a2a2a] last:border-0">
                <span className="text-[#888]">{credit.role}</span>
                <span className="text-[#f0f0f0]">{credit.members.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}