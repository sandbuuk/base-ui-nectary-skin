import { defineCustomElement, getLiteralAttribute, updateLiteralAttribute } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const spinnerTypes = ['large', 'medium', 'small'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-spinner', class extends HTMLElement {
  $svg: SVGElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$svg = shadowRoot.querySelector('svg')!
  }

  set type(value: TSinchSpinnerType) {
    updateLiteralAttribute(this, spinnerTypes, 'type', value)
  }

  get type(): TSinchSpinnerType {
    return getLiteralAttribute(this, spinnerTypes, 'type', 'medium')
  }

  connectedCallback() {
    if (!this.$svg.hasAttribute('preserveAspectRatio')) {
      this.$svg.setAttribute('preserveAspectRatio', 'xMinYMin meet')
    }
  }
})

type TSinchSpinnerType = typeof spinnerTypes[number]

type TSinchSpinnerElement = HTMLElement & {
  type: TSinchSpinnerType,
}

type TSinchSpinnerReact = TSinchElementReact<TSinchSpinnerElement> & {
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
