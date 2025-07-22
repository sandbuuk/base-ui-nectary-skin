import {
  defineCustomElement, NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { NectaryComponentVanilla, NectaryComponentReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class TableBody extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'rowgroup')
  }
}

defineCustomElement('sinch-table-body', TableBody)

declare global {
  interface NectaryComponentMap {
    'sinch-table-body': {},
  }

  interface HTMLElementTagNameMap {
    'sinch-table-body': NectaryComponentVanilla<'sinch-table-body'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-body': NectaryComponentReact<'sinch-table-body'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-table-body': NectaryComponentReact<'sinch-table-body'>,
    }
  }
}
