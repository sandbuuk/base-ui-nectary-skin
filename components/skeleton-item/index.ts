import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { TSinchSkeletonItem } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

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
  interface NectaryComponentMap {
    'sinch-skeleton-item': TSinchSkeletonItem,
  }

  interface HTMLElementTagNameMap {
    'sinch-skeleton-item': NectaryComponentVanilla<'sinch-skeleton-item'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-skeleton-item': NectaryComponentReact<'sinch-skeleton-item'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-skeleton-item': NectaryComponentReact<'sinch-skeleton-item'>,
    }
  }
}
