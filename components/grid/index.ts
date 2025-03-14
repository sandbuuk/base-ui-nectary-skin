import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchGridElement, TSinchGridReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-grid', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-grid': TSinchGridElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-grid': TSinchGridReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-grid': TSinchGridReact,
    }
  }
}
