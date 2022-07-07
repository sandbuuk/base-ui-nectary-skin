import {
  defineCustomElement,
  getBooleanAttribute,
  NectaryElement,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTableRowElement, TSinchTableRowReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-row', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'row')
  }

  set sticky(isSticky: boolean) {
    updateBooleanAttribute(this, 'sticky', isSticky)
  }

  get sticky() {
    return getBooleanAttribute(this, 'sticky')
  }

  set selected(isSelected: boolean) {
    updateBooleanAttribute(this, 'selected', isSelected)
  }

  get selected() {
    return getBooleanAttribute(this, 'selected')
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-row': TSinchTableRowReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-table-row': TSinchTableRowElement,
  }
}
