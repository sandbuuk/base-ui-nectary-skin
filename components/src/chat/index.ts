import {
  defineCustomElement, NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchChatElement, TSinchChatReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-chat', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

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
