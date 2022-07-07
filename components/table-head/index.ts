import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTableHeadElement, TSinchTableHeadReact } from './types'

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
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-head': TSinchTableHeadReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-table-head': TSinchTableHeadElement,
  }
}
