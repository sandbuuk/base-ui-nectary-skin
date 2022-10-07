import '../text'
import '../icons/cancel'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  getLiteralAttribute,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  setClass,
  getReactEventHandler,
} from '../utils'
import { assertColorNameValue, colorMap, colorNameValues, NO_COLOR } from '../utils/colors'
import templateHTML from './template.html'
import type { TSinchColorName } from '../utils/colors'
import type { TSinchChipElement, TSinchChipReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-chip', class extends NectaryElement {
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
    this.#controller!.abort()
  }

  get color() {
    return getLiteralAttribute(this, colorNameValues, 'color', null)
  }

  set color(value: TSinchColorName | null) {
    updateLiteralAttribute(this, colorNameValues, 'color', value)
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

  static get observedAttributes() {
    return ['text', 'color']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'color': {
        assertColorNameValue(newVal)
        this.#updateColor()

        break
      }

      case 'text': {
        this.#$text.textContent = newVal

        break
      }
    }
  }

  #updateColor() {
    const colorName = this.color ?? NO_COLOR
    const { value, isInverted } = colorMap[colorName]

    if (value !== NO_COLOR) {
      this.#$button.style.backgroundColor = `var(--sinch-color-${value})`
    }

    setClass(this.#$button, 'no-color', value === NO_COLOR)
    setClass(this.#$button, 'inverted', isInverted)
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
