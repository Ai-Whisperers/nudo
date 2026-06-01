import preordersData from './preorders.json'

export interface PreOrderItem {
  id: string
  name: string
  price: { pyg: string; usd: string }
  sizes?: string[]
  available: boolean
  imageUrl?: string
  estimatedStock?: number
}

export interface PreOrder {
  id: string
  eventId: string
  items: { itemId: string; size?: string; quantity: number }[]
  customerName: string
  customerEmail: string
  customerPhone: string
  paymentMethod: 'at-booth' | 'tigo-money' | 'bancard'
  status: 'pending' | 'paid' | 'picked-up' | 'cancelled'
  createdAt: string
  pickupCode: string
}

export const preOrderItems: PreOrderItem[] = preordersData.items
export const SHOW_EXCLUSIVE_DISCOUNT = preordersData.discountCode