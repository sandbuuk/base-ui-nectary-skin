import { useState, useEffect, useRef } from 'react'
import './gallery.css'

// Library components
import { Button } from '../components/Button'
import { ButtonGroup } from '../components/ButtonGroup'
import { TextField } from '../components/TextField'
import { Switch } from '../components/Switch'
import { Badge } from '../components/Badge'
import { Checkbox } from '../components/Checkbox'

// Base UI primitives
import { Tabs } from '@base-ui-components/react/tabs'
import { Select } from '@base-ui-components/react/select'
import { Accordion } from '@base-ui-components/react/accordion'
import { ToggleGroup } from '@base-ui-components/react/toggle-group'
import { Slider } from '@base-ui-components/react/slider'
import { Progress } from '@base-ui-components/react/progress'
import { Meter } from '@base-ui-components/react/meter'
import { Dialog } from '@base-ui-components/react/dialog'
import { Popover } from '@base-ui-components/react/popover'
import { Tooltip } from '@base-ui-components/react/tooltip'
import { RadioGroup } from '@base-ui-components/react/radio-group'
import { NumberField } from '@base-ui-components/react/number-field'
import { Separator } from '@base-ui-components/react/separator'

// ─── Nav sections ───────────────────────────────────────────────────────────

const NAV = [
  { group: 'Foundation', items: [
    { id: 'tokens-color', label: 'Color tokens' },
    { id: 'tokens-spacing', label: 'Spacing tokens' },
    { id: 'tokens-type', label: 'Typography' },
    { id: 'tokens-radius', label: 'Border radius' },
  ]},
  { group: 'Library Components', items: [
    { id: 'button', label: 'Button' },
    { id: 'button-group', label: 'Button Group' },
    { id: 'text-field', label: 'Text Field' },
    { id: 'switch', label: 'Switch' },
    { id: 'checkbox', label: 'Checkbox' },
    { id: 'badge', label: 'Badge' },
  ]},
  { group: 'Base UI Components', items: [
    { id: 'tabs', label: 'Tabs' },
    { id: 'select', label: 'Select' },
    { id: 'radio-group', label: 'Radio Group' },
    { id: 'number-field', label: 'Number Field' },
    { id: 'slider', label: 'Slider' },
    { id: 'progress', label: 'Progress' },
    { id: 'meter', label: 'Meter' },
    { id: 'accordion', label: 'Accordion' },
    { id: 'toggle-group', label: 'Toggle Group' },
    { id: 'separator', label: 'Separator' },
    { id: 'dialog', label: 'Dialog' },
    { id: 'popover', label: 'Popover' },
    { id: 'tooltip', label: 'Tooltip' },
  ]},
]

