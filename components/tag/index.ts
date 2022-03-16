import '../icon/cancel'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  getLiteralAttribute,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const categoryValues = ['candy', 'bolt', 'aqua', 'grass', 'berry', 'orange', 'night', 'mud', 'dirt'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tag', class extends HTMLElement {
  #$text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  get category() {
    return getLiteralAttribute(this, categoryValues, 'category', null)
  }

  set category(value: TSinchTagCategory | null) {
    updateLiteralAttribute(this, categoryValues, 'category', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get inverted() {
    return getBooleanAttribute(this, 'inverted')
  }

  set inverted(isInverted: boolean) {
    updateBooleanAttribute(this, 'inverted', isInverted)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
    }
  }
})

export type TSinchTagCategory = typeof categoryValues[number]

export type TSinchTagElement = HTMLElement & {
  category: TSinchTagCategory | null,
  text: string,
  inverted: boolean,
  small: boolean,
}

export type TSinchTagReact = TSinchElementReact<TSinchTagElement> & {
  category?: TSinchTagCategory,
  text: string,
  inverted?: boolean,
  small?: boolean,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tag': TSinchTagReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tag': TSinchTagElement,
  }
}
