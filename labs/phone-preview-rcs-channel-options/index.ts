import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class PhonePreviewRcsChannelOptions extends NectaryElement {
  #optionsContainer: HTMLElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#optionsContainer = shadowRoot.querySelector('#options-container')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#optionsContainer.addEventListener('click', this.#onOptionClick, { signal })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller?.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      // No change needed
    }
  }

  #onOptionClick = (event: Event) => {
    const target = event.target as HTMLElement

    if (target.tagName === 'BUTTON') {
      const buttonText = target.textContent?.trim()

      this.dispatchEvent(new CustomEvent('-option-click', {
        detail: {
          action: buttonText,
          element: target,
        },
      }))
    }
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-channel-options', PhonePreviewRcsChannelOptions)

type Props = {
  // No props needed, static content
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-channel-options': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-channel-options': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
