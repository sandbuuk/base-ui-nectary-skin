import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchButtonElement } from '../button/types'
import type { TSinchCardButtonElement, TSinchCardButtonReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-card-button', class extends NectaryElement {
  #$button: TSinchButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('sinch-button')!
  }

  connectedCallback() {
    this.setAttribute('role', 'button')
  }

  static get observedAttributes() {
    return ['text', 'disabled']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        updateAttribute(this.#$button, 'text', newVal)

        break
      }
      case 'disabled': {
        updateAttribute(this.#$button, 'disabled', newVal)

        break
      }
    }
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set disabled(isDisabled: boolean) {
    updateAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
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
      'sinch-card-button': TSinchCardButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-card-button': TSinchCardButtonElement,
  }
}
