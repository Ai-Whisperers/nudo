import songsData from './songs.json'

export interface Song {
  id: string
  albumId: string
  title: string
  trackNumber: number
  duration: string
  lyrics: string
  meaning?: string
  featuredLyric?: string
  credits: { role: string; member: string }[]
  spotifyUrl?: string
  youtubeUrl?: string
}

export const songs: Song[] = songsData as Song[]

export function getSongsByAlbum(albumId: string) {
  return songs.filter(s => s.albumId === albumId)
}

export function getSong(songId: string) {
  return songs.find(s => s.id === songId)
}