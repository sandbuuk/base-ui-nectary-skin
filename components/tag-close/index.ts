import '../icon/cancel'
import {
  defineCustomElement,
  getBooleanAttribute,
  updateAttribute,
  isAttrTrue,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, MouseEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tag-close', class extends HTMLElement {
  #$icon: HTMLElementTagNameMap['sinch-icon-cancel']
  #$button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$icon = shadowRoot.querySelector('sinch-icon-cancel')!
    this.#$button = shadowRoot.querySelector('button')!
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  set small(isSmall: boolean | undefined) {
    updateAttribute(this, 'small', isSmall)
  }

  static get observedAttributes() {
    return ['small']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'small': {
        updateAttribute(this.#$icon, 'size', isAttrTrue(newVal) ? 12 : 14)

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

export type TSinchTagCloseElement = HTMLElement & {
  small: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchTagCloseReact = TSinchElementReact<TSinchTagCloseElement> & {
  small?: boolean,
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
