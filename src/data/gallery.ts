import galleryData from './gallery.json'

export interface GalleryImage {
  id: string
  eventId: string
  eventName: string
  imageUrl: string
  thumbnailUrl: string
  caption?: string
  photographer?: string
  type: 'concert' | 'meet-greet' | 'merch' | 'behind-scenes'
  featured: boolean
  createdAt: string
}

export const galleryImages: GalleryImage[] = galleryData as GalleryImage[]
export const featuredGalleryImages = galleryImages.filter(img => img.featured)