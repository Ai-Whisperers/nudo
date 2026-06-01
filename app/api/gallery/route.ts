import { NextResponse } from 'next/server'
import { galleryImages, featuredGalleryImages } from '@/data/gallery'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  const eventId = searchParams.get('eventId')

  let filtered = galleryImages

  if (type) {
    filtered = filtered.filter(img => img.type === type)
  }
  if (eventId) {
    filtered = filtered.filter(img => img.eventId === eventId)
  }

  return NextResponse.json({
    images: filtered,
    featured: featuredGalleryImages
  })
}