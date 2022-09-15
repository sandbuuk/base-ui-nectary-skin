import '../icons/report-problem'
import '../icons/report'
import '../icons/check-circle'
import '../icons/info'
import '../title'
import '../text'
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
import templateHTML from './template.html'
import { assertType, typeValues } from './utils'
import type { TSinchToastElement, TSinchToastReact, TSinchToastType } from './types'

const TIMEOUT = 5000
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-toast', class extends NectaryElement {
  #$text: HTMLElement
  #tid: number | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('aria-atomic', 'true')
    this.setAttribute('aria-live', 'polite')
    this.addEventListener('-timeout', this.#onTimeoutReactHandler)

    this.#updateTimeout()
  }

  disconnectedCallback() {
    this.removeEventListener('-timeout', this.#onTimeoutReactHandler)
    this.#clearTimeout()
  }

  get type() {
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

  static get observedAttributes() {
    return ['text', 'type', 'persistent']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'type': {
        assertType(newVal)

        break
      }

      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'persistent': {
        this.#updateTimeout()

        break
      }
    }
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
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-toast': TSinchToastReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-toast': TSinchToastElement,
  }
}
