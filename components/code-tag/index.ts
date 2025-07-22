import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchCodeTag } from './types'
import type { NectaryComponentVanilla, NectaryComponentReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class CodeTag extends NectaryElement {
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
}

defineCustomElement('sinch-code-tag', CodeTag)

declare global {
  interface NectaryComponentMap {
    'sinch-code-tag': TSinchCodeTag,
  }

  interface HTMLElementTagNameMap {
    'sinch-code-tag': NectaryComponentVanilla<'sinch-code-tag'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-code-tag': NectaryComponentReact<'sinch-code-tag'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-code-tag': NectaryComponentReact<'sinch-code-tag'>,
    }
  }
}
