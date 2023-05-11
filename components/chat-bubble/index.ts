import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  NectaryElement,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { statusValues, typeValues } from './utils'
import type { TSinchChatBubbleElement, TSinchChatBubbleReact, TSinchChatBubbleStatus, TSinchChatBubbleType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-chat-bubble', class extends NectaryElement {
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
    }
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  get type(): TSinchChatBubbleType | null {
    return getLiteralAttribute(this, typeValues, 'data-type', null)
  }

  set status(value: TSinchChatBubbleStatus | null) {
    updateLiteralAttribute(this, statusValues, 'status', value)
  }

  get status(): TSinchChatBubbleStatus | null {
    return getLiteralAttribute(this, statusValues, 'status', null)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-chat-bubble': TSinchChatBubbleReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-chat-bubble': TSinchChatBubbleElement,
  }
}
