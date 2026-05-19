// Server-side in-memory rate limiting
// Resets on every cold start / server restart (fine for a portfolio)

const hourlyMap = new Map<string, number[]>()
const minutelyMap = new Map<string, number[]>()
const contactHourlyMap = new Map<string, number[]>()

export interface RateLimitResult {
  limited: boolean
  message?: string
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now()
  const ONE_HOUR = 60 * 60 * 1000
  const ONE_MINUTE = 60 * 1000

  // --- Minutely: max 5 requests per IP ---
  const minutely = (minutelyMap.get(ip) ?? []).filter(t => now - t < ONE_MINUTE)
  if (minutely.length >= 5) {
    return { limited: true, message: 'Zu viele Nachrichten. Bitte warte eine Minute.' }
  }

  // --- Hourly: max 15 requests per IP ---
  const hourly = (hourlyMap.get(ip) ?? []).filter(t => now - t < ONE_HOUR)
  if (hourly.length >= 15) {
    return { limited: true, message: 'Stündliches Limit erreicht. Bitte versuche es später erneut.' }
  }

  // Commit both increments only when not limited
  minutely.push(now)
  minutelyMap.set(ip, minutely)
  hourly.push(now)
  hourlyMap.set(ip, hourly)

  return { limited: false }
}

// Stricter limit for contact form: max 3 per IP per hour
export function checkContactRateLimit(ip: string): RateLimitResult {
  const now = Date.now()
  const ONE_HOUR = 60 * 60 * 1000

  const hourly = (contactHourlyMap.get(ip) ?? []).filter(t => now - t < ONE_HOUR)
  if (hourly.length >= 3) {
    return { limited: true, message: 'Du hast bereits 3 Nachrichten in dieser Stunde gesendet. Bitte versuche es später erneut.' }
  }

  hourly.push(now)
  contactHourlyMap.set(ip, hourly)

  return { limited: false }
}
