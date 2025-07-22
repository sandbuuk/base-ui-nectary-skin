import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
  updateLiteralAttribute,
  getLiteralAttribute,
  NectaryElement,
  updateBooleanAttribute,
  getBooleanAttribute,
  isAttrTrue,
  isAttrEqual,
} from '../utils'
import templateHTML from './template.html'
import { typeValues } from './utils'
import type { TSinchTitleType, TSinchTitle } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Title extends NectaryElement {
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'heading')
  }

  static get observedAttributes() {
    return ['text', 'level', 'ellipsis']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'level': {
        updateAttribute(this, 'aria-level', newVal)

        break
      }

      case 'ellipsis': {
        if (isAttrEqual(oldVal, newVal)) {
          break
        }

        updateBooleanAttribute(this, 'ellipsis', isAttrTrue(newVal))

        break
      }
    }
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  set type(value: TSinchTitleType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get type(): TSinchTitleType {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set ellipsis(isEllipsis: boolean) {
    updateBooleanAttribute(this, 'ellipsis', isEllipsis)
  }

  get ellipsis() {
    return getBooleanAttribute(this, 'ellipsis')
  }
}

defineCustomElement('sinch-title', Title)

declare global {
  interface NectaryComponentMap {
    'sinch-title': TSinchTitle,
  }

  interface HTMLElementTagNameMap {
    'sinch-title': NectaryComponentVanilla<'sinch-title'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-title': NectaryComponentReact<'sinch-title'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-title': NectaryComponentReact<'sinch-title'>,
    }
  }
}
