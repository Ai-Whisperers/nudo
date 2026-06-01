'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section className="py-16 px-6 bg-[#111] border-t border-[#2a2a2a]">
      <div className="max-w-xl mx-auto text-center">
        {submitted ? (
          <div>
            <div className="text-4xl mb-4">✓</div>
            <h4 className="text-xl font-bold text-[#f0f0f0] mb-2">Estás en la lista!</h4>
            <p className="text-[#888]">Te avisaremos cuando haya nuevo merch, shows o música.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-2">Newsletter</h3>
            <p className="text-[#888] mb-6">Enterate primero de nuevos lanzamientos, shows y merch exclusivo.</p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input type="email" placeholder="tu@email.com" required
                value={email} onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]"
              />
              <button type="submit" disabled={loading}
                className="px-6 py-3 bg-[#8B0000] text-white font-semibold rounded-lg hover:bg-[#B22222] disabled:opacity-50">
                {loading ? '...' : 'Suscribirse'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}