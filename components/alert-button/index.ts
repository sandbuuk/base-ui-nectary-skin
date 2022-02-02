import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
  getEventHandler,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-alert-button', class extends HTMLElement {
  $action: HTMLButtonElement
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$action = shadowRoot.querySelector('#action')!
  }

  connectedCallback() {
    this.$action.addEventListener('click', this.onButtonClick)
  }

  disconnectedCallback() {
    this.$action.removeEventListener('click', this.onButtonClick)
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
        this.$action.textContent = newVal

        break
      }
    }
  }

  onButtonClick = (e: Event) => {
    e.stopPropagation()

    getEventHandler(this, 'onClick')?.()

    this.dispatchEvent(
      new CustomEvent('click')
    )
  }
})

type TSinchAlertButtonElement = HTMLElement & {
  text: string,
}

type TSinchAlertButtonReact = TSinchElementReact<TSinchAlertButtonElement> & {
  text: string,
  onClick?: () => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-alert-button': TSinchAlertButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-alert-button': TSinchAlertButtonElement,
  }
}
