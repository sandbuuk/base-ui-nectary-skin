import '../icon'
import '../rich-text'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  getReactEventHandler,
  getBooleanAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html?raw'
import { typeValues } from './utils'
import type { TSinchToastType } from './types'

export * from './types'

const TIMEOUT = 5000
const template = document.createElement('template')

template.innerHTML = templateHTML

export class Toast extends NectaryElement {
  #$text: HTMLElement
  #tid: number | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('aria-atomic', 'true')
    this.setAttribute('aria-live', 'polite')
    this.addEventListener('-timeout', this.#onTimeoutReactHandler)

    this.#updateTimeout()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.removeEventListener('-timeout', this.#onTimeoutReactHandler)
    this.#clearTimeout()
  }

  static get observedAttributes() {
    return ['text', 'persistent']
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    switch (name) {
      case 'text': {
        updateAttribute(this.#$text, name, newVal)

        break
      }

      case 'persistent': {
        this.#updateTimeout()

        break
      }
    }
  }

  get type(): TSinchToastType {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set type(value: TSinchToastType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get persistent() {
    return getBooleanAttribute(this, 'persistent')
  }

  set persistent(isPersistent: boolean) {
    updateBooleanAttribute(this, 'persistent', isPersistent)
  }

  #updateTimeout() {
    if (this.persistent) {
      this.#clearTimeout()

      return
    }

    if (this.#tid === null) {
      this.#tid = window.setTimeout(this.#onTimeout, TIMEOUT)
    }
  }

  #onTimeout = () => {
    this.dispatchEvent(new CustomEvent('-timeout'))
  }

  #clearTimeout() {
    if (this.#tid !== null) {
      window.clearTimeout(this.#tid)
      this.#tid = null
    }
  }

  #onTimeoutReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-timeout')?.(e)
    getReactEventHandler(this, 'onTimeout')?.(e)
  }
}

defineCustomElement('sinch-toast', Toast)
