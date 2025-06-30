import '@nectary/components/icon'
import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class PhonePreviewRcsChannelInfoOption extends NectaryElement {
  #link: HTMLAnchorElement
  #icon: HTMLElement
  #contact: HTMLElement
  #label: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#link = shadowRoot.querySelector('a')!
    this.#icon = shadowRoot.querySelector('sinch-icon')!
    this.#contact = shadowRoot.querySelector('#contact')!
    this.#label = shadowRoot.querySelector('#label')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#updateUI()
  }

  static get observedAttributes() {
    return ['type', 'contact', 'label', 'placeholder']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    this.#updateUI()
  }

  get type(): string {
    return this.getAttribute('type') ?? 'phone'
  }

  set type(value: string) {
    this.setAttribute('type', value)
  }

  get contact(): string {
    return this.getAttribute('contact') ?? ''
  }

  set contact(value: string) {
    this.setAttribute('contact', value)
  }

  get label(): string {
    return this.getAttribute('label') ?? ''
  }

  set label(value: string) {
    this.setAttribute('label', value)
  }

  get placeholder(): boolean {
    return this.hasAttribute('placeholder')
  }

  set placeholder(value: boolean) {
    if (value) {
      this.setAttribute('placeholder', '')
    } else {
      this.removeAttribute('placeholder')
    }
  }

  #updateUI() {
    if (!this.isDomConnected) {
      return
    }

    const type = this.type
    const contact = this.contact
    const label = this.label
    const isPlaceholder = this.placeholder

    // Set icon based on type
    let iconName = 'fa-phone'
    let href = `tel:${contact}`

    switch (type) {
      case 'website':
        iconName = 'fa-earth-americas'
        href = contact

        break
      case 'email':
        iconName = 'envelope'
        href = `mailto:${contact}`

        break
      case 'phone':
      default:
        iconName = 'fa-phone'
        href = `tel:${contact}`

        break
    }

    // Update icon
    this.#icon.setAttribute('name', iconName)

    // Update link
    this.#link.href = href
    this.#link.target = '_blank'

    // Set inert if it's a placeholder
    if (isPlaceholder) {
      this.#link.setAttribute('inert', '')
    } else {
      this.#link.removeAttribute('inert')
    }

    // Update contact text
    this.#contact.textContent = contact

    // Update label text
    this.#label.textContent = label
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-channel-info-option', PhonePreviewRcsChannelInfoOption)

type Props = {
  type?: 'phone' | 'website' | 'email',
  contact?: string,
  label?: string,
  placeholder?: boolean,
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-channel-info-option': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-channel-info-option': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
