import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-black text-[#8B0000] mb-4">404</h1>
      <p className="text-lg text-[#a0a0a0] mb-8">Página no encontrada</p>
      <Link href="/"
        className="bg-[#8B0000] text-white px-6 py-3 rounded-lg font-semibold no-underline hover:bg-[#B22222] transition-colors">
        Volver al inicio
      </Link>
    </div>
  )
}
