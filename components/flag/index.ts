import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import { getFlagUrl } from './utils'
import type { TSinchFlagElement, TSinchFlagReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-flag', class extends NectaryElement {
  #$img: HTMLImageElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$img = shadowRoot.querySelector('#image')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#updateCode()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  static get observedAttributes() {
    return ['code']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'code': {
        this.#$img.alt = newVal ?? ''
        this.#updateCode()

        break
      }
    }
  }

  set code(value: string) {
    updateAttribute(this, 'code', value)
  }

  get code() {
    return getAttribute(this, 'code', '')
  }

  #updateCode() {
    if (!this.isDomConnected) {
      return
    }

    this.#$img.src = getFlagUrl(this, this.code)
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-flag': TSinchFlagElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-flag': TSinchFlagReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-flag': TSinchFlagReact,
    }
  }
}
