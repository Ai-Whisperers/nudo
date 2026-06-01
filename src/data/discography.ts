export interface Release {
  id: string
  title: string
  type: 'EP' | 'Single' | 'Album'
  year: number
  label: string
  artwork: string
  spotifyUrl: string
  tracklist: string[]
  description: string
}

export const discography: Release[] = [
  {
    id: 'desahogo-ep',
    title: 'DESAHOGO',
    type: 'EP',
    year: 2025,
    label: 'Bad Vibes Records',
    artwork: 'https://i.scdn.co/image/ab67616d00001e029eb75be054c928ad5c3576e3',
    spotifyUrl: 'https://open.spotify.com/album/6X6mvKVxK5uLqPe9yPaB3r',
    tracklist: ['JUICIO', 'ESPEJO', 'CULPA', 'APOCALIPSIS'],
    description: '4 temas que rompen. Hardcore Metal desde Capiatá.',
  },
  {
    id: 'culpa-single',
    title: 'CULPA',
    type: 'Single',
    year: 2023,
    label: 'Independiente',
    artwork: 'https://i.scdn.co/image/ab67616d00001e02bcb531a6e29d197d153d3e4d',
    spotifyUrl: 'https://open.spotify.com/album/1Prl93tdri8HYGguyvsXSP',
    tracklist: [],
    description: 'El primer lanzamiento oficial de Nüdo.',
  },
]

export const streamingPlatforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/artist/2N3Z6SOIw7MOSxtRyzgJLv', color: '#1DB954' },
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/nudo/1794063016', color: '#FA2C57' },
  { name: 'YouTube Music', url: 'https://www.youtube.com/@Nudo-fd7mz', color: '#FF0000' },
]