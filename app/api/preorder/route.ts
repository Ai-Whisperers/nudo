import { NextResponse } from 'next/server'
import { preOrderItems, preOrderItems as items } from '@/data/preorders'

export async function GET() {
  return NextResponse.json({ items })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { eventId, items: orderItems, customerName, customerEmail, customerPhone, paymentMethod } = body

  if (!eventId || !customerName || !customerEmail || !customerPhone || !orderItems?.length) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const pickupCode = `NUDO-${Date.now().toString(36).toUpperCase()}`

  const order = {
    id: `po-${Date.now()}`,
    eventId,
    items: orderItems,
    customerName,
    customerEmail,
    customerPhone,
    paymentMethod: paymentMethod || 'at-booth',
    status: 'pending',
    createdAt: new Date().toISOString(),
    pickupCode
  }

  return NextResponse.json({ success: true, order })
}