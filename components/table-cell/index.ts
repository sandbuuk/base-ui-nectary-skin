import {
  defineCustomElement,
  getLiteralAttribute,
  NectaryElement,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html?raw'
import { alignValues } from './utils'
import type { TSinchTableAlignType } from './types'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class TableCell extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'cell')
  }

  set align(value: TSinchTableAlignType) {
    updateLiteralAttribute(this, alignValues, 'align', value)
  }

  get align(): TSinchTableAlignType {
    return getLiteralAttribute(this, alignValues, 'align', 'start')
  }
}

defineCustomElement('sinch-table-cell', TableCell)
