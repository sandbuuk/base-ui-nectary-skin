import '../text'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateBooleanAttribute,
  updateAttribute,
  NectaryElement,
  isAttrTrue,
  isAttrEqual,
} from '../utils'
import templateHTML from './template.html'
import { getTagColorBg, getTagColorFg } from './utils'
import type { TSinchTagElement, TSinchTagReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tag', class extends NectaryElement {
  #$text: HTMLElement
  #$wrapper: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#updateColor()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  get color() {
    return getAttribute(this, 'color')
  }

  set color(value: string | null) {
    updateAttribute(this, 'color', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  static get observedAttributes() {
    return ['text', 'color', 'small']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'color': {
        this.#updateColor()

        break
      }

      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'small': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }
  }

  #updateColor() {
    if (!this.isDomConnected) {
      return
    }

    const colorName = this.color

    if (colorName !== null && colorName.length > 0) {
      const bg = getTagColorBg(colorName)
      const fg = getTagColorFg(colorName)

      this.#$wrapper.style.setProperty('background-color', bg)
      this.#$wrapper.style.setProperty('--sinch-global-color-text', fg)
      this.#$wrapper.style.setProperty('--sinch-global-color-icon', fg)
    } else {
      this.#$wrapper.style.removeProperty('background-color')
      this.#$wrapper.style.removeProperty('--sinch-global-color-text')
      this.#$wrapper.style.removeProperty('--sinch-global-color-icon')
    }
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-tag': TSinchTagElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tag': TSinchTagReact,
    }
  }
}
