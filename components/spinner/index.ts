import { defineCustomElement, getLiteralAttribute, NectaryElement, updateLiteralAttribute } from '../utils'
import templateHTML from './template.html'
import { spinnerTypes } from './utils'
import type { TSinchSpinnerElement, TSinchSpinnerReact, TSinchSpinnerType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-spinner', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('aria-live', 'polite')
    this.setAttribute('aria-busy', 'true')
  }

  set type(value: TSinchSpinnerType) {
    updateLiteralAttribute(this, spinnerTypes, 'type', value)
  }

  get type(): TSinchSpinnerType {
    return getLiteralAttribute(this, spinnerTypes, 'type', 'medium')
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-spinner': TSinchSpinnerReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-spinner': TSinchSpinnerElement,
  }
}
