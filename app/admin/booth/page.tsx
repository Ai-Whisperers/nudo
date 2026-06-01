'use client'
import { useState } from 'react'
import { upcomingEvents } from '@/data/events'
import { meetGreetSlots } from '@/data/meet-greet'
import { preOrderItems } from '@/data/preorders'
import { bankAccounts, SHOW_VENUE_BANK_DETAILS } from '@/data/donations'

interface BoothStats {
  preOrders: number
  meetGreetBookings: number
  estimatedRevenue: { pyg: string; usd: string }
  boothVisits: number
}

const sampleStats: BoothStats = {
  preOrders: 23,
  meetGreetBookings: 12,
  estimatedRevenue: { pyg: '3,450,000', usd: '437' },
  boothVisits: 87
}

const recentPreOrders = [
  { id: 'PO-001', name: 'María González', item: 'DESAHOGO T-Shirt (M)', code: 'NUDO-ABC123', status: 'pending' },
  { id: 'PO-002', name: 'Carlos Martínez', item: 'Nüdo Hoodie (L)', code: 'NUDO-DEF456', status: 'paid' },
  { id: 'PO-003', name: 'Ana López', item: 'Sticker Pack', code: 'NUDO-GHI789', status: 'picked-up' },
]

const recentMeetGreet = [
  { id: 'MG-001', name: 'Juan Pérez', quantity: 2, event: 'DESAHOGO Release Party', status: 'confirmed' },
  { id: 'MG-002', name: 'Sofia Rodríguez', quantity: 1, event: 'DESAHOGO Release Party', status: 'pending' },
]

