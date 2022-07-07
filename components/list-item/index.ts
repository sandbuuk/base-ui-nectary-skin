import '../icons/keyboard-arrow-down'
import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchListItemElement, TSinchListItemReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-list-item', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'listitem')
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-list-item': TSinchListItemReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-list-item': TSinchListItemElement,
  }
}
