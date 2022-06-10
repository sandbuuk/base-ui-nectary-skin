import '../icons/cancel'
import {
  defineCustomElement,
  getAttribute,
  setClass,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-avatar-badge', class extends HTMLElement {
  #$text: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
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
        this.#$text.textContent = newVal
        setClass(this.#$text, 'long', newVal !== null && newVal.length > 1)

        break
      }
    }
  }
})

export type TSinchAvatarBadgeElement = HTMLElement & {
  text: string,
}

export type TSinchAvatarBadgeReact = TSinchElementReact<TSinchAvatarBadgeElement> & {
  text: string,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-avatar-badge': TSinchAvatarBadgeReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-avatar-badge': TSinchAvatarBadgeElement,
  }
}
