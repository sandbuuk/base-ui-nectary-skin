import '../avatar'
import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchAvatarElement, TSinchAvatarReact } from '../avatar'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-chat-avatar', class extends NectaryElement {
  #$avatar: TSinchAvatarElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$avatar = shadowRoot.querySelector('sinch-avatar')!
  }

  static get observedAttributes() {
    return ['src', 'alt']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'src': {
        updateAttribute(this.#$avatar, 'src', newVal)

        break
      }

      case 'alt': {
        updateAttribute(this.#$avatar, 'alt', newVal)

        break
      }
    }
  }

  get src() {
    return getAttribute(this, 'src', null)
  }

  set src(value: string | null) {
    updateAttribute(this, 'src', value)
  }

  get alt() {
    return getAttribute(this, 'alt', '')
  }

  set alt(value: string) {
    updateAttribute(this, 'alt', value)
  }
})

export type TSinchChatAvatarElement = HTMLElement & {
  alt: TSinchAvatarElement['alt'],
  src: TSinchAvatarElement['src'],
}

export type TSinchChatAvatarReact = TSinchElementReact<TSinchChatAvatarElement> & {
  alt: TSinchAvatarReact['alt'],
  src?: TSinchAvatarReact['src'],
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-chat-avatar': TSinchChatAvatarReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-chat-avatar': TSinchChatAvatarElement,
  }
}
