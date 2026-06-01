import { NextResponse } from 'next/server'
import { bandContacts, contactCategories } from '@/data/contacts'

export async function GET() {
  return NextResponse.json({
    contacts: bandContacts,
    categories: contactCategories
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { category, name, email, message } = body

  if (!category || !name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const contactRequest = {
    id: `contact-${Date.now()}`,
    category,
    name,
    email,
    message,
    receivedAt: new Date().toISOString()
  }

  return NextResponse.json({ success: true, contactRequest })
}