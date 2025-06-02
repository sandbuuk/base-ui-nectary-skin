import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

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
  interface NectaryComponentMap {
    'sinch-list': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-list': NectaryComponentVanilla<'sinch-list'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-list': NectaryComponentReact<'sinch-list'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-list': NectaryComponentReact<'sinch-list'>,
    }
  }
}
