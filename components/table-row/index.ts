import {
  defineCustomElement,
  getBooleanAttribute,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html?raw'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class TableRow extends NectaryElement {
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
}

defineCustomElement('sinch-table-row', TableRow)
