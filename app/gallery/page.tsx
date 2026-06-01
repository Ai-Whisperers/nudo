'use client'
import { useState } from 'react'
import { galleryImages, featuredGalleryImages } from '@/data/gallery'

const typeLabels: Record<string, string> = {
  concert: '🎤 Conciertos',
  'meet-greet': '📸 Meet & Greet',
  merch: '👕 Merch',
  'behind-scenes': '🎬 Backstage'
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filtered = filter ? galleryImages.filter(img => img.type === filter) : galleryImages

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-[#2a2a2a]">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,4rem)] text-[#f0f0f0] mb-4">
          GALLERY
        </h1>
        <p className="text-[#888]">Fotos y recuerdos de los shows de Nüdo</p>
      </section>

      {/* Filters */}
      <section className="py-6 px-6 border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto flex gap-3 flex-wrap justify-center">
          <button onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${!filter ? 'bg-[#8B0000] text-white' : 'bg-[#1a1a1a] text-[#888] border border-[#2a2a2a]'}`}>
            Todas
          </button>
          {Object.entries(typeLabels).map(([type, label]) => (
            <button key={type} onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${filter === type ? 'bg-[#8B0000] text-white' : 'bg-[#1a1a1a] text-[#888] border border-[#2a2a2a]'}`}>
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      {!filter && (
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Fotos Destacadas</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {featuredGalleryImages.slice(0, 4).map(img => (
                <div key={img.id} onClick={() => setSelectedImage(img)}
                  className="relative cursor-pointer group overflow-hidden rounded-xl aspect-video bg-[#111]">
                  <img src={img.imageUrl} alt={img.caption || img.eventName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-semibold">{img.eventName}</p>
                    {img.caption && <p className="text-white/70 text-xs">{img.caption}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(img => (
              <div key={img.id} onClick={() => setSelectedImage(img)}
                className="cursor-pointer group overflow-hidden rounded-lg aspect-square bg-[#111]">
                <img src={img.thumbnailUrl} alt={img.caption || img.eventName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white text-3xl hover:text-[#8B0000]" onClick={() => setSelectedImage(null)}>✕</button>
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.imageUrl} alt={selectedImage.caption || ''}
              className="w-full max-h-[70vh] object-contain rounded-lg" />
            <div className="mt-4 text-center">
              <p className="text-[#f0f0f0] text-lg">{selectedImage.eventName}</p>
              {selectedImage.caption && <p className="text-[#888] mt-1">{selectedImage.caption}</p>}
              {selectedImage.photographer && <p className="text-[#666] text-sm mt-2">{selectedImage.photographer}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}