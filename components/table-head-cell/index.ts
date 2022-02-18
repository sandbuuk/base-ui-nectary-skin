import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

const alignValues = ['start', 'center', 'end'] as const

defineCustomElement('sinch-table-head-cell', class extends HTMLElement {
  #$text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'columnheader')
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
    }
  }

  set text(value: string | null) {
    updateAttribute(this, 'text', value)
  }

  get text(): string | null {
    return getAttribute(this, 'text', null)
  }

  set align(value: TAlignType) {
    updateLiteralAttribute(this, alignValues, 'align', value)
  }

  get align(): TAlignType {
    return getLiteralAttribute(this, alignValues, 'align', 'start')
  }
})

type TAlignType = typeof alignValues[number]

type TSinchTableHeaderCellElement = HTMLElement & {
  text: string | null,
  align: TAlignType,
}

type TSinchTableHeaderCellReact = TSinchElementReact<TSinchTableHeaderCellElement> & {
  text?: string,
  align?: TAlignType,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-head-cell': TSinchTableHeaderCellReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-table-head-cell': TSinchTableHeaderCellElement,
  }
}
