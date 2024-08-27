import '@nectary/components/icon'
import { customElement } from 'solid-element'
import { For } from 'solid-js'
import html from 'solid-js/html'
import pkg from './package.json'
import { defineCustomElement } from './utils'
import type React from 'react'

const style = `
:where(*, *::before, *::after) {
  box-sizing: border-box;
  padding: 0;
  border: 0;
  margin: 0;
  font: inherit;
}

.root {
  --logo-color: var(--sinch-sys-color-surface-secondary-default);
  block-size: 100%;
  display: flex;
  flex-flow: column;

  & > header {
    display: flex;
    gap: 8px;
    padding: 12px 4px;
    background: var(--sinch-sys-color-surface-tertiary-default);
    font: var(--sinch-sys-font-body-m);

    & > img {
      block-size: 24px;
      inline-size: 24px;
      margin-inline-start: 8px;
      border-radius: 100%;
      background: var(--logo-color);
    }

    & > h1 {
      flex: 1;
      overflow: hidden;
      min-inline-size: 0;
      text-wrap: nowrap;
      text-overflow: ellipsis;
    }
  }

  & > div {
    flex: 1;
    overflow-y: auto;
    scrollbar-width: none;
    display: flex;
    flex-flow: column;
    gap: 8px;
    padding: 8px;
    margin-block-end: 8px;

    & > img {
      block-size: 64px;
      inline-size: 64px;
      border-radius: 100%;
      align-self: center;
      background: var(--logo-color);
    }

    & > p {
      padding-inline: 24px;
      font: var(--sinch-sys-font-body-xs);
      text-align: center;
      text-wrap: balance;
      word-wrap: break-word;
    }

    & > hr {
      border-block-end: 1px solid var(--sinch-sys-color-border-subtle);
    }
  }

  & > footer {
    display: flex;
    align-items: center;
    gap: 8px;
    font: var(--sinch-sys-font-body-xs);

    & > div {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 24px;
      background: var(--sinch-sys-color-surface-primary-active);

      & > span {
        flex: 1;
      }
    }
  }
}

.message {
  padding: 8px 12px;
  margin-inline-end: 8px;
  border-radius: 16px;
  border-end-start-radius: 0;
  background: var(--sinch-sys-color-feedback-info-subtle);
  font: var(--sinch-sys-font-body-xs);
}
`

const Message = (props: { message: string }) =>
  html`<section class="message">${props.message}</section>`

/**
 * RCS chat preview component.
 *
 * @param props.name Brand name.
 * @param props.description Brand description.
 * @param props.logo Brand logo image.
 * @param props.messages List of messages.
 */
export const RcsChatPreview = (props: {
  name: string,
  description: string,
  logo: string,
  messages: string[],
}) => {
  const transparentIcon =
    'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

  return html` <style>
      ${style}
    </style>
    <section class="root">
      <header>
        <sinch-icon name="arrow_back" />
        <img
          src=${() => (props.logo !== '' ? props.logo : transparentIcon)}
          alt=""
        />
        <h1>${() => (props.name !== '' ? props.name : 'Brand name')}</h1>
        <sinch-icon name="verified_user" />
        <sinch-icon name="more_vert" />
      </header>
      <div>
        <img
          src=${() => (props.logo !== '' ? props.logo : transparentIcon)}
          alt=""
        />
        <p>
          ${() =>
    (props.description !== '' ? props.description : 'Brand description')}
        </p>
        <hr />
        <${For} each=${() => props.messages}>
          ${(message: string) => html`<${Message} message=${message} />`}
        <//>
      </div>
      <footer>
        <sinch-icon name="add_circle" />
        <sinch-icon name="photo_camera" />
        <div>
          <span>RCS Message</span>
          <sinch-icon name="sentiment_satisfied" />
          <sinch-icon name="mic" />
        </div>
      </footer>
    </section>`
}

defineCustomElement(
  'sinch-labs-phone-preview-rcs-chat',
  customElement(
    `sinch-labs-phone-preview-rcs-chat-${pkg.version}`,
    {
      name: '',
      description: '',
      logo: '',
      messages: [],
    },
    RcsChatPreview
  )
)

type Props = Parameters<typeof RcsChatPreview>[0]
type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-chat': ElementProps & HTMLElement,
  }
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-chat': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
