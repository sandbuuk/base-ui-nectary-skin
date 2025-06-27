import '@nectary/components/icon'
import { defineCustomElement, NectaryElement } from '../utils'
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
 * @param props.messages List of messages.
 */
export class RcsChatPreview extends NectaryElement {
  #headerLogo: HTMLImageElement
  #mainLogo: HTMLImageElement
  #brandName: HTMLHeadingElement
  #brandDescription: HTMLParagraphElement
  #messagesContainer: HTMLDivElement

  #transparentIcon = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#headerLogo = shadowRoot.querySelector('#header-logo')!
    this.#mainLogo = shadowRoot.querySelector('#main-logo')!
    this.#brandName = shadowRoot.querySelector('#brand-name')!
    this.#brandDescription = shadowRoot.querySelector('#brand-description')!
    this.#messagesContainer = shadowRoot.querySelector('#messages-container')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#updateUI()
  }

  static get observedAttributes() {
    return ['name', 'description', 'logo', 'messages']
  }

  attributeChangedCallback() {
    this.#updateUI()
  }

  get name(): string {
    return this.getAttribute('name') ?? ''
  }

  set name(value: string) {
    if (value !== '') {
      this.setAttribute('name', value)
    } else {
      this.removeAttribute('name')
    }
  }

  get description(): string {
    return this.getAttribute('description') ?? ''
  }

  set description(value: string) {
    if (value !== '') {
      this.setAttribute('description', value)
    } else {
      this.removeAttribute('description')
    }
  }

  get logo(): string {
    return this.getAttribute('logo') ?? ''
  }

  set logo(value: string) {
    if (value !== '') {
      this.setAttribute('logo', value)
    } else {
      this.removeAttribute('logo')
    }
  }

  get messages(): string[] {
    const messagesAttr = this.getAttribute('messages')

    if (messagesAttr !== null && messagesAttr !== '') {
      try {
        return JSON.parse(messagesAttr)
      } catch {
        return []
      }
    }

    return []
  }

  set messages(value: string[]) {
    this.setAttribute('messages', JSON.stringify(value))
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

    this.#renderMessages()
  }

  #renderMessages() {
    this.#messagesContainer.innerHTML = ''

    this.messages.forEach((message) => {
      const messageElement = document.createElement('section')

      messageElement.className = 'message'
      messageElement.textContent = message
      this.#messagesContainer.appendChild(messageElement)
    })
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-chat', RcsChatPreview)

type Props = {
  name?: string,
  description?: string,
  logo?: string,
  messages?: string[] | string,
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
