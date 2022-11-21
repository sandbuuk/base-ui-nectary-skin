import { defineCustomElement, getLiteralAttribute, NectaryElement, subscribeContext, updateAttribute, updateLiteralAttribute } from '../utils'
import { assertSize, DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html'
import type { TContextSize } from '../utils'
import type { TSinchSize } from '../utils/size'
import type { TSinchSpinnerElement, TSinchSpinnerReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-spinner', class extends NectaryElement {
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
  }

  static get observedAttributes() {
    return ['size', 'data-size']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'size': {
        updateAttribute(this, 'data-size', newVal)

        break
      }
      case 'data-size': {
        if (process.env.NODE_ENV !== 'production') {
          assertSize(newVal, 'sinch-spinner')
        }

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
    if (this.hasAttribute('size')) {
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
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-spinner': TSinchSpinnerReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-spinner': TSinchSpinnerElement,
  }
}
