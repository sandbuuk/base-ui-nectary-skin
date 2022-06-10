import '../icons/cancel'
import {
  defineCustomElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tag-close', class extends HTMLElement {
  #$button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

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

export type TSinchTagCloseReact = TSinchElementReact<TSinchTagCloseElement> & {
  onClick?: (e: MouseEvent<TSinchTagCloseElement>) => void,
  onFocus?: (e: FocusEvent<TSinchTagCloseElement>) => void,
  onBlur?: (e: FocusEvent<TSinchTagCloseElement>) => void,
}

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
