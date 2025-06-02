import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import { getEmojiBaseUrl, getEmojiUrl } from './utils'
import type { TSinchEmoji } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-emoji', class extends NectaryElement {
  #$img: HTMLImageElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$img = shadowRoot.querySelector('#image')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#updateChar()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  static get observedAttributes() {
    return ['char']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'char': {
        this.#$img.alt = newVal ?? ''
        this.#updateChar()

        break
      }
    }
  }

  set char(value: string) {
    updateAttribute(this, 'char', value)
  }

  get char() {
    return getAttribute(this, 'char', '')
  }

  #updateChar() {
    if (!this.isDomConnected) {
      return
    }

    this.#$img.src = getEmojiUrl(getEmojiBaseUrl(this), this.char)
  }
})

declare global {
  interface NectaryComponentMap {
    'sinch-emoji': TSinchEmoji,
  }

  interface HTMLElementTagNameMap {
    'sinch-emoji': NectaryComponentVanilla<'sinch-emoji'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-emoji': NectaryComponentReact<'sinch-emoji'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-emoji': NectaryComponentReact<'sinch-emoji'>,
    }
  }
}
