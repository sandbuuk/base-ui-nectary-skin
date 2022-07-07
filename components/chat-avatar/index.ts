import '../avatar'
import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchAvatarElement } from '../avatar/types'
import type { TSinchChatAvatarElement, TSinchChatAvatarReact } from './types'

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
