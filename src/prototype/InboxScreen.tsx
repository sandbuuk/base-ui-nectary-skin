const conversations = [
  { id: 1, name: 'SinchVerify', preview: 'Your verification code is 17717...', date: '5 Feb', badge: 'alert', initials: null, color: '#48484a', unread: true },
  { id: 2, name: '+61 419 476 155', preview: 'Test message', date: '5 Feb', badge: 'optout', initials: null, color: '#48484a', unread: true },
  { id: 3, name: 'Ryan Martin Michael Lally', preview: 'STOP', date: '29 Jan', badge: 'optout', initials: 'R', color: '#1a6fdb', unread: true },
  { id: 4, name: 'J R', preview: 'test...', date: '11 Dec 2025', badge: 'unread', initials: 'JR', color: '#b85a00', unread: true },
  { id: 5, name: '01KACN0C7SKQ43EN...', preview: 'Hello!', date: '19 Nov 2025', badge: null, initials: null, color: '#48484a', unread: false },
  { id: 6, name: '01KACKME2C8CWZ9...', preview: 'f', date: '19 Nov 2025', badge: null, initials: null, color: '#48484a', unread: false },
  { id: 7, name: '01KACM9FR7DD1JRF...', preview: 'hm', date: '19 Nov 2025', badge: null, initials: null, color: '#48484a', unread: false },
  { id: 8, name: '+61 461 477 336', preview: 'hello', date: '18 Nov 2025', badge: 'unread', initials: null, color: '#48484a', unread: false },
  { id: 9, name: 'Irina Test', preview: 'Test', date: '17 Nov 2025', badge: 'optout', initials: 'IT', color: '#7c3aed', unread: false },
] as const

interface InboxScreenProps {
  platform: 'ios' | 'android'
  onCompose: () => void
}

