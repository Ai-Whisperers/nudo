import meetGreetData from './meet-greet.json'

export interface MeetGreetBooking {
  id: string
  eventId: string
  name: string
  email: string
  phone: string
  quantity: number
  specialRequests?: string
  bookedAt: string
  confirmed: boolean
}

export const meetGreetFAQ = meetGreetData.faq
export const meetGreetSlots: Record<string, { total: number; booked: number }> = meetGreetData.slots