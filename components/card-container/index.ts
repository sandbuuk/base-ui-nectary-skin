import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchCardContainerElement, TSinchCardContainerReact } from './types'

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
  interface HTMLElementTagNameMap {
    'sinch-card-container': TSinchCardContainerElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-container': TSinchCardContainerReact,
    }
  }
}
