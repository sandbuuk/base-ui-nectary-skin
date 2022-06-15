import '../icons/close'
import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

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

export type TSinchAlertCloseElement = HTMLElement & {
  focus(): void,
  blur(): void,
}

export type TSinchAlertCloseReact = TSinchElementReact<TSinchAlertCloseElement> & {
  onClick?: (e: MouseEvent<TSinchAlertCloseElement>) => void,
  onFocus?: (e: FocusEvent<TSinchAlertCloseElement>) => void,
  onBlur?: (e: FocusEvent<TSinchAlertCloseElement>) => void,
}

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
