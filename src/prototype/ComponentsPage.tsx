import type { ReactNode } from 'react'
import { useState } from 'react'
import { Button } from '../components/Button'
import { Switch } from '../components/Switch'
import { Checkbox } from '../components/Checkbox'
import { Badge } from '../components/Badge'

/* ─── shared helpers ───────────────────────────────────────────────────────*/

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid #1c1c1e' }}>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#636366' }}>
        {title}
      </div>
      {sub && <div style={{ fontSize: 12, color: '#48484a', marginTop: 2 }}>{sub}</div>}
    </div>
  )
}

function Card({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div style={{ background: '#1c1c1e', borderRadius: 14, padding: '20px 20px 16px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      {label && (
        <div style={{ fontSize: 11, color: '#48484a', fontWeight: 500 }}>{label}</div>
      )}
      {children}
    </div>
  )
}

/* ─── Button variants ──────────────────────────────────────────────────────*/

function ButtonShowcase() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
      <Card label="Primary">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button variant="primary" size="l" text="Send Message" />
          <Button variant="primary" size="m" text="Send" />
          <Button variant="primary" size="s" text="Send" />
          <Button variant="primary" size="xs" text="Send" />
        </div>
      </Card>
      <Card label="Secondary">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button variant="secondary" size="l" text="Cancel" />
          <Button variant="secondary" size="m" text="Cancel" />
          <Button variant="secondary" size="s" text="Cancel" />
        </div>
      </Card>
      <Card label="Subtle / CTA">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button variant="subtle-primary" size="m" text="Learn more" />
          <Button variant="cta-primary" size="m" text="Get started" />
        </div>
      </Card>
      <Card label="Destructive / Disabled">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button variant="destructive" size="m" text="Delete" />
          <Button variant="primary" size="m" text="Disabled" disabled />
          <Button variant="secondary" size="m" text="Disabled" disabled />
        </div>
      </Card>
    </div>
  )
}

/* ─── Switch & Checkbox ───────────────────────────────────────────────────*/

function ToggleShowcase() {
  const [s1, setS1] = useState(true)
  const [s2, setS2] = useState(false)
  const [c1, setC1] = useState(true)
  const [c2, setC2] = useState(false)
  const [c3, setC3] = useState(false)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
      <Card label="Switch">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#fff' }}>Notifications</span>
            <Switch checked={s1} onCheckedChange={setS1} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#fff' }}>Dark mode</span>
            <Switch checked={s2} onCheckedChange={setS2} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#8e8e93' }}>Disabled (on)</span>
            <Switch checked={true} disabled />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: '#8e8e93' }}>Disabled (off)</span>
            <Switch checked={false} disabled />
          </div>
        </div>
      </Card>
      <Card label="Checkbox">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Checkbox checked={c1} onCheckedChange={setC1} label="Accept terms" />
          <Checkbox checked={c2} onCheckedChange={setC2} label="Subscribe to newsletter" />
          <Checkbox checked={c3} onCheckedChange={setC3} label="Enable analytics" />
          <Checkbox checked={true} disabled label="Required (locked)" />
        </div>
      </Card>
    </div>
  )
}

/* ─── Badge ────────────────────────────────────────────────────────────────*/

function BadgeShowcase() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
      <Card label="Count Badge">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Badge label="1" />
          <Badge label="3" />
          <Badge label="12" />
          <Badge label="99" />
          <Badge label="99+" />
        </div>
      </Card>
      <Card label="Status Dot">
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff3b30' }} />
            <span style={{ fontSize: 10, color: '#636366' }}>Alert</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff9500' }} />
            <span style={{ fontSize: 10, color: '#636366' }}>Opt-out</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#007aff' }} />
            <span style={{ fontSize: 10, color: '#636366' }}>Unread</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

/* ─── Avatar ───────────────────────────────────────────────────────────────*/

const AVATAR_COLORS = ['#3A3A8C', '#8C3A3A', '#3A8C5A', '#8C6E3A', '#5A3A8C', '#3A7A8C']

