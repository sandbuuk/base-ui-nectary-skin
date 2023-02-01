import '../text'
import {
  defineCustomElement,
  updateAttribute,
  NectaryElement,
  updateBooleanAttribute,
  getIntegerAttribute,
  getBooleanAttribute,
  attrValueToInteger,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchProgressElement, TSinchProgressReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-progress', class extends NectaryElement {
  #$bar: HTMLElement
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$bar = shadowRoot.querySelector('#bar')!
    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'progressbar')
  }

  get value() {
    return getIntegerAttribute(this, 'value', 0)
  }

  set value(value: number) {
    updateAttribute(this, 'value', value)
  }

  get detailed() {
    return getBooleanAttribute(this, 'detailed')
  }

  set detailed(isDetailed: boolean) {
    updateBooleanAttribute(this, 'detailed', isDetailed)
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'value': {
        const int = attrValueToInteger(newVal, { min: 0, max: 100 })
        const intCss = int === null ? '0%' : `${int}%`

        this.#$bar.style.width = intCss
        this.#$text.textContent = intCss
        this.setAttribute('valuenow', int !== null ? String(int) : '0')

        break
      }
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-progress': TSinchProgressReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-progress': TSinchProgressElement,
  }
}
