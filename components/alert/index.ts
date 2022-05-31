import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  getLiteralAttribute,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const typeValues = ['info', 'success', 'warn', 'error'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-alert', class extends HTMLElement {
  #$text: HTMLParagraphElement
  #$title: HTMLParagraphElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
    this.#$title = shadowRoot.querySelector('#title')!
  }

  get type() {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set type(value: TSinchAlertType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get title() {
    return getAttribute(this, 'title', '')
  }

  set title(value: string) {
    updateAttribute(this, 'title', value)
  }

  get multiline() {
    return getBooleanAttribute(this, 'multiline')
  }

  set multiline(isMultiline: boolean | undefined) {
    updateBooleanAttribute(this, 'multiline', isMultiline)
  }

  static get observedAttributes() {
    return ['text', 'title']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'title': {
        this.#$title.textContent = newVal

        break
      }
    }
  }
})

export type TSinchAlertType = typeof typeValues[number]

export type TSinchAlertElement = HTMLElement & {
  type: TSinchAlertType,
  text: string,
  title: string,
  multiline: boolean,
}

export type TSinchAlertReact = TSinchElementReact<TSinchAlertElement> & {
  type: TSinchAlertType,
  text: string,
  title?: string,
  multiline?: boolean,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-alert': TSinchAlertReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-alert': TSinchAlertElement,
  }
}
