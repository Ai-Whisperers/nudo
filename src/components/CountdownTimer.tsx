'use client'
import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference <= 0) {
        setIsLive(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (isLive) {
    return (
      <div className="text-center">
        <span className="inline-block px-4 py-2 bg-[#8B0000] text-white text-lg font-bold rounded-lg animate-pulse">
 🔥 EN VIVO AHORA
        </span>
      </div>
    )
  }

  return (
    <div className="flex gap-4 justify-center">
      {[
        { value: timeLeft.days, label: 'Días' },
        { value: timeLeft.hours, label: 'Horas' },
        { value: timeLeft.minutes, label: 'Min' },
        { value: timeLeft.seconds, label: 'Seg' }
      ].map((item, i) => (
<div key={i} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-[#8B0000]">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs text-[#888] mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
