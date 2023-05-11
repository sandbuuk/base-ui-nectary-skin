import {
  defineCustomElement,
  NectaryElement,
  getLiteralAttribute,
  updateLiteralAttribute,
  getAttribute,
  updateAttribute,
  parseMarkdown,
} from '../utils'
import templateHTML from './template.html'
import { sizeValues } from './utils'
import type { TSinchRichTextElement, TSinchRichTextReact } from './types'
import type { TSinchTextType } from '../text/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-rich-text', class extends NectaryElement {
  #wrapper: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#wrapper = shadowRoot.querySelector('#wrapper')!
  }

  connectedCallback() {
    this.setAttribute('role', 'paragraph')
  }

  get size() {
    return getLiteralAttribute(this, sizeValues, 'size', 'm')
  }

  set size(value: TSinchTextType) {
    updateLiteralAttribute(this, sizeValues, 'size', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#updateText(newVal)

        break
      }
    }
  }

  #updateText(text: string | null) {
    if (text === null) {
      this.#wrapper.innerHTML = ''

      return
    }

    this.#wrapper.innerHTML = parseMarkdown(text)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-rich-text': TSinchRichTextReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-rich-text': TSinchRichTextElement,
  }
}
