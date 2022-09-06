import '../icons/cancel'
import {
  defineCustomElement,
  getBooleanAttribute,
  updateBooleanAttribute,
  NectaryElement,
  getLiteralAttribute,
  updateLiteralAttribute,
  isAttrTrue,
} from '../utils'
import templateHTML from './template.html'
import { assertType, typeValues } from './utils'
import type { TSinchTextElement, TSinchTextReact, TSinchTextType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-text', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', getBooleanAttribute(this, 'inline') ? 'text' : 'paragraph')

    // Dont assert here
    // Angular sets attributes after connect
  }

  get type() {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set type(value: TSinchTextType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  set inline(isInline: boolean) {
    updateBooleanAttribute(this, 'inline', isInline)
  }

  get inline() {
    return getBooleanAttribute(this, 'inline')
  }

  set ellipsis(isEllipsis: boolean) {
    updateBooleanAttribute(this, 'ellipsis', isEllipsis)
  }

  get ellipsis() {
    return getBooleanAttribute(this, 'ellipsis')
  }

  set emphasized(isEmphasized: boolean) {
    updateBooleanAttribute(this, 'emphasized', isEmphasized)
  }

  get emphasized() {
    return getBooleanAttribute(this, 'emphasized')
  }

  static get observedAttributes() {
    return ['type', 'inline']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'type': {
        assertType(newVal)

        break
      }

      case 'inline': {
        this.setAttribute('role', isAttrTrue(newVal) ? 'text' : 'paragraph')

        break
      }
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-text': TSinchTextReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-text': TSinchTextElement,
  }
}
