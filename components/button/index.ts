import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  getLiteralAttribute,
  isAttrTrue,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  getReactEventHandler,
} from '../utils'
import templateHTML from './template.html'
import { buttonTypes } from './utils'
import type { TSinchButtonElement, TSinchButtonReact, TSinchButtonType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'button')
    this.#$button.addEventListener('click', this.#onButtonClick)
    this.#$button.addEventListener('focus', this.#onButtonFocus)
    this.#$button.addEventListener('blur', this.#onButtonBlur)
    this.addEventListener('-click', this.#onClickReactHandler)
    this.addEventListener('-focus', this.#onFocusReactHandler)
    this.addEventListener('-blur', this.#onBlurReactHandler)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onButtonClick)
    this.#$button.removeEventListener('focus', this.#onButtonFocus)
    this.#$button.removeEventListener('blur', this.#onButtonBlur)
    this.removeEventListener('-click', this.#onClickReactHandler)
    this.removeEventListener('-focus', this.#onFocusReactHandler)
    this.removeEventListener('-blur', this.#onBlurReactHandler)
  }

  static get observedAttributes() {
    return ['text', 'disabled']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

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

  set type(value: TSinchButtonType) {
    updateLiteralAttribute(this, buttonTypes, 'type', value)
  }

  get type(): TSinchButtonType {
    return getLiteralAttribute(this, buttonTypes, 'type', 'primary')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
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
      'sinch-button': TSinchButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button': TSinchButtonElement,
  }
}
