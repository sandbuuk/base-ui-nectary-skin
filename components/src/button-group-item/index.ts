import {
  defineCustomElement,
  getReactEventHandler,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchButtonGroupItemElement, TSinchButtonGroupItemReact } from './types'
import type { TSinchButtonElement } from '../button/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button-group-item', class extends NectaryElement {
  #$sinchButton: TSinchButtonGroupItemElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$sinchButton = shadowRoot.querySelector('#sinchButton')!
  }

  static get observedAttributes() {
    return ['type', 'size', 'text', 'disabled', 'toggled']
  }

  attributeChangedCallback(name: (keyof TSinchButtonElement), oldVal: string | null, newVal: string | null) {
    // Forward the props to the button
    updateAttribute(this.#$sinchButton, name, newVal)
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.role = 'button'

    const forwardEvent = (e: Event) => this.dispatchEvent(new Event(e.type, { ...e }))

    // Forward events from button up
    this.#$sinchButton.addEventListener('focus', forwardEvent, { signal })
    this.#$sinchButton.addEventListener('blur', forwardEvent, { signal })
    this.#$sinchButton.addEventListener('keydown', forwardEvent, { signal })
    this.#$sinchButton.addEventListener('-focus', () => getReactEventHandler(this, 'on-focus')?.(), { signal })
    this.#$sinchButton.addEventListener('-blur', () => getReactEventHandler(this, 'on-blur')?.(), { signal })
    this.#$sinchButton.addEventListener('-click', (e) => getReactEventHandler(this, 'on-click')?.(e), { signal })
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-group-item': TSinchButtonGroupItemReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button-group-item': TSinchButtonGroupItemElement,
  }
}
