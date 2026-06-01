import eventsData from './events.json'

export interface Event {
  id: string
  title: string
  date: string
  fullDate: string
  venue: string
  city: string
  status: 'upcoming' | 'past'
  description: string
  imageUrl?: string
  setlist?: string[]
  meetGreetSlots?: number
  meetGreetPrice?: { pyg: string; usd: string }
  ticketUrl?: string
  ticketPrice?: string
}

export const events: Event[] = eventsData as Event[]
export const upcomingEvents = events.filter(e => e.status === 'upcoming')
export const pastEvents = events.filter(e => e.status === 'past')