import { defineCustomElement } from '../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input-tooltip', class extends HTMLElement {
  $tooltipText: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$tooltipText = shadowRoot.querySelector('#text')!
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return ['text']
  }

  get text(): string {
    return this.getAttribute('text') ?? ''
  }

  set text(text: string) {
    this.setAttribute('text', text)
  }

  attributeChangedCallback(name: string, _: string, newVal: string) {
    switch (name) {
      case 'text': {
        this.$tooltipText.textContent = newVal

        break
      }
    }
  }
})

export type TSinchInput = {
  text: string,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-input-tooltip': TSinchInput,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input-tooltip': HTMLElement & TSinchInput,
  }
}
