import { band } from '@/data/band.config'
import { discography } from '@/data/discography'

export default function FooterSection() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-8 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#555] text-sm font-[family-name:var(--font-accent)] italic">
          &ldquo;{band.name} — {band.meta.description}&rdquo;
        </p>
        <p className="text-[#555] text-xs">
          &copy; {year} {band.name}. Todos los derechos reservados. {band.label}.
        </p>
      </div>
    </footer>
  )
}