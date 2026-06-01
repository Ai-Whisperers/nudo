import donationsData from './donations.json'

export interface DonationTier {
  id: string
  amount: { pyg: string; usd: string }
  label: string
  description: string
  perks?: string[]
}

export interface BankAccount {
  bank: string
  accountType: 'corriente' | 'ahorro'
  accountNumber: string
  accountHolder: string
  ruc: string
  alias?: string
}

export interface DonationMethod {
  type: 'bank' | 'tigo-money' | 'whatsapp-pay' | 'paypal'
  label: string
  details: BankAccount | { phone: string; alias: string }
  instructions?: string
}

export const donationTiers: DonationTier[] = donationsData.tiers
export const bankAccounts: BankAccount[] = donationsData.bankAccounts
export const paymentQRCodes = donationsData.paymentQRCodes
export const SHOW_VENUE_BANK_DETAILS = donationsData.showVenueBankDetails