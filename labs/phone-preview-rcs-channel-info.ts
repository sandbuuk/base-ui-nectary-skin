// Import required dependencies for the Info component
import '@nectary/components/icon' // Icon component from the Nectary design system
import { For } from 'solid-js' // SolidJS list component for rendering arrays
import html from 'solid-js/html' // HTML template literal for SolidJS

// CSS styles for the Info component
// This styles the detailed contact information list in a grid layout
const style = `
.info {
  display: flex;
  flex-flow: column;
  font: var(--sinch-sys-font-body-xs);

  & > a {
    display: grid;
    grid-template:
      "icon contact" auto
      "icon label  " auto
      / auto 1fr;
    align-items: center;
    gap: 0 16px;
    padding: 8px 16px;
    border-block-end: 1px solid
      var(--sinch-sys-color-surface-secondary-active);
    color: currentColor;
    word-break: break-all;
    text-decoration: none;

    & > .icon-link {
      grid-area: icon;
    }

    & > span {
      grid-area: contact;

      &::before {
        content: "\\200b";
      }
    }

    & > p {
      grid-area: label;

      &::before {
        content: "\\200b";
      }
    }

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
 * Info component - displays detailed contact information in a list format
 * This appears in the "Info" tab and shows all available contact methods
 * Falls back to placeholder data when no contact info is provided
 */
export const Info = (props: RcsChannelProps) => {
  // Provide fallback placeholder data when no contact info is available
  // This ensures the preview always shows something meaningful
  const phones = () =>
    ((props.phones.length > 0)
      ? props.phones
      : [{ label: 'Contact us', number: '+1234567890' }])
  const websites = () =>
    ((props.websites.length > 0)
      ? props.websites
      : [{ label: 'Contact us', url: 'https://company.com' }])
  const emails = () =>
    ((props.emails.length > 0)
      ? props.emails
      : [{ label: 'Contact us', address: 'mail@company.com' }])

  return html`
    <style>
      ${style}
    </style>
    <section class="info">
      <!-- Render all phone numbers with icons and labels -->
      <${For} each=${phones}>
        ${({ label, number }: { label: string, number: string }) => html`
          <a
            inert=${() => props.phones.length === 0}
            target="_blank"
            href=${`tel:${number}`}
          >
            <sinch-icon icons-version="2" name="fa-phone" class="icon-link" />
            <span>${number}</span>
            <p>${label}</p>
          </a>
        `}
      <//>
      <!-- Render all website URLs with icons and labels -->
      <${For} each=${websites}>
        ${({ label, url }: { label: string, url: string }) => html`
          <a inert=${() => props.websites.length === 0} target="_blank" href=${url}>
            <sinch-icon icons-version="2" name="fa-earth-americas" name="public" class="icon-link" />
            <span>${url}</span>
            <p>${label}</p>
          </a>
        `}
      <//>
      <!-- Render all email addresses with icons and labels -->
      <${For} each=${emails}>
        ${({ label, address }: { label: string, address: string }) => html`
          <a
            inert=${() => props.emails.length === 0}
            target="_blank"
            href=${`mailto:${address}`}
          >
            <sinch-icon icons-version="2" name="envelope" name="mail" class="icon-link" />
            <span>${address}</span>
            <p>${label}</p>
          </a>
        `}
      <//>
    </section>
  `
}
