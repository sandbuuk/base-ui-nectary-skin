import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchListElement, TSinchListReact } from './types'

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

declare global {
  interface HTMLElementTagNameMap {
    'sinch-list': TSinchListElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-list': TSinchListReact,
    }
  }
}
