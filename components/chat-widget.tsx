'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

// ---------------------------------------------------------------------------
// Brand constants
// ---------------------------------------------------------------------------
const COPPER = '#CF9336'
const DARK = '#0c0b09'
const WIN_BG = 'rgba(12,11,9,0.97)'
const WIN_BORDER = 'rgba(207,147,54,0.3)'
const SESSION_LIMIT = 10

const CHIPS = [
  'Was kann Marcel?',
  'Welche Projekte hat er?',
  'Sucht er einen Job?',
]

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function MwAvatar({ size = 28, radius = 8 }: { size?: number; radius?: number }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: size, height: size, borderRadius: radius, background: COPPER }}
    >
      <span style={{ color: DARK, fontSize: size * 0.38, fontWeight: 700, fontFamily: 'monospace', letterSpacing: '-0.03em' }}>
        MW
      </span>
    </div>
  )
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5" style={{ padding: '12px 16px' }}>
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className="animate-bounce rounded-full"
          style={{ width: 7, height: 7, background: COPPER, animationDelay: `${i * 0.15}s`, animationDuration: '0.8s' }}
        />
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
interface ContactData {
  name: string
  email: string
  message: string
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Stable session ID — generated once per widget mount, never changes
  const sessionId = useRef(crypto.randomUUID())

