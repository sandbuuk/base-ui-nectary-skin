import '../icons/cancel'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateBooleanAttribute,
  updateAttribute,
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
  #$text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', getBooleanAttribute(this, 'inline') ? 'text' : 'paragraph')
    assertType(this.getAttribute('type'))
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
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

  set emphasized(isEmphasized: boolean) {
    updateBooleanAttribute(this, 'emphasized', isEmphasized)
  }

  get emphasized() {
    return getBooleanAttribute(this, 'emphasized')
  }

  static get observedAttributes() {
    return ['text', 'type', 'inline']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }

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
