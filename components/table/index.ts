import {
  defineCustomElement, NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Table extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'table')
  }
}

defineCustomElement('sinch-table', Table)

declare global {
  interface NectaryComponentMap {
    'sinch-table': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-table': NectaryComponentVanilla<'sinch-table'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-table': NectaryComponentReact<'sinch-table'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-table': NectaryComponentReact<'sinch-table'>,
    }
  }
}
