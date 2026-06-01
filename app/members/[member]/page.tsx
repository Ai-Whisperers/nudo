'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { bandMembers } from '@/data/members'

export default function MemberPage() {
  const params = useParams()
  const member = bandMembers.find(m => m.id === params.member)

  if (!member) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-[#888]">Miembro no encontrado</p>
      </div>
    )
  }

  const memberIndex = bandMembers.findIndex(m => m.id === member.id)
  const prevMember = memberIndex > 0 ? bandMembers[memberIndex - 1] : null
  const nextMember = memberIndex < bandMembers.length - 1 ? bandMembers[memberIndex + 1] : null

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={member.imageUrl} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#8B0000] text-sm font-semibold uppercase tracking-wider">Desde {member.joinedYear}</p>
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(3rem,8vw,5rem)] text-[#f0f0f0] mt-4">
            {member.name}
          </h1>
          <p className="text-[#888] text-xl mt-2">{member.role}</p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 px-6 border-b border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#f0f0f0] mb-4">Biografía</h3>
          <p className="text-[#888] leading-relaxed text-lg">{member.bio}</p>
        </div>
      </section>

      {/* Socials */}
      {Object.keys(member.socials).length > 0 && (
        <section className="py-12 px-6 border-b border-[#2a2a2a]">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-4">Redes</h3>
            <div className="flex gap-4">
              {member.socials.instagram && (
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#E4405F]/20 text-[#E4405F] rounded-lg hover:bg-[#E4405F]/30 transition-all">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-2.27.087-3.374 1.128-3.458 3.458-.06 1.269-.072 1.648-.072 4.908 0 3.259.014 3.668.072 4.948.084 2.33 1.287 3.371 3.458 3.458 1.268.06 1.649.072 4.908.072 3.259 0 3.668-.014 4.948-.072 2.27-.087 3.374-1.128 3.458-3.458.06-1.268.072-1.649.072-4.908 0-3.259-.014-3.667-.072-4.948-.084-2.33-1.287-3.371-3.458-3.458zm-5.418 11.88c-2.993 0-5.418-2.425-5.418-5.418s2.425-5.418 5.418-5.418 5.418 2.425 5.418 5.418-2.425 5.418-5.418 5.418zm0-8.937a3.519 3.519 0 100 7.038 3.519 3.519 0 100-7.038zm6.847-3.33a1.304 1.304 0 100 2.608 1.304 1.304 0 100-2.608z"/>
                  </svg>
                  <span className="font-semibold">@{member.name.toLowerCase()}_nudo</span>
                </a>
              )}
              {member.socials.spotify && (
                <a href={member.socials.spotify} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#1DB954]/20 text-[#1DB954] rounded-lg hover:bg-[#1DB954]/30 transition-all">
                  Spotify
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Equipment */}
      {member.equipment && member.equipment.length > 0 && (
        <section className="py-12 px-6 border-b border-[#2a2a2a]">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#f0f0f0] mb-6">Equipamiento</h3>
            <div className="space-y-4">
              {member.equipment.map(category => (
                <div key={category.category} className="bg-[#111] border border-[#2a2a2a] rounded-xl p-6">
                  <h4 className="text-[#8B0000] font-semibold mb-3">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map(item => (
                      <span key={item} className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#888] text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          {prevMember ? (
            <Link href={`/members/${prevMember.id}`}
              className="flex items-center gap-2 text-[#888] hover:text-[#f0f0f0]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <div>
                <p className="text-xs">Miembro anterior</p>
                <p className="font-semibold">{prevMember.name}</p>
              </div>
            </Link>
          ) : <div />}

          <Link href="/members" className="text-[#888] hover:text-[#f0f0f0] text-sm px-4 py-2">
            Ver todos
          </Link>

          {nextMember && (
            <Link href={`/members/${nextMember.id}`}
              className="flex items-center gap-2 text-[#888] hover:text-[#f0f0f0] text-right">
              <div>
                <p className="text-xs">Siguiente miembro</p>
                <p className="font-semibold">{nextMember.name}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}