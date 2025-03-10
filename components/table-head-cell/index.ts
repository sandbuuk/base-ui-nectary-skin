import '../text'
import { alignValues } from '../table-cell/utils'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTableHeaderCellElement, TSinchTableHeaderCellReact } from './types'
import type { TSinchTableAlignType } from '../table-cell/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-head-cell', class extends NectaryElement {
  #$text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'columnheader')
    this.setAttribute('scope', 'col')
  }

  static get observedAttributes() {
    return ['text', 'fit']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'fit': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }
  }

  set text(value: string | null) {
    updateAttribute(this, 'text', value)
  }

  get text(): string | null {
    return getAttribute(this, 'text')
  }

  set align(value: TSinchTableAlignType) {
    updateLiteralAttribute(this, alignValues, 'align', value)
  }

  get align(): TSinchTableAlignType {
    return getLiteralAttribute(this, alignValues, 'align', 'start')
  }

  set fit(isFit: boolean) {
    updateBooleanAttribute(this, 'fit', isFit)
  }

  get fit() {
    return getBooleanAttribute(this, 'fit')
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-table-head-cell': TSinchTableHeaderCellElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-head-cell': TSinchTableHeaderCellReact,
    }
  }
}
