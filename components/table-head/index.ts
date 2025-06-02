import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-head', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'rowgroup')
  }
})

declare global {
  interface NectaryComponentMap {
    'sinch-table-head': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-table-head': NectaryComponentVanilla<'sinch-table-head'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-head': NectaryComponentReact<'sinch-table-head'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-table-head': NectaryComponentReact<'sinch-table-head'>,
    }
  }
}
