import '../icons/arrow-forward'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateBooleanAttribute,
  updateAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-card-link', class extends NectaryElement {
  #$anchor: HTMLAnchorElement
  #$text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$anchor = shadowRoot.querySelector('a')!
    this.#$text = shadowRoot.querySelector('span')!
  }

  connectedCallback() {
    this.#$anchor.addEventListener('click', this.#onClick)
  }

  disconnectedCallback() {
    this.#$anchor.removeEventListener('click', this.#onClick)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get href() {
    return getAttribute(this, 'href', '')
  }

  set href(value: string) {
    updateAttribute(this, 'href', value)
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set external(isExternal: boolean) {
    updateBooleanAttribute(this, 'external', isExternal)
  }

  get external() {
    return getBooleanAttribute(this, 'external')
  }

  static get observedAttributes() {
    return ['text', 'href']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'href': {
        updateAttribute(this.#$anchor, 'href', newVal)

        break
      }
    }
  }

  #onClick = (e: Event) => {
    if (this.disabled) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  focus() {
    this.#$anchor.focus()
  }

  blur() {
    this.#$anchor.blur()
  }
})

export type TSinchCardLinkElement = HTMLElement & {
  text: string,
  href: string,
  disabled: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchCardLinkReact = TSinchElementReact<TSinchCardLinkElement> & {
  text: string,
  href: string,
  disabled?: boolean,
  onClick?: (e: MouseEvent<TSinchCardLinkElement>) => void,
  onFocus?: (e: FocusEvent<TSinchCardLinkElement>) => void,
  onBlur?: (e: FocusEvent<TSinchCardLinkElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-link': TSinchCardLinkReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-card-link': TSinchCardLinkElement,
  }
}
