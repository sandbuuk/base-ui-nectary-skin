import '../icons/cancel'
import '../text'
import {
  defineCustomElement,
  NectaryElement,
  setClass,
  getAttribute,
  updateAttribute,
} from '../utils'
import { NO_COLOR } from '../utils/colors'
import templateHTML from './template.html'
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
    this.#updateColor()
  }

  get name() {
    return getAttribute(this, 'name', NO_COLOR)
  }

  set name(value: string) {
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
    const colorName = this.name

    if (colorName !== NO_COLOR) {
      this.#$wrapper.style.setProperty('background-color', `var(--sinch-color-map-${colorName}-bg)`)
    } else {
      this.#$wrapper.style.removeProperty('background-color')
    }

    setClass(this.#$wrapper, 'no-color', colorName === NO_COLOR)
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
