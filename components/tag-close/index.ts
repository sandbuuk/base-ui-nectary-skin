import '../icons/cancel'
import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTagCloseElement, TSinchTagCloseReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tag-close', class extends NectaryElement {
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
      'sinch-tag-close': TSinchTagCloseReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tag-close': TSinchTagCloseElement,
  }
}
