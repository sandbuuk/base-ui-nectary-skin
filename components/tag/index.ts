import '../text'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateBooleanAttribute,
  updateAttribute,
  NectaryElement,
} from '../utils'
import { NO_COLOR } from '../utils/colors'
import templateHTML from './template.html'
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
    this.#updateColor()
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
    return ['text', 'color']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'color': {
        this.#updateColor()

        break
      }

      case 'text': {
        this.#$text.textContent = newVal

        break
      }
    }
  }

  #updateColor() {
    const colorName = this.color ?? NO_COLOR

    if (colorName !== NO_COLOR) {
      this.#$wrapper.style.setProperty('background-color', `var(--sinch-color-map-${colorName}-bg)`)
      this.#$wrapper.style.setProperty('color', `var(--sinch-color-map-${colorName}-fg)`)
      this.#$wrapper.style.setProperty('--sinch-color-icon', `var(--sinch-color-map-${colorName}-fg)`)
    } else {
      this.#$wrapper.style.removeProperty('background-color')
      this.#$wrapper.style.removeProperty('color')
      this.#$wrapper.style.removeProperty('--sinch-color-icon')
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tag': TSinchTagReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tag': TSinchTagElement,
  }
}
