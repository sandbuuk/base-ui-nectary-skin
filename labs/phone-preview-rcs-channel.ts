// Import required dependencies for the RCS channel preview component
import '@nectary/components/icon' // Icon component from the Nectary design system
import { customElement } from 'solid-element' // SolidJS custom element wrapper
import { createSignal } from 'solid-js' // SolidJS reactive primitives
import html from 'solid-js/html' // HTML template literal for SolidJS
import pkg from './package.json' // Package info for versioning
import './phone-preview-rcs-channel-actions' // Web component for primary contact buttons
import './phone-preview-rcs-channel-info' // Web component for detailed contact information
import './phone-preview-rcs-channel-info-option' // Web component for individual contact options
import './phone-preview-rcs-channel-options' // Web component for settings/options view
import './phone-preview-rcs-channel-tabs' // Web component for tab navigation
import { defineCustomElement } from './utils' // Utility for defining custom elements

// CSS styles for the RCS channel preview component
// This creates a mobile phone interface mockup that displays brand information
// and contact options in a format similar to how RCS (Rich Communication Services)
// channels appear on mobile devices
//
// Key style features:
// - Mobile-first responsive design
// - CSS custom properties for theming (brand colors)
// - Grid layouts for contact information
// - Tab navigation with active state styling
// - Proper accessibility considerations (focus states, semantic HTML)
const style = `
:where(*, *::before, *::after) {
  box-sizing: border-box;
  padding: 0;
  border: 0;
  margin: 0;
  font: inherit;
}

.root {
  --banner-color: var(--sinch-sys-color-surface-tertiary-active);
  --logo-color: var(--sinch-sys-color-surface-secondary-default);
  display: flex;
  flex-flow: column;
  color: var(--sinch-sys-color-text-default);

  & > img:first-of-type {
    block-size: 70px;
    margin-block-end: -40px;
    background: var(--banner-color);
  }

  & > img:last-of-type {
    block-size: 64px;
    inline-size: 64px;
    border-radius: 100%;
    background: var(--logo-color);
    align-self: center;
  }

  & > h1 {
    padding: 8px 24px;
    font: var(--sinch-sys-font-body-m);
    text-align: center;
    text-wrap: balance;
    word-wrap: break-word;
  }

  & > p {
    padding-inline: 24px;
    font: var(--sinch-sys-font-body-xs);
    text-align: center;
    text-wrap: balance;
    word-wrap: break-word;
  }

  & > sinch-labs-phone-preview-rcs-channel-actions {
    align-self: center;
    padding-block: 32px 24px;
  }

  & > .tabs {
    padding-block-end: 8px;
  }
}
`

// TypeScript interface defining the props structure for RCS channel data
// This represents all the brand information that can be displayed in the preview
interface RcsChannelProps {
  name: string, // Brand/company name
  description: string, // Brand description text
  color: string, // Brand primary color (hex/rgb/css color)
  banner: string, // URL to banner image
  logo: string, // URL to brand logo image
  phones: { label: string, number: string }[], // Array of phone contacts
  websites: { label: string, url: string }[], // Array of website links
  emails: { label: string, address: string }[], // Array of email contacts
}

/**
 * Main RcsChannelPreview component - renders the complete RCS channel preview interface
 *
 * This component creates a mobile-like interface that simulates how an RCS (Rich Communication Services)
 * business channel would appear on a user's phone. It includes:
 * - Brand banner and logo images
 * - Brand name and description
 * - Quick action buttons (Call, Website, Email)
 * - Tabbed interface with detailed info and options
 *
 * @param props.color Brand color, used in the banner (if no image provided) and tabs.
 * @param props.name Brand name.
 * @param props.description Brand description.
 * @param props.banner Brand banner image.
 * @param props.logo Brand logo image.
 * @param props.phones Brand phone numbers.
 * @param props.websites Brand website URLs.
 * @param props.emails Brand email addresses.
 */
export const RcsChannelPreview = (props: RcsChannelProps) => {
  // State management for tab switching (0 = Info, 1 = Options)
  const [tab, setTab] = createSignal(0)

  // Transparent placeholder image used when no banner/logo is provided
  const transparentIcon =
    'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

  return html`
    <style>
      ${style}
    </style>
    <section class="root" style=${() => ({ '--banner-color': props.color })}>
      <!-- Banner image - uses transparent placeholder if no banner provided -->
      <img src=${() => (props.banner !== '' ? props.banner : transparentIcon)} alt="" />
      <!-- Logo image - uses transparent placeholder if no logo provided -->
      <img src=${() => (props.logo !== '' ? props.logo : transparentIcon)} alt="" />
      <!-- Brand name with fallback text -->
      <h1>${() => (props.name !== '' ? props.name : 'Brand name')}</h1>
      <!-- Brand description with fallback text -->
      <p>${() => (props.description !== '' ? props.description : 'Brand description')}</p>
      <!-- Main action buttons (Call, Website, Email) -->
      <sinch-labs-phone-preview-rcs-channel-actions
        phone=${() => props.phones.at(0)?.number ?? ''}
        website=${() => props.websites.at(0)?.url ?? ''}
        email=${() => props.emails.at(0)?.address ?? ''}
      ></sinch-labs-phone-preview-rcs-channel-actions>
      <!-- Tab navigation -->
      <sinch-labs-phone-preview-rcs-channel-tabs
        color=${() => props.color}
        active-tab=${tab}
        on:-tab-change=${(e: CustomEvent) => setTab(e.detail)}
      ></sinch-labs-phone-preview-rcs-channel-tabs>
      <!-- Conditional content based on active tab -->
      ${() => (tab() === 0
    ? html`<sinch-labs-phone-preview-rcs-channel-info>
      ${props.phones.map(({ label, number }) =>
      html`<sinch-labs-phone-preview-rcs-channel-info-option type="phone" contact=${number} label=${label}></sinch-labs-phone-preview-rcs-channel-info-option>`)}
      ${props.websites.map(({ label, url }) =>
      html`<sinch-labs-phone-preview-rcs-channel-info-option type="website" contact=${url} label=${label}></sinch-labs-phone-preview-rcs-channel-info-option>`)}
      ${props.emails.map(({ label, address }) =>
      html`<sinch-labs-phone-preview-rcs-channel-info-option type="email" contact=${address} label=${label}></sinch-labs-phone-preview-rcs-channel-info-option>`)}
      </sinch-labs-phone-preview-rcs-channel-info>`
    : html`<sinch-labs-phone-preview-rcs-channel-options></sinch-labs-phone-preview-rcs-channel-options>`
  )}
    </section>
  `
}

// Register the component as a custom element with versioned tag name
// This makes it available as <sinch-labs-phone-preview-rcs-channel> in HTML
// The version suffix ensures different versions can coexist
defineCustomElement(
  'sinch-labs-phone-preview-rcs-channel',
  customElement(
    `sinch-labs-phone-preview-rcs-channel-${pkg.version}`, // Versioned internal tag
    {
      // Default property values
      name: '',
      description: '',
      color: '',
      banner: '',
      logo: '',
      phones: [],
      websites: [],
      emails: [],
    },
    RcsChannelPreview // The SolidJS component to wrap
  )
)

// TypeScript type definitions for better developer experience
type Props = Partial<Parameters<typeof RcsChannelPreview>[0]>
type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

// Extend global HTML element types to include our custom element
declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-channel': ElementProps & HTMLElement,
  }
}

// Add React JSX type support for the custom element
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-channel': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
