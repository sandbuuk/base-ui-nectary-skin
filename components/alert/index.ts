import '../icon'
import '../rich-text'
import '../text'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  getCssVar,
} from '../utils'
import templateHTML from './template.html'
import { assertType, typeValues } from './utils'
import type { TSinchAlertElement, TSinchAlertReact, TSinchAlertType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-alert', class extends NectaryElement {
  #$text: HTMLParagraphElement
  #$icon: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
    this.#$icon = shadowRoot.querySelector('#icon')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'alert')
    this.#updateIcon()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
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

  static get observedAttributes() {
    return ['text', 'type']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'type': {
        if (process.env.NODE_ENV !== 'production') {
          assertType(newVal)
        }

        this.#updateIcon()

        break
      }

      case 'text': {
        updateAttribute(this.#$text, 'text', newVal)

        break
      }
    }
  }

  #updateIcon() {
    if (!this.isConnected) {
      return
    }

    updateAttribute(this.#$icon, 'name', getCssVar(this, `--sinch-alert-icon-${this.type}`))
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
