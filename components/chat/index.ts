import {
  defineCustomElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-chat', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

export type TSinchChatElement = HTMLElement & {
}

export type TSinchChatReact = TSinchElementReact<TSinchChatElement> & {
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-chat': TSinchChatReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-chat': TSinchChatElement,
  }
}
