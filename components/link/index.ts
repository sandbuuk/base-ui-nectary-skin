import '../icons/cancel'
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

defineCustomElement('sinch-link', class extends NectaryElement {
  #$anchor: HTMLAnchorElement
  #$text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$anchor = shadowRoot.querySelector('a')!
    this.#$text = shadowRoot.querySelector('span')!
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

  focus() {
    this.#$anchor.focus()
  }

  blur() {
    this.#$anchor.blur()
  }
})

export type TSinchLinkElement = HTMLElement & {
  text: string,
  href: string,
  disabled: boolean,
  external: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchLinkReact = TSinchElementReact<TSinchLinkElement> & {
  text: string,
  href: string,
  disabled?: boolean,
  external?: boolean,
  onClick?: (e: MouseEvent<TSinchLinkElement>) => void,
  onFocus?: (e: FocusEvent<TSinchLinkElement>) => void,
  onBlur?: (e: FocusEvent<TSinchLinkElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-link': TSinchLinkReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-link': TSinchLinkElement,
  }
}
