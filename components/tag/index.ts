import '../icons/cancel'
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
} from '../utils'
import templateHTML from './template.html'
import { assertCategoryValue, categoryValues } from './utils'
import type { TSinchTagCategory, TSinchTagElement, TSinchTagReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tag', class extends NectaryElement {
  #$text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  get category() {
    return getLiteralAttribute(this, categoryValues, 'category', null)
  }

  set category(value: TSinchTagCategory | null) {
    updateLiteralAttribute(this, categoryValues, 'category', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get inverted() {
    return getBooleanAttribute(this, 'inverted')
  }

  set inverted(isInverted: boolean) {
    updateBooleanAttribute(this, 'inverted', isInverted)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  static get observedAttributes() {
    return ['text', 'category']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'category': {
        assertCategoryValue(newVal)

        break
      }

      case 'text': {
        this.#$text.textContent = newVal

        break
      }
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
