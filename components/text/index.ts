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
    this.#updateRole()
  }

  static get observedAttributes() {
    return ['type', 'inline', 'ellipsis', 'emphasized']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'type': {
        if (process.env.NODE_ENV !== 'production') {
          assertType(newVal)
        }

        break
      }

      case 'inline': {
        this.#updateRole()
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }

      case 'ellipsis':
      case 'emphasized': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }
  }

  get type(): TSinchTextType {
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

  #updateRole() {
    this.setAttribute(
      'role',
      getBooleanAttribute(this, 'inline')
        ? 'text'
        : 'paragraph'
    )
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
