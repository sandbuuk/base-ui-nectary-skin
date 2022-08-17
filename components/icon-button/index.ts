import {
  defineCustomElement,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchIconButtonElement, TSinchIconButtonReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-icon-button', class extends NectaryElement {
  #$button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('button')!
  }

  connectedCallback() {
    this.setAttribute('role', 'button')
    this.#$button.addEventListener('focus', this.#onButtonFocus)
    this.#$button.addEventListener('blur', this.#onButtonBlur)
    this.addEventListener('-focus', this.#onFocusReactHandler)
    this.addEventListener('-blur', this.#onBlurReactHandler)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('focus', this.#onButtonFocus)
    this.#$button.removeEventListener('blur', this.#onButtonBlur)
    this.removeEventListener('-focus', this.#onFocusReactHandler)
    this.removeEventListener('-blur', this.#onBlurReactHandler)
  }

  static get observedAttributes() {
    return ['disabled']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$button.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
    }
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
      'sinch-icon-button': TSinchIconButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-button': TSinchIconButtonElement,
  }
}
