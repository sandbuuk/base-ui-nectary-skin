import {
  defineCustomElement,
  getBooleanAttribute,
  updateBooleanAttribute,
  NectaryElement,
  getLiteralAttribute,
  updateLiteralAttribute,
  isAttrTrue,
  isAttrEqual,
} from '../utils'
import templateHTML from './template.html'
import { typeValues } from './utils'
import type { TSinchTextType, TSinchText } from './types'
import type { NectaryComponentVanilla, NectaryComponentReact } from '../types'

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
    return ['inline', 'ellipsis', 'emphasized']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
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
  interface NectaryComponentMap {
    'sinch-text': TSinchText,
  }

  interface HTMLElementTagNameMap {
    'sinch-text': NectaryComponentVanilla<'sinch-text'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-text': NectaryComponentReact<'sinch-text'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-text': NectaryComponentReact<'sinch-text'>,
    }
  }
}
