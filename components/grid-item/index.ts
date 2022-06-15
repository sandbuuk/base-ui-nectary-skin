import { defineCustomElement, getIntegerAttribute, NectaryElement, updateIntegerAttribute } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-grid-item', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  get s() {
    return getIntegerAttribute(this, 's', null)
  }

  set s(value: number | null) {
    updateIntegerAttribute(this, 's', value)
  }

  get m() {
    return getIntegerAttribute(this, 'm', null)
  }

  set m(value: number | null) {
    updateIntegerAttribute(this, 'm', value)
  }

  get l() {
    return getIntegerAttribute(this, 'l', null)
  }

  set l(value: number | null) {
    updateIntegerAttribute(this, 'l', value)
  }

  get xl() {
    return getIntegerAttribute(this, 'xl', null)
  }

  set xl(value: number | null) {
    updateIntegerAttribute(this, 'xl', value)
  }
})

export type TSinchGridElement = HTMLElement & {
  xl: number | null,
  l: number | null,
  m: number | null,
  s: number | null,
}

export type TSinchGridReact = TSinchElementReact<TSinchGridElement> & {
  xl?: number,
  l?: number,
  m?: number,
  s?: number,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-grid-item': TSinchGridReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-grid-item': TSinchGridElement,
  }
}
