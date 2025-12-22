import '../text'
import {
  defineCustomElement,
  NectaryElement,
  setClass,
  getAttribute,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html?raw'
import { getSwatchColorBg, isSwatchColor } from './utils'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class ColorSwatch extends NectaryElement {
  #$wrapper: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#updateColor()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  static get observedAttributes() {
    return ['name', 'aria-label']
  }

  attributeChangedCallback(name: string) {
    switch (name) {
      case 'name': {
        this.#updateColor()

        break
      }
    }
  }

  get name() {
    return getAttribute(this, 'name')
  }

  set name(value: string | null) {
    updateAttribute(this, 'name', value)
  }

  get 'aria-label'() {
    return getAttribute(this, 'aria-label')
  }

  set 'aria-label'(value: string | null) {
    updateAttribute(this, 'aria-label', value)
  }

  #updateColor() {
    if (!this.isDomConnected) {
      return
    }

    const colorName = this.name

    if (colorName === null || colorName.length === 0) {
      this.#$wrapper.style.removeProperty('background-color')
      setClass(this.#$wrapper, 'no-color', true)

      return
    }

    if (isSwatchColor(colorName)) {
      const exitingAriaLabel = getAttribute(this, 'aria-label')

      if (exitingAriaLabel == null || isSwatchColor(exitingAriaLabel)) {
        updateAttribute(this, 'aria-label', colorName)
      }

      const bg = getSwatchColorBg(colorName)

      this.#$wrapper.style.setProperty('background-color', bg)
      setClass(this.#$wrapper, 'no-color', false)
    } else {
      this.#$wrapper.style.setProperty('background-color', colorName)
      setClass(this.#$wrapper, 'no-color', false)
    }
  }
}

defineCustomElement('sinch-color-swatch', ColorSwatch)
