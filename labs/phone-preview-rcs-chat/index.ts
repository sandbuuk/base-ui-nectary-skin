import '@nectary/components/icon'
import { defineCustomElement, NectaryElement } from '../utils'
import '../phone-preview-rcs-chat-message'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

/**
 * RCS chat preview component.
 *
 * @param props.name Brand name.
 * @param props.description Brand description.
 * @param props.logo Brand logo image.
 */
export class RcsChatPreview extends NectaryElement {
  #headerLogo: HTMLImageElement
  #mainLogo: HTMLImageElement
  #brandName: HTMLHeadingElement
  #brandDescription: HTMLParagraphElement

  #transparentIcon = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#headerLogo = shadowRoot.querySelector('#header-logo')!
    this.#mainLogo = shadowRoot.querySelector('#main-logo')!
    this.#brandName = shadowRoot.querySelector('#brand-name')!
    this.#brandDescription = shadowRoot.querySelector('#brand-description')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#updateUI()
  }

  static get observedAttributes() {
    return ['name', 'description', 'logo']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'name':
      case 'description':
      case 'logo':
        this.#updateUI()

        break
    }
  }

  get name(): string {
    return this.getAttribute('name') ?? ''
  }

  set name(value: string) {
    this.setAttribute('name', value)
  }

  get description(): string {
    return this.getAttribute('description') ?? ''
  }

  set description(value: string) {
    this.setAttribute('description', value)
  }

  get logo(): string {
    return this.getAttribute('logo') ?? ''
  }

  set logo(value: string) {
    this.setAttribute('logo', value)
  }

  #updateUI() {
    if (!this.isDomConnected) {
      return
    }

    const logoSrc = this.logo !== '' ? this.logo : this.#transparentIcon
    const displayName = this.name !== '' ? this.name : 'Brand name'
    const displayDescription = this.description !== '' ? this.description : 'Brand description'

    this.#headerLogo.src = logoSrc
    this.#mainLogo.src = logoSrc
    this.#brandName.textContent = displayName
    this.#brandDescription.textContent = displayDescription
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-chat', RcsChatPreview)

type Props = {
  name?: string,
  description?: string,
  logo?: string,
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-chat': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-chat': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
