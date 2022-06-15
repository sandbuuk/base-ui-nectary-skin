import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchButtonElement } from '../button'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

export const isSinchCardButtonElement = (el: Element): el is TSinchCardButtonElement => {
  return el.tagName === 'SINCH-CARD-BUTTON'
}

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

export type TSinchCardButtonElement = HTMLElement & {
  text: string,
  disabled: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchCardButtonReact = TSinchElementReact<TSinchCardButtonElement> & {
  text: string,
  'aria-label': string,
  disabled?: boolean,
  onClick: (e: MouseEvent<TSinchCardButtonElement>) => void,
  onFocus?: (e: FocusEvent<TSinchCardButtonElement>) => void,
  onBlur?: (e: FocusEvent<TSinchCardButtonElement>) => void,
}

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
