export interface Event {
  id: string
  title: string
  date: string
  venue: string
  city: string
  status: 'upcoming' | 'past'
  description: string
  ticketUrl?: string
  ticketPrice?: string
}

export const events: Event[] = [
  {
    id: 'tunako-2026',
    title: 'Tunakó Pool Party',
    date: '2026-01-01',
    venue: 'Tunakó',
    city: 'Capiatá',
    status: 'past',
    description: 'Nüdo rompiendo en la pileta. Una de las mejores fechas del verano.',
  },
  {
    id: 'rock-metalcore-fest',
    title: 'Rock& Metalcore Fest',
    date: '2025-01-01',
    venue: 'Asunción',
    city: 'Asunción',
    status: 'past',
    description: 'Nüdo en el Rock & Metalcore Fest. Compartiendo escenario con bandas de la escena.',
  },
  {
    id: 'breakdown-fest',
    title: 'BREAKDOWN FEST',
    date: '2023-01-01',
    venue: 'BREAKDOWN FEST',
    city: 'Asunción',
    status: 'past',
    description: 'Presentación en el BREAKDOWN FEST edición 2023.',
  },
  {
    id: 'black-mango',
    title: 'Black Mango',
    date: '2023-01-01',
    venue: 'Black Mango',
    city: 'Asunción',
    status: 'past',
    description: 'Concierto compartido con Drakengard.',
  }
]
