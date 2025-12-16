import '../text'
import '../icon'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateBooleanAttribute,
  updateAttribute,
  NectaryElement,
  getReactEventHandler,
  isAttrTrue,
  isAttrEqual,
} from '../utils'
import templateHTML from './template.html?raw'
import { getChipColorBg, getChipColorFg } from './utils'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Chip extends NectaryElement {
  #$text: HTMLElement
  #$button: HTMLElement

  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'button')
    this.tabIndex = 0
    this.addEventListener('click', this.#onClick, { signal })
    this.addEventListener('focus', this.#onFocus, { signal })
    this.addEventListener('blur', this.#onBlur, { signal })
    this.addEventListener('keydown', this.#onKeydown, { signal })
    this.addEventListener('-click', this.#onClickReactHandler, { signal })
    this.addEventListener('-focus', this.#onFocusReactHandler, { signal })
    this.addEventListener('-blur', this.#onBlurReactHandler, { signal })

    this.#updateColor()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['text', 'color', 'small', 'readonly']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'color': {
        this.#updateColor()

        break
      }

      case 'text': {
        this.#$text.textContent = newVal
        updateAttribute(this, 'aria-label', newVal)
        updateAttribute(this.#$button, 'aria-label', `Delete ${newVal}`)

        break
      }

      case 'small': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }

      case 'readonly': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }
  }

  get color() {
    return getAttribute(this, 'color')
  }

  set color(value: string | null) {
    updateAttribute(this, 'color', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  get readonly() {
    return getBooleanAttribute(this, 'readonly')
  }

  set readonly(isReadonly: boolean) {
    updateBooleanAttribute(this, 'readonly', isReadonly)
  }

  #updateColor() {
    if (!this.isDomConnected) {
      return
    }

    const colorName = this.color

    if (colorName !== null && colorName.length > 0) {
      const bg = getChipColorBg(colorName)
      const fg = getChipColorFg(colorName)

      this.#$button.style.setProperty('background-color', bg)
      this.#$button.style.setProperty('--sinch-global-color-text', fg)
      this.#$button.style.setProperty('--sinch-global-color-icon', fg)
    } else {
      this.#$button.style.removeProperty('background-color')
      this.#$button.style.removeProperty('--sinch-global-color-text')
      this.#$button.style.removeProperty('--sinch-global-color-icon')
    }
  }

  get focusable() {
    return true
  }

  #onKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space': {
        this.click()
      }
    }
  }

  #onClick = () => {
    this.dispatchEvent(
      new CustomEvent('-click', { bubbles: true, composed: true })
    )
  }

  #onFocus = () => {
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
  }

  #onFocusReactHandler = () => {
    getReactEventHandler(this, 'on-focus')?.()
  }

  #onBlurReactHandler = () => {
    getReactEventHandler(this, 'on-blur')?.()
  }

  #onClickReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-click')?.(e)
  }
}

defineCustomElement('sinch-chip', Chip)
