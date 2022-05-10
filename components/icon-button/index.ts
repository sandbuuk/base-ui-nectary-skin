import {
  defineCustomElement,
  getBooleanAttribute,
  isAttrTrue,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-icon-button', class extends HTMLElement {
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

  connectedCallback() {
    this.setAttribute('role', 'button')
  }

  static get observedAttributes() {
    return ['disabled']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'disabled': {
        this.#$button.disabled = isAttrTrue(newVal)

        break
      }
    }
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }
})

export type TSinchIconButtonElement = HTMLElement & {
  disabled: boolean,
  small: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchIconButtonReact = TSinchElementReact<TSinchIconButtonElement> & {
  'aria-label': string,
  disabled?: boolean,
  small?: boolean,
  onClick: (e: MouseEvent<TSinchIconButtonElement>) => void,
  onFocus?: (e: FocusEvent<TSinchIconButtonElement>) => void,
  onBlur?: (e: FocusEvent<TSinchIconButtonElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-button': TSinchIconButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-button': TSinchIconButtonElement,
  }
}
