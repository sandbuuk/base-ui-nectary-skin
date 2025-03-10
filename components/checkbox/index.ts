import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrEqual,
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
  #$label: HTMLElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$label = shadowRoot.querySelector('#label')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.setAttribute('role', 'checkbox')
    this.tabIndex = 0
    this.addEventListener('click', this.#onClick, options)
    this.addEventListener('focus', this.#onFocus, options)
    this.addEventListener('blur', this.#onBlur, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return [
      'checked',
      'disabled',
      'text',
      'invalid',
      'indeterminate',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$label.textContent = newVal

        break
      }
      case 'checked': {
        const isChecked = isAttrTrue(newVal)

        updateExplicitBooleanAttribute(this, 'aria-checked', isChecked)
        updateBooleanAttribute(this, 'checked', isChecked)

        break
      }
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        updateExplicitBooleanAttribute(this, 'aria-disabled', isDisabled)
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
      case 'invalid':
      case 'indeterminate': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }
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

  get focusable() {
    return true
  }

  #onClick = () => {
    if (this.disabled) {
      return
    }

    this.dispatchEvent(
      new CustomEvent('-change', { detail: !this.checked })
    )
  }

  #onFocus = () => {
    this.dispatchEvent(
      new CustomEvent('-focus')
    )
  }

  #onBlur = () => {
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
  interface HTMLElementTagNameMap {
    'sinch-checkbox': TSinchCheckboxElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-checkbox': TSinchCheckboxReact,
    }
  }
}
