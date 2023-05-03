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
} from '../utils'
import templateHTML from './template.html'
import { assertChipColor, getChipColorBg, getChipColorFg } from './utils'
import type { TSinchChipElement, TSinchChipReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-chip', class extends NectaryElement {
  #$text: HTMLElement
  #$button: HTMLElement

  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'button')
    this.#$button.addEventListener('click', this.#onButtonClick, { signal })
    this.#$button.addEventListener('focus', this.#onButtonFocus, { signal })
    this.#$button.addEventListener('blur', this.#onButtonBlur, { signal })
    this.addEventListener('-click', this.#onClickReactHandler, { signal })
    this.addEventListener('-focus', this.#onFocusReactHandler, { signal })
    this.addEventListener('-blur', this.#onBlurReactHandler, { signal })

    this.#updateColor()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
  }

  static get observedAttributes() {
    return ['text', 'color', 'small']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'color': {
        this.#updateColor()

        break
      }

      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'small': {
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

  #updateColor() {
    if (!this.isConnected) {
      return
    }

    const colorName = this.color

    if (colorName !== null && colorName.length > 0) {
      if (process.env.NODE_ENV !== 'production') {
        assertChipColor(this, colorName)
      }

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

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }

  #onButtonClick = () => {
    this.dispatchEvent(
      new CustomEvent('-click')
    )
  }

  #onButtonFocus = () => {
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onButtonBlur = () => {
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
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-chip': TSinchChipReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-chip': TSinchChipElement,
  }
}
