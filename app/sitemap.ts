import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nudo.paragu-ai.com"
  const pages = ["", "/musica", "/videos", "/letras", "/shows", "/galeria", "/contacto"]
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1.0 : 0.8,
  }))
}
