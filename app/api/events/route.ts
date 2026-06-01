import { NextResponse } from 'next/server'
import { events, upcomingEvents, pastEvents } from '@/data/events'

export async function GET() {
  return NextResponse.json({
    events,
    upcoming: upcomingEvents,
    past: pastEvents
  })
}