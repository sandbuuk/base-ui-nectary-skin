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
import { typeValues } from './utils'
import type { TSinchAlertElement, TSinchAlertReact, TSinchAlertType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-alert', class extends NectaryElement {
  #$text: HTMLParagraphElement
  #$caption: HTMLParagraphElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
    this.#$caption = shadowRoot.querySelector('#caption')!
  }

  get type() {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set type(value: TSinchAlertType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get caption() {
    return getAttribute(this, 'caption', '')
  }

  set caption(value: string) {
    updateAttribute(this, 'caption', value)
  }

  get multiline() {
    return getBooleanAttribute(this, 'multiline')
  }

  set multiline(isMultiline: boolean | undefined) {
    updateBooleanAttribute(this, 'multiline', isMultiline)
  }

  static get observedAttributes() {
    return ['text', 'caption']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'caption': {
        this.#$caption.textContent = newVal

        break
      }
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-alert': TSinchAlertReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-alert': TSinchAlertElement,
  }
}
