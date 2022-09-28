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
import type { TSinchCheckboxElement, TSinchCheckboxReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-checkbox', class extends NectaryElement {
  #$input: HTMLInputElement
  #$label: HTMLLabelElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('input')!
    this.#$label = shadowRoot.querySelector('label')!
  }

  connectedCallback() {
    this.setAttribute('role', 'checkbox')
    this.#$input.addEventListener('input', this.#onCheckboxInput)
    this.#$input.addEventListener('focus', this.#onCheckboxFocus)
    this.#$input.addEventListener('blur', this.#onCheckboxBlur)
    this.addEventListener('-change', this.#onChangeReactHandler)
    this.addEventListener('-focus', this.#onFocusReactHandler)
    this.addEventListener('-blur', this.#onBlurReactHandler)
  }

  disconnectedCallback() {
    this.#$input.removeEventListener('input', this.#onCheckboxInput)
    this.#$input.removeEventListener('focus', this.#onCheckboxFocus)
    this.#$input.removeEventListener('blur', this.#onCheckboxBlur)
    this.removeEventListener('-change', this.#onChangeReactHandler)
    this.removeEventListener('-focus', this.#onFocusReactHandler)
    this.removeEventListener('-blur', this.#onBlurReactHandler)
  }

  static get observedAttributes() {
    return ['checked', 'disabled', 'text']
  }

  get type() {
    return 'text'
  }

  get nodeName() {
    return 'input'
  }

  set checked(isChecked: boolean) {
    updateBooleanAttribute(this, 'checked', isChecked)
  }

  get checked() {
    return getBooleanAttribute(this, 'checked')
  }

  set indeterminate(isIndeterminate: boolean) {
    updateBooleanAttribute(this, 'indeterminate', isIndeterminate)
  }

  get indeterminate() {
    return getBooleanAttribute(this, 'indeterminate')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set invalid(isInvalid: boolean) {
    updateBooleanAttribute(this, 'invalid', isInvalid)
  }

  get invalid() {
    return getBooleanAttribute(this, 'invalid')
  }

  set text(value: string | null) {
    updateAttribute(this, 'text', value)
  }

  get text() {
    return getAttribute(this, 'text')
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$label.textContent = newVal

        break
      }
      case 'checked': {
        const isChecked = isAttrTrue(newVal)

        this.#$input.checked = isChecked
        updateExplicitBooleanAttribute(this, 'aria-checked', isChecked)

        break
      }
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$input.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
    }
  }

  focus() {
    this.#$input.focus()
  }

  blur() {
    this.#$input.blur()
  }

  #onCheckboxInput = (e: Event) => {
    e.stopPropagation()

    const isChecked = this.#$input.checked

    this.#$input.checked = this.checked

    this.dispatchEvent(
      new CustomEvent('change', { detail: isChecked, bubbles: true })
    )
    this.dispatchEvent(
      new CustomEvent('-change', { detail: isChecked })
    )
  }

  #onCheckboxFocus = () => {
    this.dispatchEvent(
      new CustomEvent('-focus')
    )
  }

  #onCheckboxBlur = () => {
    this.dispatchEvent(
      new CustomEvent('-blur')
    )
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }

  #onFocusReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-focus')?.(e)
  }

  #onBlurReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-blur')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-checkbox': TSinchCheckboxReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-checkbox': TSinchCheckboxElement,
  }
}
