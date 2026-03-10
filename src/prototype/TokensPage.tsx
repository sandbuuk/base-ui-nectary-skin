import type { CSSProperties } from 'react'

const S: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#050508',
    color: '#fff',
    fontFamily: "-apple-system, 'SF Pro Text', 'Roboto', sans-serif",
    padding: '48px 64px 80px',
    maxWidth: 1200,
    margin: '0 auto',
  },
  header: { marginBottom: 56 },
  pageTitle: { fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 6 },
  pageSubtitle: { fontSize: 15, color: '#8e8e93', fontWeight: 400 },
  section: { marginBottom: 56 },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#636366',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: '1px solid #1c1c1e',
  },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={S.section}>
      <div style={S.sectionLabel}>{title}</div>
      {children}
    </div>
  )
}

/* ─── COLOR ─────────────────────────────────────────────────────────────── */

type ColorGroup = { group: string; swatches: { name: string; cssVar: string; hex: string }[] }

const colorGroups: ColorGroup[] = [
  {
    group: 'Action',
    swatches: [
      { name: 'Action Primary', cssVar: '--sinch-color-action-primary', hex: '#007AFF' },
      { name: 'Action Primary Hover', cssVar: '--sinch-color-action-primary-hover', hex: '#0066DD' },
      { name: 'Action Primary Active', cssVar: '--sinch-color-action-primary-active', hex: '#0055BB' },
      { name: 'Action Destructive', cssVar: '--sinch-color-action-destructive', hex: '#FF3B30' },
      { name: 'On Action Primary', cssVar: '--sinch-color-on-action-primary', hex: '#FFFFFF' },
    ],
  },
  {
    group: 'Surfaces',
    swatches: [
      { name: 'Surface Primary', cssVar: '--sinch-sys-color-surface-primary-default', hex: '#000000' },
      { name: 'Surface Secondary', cssVar: '--sinch-sys-color-surface-secondary', hex: '#1C1C1E' },
      { name: 'Surface Tertiary', cssVar: '—', hex: '#2C2C2E' },
      { name: 'Surface Overlay', cssVar: '--sinch-sys-color-surface-overlay', hex: 'rgba(0,0,0,0.6)' },
    ],
  },
  {
    group: 'Text',
    swatches: [
      { name: 'Text Primary', cssVar: '--sinch-sys-color-text-primary', hex: '#FFFFFF' },
      { name: 'Text Secondary', cssVar: '--sinch-sys-color-text-secondary', hex: '#8E8E93' },
      { name: 'Text Disabled', cssVar: '--sinch-sys-color-text-disabled', hex: '#636366' },
    ],
  },
  {
    group: 'Status',
    swatches: [
      { name: 'Success', cssVar: '--sinch-sys-color-status-success', hex: '#30D158' },
      { name: 'Warning', cssVar: '--sinch-sys-color-status-warning', hex: '#FF9500' },
      { name: 'Error', cssVar: '--sinch-sys-color-status-error', hex: '#FF3B30' },
      { name: 'Info', cssVar: '--sinch-sys-color-status-info', hex: '#007AFF' },
    ],
  },
  {
    group: 'Borders',
    swatches: [
      { name: 'Border Default', cssVar: '--sinch-sys-color-border-default', hex: '#38383A' },
      { name: 'Border Focus', cssVar: '--sinch-sys-color-border-focus', hex: '#007AFF' },
      { name: 'Border Invalid', cssVar: '--sinch-sys-color-border-invalid', hex: '#FF3B30' },
    ],
  },
]

