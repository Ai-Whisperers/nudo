import contactsData from './contacts.json'

export interface BandContact {
  category: 'venue' | 'producer' | 'video' | 'press' | 'booking' | 'merch-distribution' | 'label'
  name: string
  email?: string
  phone?: string
  whatsapp?: string
  description: string
  available: boolean
}

export const bandContacts: BandContact[] = contactsData as BandContact[]

export const contactCategories = [
  { id: 'venue', label: 'Venues', icon: '🏛️' },
  { id: 'producer', label: 'Productoras', icon: '🎛️' },
  { id: 'video', label: 'Video/Foto', icon: '🎥' },
  { id: 'press', label: 'Prensa', icon: '📰' },
  { id: 'booking', label: 'Booking', icon: '📋' },
  { id: 'label', label: 'Sellos', icon: '💿' }
]