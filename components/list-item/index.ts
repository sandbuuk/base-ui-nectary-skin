import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchListItem } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class ListItem extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'listitem')
  }
}

defineCustomElement('sinch-list-item', ListItem)

declare global {
  interface NectaryComponentMap {
    'sinch-list-item': TSinchListItem,
  }

  interface HTMLElementTagNameMap {
    'sinch-list-item': NectaryComponentVanilla<'sinch-list-item'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-list-item': NectaryComponentReact<'sinch-list-item'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-list-item': NectaryComponentReact<'sinch-list-item'>,
    }
  }
}
