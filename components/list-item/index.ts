import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchListItemElement, TSinchListItemReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-list-item', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'listitem')
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-list-item': TSinchListItemElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-list-item': TSinchListItemReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-list-item': TSinchListItemReact,
    }
  }
}
