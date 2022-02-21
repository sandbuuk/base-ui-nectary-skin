import '../icon/close'
import { defineCustomElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-alert-close', class extends HTMLElement {
  #$button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
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
