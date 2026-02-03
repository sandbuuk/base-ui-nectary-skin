import '../rich-text'
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
import { setFormValue } from '../utils/form'
import templateHTML from './template.html?raw'
import type { NectaryComponentVanilla } from '../types'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Checkbox extends NectaryElement {
  #$label: NectaryComponentVanilla<'sinch-rich-text'>
  #controller: AbortController | null = null
  #internals: ElementInternals

  static formAssociated = true

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#internals = this.attachInternals()
    this.#$label = shadowRoot.querySelector('#label')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.setAttribute('role', 'checkbox')
    this.#internals.role = 'checkbox'
    this.tabIndex = 0
    this.addEventListener('click', this.#onClick, options)
    this.addEventListener('keydown', this.#onKeyDown, options)
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

  formAssociatedCallback() {
    setFormValue(this.#internals, this.#getFormValue())
  }

  formResetCallback() {
    this.checked = false
    setFormValue(this.#internals, '')
  }

  formStateRestoreCallback(state: string | FormData | null) {
    if (this.#internals.form === null || getBooleanAttribute(this.#internals.form, 'data-form-state-restore') === false) {
      return
    }

    if (state !== null) {
      const value = typeof state === 'string' ? state : state.get(this.name)

      this.checked = (value?.toString() ?? '').length > 0
      setFormValue(this.#internals, this.#getFormValue())
    }
  }

  #getFormValue() {
    return this.checked ? (this.value.length > 0 ? this.value : 'on') : ''
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
        updateAttribute(this.#$label, 'text', newVal)
        updateAttribute(this.#$label, 'aria-label', newVal)
        updateAttribute(this, 'aria-label', newVal)

        break
      }
      case 'checked': {
        const isChecked = isAttrTrue(newVal)

        updateExplicitBooleanAttribute(this, 'aria-checked', isChecked)
        updateBooleanAttribute(this, 'checked', isChecked)
        this.#internals.ariaChecked = isChecked.toString()

        setFormValue(this.#internals, this.#getFormValue())

        break
      }
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        updateExplicitBooleanAttribute(this, 'aria-disabled', isDisabled)
        this.#internals.ariaDisabled = isDisabled.toString()
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

  set name(value: string) {
    updateAttribute(this, 'name', value)
  }

  get name(): string {
    return getAttribute(this, 'name', '')
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
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

  #onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault()
      this.#onClick()
    }
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
    getReactEventHandler(this, 'onChange')?.(e)
  }

  #onFocusReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-focus')?.(e)
  }

  #onBlurReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-blur')?.(e)
  }
}

defineCustomElement('sinch-checkbox', Checkbox)
