import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import { getEmojiUrl } from './utils'
import type { TSinchEmojiElement, TSinchEmojiReact } from './types'

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
    if (!this.isConnected) {
      return
    }

    this.#$img.src = getEmojiUrl(this, this.char)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-emoji': TSinchEmojiReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-emoji': TSinchEmojiElement,
  }
}
