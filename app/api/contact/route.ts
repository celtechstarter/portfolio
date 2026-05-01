import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter: max 20 requests per IP per minute
const rateMap = new Map<string, { count: number; reset: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)

  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 60_000 })
    return false
  }

  if (entry.count >= 20) return true
  entry.count++
  return false
}

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  return NextResponse.json({
    name: process.env.CONTACT_NAME ?? '',
    phone: process.env.CONTACT_PHONE ?? '',
    phoneFormatted: process.env.CONTACT_PHONE_FORMATTED ?? '',
    email: process.env.CONTACT_EMAIL ?? '',
    address: process.env.CONTACT_ADDRESS ?? '',
  })
}
