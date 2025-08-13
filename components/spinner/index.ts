import {
  defineCustomElement,
  getLiteralAttribute,
  NectaryElement,
  subscribeContext,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import { DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html?raw'
import type { TContextSize } from '../utils'
import type { TSinchSize } from '../utils/size'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Spinner extends NectaryElement {
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.#controller = new AbortController()

    this.setAttribute('aria-live', 'polite')
    this.setAttribute('aria-busy', 'true')
    subscribeContext(this, 'size', this.#onContextSize, this.#controller.signal)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['size']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'size': {
        updateAttribute(this, 'data-size', newVal)

        break
      }
    }
  }

  set size(size: TSinchSize) {
    updateLiteralAttribute(this, sizeValues, 'size', size)
  }

  get size(): TSinchSize {
    return getLiteralAttribute(this, sizeValues, 'size', DEFAULT_SIZE)
  }

  #onContextSize = (e: CustomEvent<TContextSize>) => {
    if (this.hasAttribute('size') === true) {
      return
    }

    switch (e.detail) {
      case 'l':
      case 'm': {
        this.setAttribute('data-size', 'm')

        break
      }
      default: {
        this.setAttribute('data-size', 's')
      }
    }
  }
}

defineCustomElement('sinch-spinner', Spinner)
