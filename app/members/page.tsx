'use client'
import { bandMembers, bandInfo } from '@/data/members'
import Link from 'next/link'

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="py-20 px-6 text-center border-b border-[#2a2a2a]">
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,4rem)] text-[#f0f0f0] mb-4">
          THE BAND
        </h1>
        <p className="text-[#888] max-w-xl mx-auto mb-6">{bandInfo.bio}</p>
        <div className="flex gap-4 justify-center text-sm text-[#666]">
          <span>Desde {bandInfo.founded}</span>
          <span>·</span>
          <span>{bandInfo.origin}</span>
          <span>·</span>
          <span>{bandInfo.genre}</span>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {bandMembers.map(member => (
              <Link key={member.id} href={`/members/${member.id}`}
                className="group bg-[#111] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#8B0000] transition-all">
                <div className="aspect-video bg-[#1a1a1a] relative overflow-hidden">
                  <img src={member.imageUrl} alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[#8B0000] text-sm font-semibold">{member.role}</p>
                    <h3 className="text-2xl font-bold text-white mt-1">{member.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#888] text-sm line-clamp-3">{member.bio}</p>
                  <div className="mt-4 flex gap-3">
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"
                        className="text-[#E4405F] hover:text-[#F77737] text-sm">Instagram</a>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Band Stats */}
      <section className="py-12 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Sobre la Banda</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#8B0000]">{bandInfo.founded}</p>
              <p className="text-[#888] text-sm mt-1">Fundada</p>
            </div>
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#8B0000]">{bandInfo.origin}</p>
              <p className="text-[#888] text-sm mt-1">Origen</p>
            </div>
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#8B0000]">{bandInfo.discography.eps}</p>
              <p className="text-[#888] text-sm mt-1">EPs</p>
            </div>
            <div className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#8B0000]">{bandInfo.label}</p>
              <p className="text-[#888] text-sm mt-1">Sello</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}