import { defineCustomElement, getLiteralAttribute, updateLiteralAttribute } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const spinnerTypes = ['large', 'medium', 'small'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-spinner', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('aria-live', 'polite')
    this.setAttribute('aria-busy', 'true')
  }

  set type(value: TSinchSpinnerType) {
    updateLiteralAttribute(this, spinnerTypes, 'type', value)
  }

  get type(): TSinchSpinnerType {
    return getLiteralAttribute(this, spinnerTypes, 'type', 'medium')
  }
})

export type TSinchSpinnerType = typeof spinnerTypes[number]

export type TSinchSpinnerElement = HTMLElement & {
  type: TSinchSpinnerType,
}

export type TSinchSpinnerReact = TSinchElementReact<TSinchSpinnerElement> & {
  type?: TSinchSpinnerType,
  static?: boolean,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-spinner': TSinchSpinnerReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-spinner': TSinchSpinnerElement,
  }
}
