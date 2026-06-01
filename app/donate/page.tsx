'use client'
import { useState } from 'react'
import { donationTiers, bankAccounts, paymentQRCodes, SHOW_VENUE_BANK_DETAILS } from '@/data/donations'

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showBankDetails, setShowBankDetails] = useState(false)

  const amount = selectedTier
    ? donationTiers.find(t => t.id === selectedTier)?.amount.usd
    : customAmount

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const tier = selectedTier ? donationTiers.find(t => t.id === selectedTier) : null

    const res = await fetch('/api/donation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tierId: selectedTier, amount, ...formData })
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
          DONATIONS
        </h1>
        <p className="text-[#888] max-w-xl mx-auto">
          Apoyá a Nüdo a seguir creando música heavy desde Paraguay. Cada contribución cuenta.
        </p>
      </section>

      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Donation Tiers */}
          <div>
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Elegí tu apoyo</h3>
            <div className="space-y-4">
              {donationTiers.map(tier => (
                <div key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${selectedTier === tier.id ? 'bg-[#8B0000] border-[#8B0000]' : 'bg-[#111] border-[#2a2a2a] hover:border-[#8B0000]/50'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-bold text-white">{tier.label}</h4>
                      <p className="text-white/70 text-sm">{tier.description}</p>
                      {tier.perks && (
                        <ul className="mt-2 space-y-1">
                          {tier.perks.map((perk, i) => (
                            <li key={i} className="text-white/60 text-xs">✓ {perk}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-white">${tier.amount.usd}</span>
                      <p className="text-white/50 text-xs">{tier.amount.pyg} Gs</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Custom Amount */}
              <div className={`p-6 rounded-xl cursor-pointer transition-all ${!selectedTier ? 'bg-[#111] border-[#8B0000]' : 'bg-[#111] border-[#2a2a2a]'}`}
                onClick={() => setSelectedTier(null)}>
                <h4 className="text-lg font-bold text-white">Monto personalizado</h4>
                <div className="mt-2">
                  <input type="number" placeholder="$0.00 USD" value={customAmount}
                    onChange={e => setCustomAmount(e.target.value)}
                    onClick={e => e.stopPropagation()}
                    className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white text-2xl font-bold text-center"
                    min="1" />
                </div>
              </div>
            </div>

            {/* Bank Details Box */}
            <div className="mt-8">
              <button onClick={() => setShowBankDetails(!showBankDetails)}
                className="w-full py-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[#f0f0f0] font-semibold hover:border-[#8B0000] transition-all flex justify-between items-center">
                <span>🏦 Datos bancarios para transferencias</span>
                <span>{showBankDetails ? '▲' : '▼'}</span>
              </button>

              {showBankDetails && (
                <div className="mt-4 p-6 bg-[#111] border border-[#2a2a2a] rounded-xl space-y-4">
                  <div className="text-center mb-4">
                    <p className="text-[#8B0000] text-sm font-semibold">{SHOW_VENUE_BANK_DETAILS.venueName}</p>
                    <p className="text-[#888] text-xs">Pagos de Meet & Greet y Pre-Orders</p>
                  </div>

                  {bankAccounts.map((acc, i) => (
                    <div key={i} className="p-4 bg-[#1a1a1a] rounded-lg">
                      <p className="text-[#f0f0f0] font-semibold">{acc.bank}</p>
                      <p className="text-[#888] text-sm">Cuenta {acc.accountType}: <span className="text-[#f0f0f0] font-mono">{acc.accountNumber}</span></p>
                      <p className="text-[#888] text-sm">Titular: <span className="text-[#f0f0f0]">{acc.accountHolder}</span></p>
                      <p className="text-[#888] text-sm">RUC: <span className="text-[#f0f0f0]">{acc.ruc}</span></p>
                      {acc.alias && <p className="text-[#888] text-sm">Alias: <span className="text-[#25D366]">{acc.alias}</span></p>}
                    </div>
                  ))}

                  <div className="p-4 bg-[#1a1a1a] rounded-lg">
                    <p className="text-[#f0f0f0] text-sm">Para pagos móviles:</p>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#888]">Tigo Money:</span>
                        <span className="text-[#f0f0f0]">+595 {paymentQRCodes.tigoMoney.phone.slice(3)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888]">Alias Tigo:</span>
                        <span className="text-[#25D366]">{paymentQRCodes.tigoMoney.alias}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Donation Form */}
          <div>
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">
              {selectedTier || customAmount ? 'Completá tu donación' : 'Ingresá tus datos'}
            </h3>

            {(selectedTier || customAmount) && (
              <div className="mb-6 p-4 bg-[#8B0000]/20 border border-[#8B0000]/30 rounded-xl">
                <p className="text-[#888] text-sm">Monto a donar:</p>
                <p className="text-3xl font-bold text-white">${amount} USD</p>
              </div>
            )}

            {submitted ? (
              <div className="text-center py-12 bg-[#111] rounded-xl">
                <div className="text-4xl mb-4">✓</div>
                <h4 className="text-xl font-bold text-[#f0f0f0] mb-2">Gracias por tu apoyo!</h4>
                <p className="text-[#888]">Tu donación ayuda a Nüdo a seguir produciendo música.</p>
                <div className="mt-6 p-4 bg-[#1a1a1a] rounded-lg text-left">
                  <p className="text-[#888] text-sm mb-2">Datos para transferencia:</p>
                  <p className="text-[#f0f0f0] font-mono text-sm">{bankAccounts[0].bank}</p>
                  <p className="text-[#f0f0f0] font-mono text-sm">Cuenta: {bankAccounts[0].accountNumber}</p>
                  <p className="text-[#25D366] text-sm">Alias: {bankAccounts[0].alias}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Tu nombre" required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]"
                  value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                <input type="email" placeholder="Email" required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0]"
                  value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                <textarea placeholder="Mensaje opcional" rows={3}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f0f0f0] resize-none"
                  value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                <button type="submit" disabled={loading || (!selectedTier && !customAmount)}
                  className="w-full py-4 bg-[#8B0000] text-white font-bold rounded-lg hover:bg-[#B22222] disabled:opacity-50">
                  {loading ? 'Procesando...' : 'Donar Ahora'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}