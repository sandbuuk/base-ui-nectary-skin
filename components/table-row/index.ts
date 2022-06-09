import {
  defineCustomElement, getBooleanAttribute, updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-row', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
    })

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

export type TSinchTableRowElement = HTMLElement & {
  sticky: boolean,
  selected: boolean,
}

export type TSinchTableRowReact = TSinchElementReact<TSinchTableRowElement> & {
  sticky?: boolean,
  selected?: boolean,
}

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