export function Gallery() {
  const [activeId, setActiveId] = useState('tokens-color')
  const mainRef = useRef<HTMLDivElement>(null)

  // Intersection observer to track active section
  useEffect(() => {
    const targets = document.querySelectorAll('.g-section[id]')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    targets.forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="g-root" ref={mainRef}>
      {/* Sidebar */}
      <nav className="g-sidebar">
        {NAV.map(group => (
          <div key={group.group} className="g-sidebar-group">
            <div className="g-sidebar-label">{group.group}</div>
            {group.items.map(item => (
              <button
                key={item.id}
                className={`g-sidebar-link${activeId === item.id ? ' active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Main */}
      <main className="g-content">
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ font: 'var(--sinch-font-heading-l)', color: '#fff', marginBottom: 8 }}>
            Nectary Design System
          </h1>
          <p style={{ font: 'var(--sinch-font-body-l)', color: 'rgba(255,255,255,0.45)', maxWidth: 520 }}>
            All components from Base UI styled with Nectary / Sinch design tokens.
            Every value references a <code style={{ background: 'rgba(255,255,255,0.07)', padding: '1px 5px', borderRadius: 4, fontFamily: 'monospace', fontSize: 13 }}>--sinch-*</code> CSS custom property.
          </p>
        </div>

        <ColorTokensSection />
        <SpacingTokensSection />
        <TypographySection />
        <RadiusSection />

        <ButtonSection />
        <ButtonGroupSection />
        <TextFieldSection />
        <SwitchSection />
        <CheckboxSection />
        <BadgeSection />

        <TabsSection />
        <SelectSection />
        <RadioGroupSection />
        <NumberFieldSection />
        <SliderSection />
        <ProgressSection />
        <MeterSection />
        <AccordionSection />
        <ToggleGroupSection />
        <SeparatorSection />
        <DialogSection />
        <PopoverSection />
        <TooltipSection />
      </main>
    </div>
  )
}

// ─── Helper components ───────────────────────────────────────────────────────

function Section({ id, title, desc, children }: { id: string; title: string; desc: string; children: React.ReactNode }) {
  return (
    <section id={id} className="g-section">
      <div className="g-section-header">
        <h2 className="g-section-title">{title}</h2>
        <p className="g-section-desc">{desc}</p>
      </div>
      {children}
    </section>
  )
}

function Demo({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="g-demo">
      {label && <div className="g-demo-label">{label}</div>}
      {children}
    </div>
  )
}

// ─── Foundation ──────────────────────────────────────────────────────────────

const COLOR_TOKENS = [
  { name: 'action-primary', var: '--sinch-color-action-primary', label: 'Action Primary' },
  { name: 'action-destructive', var: '--sinch-color-action-destructive', label: 'Destructive' },
  { name: 'on-action-primary', var: '--sinch-color-on-action-primary', label: 'On Primary' },
  { name: 'surface-default', var: '--sinch-sys-color-surface-primary-default', label: 'Surface' },
  { name: 'surface-secondary', var: '--sinch-sys-color-surface-secondary', label: 'Surface 2' },
  { name: 'text-primary', var: '--sinch-sys-color-text-primary', label: 'Text Primary' },
  { name: 'text-secondary', var: '--sinch-sys-color-text-secondary', label: 'Text Secondary' },
  { name: 'text-disabled', var: '--sinch-sys-color-text-disabled', label: 'Text Disabled' },
  { name: 'border-default', var: '--sinch-sys-color-border-default', label: 'Border' },
  { name: 'border-focus', var: '--sinch-sys-color-border-focus', label: 'Focus' },
  { name: 'border-invalid', var: '--sinch-sys-color-border-invalid', label: 'Invalid' },
  { name: 'status-success', var: '--sinch-sys-color-status-success', label: 'Success' },
  { name: 'status-warning', var: '--sinch-sys-color-status-warning', label: 'Warning' },
  { name: 'status-error', var: '--sinch-sys-color-status-error', label: 'Error' },
  { name: 'status-info', var: '--sinch-sys-color-status-info', label: 'Info' },
]

function ColorTokensSection() {
  return (
    <Section id="tokens-color" title="Color tokens" desc="Semantic colour tokens mapped from --sinch-color-* and --sinch-sys-color-*.">
      <Demo>
        <div className="g-swatch-grid">
          {COLOR_TOKENS.map(t => (
            <div key={t.name} className="g-swatch">
              <div className="g-swatch-color" style={{ background: `var(${t.var})`, border: t.name.includes('surface') || t.name === 'on-action-primary' ? '1px solid rgba(255,255,255,0.08)' : 'none' }} />
              <div className="g-swatch-info">
                <div className="g-swatch-name">{t.label}</div>
                <div className="g-swatch-value">{t.var}</div>
              </div>
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  )
}

function SpacingTokensSection() {
  const steps = [0,1,2,3,4,5,6,7,8]
  const vals  = [0,4,8,12,16,20,24,32,48]
  return (
    <Section id="tokens-spacing" title="Spacing tokens" desc="4pt grid via --sinch-spacing-{0..8}.">
      <Demo>
        <div className="g-spacing-row">
          {steps.map((s, i) => (
            <div key={s} className="g-spacing-item">
              <div className="g-spacing-bar" style={{ width: vals[i] || 2, minWidth: vals[i] === 0 ? 2 : undefined }} />
              <span className="g-spacing-meta">--sinch-spacing-{s} = {vals[i]}px</span>
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  )
}

const TYPE_SAMPLES = [
  { var: '--sinch-font-heading-xl', label: 'Heading XL', text: 'Aa Bb Cc' },
  { var: '--sinch-font-heading-l',  label: 'Heading L',  text: 'Aa Bb Cc' },
  { var: '--sinch-font-heading-m',  label: 'Heading M',  text: 'Aa Bb Cc' },
  { var: '--sinch-font-heading-s',  label: 'Heading S',  text: 'Aa Bb Cc' },
  { var: '--sinch-font-body-l',     label: 'Body L',     text: 'The quick brown fox jumps over the lazy dog' },
  { var: '--sinch-font-body-m',     label: 'Body M',     text: 'The quick brown fox jumps over the lazy dog' },
  { var: '--sinch-font-body-s',     label: 'Body S',     text: 'The quick brown fox jumps over the lazy dog' },
  { var: '--sinch-font-label-l',    label: 'Label L',    text: 'Button text · Status label' },
  { var: '--sinch-font-label-m',    label: 'Label M',    text: 'Button text · Status label' },
  { var: '--sinch-font-label-s',    label: 'Label S',    text: 'Caption · Helper text' },
  { var: '--sinch-font-label-xs',   label: 'Label XS',   text: 'Badge · Micro label' },
]

function TypographySection() {
  return (
    <Section id="tokens-type" title="Typography" desc="Font scale from --sinch-font-{role}-{size} shorthand properties.">
      <Demo>
        {TYPE_SAMPLES.map(t => (
          <div key={t.var} className="g-type-sample">
            <div className="g-type-meta">{t.label} — {t.var}</div>
            <div style={{ font: `var(${t.var})`, color: 'var(--sinch-sys-color-text-primary)' }}>{t.text}</div>
          </div>
        ))}
      </Demo>
    </Section>
  )
}

function RadiusSection() {
  const radii = [
    { label: '--sinch-radius-xs', val: 'var(--sinch-radius-xs)' },
    { label: '--sinch-radius-s',  val: 'var(--sinch-radius-s)' },
    { label: '--sinch-radius-m',  val: 'var(--sinch-radius-m)' },
    { label: '--sinch-radius-l',  val: 'var(--sinch-radius-l)' },
    { label: '--sinch-radius-xl', val: 'var(--sinch-radius-xl)' },
    { label: '--sinch-radius-full', val: 'var(--sinch-radius-full)' },
  ]
  return (
    <Section id="tokens-radius" title="Border radius" desc="Corner radius scale from --sinch-radius-{xs..full}.">
      <Demo>
        <div className="g-radius-grid">
          {radii.map(r => (
            <div key={r.label}>
              <div className="g-radius-box" style={{ borderRadius: r.val }} />
              <div className="g-radius-label">{r.label}</div>
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  )
}

// ─── Library components ───────────────────────────────────────────────────────

function ButtonSection() {
  return (
    <Section id="button" title="Button" desc="7 variants × 4 sizes built on Base UI's Button primitive.">
      <Demo label="Variants">
        <div className="g-row">
          <Button variant="primary" text="Primary" />
          <Button variant="secondary" text="Secondary" />
          <Button variant="subtle-primary" text="Subtle Primary" />
          <Button variant="subtle-secondary" text="Subtle Secondary" />
          <Button variant="cta-primary" text="CTA Primary" />
          <Button variant="cta-secondary" text="CTA Secondary" />
          <Button variant="destructive" text="Destructive" />
        </div>
      </Demo>
      <Demo label="Sizes">
        <div className="g-row" style={{ alignItems: 'flex-end' }}>
          <Button size="xs" text="XSmall" />
          <Button size="s" text="Small" />
          <Button size="m" text="Medium" />
          <Button size="l" text="Large" />
        </div>
      </Demo>
      <Demo label="States">
        <div className="g-row">
          <Button variant="primary" text="Default" />
          <Button variant="primary" text="Toggled" toggled />
          <Button variant="primary" text="Disabled" disabled />
          <Button variant="secondary" text="Disabled" disabled />
          <Button variant="destructive" text="Disabled" disabled />
        </div>
      </Demo>
    </Section>
  )
}

function ButtonGroupSection() {
  return (
    <Section id="button-group" title="Button Group" desc="Joins buttons into a connected group, collapsing inner border-radii.">
      <Demo label="Horizontal (default)">
        <ButtonGroup>
          <Button variant="secondary" text="Day" />
          <Button variant="secondary" text="Week" />
          <Button variant="secondary" text="Month" />
        </ButtonGroup>
      </Demo>
      <Demo label="Vertical">
        <ButtonGroup orientation="vertical">
          <Button variant="secondary" text="Top" />
          <Button variant="secondary" text="Middle" />
          <Button variant="secondary" text="Bottom" />
        </ButtonGroup>
      </Demo>
    </Section>
  )
}

function TextFieldSection() {
  const [val, setVal] = useState('')
  return (
    <Section id="text-field" title="Text Field" desc="Built on Base UI's Field.Root + Field.Control — handles label, helper text, invalid state.">
      <Demo label="Sizes">
        <div className="g-col" style={{ maxWidth: 360 }}>
          <TextField size="s" label="Small" placeholder="Small size" value={val} onChange={e => setVal(e.target.value)} />
          <TextField size="m" label="Medium (default)" placeholder="Medium size" value={val} onChange={e => setVal(e.target.value)} />
          <TextField size="l" label="Large" placeholder="Large size" value={val} onChange={e => setVal(e.target.value)} />
        </div>
      </Demo>
      <Demo label="States">
        <div className="g-col" style={{ maxWidth: 360 }}>
          <TextField label="Default" placeholder="Enter value…" />
          <TextField label="With value" defaultValue="Cameron Taylor" />
          <TextField label="With helper text" placeholder="Enter email" helperText="We'll never share your email." />
          <TextField label="Invalid" defaultValue="bad-email" status="invalid" helperText="Please enter a valid email address." />
          <TextField label="Disabled" defaultValue="Disabled field" disabled />
          <TextField label="Password" type="password" defaultValue="secret" />
        </div>
      </Demo>
    </Section>
  )
}

function SwitchSection() {
  const [sm, setSm] = useState(false)
  const [md, setMd] = useState(true)
  return (
    <Section id="switch" title="Switch" desc="Base UI Switch.Root / Thumb — 2 sizes, controlled and disabled states.">
      <Demo label="Sizes">
        <div className="g-row">
          <Switch size="s" checked={sm} onCheckedChange={setSm} aria-label="Small switch" />
          <span style={{ font: 'var(--sinch-font-body-s)', color: 'var(--sinch-sys-color-text-secondary)' }}>S — {sm ? 'On' : 'Off'}</span>
          <div style={{ width: 24 }} />
          <Switch size="m" checked={md} onCheckedChange={setMd} aria-label="Medium switch" />
          <span style={{ font: 'var(--sinch-font-body-s)', color: 'var(--sinch-sys-color-text-secondary)' }}>M — {md ? 'On' : 'Off'}</span>
        </div>
      </Demo>
      <Demo label="States">
        <div className="g-row">
          <Switch aria-label="Off" />
          <Switch defaultChecked aria-label="On" />
          <Switch disabled aria-label="Disabled off" />
          <Switch defaultChecked disabled aria-label="Disabled on" />
        </div>
      </Demo>
    </Section>
  )
}

function CheckboxSection() {
  const [c1, setC1] = useState(false)
  const [c2, setC2] = useState(true)
  return (
    <Section id="checkbox" title="Checkbox" desc="Base UI Checkbox.Root — checked, indeterminate, and disabled states.">
      <Demo label="Interactive">
        <div className="g-col">
          <Checkbox label="Accept terms and conditions" checked={c1} onCheckedChange={setC1} />
          <Checkbox label="Subscribe to newsletter" checked={c2} onCheckedChange={setC2} />
          <Checkbox label="Indeterminate state" indeterminate />
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" defaultChecked disabled />
        </div>
      </Demo>
      <Demo label="Sizes">
        <div className="g-row">
          <Checkbox size="s" label="Small (s)" defaultChecked />
          <Checkbox size="m" label="Medium (m)" defaultChecked />
        </div>
      </Demo>
    </Section>
  )
}

function BadgeSection() {
  return (
    <Section id="badge" title="Badge" desc="Semantic status indicators using --sinch-sys-color-status-* tokens.">
      <Demo label="Variants">
        <div className="g-row">
          <Badge variant="neutral" label="Neutral" />
          <Badge variant="primary" label="Primary" />
          <Badge variant="success" label="Success" />
          <Badge variant="warning" label="Warning" />
          <Badge variant="error" label="Error" />
          <Badge variant="info" label="Info" />
        </div>
      </Demo>
      <Demo label="Sizes">
        <div className="g-row" style={{ alignItems: 'center' }}>
          <Badge size="s" variant="primary" label="Small" />
          <Badge size="m" variant="primary" label="Medium" />
        </div>
      </Demo>
      <Demo label="Dot mode">
        <div className="g-row" style={{ alignItems: 'center' }}>
          <Badge dot size="s" variant="success" />
          <Badge dot size="s" variant="error" />
          <Badge dot size="s" variant="warning" />
          <Badge dot size="m" variant="info" />
          <span style={{ font: 'var(--sinch-font-body-s)', color: 'var(--sinch-sys-color-text-secondary)' }}>Unread indicator</span>
        </div>
      </Demo>
    </Section>
  )
}

// ─── Base UI Components ───────────────────────────────────────────────────────

function TabsSection() {
  return (
    <Section id="tabs" title="Tabs" desc="Base UI Tabs.Root — keyboard navigation and ARIA tabs role included.">
      <Demo>
        <Tabs.Root defaultValue="inbox">
          <Tabs.List className="g-tabs-list">
            <Tabs.Tab value="inbox" className="g-tab">Inbox</Tabs.Tab>
            <Tabs.Tab value="sent" className="g-tab">Sent</Tabs.Tab>
            <Tabs.Tab value="drafts" className="g-tab">Drafts</Tabs.Tab>
            <Tabs.Tab value="archived" className="g-tab" disabled>Archived</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="inbox" className="g-tab-panel">Showing 24 open conversations in your inbox.</Tabs.Panel>
          <Tabs.Panel value="sent" className="g-tab-panel">12 messages sent this week.</Tabs.Panel>
          <Tabs.Panel value="drafts" className="g-tab-panel">3 drafts waiting to be sent.</Tabs.Panel>
          <Tabs.Panel value="archived" className="g-tab-panel">Archived messages.</Tabs.Panel>
        </Tabs.Root>
      </Demo>
    </Section>
  )
}

function SelectSection() {
  const [val, setVal] = useState('')
  const options = ['SinchVerify', 'Conversations', 'Voice API', 'Messaging API', 'WhatsApp Business']
  return (
    <Section id="select" title="Select" desc="Base UI Select.Root — fully accessible dropdown with keyboard support.">
      <Demo>
        <Select.Root value={val} onValueChange={setVal}>
          <Select.Trigger className="g-select-trigger">
            <Select.Value placeholder="Choose a product…" />
            <Select.Icon className="g-select-icon">
              <svg viewBox="0 0 10 6" fill="none" width="10" height="6">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Positioner sideOffset={6}>
              <Select.Popup className="g-select-popup">
                <Select.Arrow />
                {options.map(o => (
                  <Select.Option key={o} value={o} className="g-select-option">
                    {o}
                    <Select.OptionIndicator className="g-select-option-indicator">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Select.OptionIndicator>
                  </Select.Option>
                ))}
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
        {val && (
          <p style={{ marginTop: 12, font: 'var(--sinch-font-body-s)', color: 'var(--sinch-sys-color-text-secondary)' }}>
            Selected: <strong style={{ color: '#fff' }}>{val}</strong>
          </p>
        )}
      </Demo>
    </Section>
  )
}

function RadioGroupSection() {
  const [val, setVal] = useState('sms')
  const opts = [
    { value: 'sms', label: 'SMS' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'rcs', label: 'RCS' },
    { value: 'viber', label: 'Viber (disabled)', disabled: true },
  ]
  return (
    <Section id="radio-group" title="Radio Group" desc="Base UI RadioGroup.Root — single selection from a list.">
      <Demo>
        <RadioGroup.Root value={val} onValueChange={setVal} className="g-radio-group">
          {opts.map(o => (
            <RadioGroup.Item key={o.value} value={o.value} disabled={o.disabled} className="g-radio-item">
              <RadioGroup.Indicator className="g-radio-indicator" />
              <span style={{ opacity: o.disabled ? 0.4 : 1 }}>{o.label}</span>
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
      </Demo>
    </Section>
  )
}

function NumberFieldSection() {
  const [val, setVal] = useState(1)
  return (
    <Section id="number-field" title="Number Field" desc="Base UI NumberField.Root — increment/decrement with keyboard support.">
      <Demo>
        <NumberField.Root value={val} onValueChange={v => setVal(v ?? 0)} min={0} max={99}>
          <NumberField.Group className="g-number-group">
            <NumberField.Decrement className="g-number-btn">−</NumberField.Decrement>
            <NumberField.Input className="g-number-input" />
            <NumberField.Increment className="g-number-btn">+</NumberField.Increment>
          </NumberField.Group>
        </NumberField.Root>
      </Demo>
    </Section>
  )
}

function SliderSection() {
  const [v, setV] = useState([40])
  return (
    <Section id="slider" title="Slider" desc="Base UI Slider.Root — draggable range input.">
      <Demo label={`Value: ${v[0]}`}>
        <Slider.Root value={v} onValueChange={setV} className="g-slider-root" min={0} max={100}>
          <Slider.Control className="g-slider-control">
            <Slider.Track className="g-slider-track">
              <Slider.Indicator className="g-slider-indicator" />
              <Slider.Thumb index={0} className="g-slider-thumb" aria-label="Volume" />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </Demo>
      <Demo label="Range (two thumbs)">
        <TwoThumbSlider />
      </Demo>
    </Section>
  )
}

function TwoThumbSlider() {
  const [v, setV] = useState([20, 70])
  return (
    <div>
      <Slider.Root value={v} onValueChange={setV} className="g-slider-root">
        <Slider.Control className="g-slider-control">
          <Slider.Track className="g-slider-track">
            <Slider.Indicator className="g-slider-indicator" />
            <Slider.Thumb index={0} className="g-slider-thumb" aria-label="Min" />
            <Slider.Thumb index={1} className="g-slider-thumb" aria-label="Max" />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
      <p style={{ marginTop: 8, font: 'var(--sinch-font-body-s)', color: 'var(--sinch-sys-color-text-secondary)' }}>
        {v[0]} – {v[1]}
      </p>
    </div>
  )
}

function ProgressSection() {
  const [val, setVal] = useState(65)
  return (
    <Section id="progress" title="Progress" desc="Base UI Progress.Root — determinate and indeterminate states.">
      <Demo label={`${val}% complete`}>
        <Progress.Root value={val} max={100} className="g-progress-root">
          <Progress.Track className="g-progress-track">
            <Progress.Indicator className="g-progress-indicator" style={{ width: `${val}%` }} />
          </Progress.Track>
        </Progress.Root>
        <div className="g-row" style={{ marginTop: 16 }}>
          <Button size="s" variant="secondary" text="−10" onClick={() => setVal(v => Math.max(0, v - 10))} />
          <Button size="s" variant="secondary" text="+10" onClick={() => setVal(v => Math.min(100, v + 10))} />
          <Button size="s" variant="subtle-primary" text="Reset" onClick={() => setVal(65)} />
        </div>
      </Demo>
    </Section>
  )
}

function MeterSection() {
  const levels: { label: string; val: number; status: string }[] = [
    { label: 'Low (error)', val: 15, status: 'low' },
    { label: 'Medium (warning)', val: 55, status: 'medium' },
    { label: 'High (success)', val: 90, status: 'high' },
  ]
  return (
    <Section id="meter" title="Meter" desc="Base UI Meter.Root — status-based colour via data-meter-status.">
      <Demo>
        <div className="g-col">
          {levels.map(l => (
            <div key={l.status}>
              <p style={{ font: 'var(--sinch-font-label-xs)', color: 'var(--sinch-sys-color-text-secondary)', marginBottom: 6 }}>{l.label}</p>
              <Meter.Root value={l.val} max={100}>
                <Meter.Track className="g-meter-track">
                  <Meter.Indicator className="g-meter-indicator" data-meter-status={l.status} style={{ width: `${l.val}%` }} />
                </Meter.Track>
              </Meter.Root>
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  )
}

function AccordionSection() {
  return (
    <Section id="accordion" title="Accordion" desc="Base UI Accordion.Root — animated expand/collapse with ARIA.">
      <Demo>
        <Accordion.Root className="g-accordion">
          {[
            { v: '1', title: 'What is Sinch?', body: 'Sinch is a customer communications cloud, empowering businesses to reach everyone in the world through mobile messaging, email, voice, and video.' },
            { v: '2', title: 'What is Nectary?', body: 'Nectary is the Sinch design system — a set of design tokens, components, and guidelines for building consistent Sinch product experiences.' },
            { v: '3', title: 'What is Base UI?', body: 'Base UI is an unstyled, accessible component library from the MUI team. It provides the behavioural and ARIA logic while you supply the styling.' },
          ].map(item => (
            <Accordion.Item key={item.v} value={item.v} className="g-accordion-item">
              <Accordion.Header>
                <Accordion.Trigger className="g-accordion-trigger">
                  {item.title}
                  <svg className="g-accordion-chevron" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="g-accordion-panel">
                <div className="g-accordion-panel-content">{item.body}</div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Demo>
    </Section>
  )
}

function ToggleGroupSection() {
  const [align, setAlign] = useState<string[]>(['left'])
  const [style, setStyle] = useState<string[]>(['bold'])
  return (
    <Section id="toggle-group" title="Toggle Group" desc="Base UI ToggleGroup.Root — single and multi-select toolbar variants.">
      <Demo label="Text alignment (single select)">
        <ToggleGroup.Root
          value={align}
          onValueChange={setAlign}
          className="g-toggle-group"
        >
          {[
            { value: 'left',    icon: <AlignLeftIcon /> },
            { value: 'center',  icon: <AlignCenterIcon /> },
            { value: 'right',   icon: <AlignRightIcon /> },
            { value: 'justify', icon: <AlignJustifyIcon /> },
          ].map(t => (
            <ToggleGroup.Item key={t.value} value={t.value} className="g-toggle-item" aria-label={t.value}>
              {t.icon}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
      </Demo>
      <Demo label="Text formatting (multi-select)">
        <ToggleGroup.Root
          value={style}
          onValueChange={setStyle}
          className="g-toggle-group"
        >
          <ToggleGroup.Item value="bold"      className="g-toggle-item" aria-label="Bold">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M3 2h4.5a3 3 0 010 6H3V2zm0 6h5a3 3 0 010 6H3V8z" opacity=".9"/></svg>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="italic"    className="g-toggle-item" aria-label="Italic">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M5 2h4l-4 10H1l4-10z" opacity=".9"/></svg>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="underline" className="g-toggle-item" aria-label="Underline">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 2v5a4 4 0 008 0V2"/><line x1="1" y1="13" x2="13" y2="13" strokeLinecap="round"/></svg>
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </Demo>
    </Section>
  )
}

function SeparatorSection() {
  return (
    <Section id="separator" title="Separator" desc="Base UI Separator.Root — horizontal and vertical visual dividers.">
      <Demo label="Horizontal">
        <p style={{ font: 'var(--sinch-font-body-m)', color: 'var(--sinch-sys-color-text-secondary)', marginBottom: 12 }}>Section A content above the separator.</p>
        <Separator.Root className="g-separator" />
        <p style={{ font: 'var(--sinch-font-body-m)', color: 'var(--sinch-sys-color-text-secondary)', marginTop: 12 }}>Section B content below the separator.</p>
      </Demo>
      <Demo label="Vertical">
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ font: 'var(--sinch-font-body-m)', color: 'var(--sinch-sys-color-text-secondary)' }}>File</span>
          <Separator.Root orientation="vertical" className="g-separator" />
          <span style={{ font: 'var(--sinch-font-body-m)', color: 'var(--sinch-sys-color-text-secondary)' }}>Edit</span>
          <Separator.Root orientation="vertical" className="g-separator" />
          <span style={{ font: 'var(--sinch-font-body-m)', color: 'var(--sinch-sys-color-text-secondary)' }}>View</span>
        </div>
      </Demo>
    </Section>
  )
}

function DialogSection() {
  const [open, setOpen] = useState(false)
  return (
    <Section id="dialog" title="Dialog" desc="Base UI Dialog.Root — focus-trapped, accessible modal with backdrop.">
      <Demo>
        <div className="g-row">
          <Button variant="primary" text="Open dialog" onClick={() => setOpen(true)} />
          <Button variant="secondary" text="Disabled" disabled />
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Portal>
            <Dialog.Backdrop className="g-dialog-backdrop" />
            <Dialog.Popup className="g-dialog-popup">
              <Dialog.Title className="g-dialog-title">Delete conversation?</Dialog.Title>
              <Dialog.Description className="g-dialog-desc">
                This will permanently remove the conversation with <strong>+46 73 058 04 37</strong> and all its history. This action cannot be undone.
              </Dialog.Description>
              <div className="g-dialog-actions">
                <Dialog.Close render={<Button variant="secondary" text="Cancel" />} />
                <Dialog.Close render={<Button variant="destructive" text="Delete" />} />
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </Demo>
    </Section>
  )
}

function PopoverSection() {
  return (
    <Section id="popover" title="Popover" desc="Base UI Popover.Root — anchored floating panel with Portal positioning.">
      <Demo>
        <div className="g-row">
          <Popover.Root>
            <Popover.Trigger render={<Button variant="secondary" text="Show info ↗" />} />
            <Popover.Portal>
              <Popover.Positioner sideOffset={8}>
                <Popover.Popup className="g-popover-popup">
                  <Popover.Title className="g-popover-title">Shared numbers pool</Popover.Title>
                  Numbers in the shared pool are automatically selected when sending. Add dedicated numbers in Settings → Senders.
                  <div style={{ marginTop: 12 }}>
                    <Popover.Close render={<Button size="s" variant="subtle-primary" text="Got it" />} />
                  </div>
                </Popover.Popup>
              </Popover.Positioner>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </Demo>
    </Section>
  )
}

function TooltipSection() {
  return (
    <Section id="tooltip" title="Tooltip" desc="Base UI Tooltip.Provider + Root — hover/focus triggered floating label.">
      <Demo>
        <Tooltip.Provider>
          <div className="g-row">
            {[
              { label: 'Send message', text: '↑ send' },
              { label: 'Attach file', text: 'Attach (⌘ U)' },
              { label: 'Emoji', text: 'Add emoji' },
              { label: 'Templates', text: 'Message templates' },
            ].map(t => (
              <Tooltip.Root key={t.label}>
                <Tooltip.Trigger render={<Button variant="secondary" size="s" text={t.label} />} />
                <Tooltip.Portal>
                  <Tooltip.Positioner sideOffset={6}>
                    <Tooltip.Popup className="g-tooltip-popup">{t.text}</Tooltip.Popup>
                  </Tooltip.Positioner>
                </Tooltip.Portal>
              </Tooltip.Root>
            ))}
          </div>
        </Tooltip.Provider>
      </Demo>
    </Section>
  )
}

// ─── Toolbar icon helpers ─────────────────────────────────────────────────────

function AlignLeftIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="1" y1="3" x2="13" y2="3"/><line x1="1" y1="7" x2="9" y2="7"/><line x1="1" y1="11" x2="11" y2="11"/></svg>
}
function AlignCenterIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="1" y1="3" x2="13" y2="3"/><line x1="3" y1="7" x2="11" y2="7"/><line x1="2" y1="11" x2="12" y2="11"/></svg>
}
function AlignRightIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="1" y1="3" x2="13" y2="3"/><line x1="5" y1="7" x2="13" y2="7"/><line x1="3" y1="11" x2="13" y2="11"/></svg>
}
function AlignJustifyIcon() {
  return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="1" y1="3" x2="13" y2="3"/><line x1="1" y1="7" x2="13" y2="7"/><line x1="1" y1="11" x2="13" y2="11"/></svg>
}
