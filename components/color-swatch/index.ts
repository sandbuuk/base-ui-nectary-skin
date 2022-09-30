import '../icons/cancel'
import '../text'
import {
  defineCustomElement,
  getLiteralAttribute,
  updateLiteralAttribute,
  NectaryElement,
  setClass,
} from '../utils'
import { assertColorNameValue, colorMap, colorNameValues, NO_COLOR } from '../utils/colors'
import templateHTML from './template.html'
import type { TSinchColorName } from '../utils/colors'
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
    return getLiteralAttribute(this, colorNameValues, 'name', NO_COLOR)
  }

  set name(value: TSinchColorName) {
    updateLiteralAttribute(this, colorNameValues, 'name', value)
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
        assertColorNameValue(newVal)

        this.#updateColor()

        break
      }
    }
  }

  #updateColor() {
    const colorName = this.name

    if (colorName !== NO_COLOR) {
      this.#$wrapper.style.backgroundColor = `var(--sinch-color-${colorMap[colorName].value})`
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
