import '@nectary/components/icon'
import { customElement } from 'solid-element'
import { createSignal, For } from 'solid-js'
import html from 'solid-js/html'
import pkg from './package.json'
import { defineCustomElement } from './utils'
import type { Accessor } from 'solid-js'

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

  & > .actions {
    align-self: center;
    padding-block: 32px 24px;
  }

  & > .tabs {
    padding-block-end: 8px;
  }
}

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

.tabs {
  --highlight-color: var(--sinch-sys-color-text-default);
  display: flex;

  & > button {
    flex: 1;
    padding-block-end: 10px;
    border-block-end: 2px solid transparent;
    outline: none;
    background: transparent;
    color: var(--sinch-sys-color-text-disabled);
    font: var(--sinch-sys-font-desktop-title-xs);

    &.active {
      color: var(--sinch-sys-color-primary-default);
      border-block-end: 2px solid var(--highlight-color);
    }
  }
}


.options {
  display: flex;
  flex-flow: column;
  font: var(--sinch-sys-font-body-xs);

  & > header {
    padding-block-end: 8px;
  }

  & > span {
    font: var(--sinch-sys-font-body-xxs);
  }

  & > button {
    padding: 4px;
    outline: none;
    background: transparent;
    text-align: start;
  }

  & > hr {
    border-color: var(--sinch-sys-color-surface-secondary-active);
  }
}
`

const Actions = (props: Parameters<typeof RcsChannelPreview>[0]) => {
  const number = () => props.phones.at(0)?.number ?? ''
  const url = () => props.websites.at(0)?.url ?? ''
  const email = () => props.emails.at(0)?.address ?? ''
  const numberHref = () => `tel:${number()}`
  const urlHref = url
  const emailHref = () => `mailto:${email()}`

  return html`
    <section class="actions">
      <a inert=${() => number() === ''} target="_blank" href=${numberHref}>
        <sinch-icon name="fa-phone" class="icon-link" />
        Call
      </a>
      <a inert=${() => url() === ''} target="_blank" href=${urlHref}>
        <sinch-icon name="fa-earth-americas" name="public" class="icon-link" />
        Website
      </a>
      <a inert=${() => email() === ''} target="_blank" href=${emailHref}>
        <sinch-icon name="envelope" name="mail" class="icon-link" />
        Email
      </a>
    </section>
  `
}

const Info = (props: Parameters<typeof RcsChannelPreview>[0]) => {
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
    <section class="info">
      <${For} each=${phones}>
        ${({ label, number }: { label: string, number: string }) => html`
          <a
            inert=${() => props.phones.length === 0}
            target="_blank"
            href=${`tel:${number}`}
          >
            <sinch-icon name="fa-phone" class="icon-link" />
            <span>${number}</span>
            <p>${label}</p>
          </a>
        `}
      <//>
      <${For} each=${websites}>
        ${({ label, url }: { label: string, url: string }) => html`
          <a inert=${() => props.websites.length === 0} target="_blank" href=${url}>
            <sinch-icon name="fa-earth-americas" name="public" class="icon-link" />
            <span>${url}</span>
            <p>${label}</p>
          </a>
        `}
      <//>
      <${For} each=${emails}>
        ${({ label, address }: { label: string, address: string }) => html`
          <a
            inert=${() => props.emails.length === 0}
            target="_blank"
            href=${`mailto:${address}`}
          >
            <sinch-icon name="envelope" name="mail" class="icon-link" />
            <span>${address}</span>
            <p>${label}</p>
          </a>
        `}
      <//>
    </section>
  `
}

const Tabs = (props: {
  color?: string,
  tab: number,
  onTab?: (t: number) => void,
}) => html`
  <section class="tabs" style=${() => ({ '--highlight-color': props.color })}>
    <${For} each=${['Info', 'Options']}>
      ${(label: string, i: Accessor<number>) => html`
        <button
          class=${() => (i() === props.tab ? 'active' : '')}
          on:click=${() => props.onTab?.(i())}
        >
          ${label}
        </button>
      `}
    <//>
  </section>
`

const Options = () => html`
  <section class="options">
    <header>Notifications</header>
    <span>Business</span>
    <button>Block & report spam</button>
    <hr />
    <button>View Privacy Policy</button>
    <hr />
    <button>View Terms of Service</button>
    <hr />
    <button>Learn mode</button>
  </section>
`

/**
 * RCS channel preview component.
 *
 * @param props.color Brand color, used in the banner (if no image provided) and tabs.
 * @param props.name Brand name.
 * @param props.description Brand description.
 * @param props.banner Brand banner image.
 * @param props.logo Brand logo image.
 * @param props.phone Brand phone numbers.
 * @param props.website Brand website URLs.
 * @param props.email Brand email addresses.
 */
export const RcsChannelPreview = (props: {
  name: string,
  description: string,
  color: string,
  banner: string,
  logo: string,
  phones: { label: string, number: string }[],
  websites: { label: string, url: string }[],
  emails: { label: string, address: string }[],
}) => {
  const [tab, setTab] = createSignal(0)
  const transparentIcon =
    'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

  return html`
    <style>
      ${style}
    </style>
    <section class="root" style=${() => ({ '--banner-color': props.color })}>
      <img src=${() => (props.banner !== '' ? props.banner : transparentIcon)} alt="" />
      <img src=${() => (props.logo !== '' ? props.logo : transparentIcon)} alt="" />
      <h1>${() => (props.name !== '' ? props.name : 'Brand name')}</h1>
      <p>${() => (props.description !== '' ? props.description : 'Brand description')}</p>
      <${Actions} ...${props} />
      <${Tabs} color=${() => props.color} tab=${tab} onTab=${setTab} />
      ${() => (tab() === 0 ? html`<${Info} ...${props} />` : html`<${Options} />`)}
    </section>
  `
}

defineCustomElement(
  'sinch-labs-phone-preview-rcs-channel',
  customElement(
    `sinch-labs-phone-preview-rcs-channel-${pkg.version}`,
    {
      name: '',
      description: '',
      color: '',
      banner: '',
      logo: '',
      phones: [],
      websites: [],
      emails: [],
    },
    RcsChannelPreview
  )
)

type Props = Partial<Parameters<typeof RcsChannelPreview>[0]>
type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-channel': ElementProps & HTMLElement,
  }
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-channel': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
