import '../icons/cancel'
import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
  updateLiteralAttribute,
  getLiteralAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import { assertLevel, assertType, typeValues } from './utils'
import type { TSinchTitleElement, TSinchTitleReact, TSinchTitleType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-title', class extends NectaryElement {
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'heading')

    // Dont assert here
    // Angular sets attributes after connect
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  set type(value: TSinchTitleType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get type(): TSinchTitleType {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  static get observedAttributes() {
    return ['text', 'type', 'level']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'level': {
        assertLevel(newVal)
        updateAttribute(this, 'aria-level', newVal)

        break
      }

      case 'type': {
        assertType(newVal)

        break
      }
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-title': TSinchTitleReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-title': TSinchTitleElement,
  }
}
