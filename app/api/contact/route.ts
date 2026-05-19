export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { checkContactRateLimit } from '@/lib/rateLimit'

// Allowed origins — same as chat route
const ALLOWED_ORIGINS = [
  'https://www.marcelwelk.de',
  'https://marcelwelk.de',
  'http://localhost:3000',
  'http://localhost:3001',
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Simple in-memory rate limiter: max 20 requests per IP per minute (for GET)
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

export async function POST(request: NextRequest) {
  // 1. Origin check
  const origin = request.headers.get('origin')
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // 2. Rate limiting (max 3 contact messages per IP per hour)
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  const rateCheck = checkContactRateLimit(ip)
  if (rateCheck.limited) {
    return NextResponse.json({ error: rateCheck.message }, { status: 429 })
  }

  // 3. Parse body
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage' }, { status: 400 })
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Ungültige Anfrage' }, { status: 400 })
  }

  const { name, email, message } = body as Record<string, unknown>

  // 4. Validate fields
  if (typeof name !== 'string' || name.trim().length === 0) {
    return NextResponse.json({ error: 'Name ist erforderlich' }, { status: 400 })
  }
  if (name.trim().length > 100) {
    return NextResponse.json({ error: 'Name zu lang (max. 100 Zeichen)' }, { status: 400 })
  }
  if (typeof email !== 'string' || email.trim().length === 0) {
    return NextResponse.json({ error: 'Email ist erforderlich' }, { status: 400 })
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: 'Ungültige Email-Adresse' }, { status: 400 })
  }
  if (typeof message !== 'string' || message.trim().length === 0) {
    return NextResponse.json({ error: 'Nachricht ist erforderlich' }, { status: 400 })
  }
  if (message.trim().length > 1000) {
    return NextResponse.json({ error: 'Nachricht zu lang (max. 1000 Zeichen)' }, { status: 400 })
  }

  const safeName = name.trim()
  const safeEmail = email.trim()
  const safeMessage = message.trim()

  // 5. Send email via Resend — target email stays server-side only
  // Resend v2+ returns { data, error } instead of throwing
  if (!process.env.RESEND_API_KEY) {
    console.error('[contact/route] RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Server-Konfigurationsfehler.' }, { status: 500 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: 'noreply@marcelwelk.de',
      to: 'marcel.welk87@gmail.com',
      subject: '📬 Neue Kontaktnachricht auf marcelwelk.de',
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nNachricht:\n${safeMessage}\n\n---\nGesendet über MARCEL.AI · marcelwelk.de`,
    })
    if (error) {
      console.error('[contact/route] Resend API error:', JSON.stringify(error))
      return NextResponse.json(
        { error: 'Email konnte nicht gesendet werden. Bitte versuche es später.' },
        { status: 502 }
      )
    }
    console.log('[contact/route] Email sent, id:', data?.id)
  } catch (err) {
    console.error('[contact/route] Resend exception:', err)
    return NextResponse.json(
      { error: 'Email konnte nicht gesendet werden. Bitte versuche es später.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ success: true })
}
