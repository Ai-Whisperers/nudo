import { NextResponse } from 'next/server'
import { donationTiers, bankAccounts, paymentQRCodes } from '@/data/donations'

export async function GET() {
  return NextResponse.json({
    tiers: donationTiers,
    bankAccounts,
    qrCodes: paymentQRCodes
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { tierId, amount, donorName, donorEmail, message } = body

  if (!donorName || !donorEmail) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const donation = {
    id: `don-${Date.now()}`,
    tierId,
    amount,
    donorName,
    donorEmail,
    message,
    receivedAt: new Date().toISOString(),
    status: 'pending'
  }

  return NextResponse.json({ success: true, donation })
}