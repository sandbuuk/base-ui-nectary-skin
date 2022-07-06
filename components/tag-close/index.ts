import '../icons/cancel'
import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

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

export type TSinchTagCloseElement = HTMLElement & {
  focus(): void,
  blur(): void,
}

export type TSinchTagCloseReact = TSinchElementReact<TSinchTagCloseElement>

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
