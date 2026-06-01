'use client'
import { useState } from 'react'
import CountdownTimer from '@/components/CountdownTimer'
import { events, upcomingEvents } from '@/data/events'

export default function TourPage() {
  const [showPast, setShowPast] = useState(false)

  const nextEvent = upcomingEvents[0]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center border-b border-[#2a2a2a]">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,4rem)] text-[#f0f0f0] mb-4">
          TOUR
        </h1>
        <p className="text-[#888] mb-8">Próximas fechas y eventos de Nüdo</p>

        {nextEvent && (
          <div className="max-w-2xl mx-auto">
            <p className="text-[#8B0000] text-sm font-semibold uppercase tracking-wider mb-2">
              Próximo Show
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f0f0f0] mb-2">{nextEvent.title}</h2>
            <p className="text-[#888] mb-6">{nextEvent.venue} — {nextEvent.city}</p>
            <CountdownTimer targetDate={nextEvent.fullDate} />
            {nextEvent.ticketUrl && (
              <a href={nextEvent.ticketUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-8 px-8 py-3 bg-[#8B0000] text-white font-bold rounded-lg hover:bg-[#B22222] transition-all">
                Reservar Entrada →
              </a>
            )}
          </div>
        )}
      </section>

      {/* Upcoming Events */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Próximos Eventos</h3>
          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-[#8B0000] text-sm font-semibold">{event.date}</p>
                    <h4 className="text-xl font-bold text-[#f0f0f0]">{event.title}</h4>
                    <p className="text-[#888] text-sm">{event.venue} — {event.city}</p>
                    <p className="text-[#666] text-sm mt-2">{event.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {event.meetGreetSlots && (
                      <span className="text-xs text-[#888]">
                        {event.meetGreetSlots} cupos meet&greet disponibles
                      </span>
                    )}
                    {event.ticketUrl && (
                      <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#8B0000] text-white text-sm font-semibold rounded-lg text-center hover:bg-[#B22222]">
                        Reservar
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Toggle */}
      <section className="py-12 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => setShowPast(!showPast)}
            className="text-[#888] hover:text-[#f0f0f0] text-sm font-semibold mb-6">
            {showPast ? '▲ Ocultar eventos pasados' : '▼ Ver eventos pasados'}
          </button>

          {showPast && (
            <div className="space-y-4">
              {pastEvents.map(event => (
                <div key={event.id} className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-6 opacity-70">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-[#555] text-sm">{event.date}</p>
                      <h4 className="text-lg font-bold text-[#888]">{event.title}</h4>
                      <p className="text-[#666] text-sm">{event.venue} — {event.city}</p>
                    </div>
                    <span className="text-xs text-[#444] px-3 py-1 bg-[#1a1a1a] rounded-full">Pasado</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}