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
import templateHTML from './template.html?raw'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Progress extends NectaryElement {
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
        const int = attrValueToInteger(newVal, { min: 0, max: 100 }) ?? 0

        this.#$bar.style.width = `${int}%`
        this.#$text.textContent = Intl.NumberFormat(navigator.language, { style: 'percent' }).format(int / 100)
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
}

defineCustomElement('sinch-progress', Progress)
