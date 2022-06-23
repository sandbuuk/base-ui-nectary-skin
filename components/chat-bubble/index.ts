import '../icons/query-builder'
import '../icons/check'
import '../icons/done-all'
import '../icons/error-outline'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  NectaryElement,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

export const typeValues = ['customer', 'agent', 'agent-prev'] as const
const statusValues = ['sending', 'sent', 'received', 'seen', 'error'] as const

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

export type TSinchChatBubbleType = typeof typeValues[number]

export type TSinchChatBubbleStatus = typeof statusValues[number]

export type TSinchChatBubbleElement = HTMLElement & {
  readonly type: TSinchChatBubbleType | null,
  text: string,
  status: TSinchChatBubbleStatus | null,
}

export type TSinchChatBubbleReact = TSinchElementReact<TSinchChatBubbleElement> & {
  text: string,
  status?: TSinchChatBubbleStatus,
}

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