function ColorPalette() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {colorGroups.map((g) => (
        <div key={g.group}>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#8e8e93', marginBottom: 12 }}>
            {g.group}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {g.swatches.map((s) => (
              <div key={s.name} style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 140 }}>
                <div
                  style={{
                    width: 140,
                    height: 72,
                    borderRadius: 8,
                    background: s.hex,
                    border: s.hex === '#FFFFFF' || s.hex === '#000000'
                      ? '1px solid #38383a'
                      : undefined,
                  }}
                />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: '#fff' }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: '#636366', fontFamily: 'monospace', marginTop: 2 }}>
                    {s.hex}
                  </div>
                  <div style={{ fontSize: 10, color: '#444', fontFamily: 'monospace', marginTop: 1, wordBreak: 'break-all' }}>
                    {s.cssVar}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── SPACING ────────────────────────────────────────────────────────────── */

const spacingTokens = [
  { name: 'spacing-0', value: 0, label: '0px' },
  { name: 'spacing-1', value: 4, label: '4px' },
  { name: 'spacing-2', value: 8, label: '8px' },
  { name: 'spacing-3', value: 12, label: '12px' },
  { name: 'spacing-4', value: 16, label: '16px' },
  { name: 'spacing-5', value: 20, label: '20px' },
  { name: 'spacing-6', value: 24, label: '24px' },
  { name: 'spacing-7', value: 32, label: '32px' },
  { name: 'spacing-8', value: 48, label: '48px' },
]

function SpacingScale() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {spacingTokens.map((t) => (
        <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 80,
              fontSize: 12,
              fontFamily: 'monospace',
              color: '#8e8e93',
              flexShrink: 0,
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              width: Math.max(t.value * 2, 2),
              height: 20,
              background: '#007aff',
              borderRadius: 3,
              flexShrink: 0,
              opacity: t.value === 0 ? 0.3 : 1,
              border: t.value === 0 ? '1px dashed #38383a' : undefined,
            }}
          />
          <div style={{ fontSize: 12, color: '#636366' }}>{t.label}</div>
        </div>
      ))}
    </div>
  )
}

/* ─── TYPOGRAPHY ─────────────────────────────────────────────────────────── */

const typeSamples = [
  { name: 'heading-xl', style: { font: "700 36px/44px -apple-system,'Roboto',sans-serif" }, label: 'Heading XL · 36/44 · Bold' },
  { name: 'heading-l',  style: { font: "700 28px/36px -apple-system,'Roboto',sans-serif" }, label: 'Heading L · 28/36 · Bold' },
  { name: 'heading-m',  style: { font: "600 22px/30px -apple-system,'Roboto',sans-serif" }, label: 'Heading M · 22/30 · Semibold' },
  { name: 'heading-s',  style: { font: "600 18px/26px -apple-system,'Roboto',sans-serif" }, label: 'Heading S · 18/26 · Semibold' },
  { name: 'body-l',     style: { font: "400 16px/24px -apple-system,'Roboto',sans-serif" }, label: 'Body L · 16/24 · Regular' },
  { name: 'body-m',     style: { font: "400 14px/22px -apple-system,'Roboto',sans-serif" }, label: 'Body M · 14/22 · Regular' },
  { name: 'body-s',     style: { font: "400 12px/18px -apple-system,'Roboto',sans-serif" }, label: 'Body S · 12/18 · Regular' },
  { name: 'label-l',    style: { font: "500 16px/24px -apple-system,'Roboto',sans-serif" }, label: 'Label L · 16/24 · Medium' },
  { name: 'label-m',    style: { font: "500 14px/20px -apple-system,'Roboto',sans-serif" }, label: 'Label M · 14/20 · Medium' },
  { name: 'label-s',    style: { font: "500 12px/16px -apple-system,'Roboto',sans-serif" }, label: 'Label S · 12/16 · Medium' },
  { name: 'label-xs',   style: { font: "500 10px/14px -apple-system,'Roboto',sans-serif" }, label: 'Label XS · 10/14 · Medium' },
]

