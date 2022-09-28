import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTextareaElement, TSinchTextareaReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-textarea', class extends NectaryElement {
  #$input: HTMLTextAreaElement
  #cursorPos: number | null = null
  #isPendingDk = false

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('#input')!
  }

  connectedCallback() {
    this.setAttribute('role', 'textbox')
    this.setAttribute('aria-multiline', 'true')
    this.#$input.addEventListener('input', this.#onInput)
    this.#$input.addEventListener('compositionstart', this.#onCompositionStart)
    this.#$input.addEventListener('mousedown', this.#onSelectionChange)
    this.#$input.addEventListener('keydown', this.#onSelectionChange)
    this.#$input.addEventListener('focus', this.#onInputFocus)
    this.#$input.addEventListener('blur', this.#onInputBlur)
    this.addEventListener('-change', this.#onChangeReactHandler)
    this.addEventListener('-focus', this.#onFocusReactHandler)
    this.addEventListener('-blur', this.#onBlurReactHandler)
  }

  disconnectedCallback() {
    this.#$input.removeEventListener('input', this.#onInput)
    this.#$input.removeEventListener('compositionstart', this.#onCompositionStart)
    this.#$input.removeEventListener('mousedown', this.#onSelectionChange)
    this.#$input.removeEventListener('keydown', this.#onSelectionChange)
    this.#$input.removeEventListener('focus', this.#onInputFocus)
    this.#$input.removeEventListener('blur', this.#onInputBlur)
    this.removeEventListener('-change', this.#onChangeReactHandler)
    this.removeEventListener('-focus', this.#onFocusReactHandler)
    this.removeEventListener('-blur', this.#onBlurReactHandler)
  }

  static get observedAttributes() {
    return [
      'value',
      'placeholder',
      'invalid',
      'disabled',
      'rows',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'value': {
        const nextVal = newVal ?? ''
        const prevVal = this.#$input.value

        if (nextVal !== prevVal) {
          const prevCursorPos = this.#$input.selectionEnd
          const isPrevCursorEnd = prevCursorPos === prevVal.length

          this.#$input.value = nextVal

          if (!isPrevCursorEnd) {
            this.#$input.setSelectionRange(this.#cursorPos, this.#cursorPos)
          }
        }

        break
      }

      case 'placeholder': {
        this.#$input.placeholder = newVal ?? ''
        updateAttribute(this, 'aria-placeholder', newVal)

        break
      }

      case 'invalid': {
        updateExplicitBooleanAttribute(this, 'aria-invalid', isAttrTrue(newVal))

        break
      }

      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$input.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }

      case 'rows': {
        updateAttribute(this.#$input, 'rows', newVal)

        break
      }
    }
  }

  get nodeName() {
    return 'textarea'
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value() {
    return getAttribute(this, 'value', '')
  }

  set placeholder(value: string | null) {
    updateAttribute(this, 'placeholder', value)
  }

  get placeholder() {
    return getAttribute(this, 'placeholder')
  }

  set invalid(value: boolean) {
    updateBooleanAttribute(this, 'invalid', value)
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

  set resizable(isResizable: boolean) {
    updateBooleanAttribute(this, 'resizable', isResizable)
  }

  get resizable() {
    return getBooleanAttribute(this, 'resizable')
  }

  set rows(value: HTMLTextAreaElement['rows']) {
    updateAttribute(this, 'rows', value)
  }

  get rows(): HTMLTextAreaElement['rows'] {
    return getIntegerAttribute(this, 'rows', 0)
  }

  get selectionStart(): HTMLTextAreaElement['selectionStart'] {
    return this.#$input.selectionStart
  }

  set selectionStart(value: HTMLTextAreaElement['selectionStart']) {
    this.#$input.selectionStart = value
  }

  get selectionEnd(): HTMLTextAreaElement['selectionEnd'] {
    return this.#$input.selectionEnd
  }

  set selectionEnd(value: HTMLTextAreaElement['selectionEnd']) {
    this.#$input.selectionEnd = value
  }

  get selectionDirection(): HTMLTextAreaElement['selectionDirection'] {
    return this.#$input.selectionDirection
  }

  set selectionDirection(value: HTMLTextAreaElement['selectionDirection']) {
    this.#$input.selectionDirection = value
  }

  focus() {
    this.#$input.focus()
  }

  blur() {
    this.#$input.blur()
  }

  #onCompositionStart = () => {
    this.#isPendingDk = true
  }

  #onSelectionChange = () => {
    this.#cursorPos = this.#$input.selectionEnd
  }

  #onInput = (e: Event) => {
    e.stopPropagation()

    const nextValue = this.#$input.value
    const prevValue = this.value

    if (prevValue !== nextValue) {
      const nextCursorPos = this.#$input.selectionEnd

      if (!this.#isPendingDk) {
        // Reset input value to enforce controlled state
        this.#$input.value = prevValue

        const prevCursorPos = this.#cursorPos
        const isPrevCursorEnd = prevCursorPos === null || prevCursorPos === prevValue.length

        if (!isPrevCursorEnd) {
          this.#$input.setSelectionRange(prevCursorPos, prevCursorPos)
        }
      }

      this.#isPendingDk = false
      this.#cursorPos = nextCursorPos

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: nextValue,
          bubbles: true,
        })
      )
      this.dispatchEvent(
        new CustomEvent('-change', {
          detail: nextValue,
        })
      )
    }
  }

  #onInputFocus = () => {
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onInputBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
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
      'sinch-textarea': TSinchTextareaReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-textarea': TSinchTextareaElement,
  }
}
