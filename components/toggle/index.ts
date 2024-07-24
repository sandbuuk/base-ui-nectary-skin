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
import type { TSinchToggleElement, TSinchToggleReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-toggle', class extends NectaryElement {
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

    this.role = 'checkbox'
    this.addEventListener('click', this.#onClick, options)
    this.addEventListener('keydown', this.#onKeydown, options)
    this.addEventListener('focus', this.#onFocus, options)
    this.addEventListener('blur', this.#onBlur, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)

    this.#updateTabIndex()
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
      'labeled',
      'small',
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
        updateBooleanAttribute(this, name, isChecked)

        break
      }
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#updateTabIndex()

        updateExplicitBooleanAttribute(this, 'aria-disabled', isDisabled)
        updateBooleanAttribute(this, name, isDisabled)

        break
      }
      case 'small':
      case 'labeled': {
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

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  set labeled(isLabeled: boolean) {
    updateBooleanAttribute(this, 'labeled', isLabeled)
  }

  get labeled() {
    return getBooleanAttribute(this, 'labeled')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
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

  #onKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()

        this.click()
      }
    }
  }

  #updateTabIndex() {
    this.tabIndex = this.disabled ? -1 : 0
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
  namespace JSX {
    interface IntrinsicElements {
      'sinch-toggle': TSinchToggleReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-toggle': TSinchToggleElement,
  }
}
