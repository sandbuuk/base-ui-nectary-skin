import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class CardContainer extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

defineCustomElement('sinch-card-container', CardContainer)

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
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-card-container': NectaryComponentReact<'sinch-card-container'>,
    }
  }
}
