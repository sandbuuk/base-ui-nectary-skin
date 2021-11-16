import { defineCustomElement } from '../../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-icon-share', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
})

export type TSinchIconShare = {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-share': TSinchIconShare,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-share': HTMLElement & TSinchIconShare,
  }
}
