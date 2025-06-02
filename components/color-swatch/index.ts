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
import type { TSinchColorSwatch } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

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

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(name: string) {
    switch (name) {
      case 'name': {
        this.#updateColor()

        break
      }
    }
  }

  get name() {
    return getAttribute(this, 'name')
  }

  set name(value: string | null) {
    updateAttribute(this, 'name', value)
  }

  #updateColor() {
    if (!this.isDomConnected) {
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
  interface NectaryComponentMap {
    'sinch-color-swatch': TSinchColorSwatch,
  }

  interface HTMLElementTagNameMap {
    'sinch-color-swatch': NectaryComponentVanilla<'sinch-color-swatch'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-color-swatch': NectaryComponentReact<'sinch-color-swatch'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-color-swatch': NectaryComponentReact<'sinch-color-swatch'>,
    }
  }
}