function Typography() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      {typeSamples.map((t, i) => (
        <div
          key={t.name}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 24,
            padding: '12px 0',
            borderBottom: i < typeSamples.length - 1 ? '1px solid #1c1c1e' : undefined,
          }}
        >
          <div style={{ width: 100, fontSize: 10, color: '#636366', fontFamily: 'monospace', flexShrink: 0 }}>
            {t.name}
          </div>
          <div style={{ ...t.style, color: '#fff', flexGrow: 1 }}>
            Sinch Conversations
          </div>
          <div style={{ fontSize: 11, color: '#636366', flexShrink: 0, textAlign: 'right' }}>
            {t.label}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── RADIUS ─────────────────────────────────────────────────────────────── */

const radiusTokens = [
  { name: 'radius-xs', value: 2, label: '2px' },
  { name: 'radius-s',  value: 4, label: '4px' },
  { name: 'radius-m',  value: 8, label: '8px' },
  { name: 'radius-l',  value: 12, label: '12px' },
  { name: 'radius-xl', value: 16, label: '16px' },
  { name: 'radius-full', value: 9999, label: 'Full' },
]

function RadiusScale() {
  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {radiusTokens.map((t) => (
        <div key={t.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: '#1c1c1e',
              border: '1px solid #38383a',
              borderRadius: Math.min(t.value, 36),
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#8e8e93' }}>{t.name}</div>
            <div style={{ fontSize: 11, color: '#636366' }}>{t.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── ELEVATION ──────────────────────────────────────────────────────────── */

const elevationLayers = [
  { name: 'Surface Primary', bg: '#000000', border: '#38383a', token: 'surface-primary-default' },
  { name: 'Surface Secondary', bg: '#1C1C1E', border: '#38383a', token: 'surface-secondary' },
  { name: 'Surface Tertiary', bg: '#2C2C2E', border: '#48484a', token: '—' },
  { name: 'Surface Quaternary', bg: '#3A3A3C', border: '#545456', token: '—' },
]

function Elevation() {
  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {elevationLayers.map((l, i) => (
        <div key={l.name} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div
            style={{
              width: 180,
              height: 100,
              background: l.bg,
              border: `1px solid ${l.border}`,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 11, color: '#636366' }}>Layer {i}</span>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#fff' }}>{l.name}</div>
            <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#636366' }}>{l.bg}</div>
            <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#444', marginTop: 2 }}>{l.token}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── ICON SIZES ─────────────────────────────────────────────────────────── */

const iconSizes = [
  { name: 'icon-xs', value: 16 },
  { name: 'icon-s',  value: 20 },
  { name: 'icon-m',  value: 24 },
  { name: 'icon-l',  value: 32 },
  { name: 'icon-xl', value: 40 },
]

function IconSizes() {
  return (
    <div style={{ display: 'flex', gap: 28, alignItems: 'flex-end', flexWrap: 'wrap' }}>
      {iconSizes.map((t) => (
        <div key={t.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <svg width={t.value} height={t.value} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#8e8e93" strokeWidth="1.5"/>
            <path d="M12 8v4l2.5 2.5" stroke="#8e8e93" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 10, fontFamily: 'monospace', color: '#636366' }}>{t.name}</div>
            <div style={{ fontSize: 10, color: '#444' }}>{t.value}px</div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */

export function TokensPage() {
  return (
    <div style={S.page}>
      <div style={S.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #007aff 0%, #5856d6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
            }}
          >
            🎨
          </div>
          <div>
            <div style={S.pageTitle}>Tokens</div>
            <div style={S.pageSubtitle}>
              Nectary Design System · sinchDark · Color · Spacing · Typography · Radius · Elevation
            </div>
          </div>
        </div>
      </div>

      <Section title="Color Palette">
        <ColorPalette />
      </Section>

      <Section title="Spacing Scale — 4pt Grid">
        <SpacingScale />
      </Section>

      <Section title="Typography">
        <Typography />
      </Section>

      <Section title="Border Radius">
        <RadiusScale />
      </Section>

      <Section title="Elevation & Surfaces">
        <Elevation />
      </Section>

      <Section title="Icon Sizes">
        <IconSizes />
      </Section>
    </div>
  )
}
