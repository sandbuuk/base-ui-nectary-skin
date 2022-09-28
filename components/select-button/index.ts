import '../text'
import '../icons/keyboard-arrow-down'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSelectButtonElement, TSinchSelectButtonReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select-button', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$text: HTMLElement
  #controller = new AbortController()

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    const { signal } = this.#controller

    this.setAttribute('role', 'button')
    this.#$button.addEventListener('click', this.#onButtonClick, { signal })
    this.#$button.addEventListener('focus', this.#onButtonFocus, { signal })
    this.#$button.addEventListener('blur', this.#onButtonBlur, { signal })
    this.addEventListener('-click', this.#onClickReactHandler, { signal })
    this.addEventListener('-focus', this.#onFocusReactHandler, { signal })
    this.addEventListener('-blur', this.#onBlurReactHandler, { signal })
  }

  disconnectedCallback() {
    this.#controller.abort()
  }

  static get observedAttributes() {
    return [
      'text',
      'placeholder',
      'invalid',
      'disabled',
    ]
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set placeholder(value: string | null) {
    updateAttribute(this, 'placeholder', value)
  }

  get placeholder() {
    return getAttribute(this, 'placeholder')
  }

  set invalid(isInvalid: boolean) {
    updateBooleanAttribute(this, 'invalid', isInvalid)
  }

  get invalid() {
    return getBooleanAttribute(this, 'invalid')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'text': {
        const value = newVal ?? ''

        this.#$text.textContent = value.length > 0 ? value : this.placeholder

        break
      }

      case 'placeholder': {
        const value = this.text

        if (value.length === 0) {
          this.#$text.textContent = newVal ?? ''
        }

        break
      }

      case 'invalid': {
        const isInvalid = isAttrTrue(newVal)

        updateBooleanAttribute(this, 'invalid', isInvalid)
        updateExplicitBooleanAttribute(this, 'aria-invalid', isInvalid)

        break
      }

      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$button.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
    }
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }

  #onButtonFocus = () => {
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onButtonBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
  }

  #onButtonClick = () => {
    this.dispatchEvent(new CustomEvent('-click'))
  }

  #onClickReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-click')?.(e)
  }

  #onFocusReactHandler = () => {
    getReactEventHandler(this, 'on-focus')?.()
  }

  #onBlurReactHandler = () => {
    getReactEventHandler(this, 'on-blur')?.()
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-button': TSinchSelectButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select-button': TSinchSelectButtonElement,
  }
}
