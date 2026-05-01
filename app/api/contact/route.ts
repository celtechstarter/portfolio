import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    name: process.env.CONTACT_NAME ?? '',
    phone: process.env.CONTACT_PHONE ?? '',
    phoneFormatted: process.env.CONTACT_PHONE_FORMATTED ?? '',
    email: process.env.CONTACT_EMAIL ?? '',
    address: process.env.CONTACT_ADDRESS ?? '',
  })
}
