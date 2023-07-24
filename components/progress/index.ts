import '../text'
import {
  defineCustomElement,
  updateAttribute,
  NectaryElement,
  updateBooleanAttribute,
  getIntegerAttribute,
  getBooleanAttribute,
  attrValueToInteger,
  isAttrTrue,
  isAttrEqual,
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

  static get observedAttributes() {
    return ['value', 'detailed']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        const int = attrValueToInteger(newVal, { min: 0, max: 100 })
        const intCss = int === null ? '0%' : `${int}%`

        this.#$bar.style.width = intCss
        this.#$text.textContent = intCss
        this.setAttribute('valuenow', int !== null ? String(int) : '0')

        break
      }

      case 'detailed': {
        if (isAttrEqual(oldVal, newVal)) {
          break
        }

        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }
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
