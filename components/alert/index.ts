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
import templateHTML from './template.html?raw'
import { typeValues } from './utils'
import type { TSinchAlertType } from './types'

export * from './types'

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