function Avatar({ initials, color, size = 44, status }: {
  initials: string; color: string; size?: number; status?: 'alert' | 'unread' | 'optout'
}) {
  const statusColor = status === 'alert' ? '#ff3b30' : status === 'unread' ? '#007aff' : '#ff9500'
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <div style={{
        width: size, height: size, borderRadius: '50%', background: color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.34, fontWeight: 600, color: '#fff',
      }}>
        {initials}
      </div>
      {status && (
        <div style={{
          position: 'absolute', bottom: 0, right: 0,
          width: size * 0.3, height: size * 0.3,
          borderRadius: '50%', background: statusColor,
          border: '2px solid #000',
        }} />
      )}
    </div>
  )
}

function AvatarShowcase() {
  const people = [
    { initials: 'AB', color: AVATAR_COLORS[0], status: 'alert' as const },
    { initials: 'CD', color: AVATAR_COLORS[1], status: 'unread' as const },
    { initials: 'EF', color: AVATAR_COLORS[2] },
    { initials: 'GH', color: AVATAR_COLORS[3], status: 'optout' as const },
    { initials: 'IJ', color: AVATAR_COLORS[4] },
    { initials: 'KL', color: AVATAR_COLORS[5], status: 'alert' as const },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
      <Card label="Avatar — with status badges">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {people.map((p) => (
            <Avatar key={p.initials} initials={p.initials} color={p.color} status={p.status} size={44} />
          ))}
        </div>
      </Card>
      <Card label="Avatar sizes">
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
          <Avatar initials="AB" color={AVATAR_COLORS[0]} size={28} />
          <Avatar initials="CD" color={AVATAR_COLORS[1]} size={36} />
          <Avatar initials="EF" color={AVATAR_COLORS[2]} size={44} />
          <Avatar initials="GH" color={AVATAR_COLORS[3]} size={56} />
        </div>
      </Card>
    </div>
  )
}

/* ─── Search Bar ───────────────────────────────────────────────────────────*/

function SearchBar({ placeholder = 'Search conversations' }: { placeholder?: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      background: '#2c2c2e', borderRadius: 9999, padding: '8px 14px',
    }}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="6.5" cy="6.5" r="5" stroke="#8e8e93" strokeWidth="1.4" />
        <path d="M10.5 10.5L13 13" stroke="#8e8e93" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span style={{ fontSize: 14, color: '#636366', flexGrow: 1 }}>{placeholder}</span>
    </div>
  )
}

/* ─── Navigation Bar ───────────────────────────────────────────────────────*/

function NavBar({ title, leftLabel = 'Cancel', rightLabel = 'Done', destructive = false }: {
  title: string; leftLabel?: string; rightLabel?: string; destructive?: boolean
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: '#1c1c1e', padding: '10px 16px', borderRadius: 12,
    }}>
      <button style={{
        background: 'transparent', border: 'none', cursor: 'pointer',
        fontSize: 14, fontWeight: 400,
        color: destructive ? '#ff3b30' : '#007aff',
        padding: '4px 10px', borderRadius: 9999,
      }}>
        {leftLabel}
      </button>
      <span style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>{title}</span>
      <button style={{
        background: '#007aff', border: 'none', cursor: 'pointer',
        fontSize: 14, fontWeight: 600, color: '#fff',
        padding: '5px 14px', borderRadius: 9999,
      }}>
        {rightLabel}
      </button>
    </div>
  )
}

/* ─── Segmented Picker ─────────────────────────────────────────────────────*/

