'use client'
import { useState } from 'react'
import { preOrderItems, SHOW_EXCLUSIVE_DISCOUNT } from '@/data/preorders'
import { upcomingEvents } from '@/data/events'

export default function PreOrderPage() {
  const [cart, setCart] = useState<{ itemId: string; size?: string; quantity: number }[]>([])
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', paymentMethod: 'at-booth' })
  const [submitted, setSubmitted] = useState(false)
  const [pickupCode, setPickupCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [discountCode, setDiscountCode] = useState('')
  const [discountApplied, setDiscountApplied] = useState(false)

  const event = upcomingEvents[0]

  const addToCart = (itemId: string, size?: string) => {
    setCart(prev => [...prev, { itemId, size }])
  }

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const total = cart.reduce((sum, c) => {
    const item = preOrderItems.find(i => i.id === c.itemId)
    return sum + (item ? parseInt(item.price.usd) : 0)
  }, 0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/preorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: event?.id, items: cart, ...formData })
    })

    const data = await res.json()
    if (res.ok) {
      setPickupCode(data.order.pickupCode)
      setSubmitted(true)
    }
    setLoading(false)
  }

  const applyDiscount = () => {
    if (discountCode.toUpperCase() === SHOW_EXCLUSIVE_DISCOUNT) {
      setDiscountApplied(true)
    }
  }

  const discount = discountApplied ? total * 0.1 : 0
  const finalTotal = total - discount

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-[#2a2a2a]">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,4rem)] text-[#f0f0f0] mb-4">
          PRE-ORDER
        </h1>
        <p className="text-[#888] max-w-xl mx-auto">
          Reservá tu merch favorita y pagá al booth el día del evento. ¡Evita disappointment — limitados!
        </p>
        {event && <p className="text-[#8B0000] mt-4">Evento: {event.title}</p>}
      </section>

      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Productos Disponibles</h3>
            <div className="space-y-4">
              {preOrderItems.map(item => (
                <div key={item.id} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-4">
                  <div className="flex gap-4">
                    {item.imageUrl && (
                      <div className="w-20 h-20 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-3xl">
                        👕
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-[#f0f0f0] font-semibold">{item.name}</h4>
                      <p className="text-[#8B0000] font-bold">{item.price.pyg} Gs (${item.price.usd})</p>
                      {item.sizes && (
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {item.sizes.map(size => (
                            <button key={size} onClick={() => addToCart(item.id, size)}
                              className="px-3 py-1 text-xs bg-[#1a1a1a] border border-[#2a2a2a] rounded hover:border-[#8B0000] text-[#888]">
                              {size}
                            </button>
                          ))}
                        </div>
                      )}
                      {!item.sizes && (
                        <button onClick={() => addToCart(item.id)}
                          className="mt-2 px-4 py-1 text-xs bg-[#8B0000] text-white rounded hover:bg-[#B22222]">
                          Agregar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart & Checkout */}
          <div>
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Tu Carrito</h3>
            {cart.length === 0 ? (
              <p className="text-[#666]">Tu carrito está vacío</p>
            ) : (
              <>
                <div className="space-y-2 mb-6">
                  {cart.map((c, i) => {
                    const item = preOrderItems.find(x => x.id === c.itemId)
                    return (
                      <div key={i} className="flex justify-between items-center bg-[#111] p-3 rounded-lg">
                        <div>
                          <span className="text-[#f0f0f0]">{item?.name}</span>
                          {c.size && <span className="text-[#888] text-sm ml-2">Talle: {c.size}</span>}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[#8B0000]">${item?.price.usd}</span>
                          <button onClick={() => removeFromCart(i)} className="text-[#888] hover:text-[#f0f0f0]">✕</button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="bg-[#1a1a1a] p-4 rounded-lg mb-6">
                  <p className="text-[#888]">Subtotal: <span className="text-[#f0f0f0]">${total.toFixed(2)}</span></p>
                  {discountApplied && (
                    <p className="text-[#25D366]">Descuento 10%: -${discount.toFixed(2)}</p>
                  )}
                  <p className="text-xl font-bold text-[#f0f0f0] mt-2">Total: ${finalTotal.toFixed(2)}</p>
                </div>

                <div className="mb-4">
                  <input type="text" placeholder="Código de descuento" value={discountCode}
                    onChange={e => setDiscountCode(e.target.value)}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]" />
                  <button onClick={applyDiscount}
                    className="mt-2 px-4 py-2 text-sm bg-[#2a2a2a] text-[#888] rounded hover:bg-[#3a3a3a]">
                    Aplicar
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-8 bg-[#111] rounded-xl">
                    <div className="text-4xl mb-4">✓</div>
                    <h4 className="text-xl font-bold text-[#f0f0f0] mb-2">Pre-Order Confirmado!</h4>
                    <p className="text-[#888] text-sm mb-4">Tu código de pickup:</p>
                    <div className="text-2xl font-bold text-[#8B0000]">{pickupCode}</div>
                    <p className="text-[#666] text-sm mt-4">Mostrá este código en el booth para recoger tu merch.</p>
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
                    <select value={formData.paymentMethod}
                      onChange={e => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]">
                      <option value="at-booth">Pagar en booth</option>
                      <option value="tigo-money">Tigo Money</option>
                      <option value="bancard">Bancard</option>
                    </select>
                    <button type="submit" disabled={loading}
                      className="w-full py-4 bg-[#8B0000] text-white font-bold rounded-lg hover:bg-[#B22222] disabled:opacity-50">
                      {loading ? 'Procesando...' : 'Confirmar Pre-Order'}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}