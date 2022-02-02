import '../icon/close'
import {
  defineCustomElement,
  getEventHandler,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-alert-close', class extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
    shadowRoot.querySelector('#close')!.addEventListener('click', this.onClick)
  }

  onClick = (e: Event) => {
    e.stopPropagation()

    getEventHandler(this, 'onClick')?.()

    this.dispatchEvent(
      new CustomEvent('click')
    )
  }
})

type TSinchAlertCloseElement = HTMLElement

type TSinchAlertCloseReact = TSinchElementReact<TSinchAlertCloseElement> & {
  onClick?: () => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-alert-close': TSinchAlertCloseReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-alert-close': TSinchAlertCloseElement,
  }
}
