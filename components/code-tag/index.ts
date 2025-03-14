import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchCodeTagElement, TSinchCodeTagReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-code-tag', class extends NectaryElement {
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#content')!
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
    }
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-code-tag': TSinchCodeTagElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-code-tag': TSinchCodeTagReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-code-tag': TSinchCodeTagReact,
    }
  }
}
