import { NextResponse } from 'next/server'
import { meetGreetSlots, meetGreetFAQ } from '@/data/meet-greet'

export async function GET() {
  return NextResponse.json({
    slots: meetGreetSlots,
    faq: meetGreetFAQ
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { eventId, name, email, phone, quantity, specialRequests } = body

  if (!eventId || !name || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const slotInfo = meetGreetSlots[eventId]
  if (!slotInfo || slotInfo.booked >= slotInfo.total) {
    return NextResponse.json({ error: 'No slots available' }, { status: 409 })
  }

  const booking = {
    id: `mg-${Date.now()}`,
    eventId,
    name,
    email,
    phone,
    quantity: quantity || 1,
    specialRequests,
    bookedAt: new Date().toISOString(),
    confirmed: false
  }

  return NextResponse.json({ success: true, booking })
}