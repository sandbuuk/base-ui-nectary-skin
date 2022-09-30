import '../text'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  getLiteralAttribute,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  setClass,
} from '../utils'
import { assertColorNameValue, colorMap, colorNameValues, NO_COLOR } from '../utils/colors'
import templateHTML from './template.html'
import type { TSinchColorName } from '../utils/colors'
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
    return getLiteralAttribute(this, colorNameValues, 'color', null)
  }

  set color(value: TSinchColorName | null) {
    updateLiteralAttribute(this, colorNameValues, 'color', value)
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
        assertColorNameValue(newVal)
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
    const { value, isInverted } = colorMap[colorName]

    if (value !== NO_COLOR) {
      this.#$wrapper.style.backgroundColor = `var(--sinch-color-${value})`
    }

    setClass(this.#$wrapper, 'no-color', value === NO_COLOR)
    setClass(this.#$wrapper, 'inverted', isInverted)
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
