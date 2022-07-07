import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchAlertButtonElement, TSinchAlertButtonReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-alert-button', class extends NectaryElement {
  #$button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('button')!
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$button.textContent = newVal

        break
      }
    }
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-alert-button': TSinchAlertButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-alert-button': TSinchAlertButtonElement,
  }
}
