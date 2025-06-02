import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchGrid } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

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
  interface NectaryComponentMap {
    'sinch-grid': TSinchGrid,
  }

  interface HTMLElementTagNameMap {
    'sinch-grid': NectaryComponentVanilla<'sinch-grid'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-grid': NectaryComponentReact<'sinch-grid'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-grid': NectaryComponentReact<'sinch-grid'>,
    }
  }
}
