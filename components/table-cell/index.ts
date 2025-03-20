import {
  defineCustomElement,
  getLiteralAttribute,
  NectaryElement,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { alignValues } from './utils'
import type { TSinchTableAlignType, TSinchTableCell } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-cell', class extends NectaryElement {
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
})

declare global {
  interface NectaryComponentMap {
    'sinch-table-cell': TSinchTableCell,
  }

  interface HTMLElementTagNameMap {
    'sinch-table-cell': NectaryComponentVanilla<'sinch-table-cell'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-cell': NectaryComponentReact<'sinch-table-cell'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-cell': NectaryComponentReact<'sinch-table-cell'>,
    }
  }
}
