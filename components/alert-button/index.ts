import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

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

export type TSinchAlertButtonElement = HTMLElement & {
  text: string,
  focus(): void,
  blur(): void,
}

export type TSinchAlertButtonReact = TSinchElementReact<TSinchAlertButtonElement> & {
  text: string,
  onClick?: (e: MouseEvent<TSinchAlertButtonElement>) => void,
  onFocus?: (e: FocusEvent<TSinchAlertButtonElement>) => void,
  onBlur?: (e: FocusEvent<TSinchAlertButtonElement>) => void,
}

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
