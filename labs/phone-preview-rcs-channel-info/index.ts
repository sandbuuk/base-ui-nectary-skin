import '@nectary/components/icon'
import { defineCustomElement, NectaryElement } from '../utils'
import '../phone-preview-rcs-channel-info-option'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class PhonePreviewRcsChannelInfo extends NectaryElement {
  #optionSlot: HTMLSlotElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#optionSlot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#optionSlot.addEventListener('slotchange', this.#onSlotChange, { signal })

    this.#onSlotChange()
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

  #onSlotChange = () => {
    const options = this.#getOptionElements()

    // If no options are provided, show placeholder data
    if (options.length === 0) {
      this.#showPlaceholders()
    }
  }

  #getOptionElements(): HTMLElement[] {
    const assignedElements = this.#optionSlot.assignedElements()

    return assignedElements.filter((el) =>
      el.tagName.toLowerCase() === 'sinch-labs-phone-preview-rcs-channel-info-option') as HTMLElement[]
  }

  #showPlaceholders() {
    // Create placeholder options when no content is provided
    const placeholders = [
      { type: 'phone', contact: '+1234567890', label: 'Contact us' },
      { type: 'website', contact: 'https://company.com', label: 'Contact us' },
      { type: 'email', contact: 'mail@company.com', label: 'Contact us' },
    ]

    placeholders.forEach(({ type, contact, label }) => {
      const option = document.createElement('sinch-labs-phone-preview-rcs-channel-info-option')

      option.setAttribute('type', type)
      option.setAttribute('contact', contact)
      option.setAttribute('label', label)
      option.setAttribute('placeholder', '')

      this.appendChild(option)
    })
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-channel-info', PhonePreviewRcsChannelInfo)

type Props = {
  // No props needed, uses slotted children instead
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-channel-info': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-channel-info': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
