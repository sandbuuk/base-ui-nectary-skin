import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchSkeletonItemElement, TSinchSkeletonItemReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-skeleton-item', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-skeleton-item': TSinchSkeletonItemElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-skeleton-item': TSinchSkeletonItemReact,
    }
  }
}