export function InboxScreen({ platform, onCompose }: InboxScreenProps) {
  const isIos = platform === 'ios'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'var(--sinch-sys-color-surface-primary-default)',
        color: 'var(--sinch-sys-color-text-primary)',
        fontFamily: isIos ? '-apple-system, BlinkMacSystemFont, sans-serif' : 'Roboto, sans-serif',
      }}
    >
      {/* Top nav bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
          gap: 8,
        }}
      >
        {/* Left: filter + sort pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#2c2c2e',
            borderRadius: 22,
            padding: '7px 12px',
            gap: 8,
          }}
        >
          <FilterIcon />
          <SortIcon />
        </div>

        {/* Center: Open / Closed segmented */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#2c2c2e',
            borderRadius: 22,
            padding: 3,
            gap: 2,
            flex: 1,
            maxWidth: 180,
            justifyContent: 'center',
          }}
        >
          <SegmentTab label="Open" active={false} />
          <SegmentTab label="Closed" active={true} />
        </div>

        {/* Right: compose button */}
        <button
          onClick={onCompose}
          style={{
            width: 40,
            height: 40,
            borderRadius: isIos ? 12 : '50%',
            background: '#2c2c2e',
            border: '1px solid #3a3a3c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'background 120ms ease',
          }}
          onMouseOver={e => ((e.currentTarget as HTMLButtonElement).style.background = '#3a3a3c')}
          onMouseOut={e => ((e.currentTarget as HTMLButtonElement).style.background = '#2c2c2e')}
          aria-label="New message"
        >
          <ComposeIcon />
        </button>
      </div>

      {/* Search bar */}
      <div style={{ padding: '0 16px 12px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(118,118,128,0.24)',
            borderRadius: var_radius_full,
            padding: '9px 14px',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="rgba(235,235,245,0.5)">
            <path d="M6.5 1a5.5 5.5 0 104.2 9l3.2 3.1a.75.75 0 001-1.1L11.7 9A5.5 5.5 0 006.5 1zm0 1.5a4 4 0 110 8 4 4 0 010-8z" />
          </svg>
          <span
            style={{
              color: 'rgba(235,235,245,0.4)',
              fontSize: 15,
              fontWeight: 400,
            }}
          >
            Contact name or number
          </span>
        </div>
      </div>

      {/* Conversation list */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {conversations.map(conv => (
          <ConversationRow key={conv.id} conv={conv} platform={platform} />
        ))}

        {/* Footer hint */}
        <div
          style={{
            padding: '12px 16px',
            color: 'rgba(255,255,255,0.25)',
            fontSize: 13,
            lineHeight: 1.4,
          }}
        >
          No more conversations will be added on this list, please go to{' '}
          <span style={{ color: 'var(--sinch-color-action-primary)' }}>Settings</span> to configure.
        </div>
      </div>

      {/* Bottom tab bar */}
      <TabBar platform={platform} />
    </div>
  )
}

const var_radius_full = 'var(--sinch-radius-full)'

function SegmentTab({ label, active }: { label: string; active: boolean }) {
  return (
    <div
      style={{
        padding: '5px 14px',
        borderRadius: 18,
        background: active ? '#636366' : 'transparent',
        color: active ? '#fff' : 'rgba(255,255,255,0.6)',
        fontSize: 14,
        fontWeight: active ? 600 : 400,
        cursor: 'pointer',
        transition: 'all 150ms ease',
        userSelect: 'none',
      }}
    >
      {label}
    </div>
  )
}

function ConversationRow({ conv }: { conv: typeof conversations[number]; platform: 'ios' | 'android' }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
        gap: 12,
        borderBottom: '0.5px solid #1c1c1e',
        cursor: 'pointer',
        transition: 'background 100ms ease',
      }}
      onMouseOver={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)')}
      onMouseOut={e => ((e.currentTarget as HTMLDivElement).style.background = 'transparent')}
    >
      {/* Avatar with badge */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: conv.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.85)',
            fontSize: conv.initials && conv.initials.length > 1 ? 14 : 17,
            fontWeight: 600,
          }}
        >
          {conv.initials ? conv.initials : <PersonIcon />}
        </div>

        {/* Badge overlay */}
        {conv.badge === 'alert' && (
          <div style={{ ...badgeBase, background: 'var(--sinch-sys-color-status-error)' }}>
            <span style={{ color: '#fff', fontSize: 9, fontWeight: 700, lineHeight: 1 }}>!</span>
          </div>
        )}
        {conv.badge === 'optout' && (
          <div style={{ ...badgeBase, background: 'var(--sinch-sys-color-status-warning)' }}>
            <span style={{ color: '#fff', fontSize: 10, fontWeight: 700, lineHeight: 1 }}>×</span>
          </div>
        )}
        {conv.badge === 'unread' && (
          <div
            style={{
              ...badgeBase,
              background: 'var(--sinch-color-action-primary)',
              width: 14,
              height: 14,
              bottom: -1,
              right: -1,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 8,
            marginBottom: 2,
          }}
        >
          <span
            style={{
              fontSize: 15,
              fontWeight: conv.unread ? 700 : 600,
              color: 'var(--sinch-sys-color-text-primary)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {conv.name}
          </span>
          <span
            style={{
              fontSize: 12,
              color: 'var(--sinch-sys-color-text-secondary)',
              flexShrink: 0,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {conv.date}
          </span>
        </div>
        <span
          style={{
            fontSize: 14,
            color: 'var(--sinch-sys-color-text-secondary)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            display: 'block',
          }}
        >
          {conv.preview}
        </span>
      </div>

      {/* Assignee avatar */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: '#3a3a3c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <PersonIcon size={14} />
      </div>
    </div>
  )
}

const badgeBase = {
  position: 'absolute' as const,
  bottom: -2,
  right: -2,
  width: 18,
  height: 18,
  borderRadius: '50%',
  border: '2px solid #000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

function TabBar({ platform }: { platform: 'ios' | 'android' }) {
  const isIos = platform === 'ios'
  return (
    <div
      style={{
        padding: isIos ? '0 8px 8px' : '0 8px 4px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          background: isIos ? 'rgba(28,28,30,0.92)' : 'rgba(20,20,22,0.95)',
          borderRadius: isIos ? 28 : 16,
          padding: isIos ? '10px 0 12px' : '8px 0 10px',
          backdropFilter: 'blur(20px)',
        }}
      >
        <TabItem icon="inbox" label="Inbox" active platform={platform} />
        <TabItem icon="contacts" label="Contacts" platform={platform} />
        <TabItem icon="settings" label="Settings" platform={platform} />
      </div>
    </div>
  )
}

function TabItem({
  icon,
  label,
  active,
}: {
  icon: string
  label: string
  active?: boolean
  platform: 'ios' | 'android'
}) {
  const color = active ? 'var(--sinch-color-action-primary)' : 'var(--sinch-sys-color-icon-secondary)'
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        flex: 1,
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: active ? 48 : 32,
          height: 32,
          borderRadius: 16,
          background: active ? 'rgba(0,122,255,0.15)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 200ms ease',
        }}
      >
        {icon === 'inbox' && <InboxIcon color={color} />}
        {icon === 'contacts' && <ContactsIcon color={color} />}
        {icon === 'settings' && <SettingsIcon color={color} />}
      </div>
      <span style={{ fontSize: 11, fontWeight: active ? 600 : 400, color }}>{label}</span>
    </div>
  )
}

/* ─── Icons ─────────────────────────────────────────────────────────────── */

function PersonIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="rgba(255,255,255,0.45)">
      <circle cx="11" cy="7.5" r="3.5" />
      <path d="M3.5 18.5c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5H3.5z" />
    </svg>
  )
}

function FilterIcon() {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
      <circle cx="11" cy="10" r="9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <path d="M7 7.5h8M8.5 10h5M10 12.5h2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SortIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
      <path d="M3 4h14M3 9h10M3 14h6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <text x="14" y="10" fontSize="7" fontWeight="700" fill="rgba(255,255,255,0.5)">1</text>
    </svg>
  )
}

function ComposeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M14.5 2.5a2.1 2.1 0 013 3L6 17H3v-3L14.5 2.5z"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 17h3.5" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M3 15v2"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function InboxIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
      <rect x="1.5" y="1.5" width="19" height="17" rx="3" stroke={color} strokeWidth="1.5" />
      <path d="M1.5 12h5l2 3h5l2-3H19.5" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function ContactsIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
      <circle cx="8" cy="7" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M1.5 18c0-3.6 2.9-6.5 6.5-6.5S14.5 14.4 14.5 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="7" r="2.5" stroke={color} strokeWidth="1.3" />
      <path d="M19 18c0-2.8-1.5-5.2-3.8-6.3" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function SettingsIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="2.5" stroke={color} strokeWidth="1.5" />
      <path
        d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M15.9 4.1l-1.4 1.4M5.5 14.5l-1.4 1.4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
