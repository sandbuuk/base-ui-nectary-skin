import '../color-swatch'
import '../tooltip'
import { getSwatchColorFg, isSwatchColor } from '../color-swatch/utils'
import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html?raw'
import type { NectaryComponentVanilla } from '../types'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class ColorMenuOption extends NectaryElement {
  #$wrapper: HTMLElement
  #$tooltip: NectaryComponentVanilla<'sinch-tooltip'>
  #$swatch: NectaryComponentVanilla<'sinch-color-swatch'>
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
    this.#$tooltip = shadowRoot.querySelector('#tooltip')!
    this.#$swatch = shadowRoot.querySelector('#swatch')!
  }

  connectedCallback() {
    this.setAttribute('role', 'option')
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return ['value', 'aria-label']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        if (newVal == null) {
          this.#$wrapper.style.removeProperty('--sinch-global-color-icon')

          break
        }

        if (!isSwatchColor(newVal)) {
          this.#$wrapper.style.setProperty('--sinch-global-color-icon', newVal)

          break
        }

        updateAttribute(this.#$tooltip, 'text', newVal)
        updateAttribute(this.#$swatch, 'name', newVal)

        this.#$wrapper.style.setProperty('--sinch-global-color-icon', getSwatchColorFg(newVal))

        break
      }
      case 'aria-label': {
        if (newVal == null) {
          break
        }

        updateAttribute(this.#$swatch, 'aria-label', newVal)

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
}

defineCustomElement('sinch-color-menu-option', ColorMenuOption)
