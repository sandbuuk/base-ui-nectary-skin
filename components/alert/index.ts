import '../icon'
import '../rich-text'
import '../text'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import { typeValues } from './utils'
import type { TSinchAlertType, TSinchAlert } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Alert extends NectaryElement {
  #$text: HTMLParagraphElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'alert')
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(
    name: string,
    _: string | null,
    newVal: string | null
  ) {
    switch (name) {
      case 'text': {
        updateAttribute(this.#$text, 'text', newVal)

        break
      }
    }
  }

  get type(): TSinchAlertType {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set type(value: TSinchAlertType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }
}

defineCustomElement('sinch-alert', Alert)

declare global {
  interface NectaryComponentMap {
    'sinch-alert': TSinchAlert,
  }

  interface HTMLElementTagNameMap {
    'sinch-alert': NectaryComponentVanilla<'sinch-alert'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-alert': NectaryComponentReact<'sinch-alert'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-alert': NectaryComponentReact<'sinch-alert'>,
    }
  }
}
