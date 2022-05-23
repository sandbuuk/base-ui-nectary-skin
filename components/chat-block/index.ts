import { typeValues } from '../chat-bubble'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchChatBubbleType } from '../chat-bubble'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-chat-block', class extends HTMLElement {
  #$firstName: HTMLElement
  #$lastName: HTMLElement
  #$timeStamp: HTMLElement
  #$bubbleSlot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$firstName = shadowRoot.querySelector('#firstname')!
    this.#$lastName = shadowRoot.querySelector('#lastname')!
    this.#$timeStamp = shadowRoot.querySelector('#time')!
    this.#$bubbleSlot = shadowRoot.querySelector('slot[name="bubble"]')!
  }

  connectedCallback() {
    this.#$bubbleSlot.addEventListener('slotchange', this.#onBubbleSlotChange)
  }

  disconnectedCallback() {
    this.#$bubbleSlot.removeEventListener('slotchange', this.#onBubbleSlotChange)
  }

  static get observedAttributes() {
    return ['firstname', 'lastname', 'timestamp', 'type']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'firstname': {
        this.#$firstName.textContent = newVal

        break
      }

      case 'lastname': {
        this.#$lastName.textContent = newVal

        break
      }

      case 'timestamp': {
        this.#$timeStamp.textContent = newVal

        break
      }

      case 'type': {
        this.#updateBubbleTypes()

        break
      }
    }
  }

  set type(value: TSinchChatBubbleType | null) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get type(): TSinchChatBubbleType | null {
    return getLiteralAttribute(this, typeValues, 'type', null)
  }

  set firstName(value: string | null) {
    updateAttribute(this, 'firstname', value)
  }

  get firstName(): string | null {
    return getAttribute(this, 'firstname', null)
  }

  set lastName(value: string | null) {
    updateAttribute(this, 'lastname', value)
  }

  get lastName(): string | null {
    return getAttribute(this, 'lastname', null)
  }

  set timestamp(value: string | null) {
    updateAttribute(this, 'timestamp', value)
  }

  get timestamp(): string | null {
    return getAttribute(this, 'timestamp', null)
  }

  #onBubbleSlotChange = () => {
    this.#updateBubbleTypes()
  }

  #updateBubbleTypes() {
    const typeValue = getAttribute(this, 'type')

    this.#$bubbleSlot.assignedElements().forEach((el) => {
      updateAttribute(el, 'data-type', typeValue)
    })
  }
})

export type TSinchChatBlockElement = HTMLElement & {
  type: TSinchChatBubbleType | null,
  firstName: string | null,
  lastName: string | null,
  timestamp: string | null,
}

export type TSinchChatBlockReact = TSinchElementReact<TSinchChatBlockElement> & {
  type: TSinchChatBubbleType,
  firstName?: string,
  lastName?: string,
  timestamp?: string,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-chat-block': TSinchChatBlockReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-chat-block': TSinchChatBlockElement,
  }
}
