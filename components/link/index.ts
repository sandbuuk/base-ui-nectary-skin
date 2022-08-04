import '../icons/open-in-new'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateBooleanAttribute,
  updateAttribute,
  NectaryElement,
  isAttrTrue,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchLinkElement, TSinchLinkReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-link', class extends NectaryElement {
  #$anchor: HTMLAnchorElement
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$anchor = shadowRoot.querySelector('a')!
    this.#$text = shadowRoot.querySelector('#content')!
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
    return ['text', 'href', 'external', 'disabled']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'disabled': {
        updateBooleanAttribute(this, 'disabled', isAttrTrue(newVal))

        break
      }

      case 'href': {
        updateAttribute(this.#$anchor, 'href', newVal)

        break
      }

      case 'external': {
        const isExternal = isAttrTrue(newVal)

        updateAttribute(this.#$anchor, 'target', isExternal ? '_blank' : null)
        updateBooleanAttribute(this, 'external', isExternal)

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