  // Contact form state
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactData, setContactData] = useState<ContactData>({ name: '', email: '', message: '' })
  const [contactErrors, setContactErrors] = useState<Partial<ContactData & { submit: string }>>({})
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)

  const userMessageCount = messages.filter(m => m.role === 'user').length
  const sessionLimitReached = userMessageCount >= SESSION_LIMIT

  // Auto-scroll on new messages / loading state change
  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading, open])

  // Focus input when opening
  useEffect(() => {
    if (open && !sessionLimitReached) {
      setTimeout(() => inputRef.current?.focus(), 120)
    }
  }, [open, sessionLimitReached])

  const send = async (text: string) => {
    text = text.trim()
    if (!text || loading || sessionLimitReached) return
    if (text.length > 500) {
      setError('Nachricht zu lang (max. 500 Zeichen)')
      return
    }

    const snapshot = messages
    const newMessages: Message[] = [...snapshot, { role: 'user', content: text }]
    setMessages(newMessages)
    setInput('')
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, sessionId: sessionId.current }),
      })

      const data = await res.json() as { message?: string; error?: string }

      if (!res.ok) {
        setError(data.error ?? 'Ein Fehler ist aufgetreten.')
        setMessages(snapshot)
        return
      }

      setMessages([...newMessages, { role: 'assistant', content: data.message ?? '' }])
    } catch {
      setError('Verbindungsfehler. Bitte versuche es erneut.')
      setMessages(snapshot)
    } finally {
      setLoading(false)
    }
  }

  const submitContact = async () => {
    const errors: Partial<ContactData & { submit: string }> = {}
    if (!contactData.name.trim()) errors.name = 'Name ist erforderlich'
    if (!contactData.email.trim()) errors.email = 'Email ist erforderlich'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) errors.email = 'Ungültige Email-Adresse'
    if (!contactData.message.trim()) errors.message = 'Nachricht ist erforderlich'

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors)
      return
    }

    setContactSubmitting(true)
    setContactErrors({})

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      })
      const data = await res.json() as { success?: boolean; error?: string }
      if (!res.ok) {
        setContactErrors({ submit: data.error ?? 'Fehler beim Senden. Bitte versuche es erneut.' })
        return
      }
      setContactSuccess(true)
      setTimeout(() => {
        setContactSuccess(false)
        setShowContactForm(false)
        setContactData({ name: '', email: '', message: '' })
      }, 3000)
    } catch {
      setContactErrors({ submit: 'Verbindungsfehler. Bitte versuche es erneut.' })
    } finally {
      setContactSubmitting(false)
    }
  }

  const charCount = input.length

  return (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* Chat window + note                                                 */}
      {/* ----------------------------------------------------------------- */}
      {open && (
        <div
          className="fixed z-50 flex flex-col items-end"
          style={{ bottom: '90px', right: '24px' }}
        >
          <div
            className="flex flex-col overflow-hidden"
            style={{
              width: 'min(340px, 90vw)',
              height: '500px',
              background: WIN_BG,
              border: `0.5px solid ${WIN_BORDER}`,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 0 0.5px rgba(207,147,54,0.1)',
            }}
          >
            {/* ------------------------------------------------------------- */}
            {/* Header                                                         */}
            {/* ------------------------------------------------------------- */}
            <div
              className="flex items-center justify-between px-4 py-3 shrink-0"
              style={{ borderBottom: `0.5px solid ${WIN_BORDER}`, background: 'rgba(207,147,54,0.04)' }}
            >
              <div className="flex items-center gap-3">
                {/* Avatar with online dot */}
                <div className="relative shrink-0">
                  <MwAvatar size={36} radius={10} />
                  <span
                    className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2"
                    style={{ background: '#22c55e', borderColor: DARK }}
                  />
                </div>
                {/* Name + status */}
                <div>
                  <p style={{ color: '#ffffff', fontFamily: 'monospace', fontSize: 13, fontWeight: 600, lineHeight: 1, letterSpacing: '0.06em' }}>
                    MARCEL.AI
                  </p>
                  <p className="flex items-center gap-1.5 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#22c55e' }} />
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, fontFamily: 'monospace' }}>
                      ONLINE · antwortet sofort
                    </span>
                  </p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Chat schließen"
                className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors"
                style={{ color: 'rgba(255,255,255,0.35)', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'white' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
              >
                <X size={15} />
              </button>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* Message list / Contact form                                    */}
            {/* ------------------------------------------------------------- */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

              {/* ---- Contact form view ---- */}
              {showContactForm && (
                <>
                  {contactSuccess ? (
                    <div
                      className="flex flex-col items-center justify-center h-full gap-3 text-center"
                      style={{ minHeight: '240px' }}
                    >
                      <span style={{ fontSize: 32 }}>✅</span>
                      <p style={{ color: 'rgba(255,255,255,0.82)', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.6 }}>
                        Nachricht gesendet!{' '}
                        <span style={{ color: COPPER }}>Marcel meldet sich bei dir.</span>
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3 pt-1">
                      <p style={{ color: COPPER, fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Nachricht hinterlassen
                      </p>

                      {/* Name */}
                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          placeholder="Name *"
                          maxLength={100}
                          value={contactData.name}
                          onChange={e => setContactData(d => ({ ...d, name: e.target.value }))}
                          className="w-full outline-none"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: `0.5px solid ${contactErrors.name ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)'}`,
                            borderRadius: 10,
                            padding: '9px 12px',
                            color: 'white',
                            fontFamily: 'monospace',
                            fontSize: 12,
                          }}
                          onFocus={e => { e.currentTarget.style.borderColor = 'rgba(207,147,54,0.5)' }}
                          onBlur={e => { e.currentTarget.style.borderColor = contactErrors.name ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)' }}
                        />
                        {contactErrors.name && (
                          <span style={{ color: '#f87171', fontFamily: 'monospace', fontSize: 10 }}>{contactErrors.name}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1">
                        <input
                          type="email"
                          placeholder="Email *"
                          value={contactData.email}
                          onChange={e => setContactData(d => ({ ...d, email: e.target.value }))}
                          className="w-full outline-none"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: `0.5px solid ${contactErrors.email ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)'}`,
                            borderRadius: 10,
                            padding: '9px 12px',
                            color: 'white',
                            fontFamily: 'monospace',
                            fontSize: 12,
                          }}
                          onFocus={e => { e.currentTarget.style.borderColor = 'rgba(207,147,54,0.5)' }}
                          onBlur={e => { e.currentTarget.style.borderColor = contactErrors.email ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)' }}
                        />
                        {contactErrors.email && (
                          <span style={{ color: '#f87171', fontFamily: 'monospace', fontSize: 10 }}>{contactErrors.email}</span>
                        )}
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1">
                        <textarea
                          placeholder="Nachricht *"
                          maxLength={1000}
                          rows={4}
                          value={contactData.message}
                          onChange={e => setContactData(d => ({ ...d, message: e.target.value }))}
                          className="w-full outline-none resize-none"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: `0.5px solid ${contactErrors.message ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)'}`,
                            borderRadius: 10,
                            padding: '9px 12px',
                            color: 'white',
                            fontFamily: 'monospace',
                            fontSize: 12,
                          }}
                          onFocus={e => { e.currentTarget.style.borderColor = 'rgba(207,147,54,0.5)' }}
                          onBlur={e => { e.currentTarget.style.borderColor = contactErrors.message ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)' }}
                        />
                        <div className="flex justify-between">
                          {contactErrors.message ? (
                            <span style={{ color: '#f87171', fontFamily: 'monospace', fontSize: 10 }}>{contactErrors.message}</span>
                          ) : <span />}
                          <span style={{ color: contactData.message.length > 900 ? '#f87171' : 'rgba(255,255,255,0.25)', fontFamily: 'monospace', fontSize: 10 }}>
                            {contactData.message.length}/1000
                          </span>
                        </div>
                      </div>

                      {/* Submit error */}
                      {contactErrors.submit && (
                        <div
                          className="text-xs rounded-xl px-3.5 py-2.5"
                          style={{
                            background: 'rgba(239,68,68,0.09)',
                            border: '0.5px solid rgba(239,68,68,0.25)',
                            color: '#f87171',
                            fontFamily: 'monospace',
                          }}
                        >
                          {contactErrors.submit}
                        </div>
                      )}

                      {/* Submit button */}
                      <button
                        onClick={submitContact}
                        disabled={contactSubmitting}
                        className="w-full py-2.5 rounded-xl transition-all"
                        style={{
                          background: COPPER,
                          color: DARK,
                          fontFamily: 'monospace',
                          fontSize: 13,
                          fontWeight: 600,
                          opacity: contactSubmitting ? 0.6 : 1,
                          cursor: contactSubmitting ? 'not-allowed' : 'pointer',
                        }}
                        onMouseEnter={e => { if (!contactSubmitting) e.currentTarget.style.filter = 'brightness(1.1)' }}
                        onMouseLeave={e => { e.currentTarget.style.filter = 'none' }}
                      >
                        {contactSubmitting ? 'Wird gesendet…' : 'Absenden'}
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* ---- Normal chat view ---- */}
              {!showContactForm && <>

              {/* Welcome message + guided chips */}
              {messages.length === 0 && (
                <>
                  <div className="flex items-start gap-2.5">
                    <MwAvatar size={28} radius={8} />
                    <div
                      className="text-sm leading-relaxed"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '0.5px solid rgba(255,255,255,0.09)',
                        borderRadius: '4px 16px 16px 16px',
                        padding: '10px 14px',
                        color: 'rgba(255,255,255,0.82)',
                        fontFamily: 'monospace',
                        maxWidth: '80%',
                      }}
                    >
                      Hallo! Ich bin MARCEL.AI. Stell mir eine Frage über Marcel oder wähle ein Thema:
                    </div>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 pl-9">
                    {CHIPS.map(chip => (
                      <button
                        key={chip}
                        onClick={() => send(chip)}
                        className="text-xs px-3 py-1.5 rounded-full transition-colors"
                        style={{
                          border: `0.5px solid ${WIN_BORDER}`,
                          color: COPPER,
                          background: 'rgba(207,147,54,0.08)',
                          fontFamily: 'monospace',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(207,147,54,0.2)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(207,147,54,0.08)' }}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Conversation bubbles */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  {msg.role === 'assistant' ? (
                    <MwAvatar size={28} radius={8} />
                  ) : (
                    <div
                      className="shrink-0 flex items-center justify-center"
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: 'rgba(255,255,255,0.1)',
                        border: '0.5px solid rgba(255,255,255,0.18)',
                      }}
                    >
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, fontWeight: 600, fontFamily: 'monospace' }}>Du</span>
                    </div>
                  )}

                  {/* Bubble */}
                  <div
                    className="text-sm leading-relaxed"
                    style={{
                      maxWidth: '75%',
                      padding: '10px 14px',
                      fontFamily: 'monospace',
                      ...(msg.role === 'user'
                        ? {
                            background: COPPER,
                            color: DARK,
                            borderRadius: '16px 4px 16px 16px',
                            fontWeight: 500,
                          }
                        : {
                            background: 'rgba(255,255,255,0.05)',
                            border: '0.5px solid rgba(255,255,255,0.09)',
                            color: 'rgba(255,255,255,0.82)',
                            borderRadius: '4px 16px 16px 16px',
                          }),
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex items-end gap-2.5">
                  <MwAvatar size={28} radius={8} />
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '0.5px solid rgba(255,255,255,0.09)',
                      borderRadius: '4px 16px 16px 16px',
                    }}
                  >
                    <TypingDots />
                  </div>
                </div>
              )}

              {/* Session limit notice */}
              {sessionLimitReached && (
                <div
                  className="text-xs leading-relaxed rounded-xl px-4 py-3 text-center"
                  style={{
                    background: 'rgba(207,147,54,0.07)',
                    border: `0.5px solid ${WIN_BORDER}`,
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'monospace',
                  }}
                >
                  Du hast das Session-Limit erreicht.{' '}
                  <a
                    href="#kontakt"
                    onClick={() => setOpen(false)}
                    style={{ color: COPPER, textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    Schreib Marcel direkt über das Kontaktformular.
                  </a>
                </div>
              )}

              {/* Error */}
              {error && (
                <div
                  className="text-xs rounded-xl px-3.5 py-2.5"
                  style={{
                    background: 'rgba(239,68,68,0.09)',
                    border: '0.5px solid rgba(239,68,68,0.25)',
                    color: '#f87171',
                    fontFamily: 'monospace',
                  }}
                >
                  {error}
                </div>
              )}

              <div ref={bottomRef} />
              </>}
            </div>

            {/* ------------------------------------------------------------- */}
            {/* Input area                                                     */}
            {/* ------------------------------------------------------------- */}
            <div
              className="shrink-0 px-3 py-3"
              style={{ borderTop: `0.5px solid ${WIN_BORDER}`, background: 'rgba(207,147,54,0.025)' }}
            >
              {showContactForm ? (
                /* Back link when contact form is open */
                <button
                  onClick={() => { setShowContactForm(false); setContactErrors({}); setContactData({ name: '', email: '', message: '' }) }}
                  className="w-full text-center text-xs py-1 transition-colors"
                  style={{ color: COPPER, fontFamily: 'monospace', background: 'transparent', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >
                  ← Zurück zum Chat
                </button>
              ) : !sessionLimitReached ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value.slice(0, 500))}
                        onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); send(input) } }}
                        placeholder="Schreib eine Nachricht…"
                        maxLength={500}
                        disabled={loading}
                        className="w-full outline-none"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '0.5px solid rgba(255,255,255,0.1)',
                          borderRadius: 12,
                          padding: charCount > 400 ? '10px 52px 10px 14px' : '10px 14px',
                          color: 'white',
                          fontFamily: 'monospace',
                          fontSize: 13,
                          opacity: loading ? 0.5 : 1,
                          transition: 'border-color 0.15s',
                        }}
                        onFocus={e => { e.currentTarget.style.borderColor = 'rgba(207,147,54,0.5)' }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
                      />
                      {/* Character counter — appears after 400 chars */}
                      {charCount > 400 && (
                        <span
                          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{
                            fontSize: 10,
                            fontFamily: 'monospace',
                            color: charCount >= 500 ? '#f87171' : 'rgba(255,255,255,0.3)',
                          }}
                        >
                          {charCount}/500
                        </span>
                      )}
                    </div>

                    {/* Send button */}
                    <button
                      onClick={() => send(input)}
                      disabled={loading || !input.trim()}
                      aria-label="Nachricht senden"
                      className="shrink-0 flex items-center justify-center transition-all duration-150"
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: COPPER,
                        color: DARK,
                        opacity: loading || !input.trim() ? 0.3 : 1,
                        cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                      }}
                      onMouseEnter={e => { if (!loading && input.trim()) e.currentTarget.style.filter = 'brightness(1.12)' }}
                      onMouseLeave={e => { e.currentTarget.style.filter = 'none' }}
                    >
                      <Send size={16} />
                    </button>
                  </div>

                  {/* Contact form toggle button */}
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="w-full text-center transition-colors"
                    style={{
                      color: COPPER,
                      fontFamily: 'monospace',
                      fontSize: 10,
                      background: 'transparent',
                      cursor: 'pointer',
                      opacity: 0.7,
                      paddingBottom: 2,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '0.7' }}
                  >
                    ✉️ Nachricht an Marcel hinterlassen
                  </button>
                </div>
              ) : (
                <p
                  className="text-center text-xs py-1"
                  style={{ color: 'rgba(255,255,255,0.28)', fontFamily: 'monospace' }}
                >
                  Session beendet
                </p>
              )}
            </div>

            {/* ------------------------------------------------------------- */}
            {/* Widget footer                                                  */}
            {/* ------------------------------------------------------------- */}
            <div
              className="shrink-0 py-2 text-center"
              style={{ borderTop: `0.5px solid rgba(207,147,54,0.1)` }}
            >
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.18)', fontFamily: 'monospace' }}>
                powered by claude-sonnet · end-to-end verschlüsselt
              </p>
            </div>
          </div>

          {/* Note below window */}
          <p
            className="mt-2 text-center"
            style={{
              fontSize: 10,
              color: 'rgba(255,255,255,0.22)',
              fontFamily: 'monospace',
              width: 'min(340px, 90vw)',
            }}
          >
            Marcel wird per Benachrichtigung informiert wenn du schreibst
          </p>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* Toggle button                                                        */}
      {/* ------------------------------------------------------------------- */}
      <div className="fixed z-50" style={{ bottom: '24px', right: '24px' }}>
        {/* Pulse dot — only visible when closed */}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 z-10">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70"
              style={{ background: '#22c55e' }}
            />
            <span
              className="relative inline-flex h-3.5 w-3.5 rounded-full border-2"
              style={{ background: '#22c55e', borderColor: DARK }}
            />
          </span>
        )}

        <button
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? 'Chat schließen' : 'Chat öffnen'}
          className="flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            width: 52,
            height: 52,
            borderRadius: 16,
            background: COPPER,
            color: DARK,
            boxShadow: `0 4px 20px rgba(207,147,54,0.5), 0 1px 0 rgba(255,255,255,0.15) inset`,
          }}
          onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.1)' }}
          onMouseLeave={e => { e.currentTarget.style.filter = 'none' }}
        >
          {open ? (
            <X size={22} />
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  )
}
