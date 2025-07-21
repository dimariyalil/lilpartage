import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateTrackingId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function generatePartnerLink(trackingId: string, subId?: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_LILBET_URL || 'https://lilbet.com'
  const params = new URLSearchParams({
    partner: trackingId,
    ...(subId && { sub: subId }),
  })
  
  return `${baseUrl}?${params.toString()}`
}