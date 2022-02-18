import {
  defineCustomElement, getLiteralAttribute, updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

const alignValues = ['start', 'center', 'end'] as const

defineCustomElement('sinch-table-cell', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'cell')
  }

  set align(value: TAlignType) {
    updateLiteralAttribute(this, alignValues, 'align', value)
  }

  get align(): TAlignType {
    return getLiteralAttribute(this, alignValues, 'align', 'start')
  }
})

type TAlignType = typeof alignValues[number]

type TSinchTableCellElement = HTMLElement & {
  align: TAlignType,
}

type TSinchTableCellReact = TSinchElementReact<TSinchTableCellElement> & {
  align?: TAlignType,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-cell': TSinchTableCellReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-table-cell': TSinchTableCellElement,
  }
}
