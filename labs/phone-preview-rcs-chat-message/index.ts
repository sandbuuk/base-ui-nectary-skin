import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

/**
 * Individual RCS chat message component.
 *
 * @param props.text Message text content.
 */
export class RcsChatMessage extends NectaryElement {
  #messageText: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#messageText = shadowRoot.querySelector('#message-text')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#updateUI()
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'text':
        this.#updateUI()

        break
    }
  }

  get text(): string {
    return this.getAttribute('text') ?? ''
  }

  set text(value: string) {
    this.setAttribute('text', value)
  }

  #updateUI() {
    if (!this.isDomConnected) {
      return
    }

    this.#messageText.textContent = this.text !== '' ? this.text : 'Sample message'
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-chat-message', RcsChatMessage)

type Props = {
  text?: string,
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-chat-message': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-chat-message': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
