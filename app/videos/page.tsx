"use client"
import content from "@/content/es.json"

const c = content as any
const videos = c.videos

export default function VideosPage() {
  return (
    <div>
      <section className="py-20 px-4 text-center" style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 50%, #0d0d0d 100%)" }}>
        <h1 className="text-4xl font-black mb-3">Videos</h1>
        <p className="text-[#a0a0a0]">Nüdo en YouTube — segui @Nudo-fd7mz</p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        {videos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#a0a0a0]">Pronto subiremos más videos.</p>
          </div>
        )}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v: any) => {
            const videoId = v.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1] || ""
            return (
              <div key={v.title} className="bg-[#222] border border-[#333] rounded-xl overflow-hidden">
                {videoId && (
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={v.title}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-sm">{v.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
