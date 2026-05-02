import Link from "next/link"
import content from "@/content/es.json"

const c = content as any
const nav = c.navigation
const contact = c.contact
const footer = c.footer

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#333] py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-3">{c.siteName}</h3>
          <p className="text-sm text-[#a0a0a0]">{c.tagline}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Navegación</h4>
          <div className="space-y-2">
            {nav.items.map((item: any) => (
              <Link key={item.href} href={item.href} className="block text-sm text-[#a0a0a0] hover:text-white no-underline transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Redes</h4>
          <div className="space-y-2 text-sm text-[#a0a0a0]">
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Instagram</a>
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Facebook</a>
            <a href={contact.spotify} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Spotify</a>
            <a href={contact.youtube} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#333] text-center text-xs text-[#666]">
        {footer.copyright}
      </div>
    </footer>
  )
}
