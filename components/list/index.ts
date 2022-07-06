import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-list', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'list')
  }
})

export type TSinchListElement = HTMLElement

export type TSinchListReact = TSinchElementReact<TSinchListElement>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-list': TSinchListReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-list': TSinchListElement,
  }
}
