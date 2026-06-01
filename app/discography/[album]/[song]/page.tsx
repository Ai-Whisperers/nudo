'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { albums } from '@/data/discography'
import { getSongsByAlbum, getSong } from '@/data/songs'

export default function SongPage() {
  const params = useParams()
  const song = getSong(params.song as string)
  const album = song ? albums.find(a => a.id === song.albumId) : null
  const songs = album ? getSongsByAlbum(album.id) : []

  if (!song || !album) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-[#888]">Canción no encontrada</p>
      </div>
    )
  }

  const currentIndex = songs.findIndex(s => s.id === song.id)
  const prevSong = currentIndex > 0 ? songs[currentIndex - 1] : null
  const nextSong = currentIndex < songs.length - 1 ? songs[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="py-12 px-6 border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <Link href={`/discography/${album.id}`} className="text-[#888] hover:text-[#f0f0f0] text-sm mb-4 inline-block">
            ← Volver a {album.title}
          </Link>
          <div className="flex items-end gap-6">
            <div>
              <span className="text-[#8B0000] text-sm font-semibold">Track {song.trackNumber}</span>
              <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,4rem)] text-[#f0f0f0] mt-2">
                {song.title}
              </h1>
              <p className="text-[#888] mt-2">{album.title} · {album.year} · {song.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lyric */}
      {song.featuredLyric && (
        <section className="py-8 px-6 border-b border-[#2a2a2a] bg-[#8B0000]/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#f0f0f0] text-lg md:text-xl font-[family-name:var(--font-heading)] italic">
              "{song.featuredLyric.replace(/\//, ' / ')}"
            </p>
          </div>
        </section>
      )}

      {/* Lyrics + Meaning */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Lyrics */}
          <div>
            <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Letra</h3>
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
              <pre className="text-[#e0e0e0] whitespace-pre-wrap font-sans text-sm leading-relaxed">
                {song.lyrics}
              </pre>
            </div>
          </div>

          {/* Meaning & Credits */}
          <div className="space-y-8">
            {song.meaning && (
              <div>
                <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Significado</h3>
                <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                  <p className="text-[#888] leading-relaxed">{song.meaning}</p>
                </div>
              </div>
            )}

            {/* Credits */}
            <div>
              <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Créditos</h3>
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl divide-y divide-[#2a2a2a]">
                {song.credits.map(credit => (
                  <div key={credit.role} className="p-4 flex justify-between">
                    <span className="text-[#888]">{credit.role}</span>
                    <span className="text-[#f0f0f0]">{credit.member}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Streaming */}
            <div>
              <h3 className="text-lg font-bold text-[#f0f0f0] mb-4">Escuchar</h3>
              <div className="flex gap-3">
                {song.spotifyUrl && (
                  <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1DB954] text-white rounded-lg text-sm font-semibold">Spotify</a>
                )}
                {song.youtubeUrl && (
                  <a href={song.youtubeUrl} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#FF0000] text-white rounded-lg text-sm font-semibold">YouTube</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto flex justify-between">
          {prevSong ? (
            <Link href={`/discography/${album.id}/${prevSong.id}`}
              className="flex items-center gap-2 text-[#888] hover:text-[#f0f0f0]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <div>
                <p className="text-xs">Anterior</p>
                <p className="font-semibold">{prevSong.title}</p>
              </div>
            </Link>
          ) : <div />}

          {nextSong && (
            <Link href={`/discography/${album.id}/${nextSong.id}`}
              className="flex items-center gap-2 text-[#888] hover:text-[#f0f0f0] text-right">
              <div>
                <p className="text-xs">Siguiente</p>
                <p className="font-semibold">{nextSong.title}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}