function SegmentedPicker({ options, value, onChange }: {
  options: string[]; value: string; onChange: (v: string) => void
}) {
  return (
    <div style={{
      display: 'inline-flex', background: '#2c2c2e', borderRadius: 9999, padding: 3, gap: 2,
    }}>
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          style={{
            border: 'none', cursor: 'pointer',
            padding: '6px 16px', borderRadius: 9999,
            fontSize: 13, fontWeight: 500,
            background: value === o ? '#007aff' : 'transparent',
            color: value === o ? '#fff' : '#8e8e93',
            transition: 'all 0.15s',
          }}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

/* ─── List Row ─────────────────────────────────────────────────────────────*/

function ListRow({ title, subtitle, trailing, avatar, divider = true }: {
  title: string; subtitle?: string;
  trailing?: 'chevron' | 'checkmark' | ReactNode;
  avatar?: string; divider?: boolean
}) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0' }}>
        {avatar && (
          <Avatar initials={avatar} color={AVATAR_COLORS[Math.abs(avatar.charCodeAt(0)) % AVATAR_COLORS.length]} size={36} />
        )}
        <div style={{ flexGrow: 1 }}>
          <div style={{ fontSize: 15, color: '#fff' }}>{title}</div>
          {subtitle && <div style={{ fontSize: 12, color: '#8e8e93', marginTop: 1 }}>{subtitle}</div>}
        </div>
        {trailing === 'chevron' && (
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M1 1l6 5.5L1 12" stroke="#48484a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {trailing === 'checkmark' && (
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
            <path d="M1 5l4.5 4.5L13 1" stroke="#007aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {trailing && trailing !== 'chevron' && trailing !== 'checkmark' && trailing}
      </div>
      {divider && <div style={{ height: 1, background: '#2c2c2e', marginLeft: avatar ? 48 : 0 }} />}
    </div>
  )
}

/* ─── Stat Card ────────────────────────────────────────────────────────────*/

function StatCard({ stats }: { stats: { label: string; value: string | number; color?: string }[] }) {
  return (
    <div style={{
      background: '#1c1c1e', borderRadius: 14, overflow: 'hidden',
      display: 'flex',
    }}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{
            flex: 1, padding: '16px 12px', textAlign: 'center',
            borderLeft: i > 0 ? '1px solid #2c2c2e' : undefined,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: s.color ?? '#fff', lineHeight: 1 }}>{s.value}</div>
          <div style={{ fontSize: 11, color: '#8e8e93', marginTop: 4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}

/* ─── Spinner ──────────────────────────────────────────────────────────────*/

function Spinner({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ animation: 'spin 0.8s linear infinite' }}
    >
      <circle cx="12" cy="12" r="9" stroke="#2c2c2e" strokeWidth="2.5" />
      <path
        d="M12 3a9 9 0 019 9"
        stroke="#007aff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ─── Icon Badge (Settings-style) ─────────────────────────────────────────*/

function IconBadge({ bg, icon }: { bg: string; icon: ReactNode }) {
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 10,
      background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {icon}
    </div>
  )
}

/* ─── Tab Bar ──────────────────────────────────────────────────────────────*/

function TabBar({ active = 0 }: { active?: number }) {
  const tabs = [
    { label: 'Inbox', badge: 3, icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 12l9-9 9 9v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )},
    { label: 'Contacts', badge: 0, icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )},
    { label: 'Settings', badge: 0, icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )},
  ]

  return (
    <div style={{
      background: '#1c1c1e', borderTop: '1px solid #38383a',
      display: 'flex', justifyContent: 'space-around',
      padding: '8px 0 20px', borderRadius: '0 0 14px 14px',
    }}>
      {tabs.map((t, i) => (
        <div key={t.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ color: i === active ? '#007aff' : '#8e8e93' }}>{t.icon}</div>
            {t.badge > 0 && (
              <div style={{
                position: 'absolute', top: -4, right: -8,
                background: '#ff3b30', borderRadius: 9999,
                fontSize: 10, fontWeight: 600, color: '#fff',
                padding: '1px 5px', minWidth: 16, textAlign: 'center',
              }}>
                {t.badge}
              </div>
            )}
          </div>
          <span style={{ fontSize: 10, color: i === active ? '#007aff' : '#8e8e93' }}>{t.label}</span>
        </div>
      ))}
    </div>
  )
}

/* ─── Inbox Row (composite) ─────────────────────────────────────────────── */

