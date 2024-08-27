import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-icon', class extends NectaryElement {
  #$icon: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$icon = shadowRoot.querySelector('#icon')!
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'name': {
        this.#$icon.textContent = newVal
        updateAttribute(this.#$icon, 'aria-label', newVal)

        break
      }
    }
  }

  set name(value: string) {
    updateAttribute(this, 'name', value)
  }

  get name() {
    return getAttribute(this, 'name', '')
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon': TSinchIconElement,
  }
}
