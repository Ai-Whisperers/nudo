import discographyData from './discography.json'

export interface Album {
  id: string
  title: string
  year: number
  type: 'EP' | 'Album' | 'Single'
  coverUrl: string
  description: string
  streamingLinks: { spotify?: string; youtube?: string; apple?: string }
  tracklist: string[]
  credits: { role: string; members: string[] }[]
}

export const albums: Album[] = discographyData as Album[]
export const upcomingReleases = [
  { id: 'sangre', title: 'SANGRE', year: 2026, type: 'Single', status: 'En proceso' }
]