function InboxRow({ name, preview, time, unread, color, status }: {
  name: string; preview: string; time: string; unread?: number; color: string; status?: 'alert' | 'unread'
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0' }}>
      <Avatar initials={name.slice(0, 2).toUpperCase()} color={color} size={44} status={status} />
      <div style={{ flexGrow: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
          <span style={{ fontSize: 15, fontWeight: unread ? 600 : 400, color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {name}
          </span>
          <span style={{ fontSize: 12, color: '#636366', flexShrink: 0, marginLeft: 8 }}>{time}</span>
        </div>
        <div style={{ fontSize: 13, color: '#8e8e93', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {preview}
        </div>
      </div>
      {unread != null && unread > 0 && (
        <div style={{
          background: '#007aff', borderRadius: 9999, fontSize: 11, fontWeight: 600, color: '#fff',
          padding: '1px 6px', minWidth: 18, textAlign: 'center', flexShrink: 0, marginTop: 4,
        }}>
          {unread}
        </div>
      )}
    </div>
  )
}

/* ─── Main Page ─────────────────────────────────────────────────────────── */

export function ComponentsPage() {
  const [pickerVal, setPickerVal] = useState('Open')
  const [navTitle] = useState('New Message')

  return (
    <div style={{
      minHeight: '100vh',
      background: '#050508',
      color: '#fff',
      fontFamily: "-apple-system, 'SF Pro Text', 'Roboto', sans-serif",
      padding: '48px 64px 80px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      {/* spin keyframes */}
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'linear-gradient(135deg, #30d158 0%, #007aff 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
          }}>🧱</div>
          <div>
            <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 4 }}>
              Components
            </div>
            <div style={{ fontSize: 15, color: '#8e8e93' }}>
              Nectary Design System · sinchDark · 15 components
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Button" sub="primary · secondary · subtle · cta · destructive · disabled" />
        <ButtonShowcase />
      </div>

      {/* Toggle & Checkbox */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Switch & Checkbox" />
        <ToggleShowcase />
      </div>

      {/* Badge */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Badge & Status Dot" />
        <BadgeShowcase />
      </div>

      {/* Avatar */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Avatar" sub="6-colour deterministic palette + status badge" />
        <AvatarShowcase />
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Search Bar" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          <Card label="Default">
            <SearchBar />
          </Card>
          <Card label="Active / filled">
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#2c2c2e', borderRadius: 9999, padding: '8px 14px',
            }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="6.5" cy="6.5" r="5" stroke="#007aff" strokeWidth="1.4" />
                <path d="M10.5 10.5L13 13" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 14, color: '#fff', flexGrow: 1 }}>Alice</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="7" fill="#636366" />
                <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
          </Card>
        </div>
      </div>

      {/* Navigation Bar */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Navigation Bar" sub="pill Cancel / Done / Submit buttons" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
          <Card label="Compose sheet">
            <NavBar title={navTitle} leftLabel="Cancel" rightLabel="Done" />
          </Card>
          <Card label="Destructive action">
            <NavBar title="Delete Messages" leftLabel="Cancel" rightLabel="Delete" destructive />
          </Card>
        </div>
      </div>

      {/* Segmented Picker */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Segmented Picker" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          <Card label="Open · Closed filter">
            <SegmentedPicker
              options={['Open', 'Closed', 'All']}
              value={pickerVal}
              onChange={setPickerVal}
            />
          </Card>
        </div>
      </div>

      {/* List Row + Grouped List */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="List Row & Grouped List" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
          <Card label="Disclosure rows">
            <ListRow title="Select sender number" subtitle="+1 (415) 555-0120" trailing="chevron" />
            <ListRow title="Templates" trailing="chevron" />
            <ListRow title="Schedule message" trailing="chevron" divider={false} />
          </Card>
          <Card label="Contact rows with avatar">
            <ListRow title="Alice Johnson" subtitle="alice@example.com" avatar="AJ" trailing="checkmark" />
            <ListRow title="Bob Martinez" subtitle="bob@example.com" avatar="BM" trailing="checkmark" />
            <ListRow title="Carol Smith" subtitle="carol@example.com" avatar="CS" divider={false} />
          </Card>
        </div>
      </div>

      {/* Stat Card */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Stat Card" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 12 }}>
          <div>
            <StatCard stats={[
              { label: 'Open', value: 234 },
              { label: 'Closed', value: 12 },
              { label: 'Resolved', value: '98%', color: '#30d158' },
            ]} />
          </div>
          <div>
            <StatCard stats={[
              { label: 'Sent today', value: 1240 },
              { label: 'Failed', value: 3, color: '#ff3b30' },
              { label: 'Opt-outs', value: 7, color: '#ff9500' },
              { label: 'Delivered', value: '99.8%', color: '#30d158' },
            ]} />
          </div>
        </div>
      </div>

      {/* Spinner */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Spinner" sub="circular activity indicator — 3 sizes" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
          <Card label="Small · Medium · Large">
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Spinner size={16} />
                <span style={{ fontSize: 10, color: '#636366' }}>Small</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Spinner size={24} />
                <span style={{ fontSize: 10, color: '#636366' }}>Medium</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Spinner size={36} />
                <span style={{ fontSize: 10, color: '#636366' }}>Large</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Icon Badge */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Icon Badge" sub="Settings-style rounded-square cell" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          <Card label="App-icon variants">
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <IconBadge bg="#007aff" icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12l9-9 9 9v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                } />
                <span style={{ fontSize: 10, color: '#636366' }}>Inbox</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <IconBadge bg="#30d158" icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="#fff" strokeWidth="1.6" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                } />
                <span style={{ fontSize: 10, color: '#636366' }}>Contacts</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <IconBadge bg="#636366" icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.6" />
                    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                } />
                <span style={{ fontSize: 10, color: '#636366' }}>Settings</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <IconBadge bg="#ff9500" icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22a1 1 0 001-1h-2a1 1 0 001 1zM5.07 9a7 7 0 0113.86 0l1.57 6H3.5L5.07 9z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                } />
                <span style={{ fontSize: 10, color: '#636366' }}>Alerts</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <IconBadge bg="#ff3b30" icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6h18M8 6V4h8v2M5 6l1 14h12L19 6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                } />
                <span style={{ fontSize: 10, color: '#636366' }}>Delete</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <IconBadge bg="#5856d6" icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#fff" strokeWidth="1.6" />
                    <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#fff" strokeWidth="1.6" />
                    <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#fff" strokeWidth="1.6" />
                    <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#fff" strokeWidth="1.6" />
                  </svg>
                } />
                <span style={{ fontSize: 10, color: '#636366' }}>Templates</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Tab Bar" sub="3-item bottom navigation with badge counts" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          <div style={{ background: '#1c1c1e', borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ height: 48, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 12, color: '#636366' }}>• • • screen content • • •</span>
            </div>
            <TabBar active={0} />
          </div>
          <div style={{ background: '#1c1c1e', borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ height: 48, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 12, color: '#636366' }}>• • • screen content • • •</span>
            </div>
            <TabBar active={1} />
          </div>
        </div>
      </div>

      {/* Inbox Row */}
      <div style={{ marginBottom: 48 }}>
        <SectionHeader title="Inbox Row" sub="composite: Avatar + StatusBadge + sender + preview + unread count" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 12 }}>
          <Card label="Conversation list rows">
            <div>
              <InboxRow name="Alice Johnson" preview="Hey, when can we schedule the demo?" time="2m" unread={3} color={AVATAR_COLORS[0]} status="unread" />
              <div style={{ height: 1, background: '#2c2c2e' }} />
              <InboxRow name="Bob Martinez" preview="Thanks for reaching out!" time="1h" color={AVATAR_COLORS[1]} />
              <div style={{ height: 1, background: '#2c2c2e' }} />
              <InboxRow name="Carol Smith" preview="Opt-out received" time="3h" color={AVATAR_COLORS[2]} status="alert" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