export default function AdminBoothPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'preorders' | 'meetgreet' | 'settings'>('dashboard')
  const event = upcomingEvents[0]
  const slotInfo = event ? meetGreetSlots[event.id] : null

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="bg-[#111] border-b border-[#2a2a2a] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-[#f0f0f0]">🎤 Nüdo Booth Manager</h1>
            <p className="text-[#666] text-sm">{event?.title || 'No event selected'}</p>
          </div>
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-[#8B0000]/20 text-[#8B0000] text-xs rounded-full">
              {event ? new Date(event.fullDate).toLocaleDateString() : 'TBD'}
            </span>
            <span className="px-3 py-1 bg-[#25D366]/20 text-[#25D366] text-xs rounded-full">
              ● Live
            </span>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-[#111] border-b border-[#2a2a2a] px-6">
        <div className="max-w-7xl mx-auto flex gap-1">
          {(['dashboard', 'preorders', 'meetgreet', 'settings'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-semibold capitalize transition-all ${activeTab === tab ? 'text-[#f0f0f0] border-b-2 border-[#8B0000]' : 'text-[#666] hover:text-[#888]'}`}>
              {tab === 'dashboard' ? 'Dashboard' : tab === 'meetgreet' ? 'Meet&Greet' : tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <p className="text-[#666] text-sm">Pre-Orders</p>
                <p className="text-3xl font-bold text-[#f0f0f0] mt-1">{sampleStats.preOrders}</p>
                <p className="text-[#25D366] text-xs mt-2">↑ 3 hoy</p>
              </div>
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <p className="text-[#666] text-sm">Meet&Greet</p>
                <p className="text-3xl font-bold text-[#f0f0f0] mt-1">{sampleStats.meetGreetBookings}</p>
                <p className="text-[#888] text-xs mt-2">{slotInfo ? `${slotInfo.total - slotInfo.booked} slots left` : 'N/A'}</p>
              </div>
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <p className="text-[#666] text-sm">Revenue Est.</p>
                <p className="text-3xl font-bold text-[#f0f0f0] mt-1">{sampleStats.estimatedRevenue.pyg} Gs</p>
                <p className="text-[#888] text-xs mt-2">${sampleStats.estimatedRevenue.usd} USD</p>
              </div>
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <p className="text-[#666] text-sm">Booth Visits</p>
                <p className="text-3xl font-bold text-[#f0f0f0] mt-1">{sampleStats.boothVisits}</p>
                <p className="text-[#888] text-xs mt-2">hoy</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/preorder" className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#8B0000] transition-all">
                <p className="text-2xl mb-2">📦</p>
                <h4 className="text-[#f0f0f0] font-semibold">Pre-Order</h4>
                <p className="text-[#666] text-sm">Ver órdenes pendientes</p>
              </a>
              <a href="/meet-greet" className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#8B0000] transition-all">
                <p className="text-2xl mb-2">🤝</p>
                <h4 className="text-[#f0f0f0] font-semibold">Meet&Greet</h4>
                <p className="text-[#666] text-sm">Gestionar reservas</p>
              </a>
              <a href="/donate" className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#8B0000] transition-all">
                <p className="text-2xl mb-2">💰</p>
                <h4 className="text-[#f0f0f0] font-semibold">Donaciones</h4>
                <p className="text-[#666] text-sm">Ver datos bancarios</p>
              </a>
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <h4 className="text-[#f0f0f0] font-semibold mb-4">Pre-Orders Recientes</h4>
                <div className="space-y-3">
                  {recentPreOrders.map(order => (
                    <div key={order.id} className="flex justify-between items-center p-3 bg-[#1a1a1a] rounded-lg">
                      <div>
                        <p className="text-[#f0f0f0] text-sm font-semibold">{order.name}</p>
                        <p className="text-[#666] text-xs">{order.item}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#8B0000] text-xs font-mono">{order.code}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${order.status === 'picked-up' ? 'bg-[#25D366]/20 text-[#25D366]' : order.status === 'paid' ? 'bg-[#888]/20 text-[#888]' : 'bg-[#8B0000]/20 text-[#8B0000]'}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <h4 className="text-[#f0f0f0] font-semibold mb-4">Meet&Greet Recientes</h4>
                <div className="space-y-3">
                  {recentMeetGreet.map(booking => (
                    <div key={booking.id} className="flex justify-between items-center p-3 bg-[#1a1a1a] rounded-lg">
                      <div>
                        <p className="text-[#f0f0f0] text-sm font-semibold">{booking.name}</p>
                        <p className="text-[#666] text-xs">{booking.quantity} persona(s)</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${booking.status === 'confirmed' ? 'bg-[#25D366]/20 text-[#25D366]' : 'bg-[#8B0000]/20 text-[#8B0000]'}`}>
                        {booking.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PreOrders Tab */}
        {activeTab === 'preorders' && (
          <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
            <h4 className="text-[#f0f0f0] font-semibold mb-4">Todas las Pre-Orders</h4>
            <table className="w-full">
              <thead>
                <tr className="text-left text-[#666] text-sm border-b border-[#2a2a2a]">
                  <th className="pb-3">Código</th>
                  <th className="pb-3">Nombre</th>
                  <th className="pb-3">Item</th>
                  <th className="pb-3">Estado</th>
                  <th className="pb-3">Acción</th>
                </tr>
              </thead>
              <tbody className="text-[#f0f0f0] text-sm">
                {recentPreOrders.map(order => (
                  <tr key={order.id} className="border-b border-[#1a1a1a]">
                    <td className="py-3 text-[#8B0000] font-mono">{order.code}</td>
                    <td className="py-3">{order.name}</td>
                    <td className="py-3 text-[#888]">{order.item}</td>
                    <td className="py-3">
                      <select className="bg-[#1a1a1a] border border-[#2a2a2a] rounded px-2 py-1 text-xs">
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="picked-up">Picked Up</option>
                      </select>
                    </td>
                    <td className="py-3">
                      <button className="text-[#8B0000] hover:text-[#B22222] text-sm">Marcar pickup</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Meet&Greet Tab */}
        {activeTab === 'meetgreet' && (
          <div className="space-y-6">
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
              <h4 className="text-[#f0f0f0] font-semibold mb-4">Slots Disponibles</h4>
              {slotInfo && (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#888]">Reservados</span>
                    <span className="text-[#f0f0f0]">{slotInfo.booked} / {slotInfo.total}</span>
                  </div>
                  <div className="h-3 bg-[#1a1a1a] rounded-full">
                    <div className="h-3 bg-[#8B0000] rounded-full" style={{ width: `${(slotInfo.booked / slotInfo.total) * 100}%` }} />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
              <h4 className="text-[#f0f0f0] font-semibold mb-4">Reservaciones</h4>
              <div className="space-y-3">
                {recentMeetGreet.map(booking => (
                  <div key={booking.id} className="flex justify-between items-center p-4 bg-[#1a1a1a] rounded-xl">
                    <div>
                      <p className="text-[#f0f0f0] font-semibold">{booking.name}</p>
                      <p className="text-[#666] text-sm">{booking.quantity} persona(s)</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-[#25D366]/20 text-[#25D366] text-xs rounded hover:bg-[#25D366]/30">Confirmar</button>
                      <button className="px-3 py-1 bg-[#8B0000]/20 text-[#8B0000] text-xs rounded hover:bg-[#8B0000]/30">Cancelar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
              <h4 className="text-[#f0f0f0] font-semibold mb-4">Datos Bancarios — Booth</h4>
              <div className="p-4 bg-[#1a1a1a] rounded-lg">
                <p className="text-[#888] text-sm mb-2">{SHOW_VENUE_BANK_DETAILS.venueName}</p>
                <p className="text-[#f0f0f0] font-semibold">{SHOW_VENUE_BANK_DETAILS.bank}</p>
                <p className="text-[#888] text-sm">Cuenta {SHOW_VENUE_BANK_DETAILS.accountType}: {SHOW_VENUE_BANK_DETAILS.accountNumber}</p>
                <p className="text-[#888] text-sm">Titular: {SHOW_VENUE_BANK_DETAILS.accountHolder}</p>
                <p className="text-[#25D366] text-sm">Alias: {SHOW_VENUE_BANK_DETAILS.alias}</p>
              </div>
            </div>

            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
              <h4 className="text-[#f0f0f0] font-semibold mb-4">Productos en Booth</h4>
              <div className="space-y-2">
                {preOrderItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-[#1a1a1a] rounded-lg">
                    <div>
                      <p className="text-[#f0f0f0]">{item.name}</p>
                      <p className="text-[#888] text-sm">{item.price.pyg} Gs</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${item.available ? 'bg-[#25D366]/20 text-[#25D366]' : 'bg-[#8B0000]/20 text-[#8B0000]'}`}>
                      {item.available ? 'Disponible' : 'Agotado'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}