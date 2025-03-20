import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-card-container', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

declare global {
  interface NectaryComponentMap {
    'sinch-card-container': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-card-container': NectaryComponentVanilla<'sinch-card-container'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-container': NectaryComponentReact<'sinch-card-container'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-container': NectaryComponentReact<'sinch-card-container'>,
    }
  }
}
