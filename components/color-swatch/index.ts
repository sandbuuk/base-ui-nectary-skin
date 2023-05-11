import '../text'
import {
  defineCustomElement,
  NectaryElement,
  setClass,
  getAttribute,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import { getSwatchColorBg } from './utils'
import type { TSinchColorSwatchElement, TSinchColorSwatchReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-color-swatch', class extends NectaryElement {
  #$wrapper: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#updateColor()
  }

  get name() {
    return getAttribute(this, 'name')
  }

  set name(value: string | null) {
    updateAttribute(this, 'name', value)
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(name: string, oldValue: string | null, newVal: string | null) {
    if (oldValue === newVal) {
      return
    }

    switch (name) {
      case 'name': {
        this.#updateColor()

        break
      }
    }
  }

  #updateColor() {
    if (!this.isConnected) {
      return
    }

    const colorName = this.name

    if (colorName !== null && colorName.length > 0) {
      const bg = getSwatchColorBg(colorName)

      this.#$wrapper.style.setProperty('background-color', bg)
      setClass(this.#$wrapper, 'no-color', false)
    } else {
      this.#$wrapper.style.removeProperty('background-color')
      setClass(this.#$wrapper, 'no-color', true)
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-color-swatch': TSinchColorSwatchReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-color-swatch': TSinchColorSwatchElement,
  }
}
