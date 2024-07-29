import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import { iconNameToHtml } from './switchFile'
import wrapperHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from './types'

const wrapperTemplate = document.createElement('template')

wrapperTemplate.innerHTML = wrapperHTML

defineCustomElement('sinch-icon-alt-one', class extends NectaryElement {
  #$iconContainer: HTMLDivElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(wrapperTemplate.content.cloneNode(true))

    this.#$iconContainer = shadowRoot.querySelector('#icon')!
  }

  static get observedAttributes() {
    return ['name']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'name': {
        if (newVal !== null && newVal !== undefined) {
          const newIconHtml = iconNameToHtml(newVal)

          if (newIconHtml !== undefined) {
            this.#$iconContainer.innerHTML = newIconHtml
          }
        }

        break
      }
    }
  }

  connectedCallback(): void {

  }

  set name(value: string) {
    updateAttribute(this, 'name', value)
  }

  get name() {
    return getAttribute(this, 'name', '')
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-alt-one': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-alt-one': TSinchIconElement,
  }
}

