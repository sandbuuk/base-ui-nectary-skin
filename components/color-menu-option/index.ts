import '../color-swatch'
import '../tooltip'
import { getSwatchColorFg } from '../color-swatch/utils'
import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchColorMenuOptionElement, TSinchColorMenuOptionReact } from './types'
import type { TSinchColorSwatchElement } from '../color-swatch/types'
import type { TSinchTooltipElement } from '../tooltip/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-color-menu-option', class extends NectaryElement {
  #$wrapper: HTMLElement
  #$tooltip: TSinchTooltipElement
  #$swatch: TSinchColorSwatchElement
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
    this.#$tooltip = shadowRoot.querySelector('#tooltip')!
    this.#$swatch = shadowRoot.querySelector('#swatch')!
  }

  connectedCallback() {
    this.role = 'option'
  }

  disconnectedCallback() {
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
        updateAttribute(this.#$tooltip, 'text', newVal)
        updateAttribute(this.#$swatch, 'name', newVal)

        if (newVal !== null) {
          this.#$wrapper.style.setProperty('--sinch-global-color-icon', getSwatchColorFg(newVal))
        } else {
          this.#$wrapper.style.removeProperty('--sinch-global-color-icon')
        }

        break
      }
    }
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-color-menu-option': TSinchColorMenuOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-color-menu-option': TSinchColorMenuOptionElement,
  }
}
