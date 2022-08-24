import {
  defineCustomElement,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
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
    return ['disabled', 'aria-label']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$button.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
      case 'aria-label': {
        updateAttribute(this, 'title', newVal)

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
      'sinch-icon-button': TSinchIconButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-button': TSinchIconButtonElement,
  }
}
