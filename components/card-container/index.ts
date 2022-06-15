import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-card-container', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

export type TSinchCardContainerElement = HTMLElement & {
}

export type TSinchCardContainerReact = TSinchElementReact<TSinchCardContainerElement> & {
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-container': TSinchCardContainerReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-card-container': TSinchCardContainerElement,
  }
}
