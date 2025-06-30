import '@nectary/components/icon'
import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

console.log(template)

export class PhonePreviewRcsChannelActions extends NectaryElement {
  #callAction: HTMLAnchorElement
  #websiteAction: HTMLAnchorElement
  #emailAction: HTMLAnchorElement

  constructor() {
    super()
    console.log('[PhonePreviewRcsChannelActions] Constructor called')

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#callAction = shadowRoot.querySelector('#call-action')!
    this.#websiteAction = shadowRoot.querySelector('#website-action')!
    this.#emailAction = shadowRoot.querySelector('#email-action')!

    console.log('[PhonePreviewRcsChannelActions] Elements queried:', {
      callAction: this.#callAction,
      websiteAction: this.#websiteAction,
      emailAction: this.#emailAction,
    })
  }

  connectedCallback() {
    console.log('[PhonePreviewRcsChannelActions] Connected to DOM')
    super.connectedCallback()
    this.#updateUI()
  }

  static get observedAttributes() {
    return ['phone', 'website', 'email']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    console.log(`[PhonePreviewRcsChannelActions] Attribute "${name}" changed from "${oldVal}" to "${newVal}"`)

    if (oldVal === newVal) {
      return
    }

    this.#updateUI()
  }

  get phone(): string {
    return this.getAttribute('phone') ?? ''
  }

  set phone(value: string) {
    console.log(`[PhonePreviewRcsChannelActions] Setting phone to "${value}"`)

    if (value !== '') {
      this.setAttribute('phone', value)
    } else {
      this.removeAttribute('phone')
    }
  }

  get website(): string {
    return this.getAttribute('website') ?? ''
  }

  set website(value: string) {
    console.log(`[PhonePreviewRcsChannelActions] Setting website to "${value}"`)

    if (value !== '') {
      this.setAttribute('website', value)
    } else {
      this.removeAttribute('website')
    }
  }

  get email(): string {
    return this.getAttribute('email') ?? ''
  }

  set email(value: string) {
    console.log(`[PhonePreviewRcsChannelActions] Setting email to "${value}"`)

    if (value !== '') {
      this.setAttribute('email', value)
    } else {
      this.removeAttribute('email')
    }
  }

  #updateUI() {
    console.log('[PhonePreviewRcsChannelActions] Updating UI')

    if (!this.isDomConnected) {
      console.log('[PhonePreviewRcsChannelActions] DOM not connected, skipping UI update')

      return
    }

    // Get contact values directly as strings
    const phoneNumber = this.phone
    const websiteUrl = this.website
    const emailAddress = this.email

    console.log('[PhonePreviewRcsChannelActions] Current values:', {
      phone: phoneNumber,
      website: websiteUrl,
      email: emailAddress,
    })

    // Update call action
    if (phoneNumber !== '') {
      this.#callAction.href = `tel:${phoneNumber}`
      this.#callAction.removeAttribute('inert')
      console.log(`[PhonePreviewRcsChannelActions] Enabling call action with href: ${this.#callAction.href}`)
    } else {
      this.#callAction.href = '#'
      this.#callAction.setAttribute('inert', '')
      console.log('[PhonePreviewRcsChannelActions] Disabling call action')
    }

    // Update website action
    if (websiteUrl !== '') {
      this.#websiteAction.href = websiteUrl
      this.#websiteAction.removeAttribute('inert')
      console.log(`[PhonePreviewRcsChannelActions] Enabling website action with href: ${this.#websiteAction.href}`)
    } else {
      this.#websiteAction.href = '#'
      this.#websiteAction.setAttribute('inert', '')
      console.log('[PhonePreviewRcsChannelActions] Disabling website action')
    }

    // Update email action
    if (emailAddress !== '') {
      this.#emailAction.href = `mailto:${emailAddress}`
      this.#emailAction.removeAttribute('inert')
      console.log(`[PhonePreviewRcsChannelActions] Enabling email action with href: ${this.#emailAction.href}`)
    } else {
      this.#emailAction.href = '#'
      this.#emailAction.setAttribute('inert', '')
      console.log('[PhonePreviewRcsChannelActions] Disabling email action')
    }
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-channel-actions', PhonePreviewRcsChannelActions)

type Props = {
  phone?: string,
  website?: string,
  email?: string,
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-channel-actions': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-channel-actions': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
