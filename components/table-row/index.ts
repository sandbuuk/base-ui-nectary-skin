import {
  defineCustomElement,
  getBooleanAttribute,
  isAttrEqual,
  isAttrTrue,
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

  static get observedAttributes() {
    return ['sticky', 'selected']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'sticky':
      case 'selected': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }
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
  interface HTMLElementTagNameMap {
    'sinch-table-row': TSinchTableRowElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-row': TSinchTableRowReact,
    }
  }
}
