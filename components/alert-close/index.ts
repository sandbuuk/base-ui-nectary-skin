import '../icons/close'
import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchAlertCloseElement, TSinchAlertCloseReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-alert-close', class extends NectaryElement {
  #$button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$button = shadowRoot.querySelector('button')!
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
      'sinch-alert-close': TSinchAlertCloseReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-alert-close': TSinchAlertCloseElement,
  }
}
