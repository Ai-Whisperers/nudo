'use client'
import { useState } from 'react'
import { bandContacts, contactCategories } from '@/data/contacts'

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', category: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const filtered = selectedCategory ? bandContacts.filter(c => c.category === selectedCategory) : bandContacts

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
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
          CONTACT
        </h1>
        <p className="text-[#888] max-w-xl mx-auto">
          ¿Querés que Nüdo toque en tu venue? ¿Sos producer, filmmaker, o querés colaborar? Escribinos.
        </p>
      </section>

      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Categories</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {contactCategories.map(cat => (
                <button key={cat.id} onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                  className={`p-4 rounded-xl text-left transition-all ${selectedCategory === cat.id ? 'bg-[#8B0000] text-white' : 'bg-[#111] border border-[#2a2a2a] hover:border-[#8B0000]'}`}>
                  <span className="text-2xl">{cat.icon}</span>
                  <p className="font-semibold mt-2">{cat.label}</p>
                </button>
              ))}
            </div>

            {/* Contacts List */}
            <div className="space-y-3">
              {filtered.map(contact => (
                <div key={contact.name} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#f0f0f0] font-semibold">{contact.name}</h4>
                      <p className="text-[#666] text-sm mt-1">{contact.description}</p>
                    </div>
                    <span className="text-xs text-[#8B0000] px-2 py-1 bg-[#8B0000]/10 rounded">
                      {contactCategories.find(c => c.id === contact.category)?.label}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-4">
                    {contact.email && (
                      <a href={`mailto:${contact.email}`} className="text-sm text-[#888] hover:text-[#f0f0f0]">
                        📧 {contact.email}
                      </a>
                    )}
                    {contact.whatsapp && (
                      <a href={`https://wa.me/${contact.whatsapp}`} className="text-sm text-[#888] hover:text-[#f0f0f0]">
                        📱 WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Envianos un mensaje</h3>
            {submitted ? (
              <div className="text-center py-12 bg-[#111] rounded-xl">
                <div className="text-4xl mb-4">✓</div>
                <h4 className="text-xl font-bold text-[#f0f0f0] mb-2">Mensaje enviado!</h4>
                <p className="text-[#888]">Te responderemos lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Tu nombre" required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]"
                  value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                <input type="email" placeholder="Email" required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]"
                  value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                <select required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]"
                  value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                  <option value="">Seleccioná categoría</option>
                  {contactCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.icon} {cat.label}</option>
                  ))}
                </select>
                <textarea placeholder="Tu mensaje" rows={6} required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0] resize-none"
                  value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-[#8B0000] text-white font-bold rounded-lg hover:bg-[#B22222] disabled:opacity-50">
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}