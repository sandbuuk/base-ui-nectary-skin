// Import required dependencies for the Actions component
import '@nectary/components/icon' // Icon component from the Nectary design system
import html from 'solid-js/html' // HTML template literal for SolidJS

// CSS styles for the Actions component
// This styles the main action buttons (Call, Website, Email) grid layout
const style = `
.actions {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  gap: 24px;
  font: var(--sinch-sys-font-body-xs);

  & > a {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 2px;
    color: inherit;
    text-decoration: none;

    &[inert] {
      --sinch-global-color-icon: currentColor;
      color: var(--sinch-sys-color-text-muted);
    }
  }
}
`

// TypeScript interface for the contact information arrays
interface RcsChannelProps {
  phones: { label: string, number: string }[],
  websites: { label: string, url: string }[],
  emails: { label: string, address: string }[],
}

/**
 * Actions component - renders the main action buttons (Call, Website, Email)
 * These are the primary contact methods displayed prominently in the RCS preview
 * Buttons are disabled (inert) when no corresponding contact info is provided
 */
export const Actions = (props: RcsChannelProps) => {
  // Extract the first contact method of each type for the main action buttons
  const number = () => props.phones.at(0)?.number ?? ''
  const url = () => props.websites.at(0)?.url ?? ''
  const email = () => props.emails.at(0)?.address ?? ''

  // Generate proper href attributes for each contact method
  const numberHref = () => `tel:${number()}`
  const urlHref = url
  const emailHref = () => `mailto:${email()}`

  return html`
    <style>
      ${style}
    </style>
    <section class="actions">
      <!-- Call button - disabled if no phone number provided -->
      <a inert=${() => number() === ''} target="_blank" href=${numberHref}>
        <sinch-icon icons-version="2" name="fa-phone" class="icon-link" />
        Call
      </a>
      <!-- Website button - disabled if no website URL provided -->
      <a inert=${() => url() === ''} target="_blank" href=${urlHref}>
        <sinch-icon icons-version="2" name="fa-earth-americas" name="public" class="icon-link" />
        Website
      </a>
      <!-- Email button - disabled if no email address provided -->
      <a inert=${() => email() === ''} target="_blank" href=${emailHref}>
        <sinch-icon icons-version="2" name="envelope" name="mail" class="icon-link" />
        Email
      </a>
    </section>
  `
}
