import {
  NectaryElement,
  defineCustomElement,
  getAttribute,
  getReactEventHandler,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchButtonGroupElement, TSinchButtonGroupReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button-group', class extends NectaryElement {
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return ['value']
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.addEventListener('-change', this.#onChangeReactHandler, options)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  attributeChangedCallback(name: string, _oldVal: string | null, _newVal: string | null) {
    switch (name) {
      case 'value': {
        break
      }
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-group': TSinchButtonGroupReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button-group': TSinchButtonGroupElement,
  }
}
