import { useState, useEffect } from 'react'

interface NewMessageScreenProps {
  platform: 'ios' | 'android'
  visible: boolean
  onCancel: () => void
}

const recentContacts = [
  { id: 1, name: '+46 73 058 04 37', label: 'Unsaved number', initials: null, color: '#48484a' },
  { id: 2, name: 'Cameron Taylor', label: 'Recent', initials: 'CT', color: '#1a6fdb' },
]

export function NewMessageScreen({ platform, visible, onCancel }: NewMessageScreenProps) {
  const isIos = platform === 'ios'
  const message = 'Hello!'
  const [selectedContact, setSelectedContact] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (visible) setMounted(true)
  }, [visible])

  const handleTransitionEnd = () => {
    if (!visible) setMounted(false)
  }

  if (!mounted && !visible) return null

  const sheetTop = isIos ? 48 : 32

  return (
    <>
      {/* Scrim */}
      <div
        onClick={onCancel}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 50,
          opacity: visible ? 1 : 0,
          transition: 'opacity 280ms ease',
        }}
      />

      {/* Sheet */}
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: sheetTop,
          bottom: 0,
          background: isIos ? '#1c1c1e' : '#2a2a2c',
          borderRadius: isIos ? '20px 20px 0 0' : '16px 16px 0 0',
          zIndex: 60,
          display: 'flex',
          flexDirection: 'column',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: `transform ${isIos ? '320ms cubic-bezier(0.32,0.72,0,1)' : '260ms cubic-bezier(0.4,0,0.2,1)'}`,
          overflow: 'hidden',
          fontFamily: isIos ? '-apple-system, BlinkMacSystemFont, sans-serif' : 'Roboto, sans-serif',
        }}
      >
        {/* Handle bar – iOS only */}
        {isIos && (
          <div
            style={{
              alignSelf: 'center',
              width: 36,
              height: 4,
              background: '#48484a',
              borderRadius: 2,
              marginTop: 10,
              marginBottom: 4,
              flexShrink: 0,
            }}
          />
        )}

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isIos ? '10px 16px 12px' : '14px 16px 12px',
            borderBottom: '0.5px solid #38383a',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 17,
              fontWeight: 600,
              color: '#fff',
              marginLeft: isIos ? 0 : 0,
            }}
          >
            New message
          </span>
          {isIos ? (
            <button
              onClick={onCancel}
              style={{
                background: '#3a3a3c',
                border: 'none',
                borderRadius: 20,
                padding: '6px 16px',
                color: 'var(--sinch-color-action-primary)',
                fontSize: 16,
                fontWeight: 500,
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              Cancel
            </button>
          ) : (
            <button
              onClick={onCancel}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--sinch-color-action-primary)',
                fontSize: 15,
                fontWeight: 500,
                cursor: 'pointer',
                padding: '4px 0',
                flexShrink: 0,
              }}
            >
              Cancel
            </button>
          )}
        </div>

        {/* Recipient search */}
        <div
          style={{
            padding: '12px 16px',
            borderBottom: '0.5px solid #38383a',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(118,118,128,0.22)',
              borderRadius: 10,
              padding: '10px 12px',
              border: '1px solid var(--sinch-color-action-primary)',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="rgba(235,235,245,0.5)">
              <path d="M6.5 1a5.5 5.5 0 104.2 9l3.2 3.1a.75.75 0 001-1.1L11.7 9A5.5 5.5 0 006.5 1zm0 1.5a4 4 0 110 8 4 4 0 010-8z" />
            </svg>
            {/* Cursor */}
            <div
              style={{
                width: 2,
                height: 18,
                background: 'var(--sinch-color-action-primary)',
                borderRadius: 1,
                animation: 'blink 1s step-end infinite',
              }}
            />
            <span style={{ color: 'rgba(235,235,245,0.4)', fontSize: 15 }}>
              Contact, list, or number
            </span>
          </div>
        </div>

        {/* Recently messaged */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <div
            style={{
              padding: '14px 16px 8px',
              fontSize: 15,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            Recently messaged
          </div>

          {recentContacts.map(contact => (
            <ContactRow
              key={contact.id}
              contact={contact}
              selected={selectedContact === contact.id}
              onSelect={() =>
                setSelectedContact(selectedContact === contact.id ? null : contact.id)
              }
            />
          ))}
        </div>

        {/* Composer area */}
        <div
          style={{
            flexShrink: 0,
            background: isIos ? '#1c1c1e' : '#252527',
            borderTop: '0.5px solid #38383a',
          }}
        >
          {/* From number selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px',
              borderBottom: '0.5px solid #2c2c2e',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="rgba(255,255,255,0.5)">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
                <path d="M8 5.5v3l2 1.2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span
                style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}
              >
                Shared numbers pool
              </span>
              <svg width="10" height="7" viewBox="0 0 10 7" fill="rgba(255,255,255,0.5)">
                <path d="M1 1l4 4 4-4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="2" width="16" height="12" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" />
              <circle cx="16" cy="14" r="4" fill="#2c2c2e" />
              <path d="M16 12v4M14 14h4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Message input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px' }}>
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: isIos ? '#2c2c2e' : '#333336',
                borderRadius: 22,
                padding: '10px 14px',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 15, color: '#fff' }}>{message}</span>
              <button
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
                aria-label="Send"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                  <path d="M7 1l6 12-6-3-6 3 6-12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Simulated keyboard */}
        <SimulatedKeyboard platform={platform} />
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </>
  )
}

function ContactRow({
  contact,
  selected,
  onSelect,
}: {
  contact: { id: number; name: string; label: string; initials: string | null; color: string }
  selected: boolean
  onSelect: () => void
}) {
  return (
    <div
      onClick={onSelect}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 16px',
        cursor: 'pointer',
        transition: 'background 100ms',
      }}
      onMouseOver={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)')}
      onMouseOut={e => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}
    >
      {/* Radio */}
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          border: `2px solid ${selected ? 'var(--sinch-color-action-primary)' : '#636366'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'border-color 150ms',
        }}
      >
        {selected && (
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: 'var(--sinch-color-action-primary)',
            }}
          />
        )}
      </div>

      {/* Avatar */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: contact.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: 'rgba(255,255,255,0.85)',
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        {contact.initials ?? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="rgba(255,255,255,0.45)">
            <circle cx="11" cy="7.5" r="3.5" />
            <path d="M3.5 18.5c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5H3.5z" />
          </svg>
        )}
      </div>

      {/* Contact info */}
      <div>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>{contact.name}</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 1 }}>
          {contact.label}
        </div>
      </div>
    </div>
  )
}

/* ─── Simulated keyboard ─────────────────────────────────────────────────── */

const ROWS_IOS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['⇧', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '⌫'],
]

function SimulatedKeyboard({ platform }: { platform: 'ios' | 'android' }) {
  const isIos = platform === 'ios'
  const keyBg = isIos ? '#3a3a3c' : '#3c3c3e'
  const rowBg = isIos ? '#2c2c2e' : '#282828'
  const fontSize = 16
  const keyH = 42

  return (
    <div
      style={{
        background: rowBg,
        paddingBottom: 4,
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      {/* Name bar above keyboard */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '6px 0',
          borderTop: '0.5px solid #38383a',
          gap: 1,
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Cameron</span>
        <span style={{ margin: '0 8px', color: '#636366', fontSize: 13 }}>|</span>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Taylor</span>
      </div>

      {/* Letter rows */}
      {ROWS_IOS.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: ri === 2 ? 0 : 5,
            padding: ri === 2 ? '4px 2px' : '4px 4px',
            paddingTop: 0,
          }}
        >
          {row.map((k, ki) => {
            const isSpecial = k === '⇧' || k === '⌫'
            return (
              <div
                key={ki}
                style={{
                  height: keyH,
                  minWidth: isSpecial ? 44 : ri === 1 ? 36 : 33,
                  flex: isSpecial ? '1.4 0 0' : '1 0 0',
                  maxWidth: isSpecial ? 50 : ri === 1 ? 42 : 38,
                  background: isSpecial ? '#1c1c1e' : keyBg,
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isSpecial ? 14 : fontSize,
                  color: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 1px 0 rgba(0,0,0,0.5)',
                  cursor: 'pointer',
                  margin: ri === 2 ? '0 2px' : 0,
                  fontWeight: 400,
                }}
              >
                {k}
              </div>
            )
          })}
        </div>
      ))}

      {/* Bottom row */}
      <div
        style={{
          display: 'flex',
          gap: 5,
          padding: '4px 4px',
          paddingTop: 0,
        }}
      >
        {/* 123 */}
        <div style={{ ...botKey(isIos), flex: '1.3 0 0', fontSize: 14 }}>123</div>
        {/* Emoji */}
        <div style={{ ...botKey(isIos), flex: '1 0 0', fontSize: 20 }}>🙂</div>
        {/* Space */}
        <div
          style={{
            ...botKey(isIos),
            flex: '4.5 0 0',
            fontSize: 14,
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          {isIos ? '' : 'EN'}
        </div>
        {/* Return */}
        <div style={{ ...botKey(isIos), flex: '1.8 0 0', fontSize: 14 }}>↵</div>
      </div>

      {/* iOS: globe + mic row */}
      {isIos && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '4px 16px 6px',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="rgba(255,255,255,0.5)">
            <circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />
            <path d="M11 2c-2 3-2 6 0 9M11 2c2 3 2 6 0 9M2 11h18M3 7h16M3 15h16" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          </svg>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect x="6" y="1" width="8" height="16" rx="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            <path d="M2 13a8 8 0 0016 0" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 21v6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  )
}

function botKey(isIos: boolean) {
  return {
    height: 42,
    background: isIos ? '#3a3a3c' : '#3c3c3e',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.9)',
    boxShadow: '0 1px 0 rgba(0,0,0,0.5)',
    cursor: 'pointer',
  } as const
}
