import membersData from './members.json'

export interface BandMember {
  id: string
  name: string
  role: string
  bio: string
  imageUrl: string
  socials: { instagram?: string; spotify?: string; youtube?: string; soundcloud?: string }
  equipment?: { category: string; items: string[] }[]
  joinedYear: number
}

export const bandMembers: BandMember[] = membersData as BandMember[]

export const bandInfo = {
  founded: 2017,
  origin: 'Capiatá, Paraguay',
  genre: 'Hardcore Metal / Metalcore',
  label: 'Bad Vibes Records',
  bio: 'Nüdo es una banda de hardcore/metalcore fundada en 2017 en Capiatá, Paraguay. Cuatro amigos que decidieron hacer ruido y expresar lo que sentían a través del hardcore más agresivo. Inspirados por la escena hardcore latinoamericana y mundial, Nüdo busca ser la voz de los que no tienen voz.',
  discography: { eps: 1, songs: 4 }
}