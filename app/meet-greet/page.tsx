'use client'
import { useState } from 'react'
import { meetGreetFAQ, meetGreetSlots } from '@/data/meet-greet'
import { upcomingEvents } from '@/data/events'

export default function MeetGreetPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', quantity: '1', specialRequests: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const event = upcomingEvents[0]
  const slotInfo = event ? meetGreetSlots[event.id] : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/meet-greet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: event?.id, ...formData })
    })

    if (res.ok) {
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-[#2a2a2a]">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,4rem)] text-[#f0f0f0] mb-4">
          MEET & GREET
        </h1>
        <p className="text-[#888] max-w-xl mx-auto">
          Viví una experiencia única con Nüdo. Fotografías, firmas, y una conversación de 15 minutos con la banda.
        </p>
      </section>

      {/* Booking Section */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          {event ? (
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-[#f0f0f0] mb-4">Reservá tu lugar</h3>
              <div className="mb-6 p-4 bg-[#1a1a1a] rounded-lg">
                <p className="text-[#8B0000] font-semibold">{event.date}</p>
                <p className="text-lg text-[#f0f0f0]">{event.title}</p>
                <p className="text-[#888] text-sm">{event.venue}</p>
              </div>

              {slotInfo && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#888]">Cupos disponibles</span>
                    <span className="text-[#f0f0f0]">{slotInfo.total - slotInfo.booked} / {slotInfo.total}</span>
                  </div>
                  <div className="h-2 bg-[#1a1a1a] rounded-full">
                    <div className="h-2 bg-[#8B0000] rounded-full"
                      style={{ width: `${(slotInfo.booked / slotInfo.total) * 100}%` }} />
                  </div>
                </div>
              )}

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✓</div>
                  <h4 className="text-xl font-bold text-[#f0f0f0] mb-2">Reservación enviada!</h4>
                  <p className="text-[#888]">Te contactaremos por WhatsApp para confirmar tu meet & greet.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="Tu nombre" required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]"
                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  <input type="email" placeholder="Email" required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]"
                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  <input type="tel" placeholder="WhatsApp" required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]"
                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  <select value={formData.quantity} onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]">
                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} persona(s)</option>)}
                  </select>
                  <textarea placeholder="Requests especiales (cumpleaños, etc.)" rows={3}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0] resize-none"
                    value={formData.specialRequests} onChange={e => setFormData({ ...formData, specialRequests: e.target.value })} />
                  <button type="submit" disabled={loading}
                    className="w-full py-4 bg-[#8B0000] text-white font-bold rounded-lg hover:bg-[#B22222] disabled:opacity-50">
                    {loading ? 'Enviando...' : 'Reservar Meet & Greet'}
                  </button>
                </form>
              )}
            </div>
          ) : (
            <p className="text-center text-[#888]">No hay eventos con meet & greet programados.</p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            {meetGreetFAQ.map((faq, i) => (
              <div key={i} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <h4 className="text-[#f0f0f0] font-semibold mb-2">{faq.question}</h4>
                <p className="text-[#888] text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}