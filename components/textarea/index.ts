import {
  Context,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getReactEventHandler,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import { DEFAULT_SIZE } from '../utils/size'
import templateHTML from './template.html'
import type { TSinchTextareaElement, TSinchTextareaReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-textarea', class extends NectaryElement {
  #$input: HTMLTextAreaElement
  #$bottomSlot: HTMLSlotElement
  #$bottomWrapper: HTMLElement
  #cursorPos: number | null = null
  #isPendingDk = false
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('#input')!
    this.#$bottomSlot = shadowRoot.querySelector('slot[name="bottom"]')!
    this.#$bottomWrapper = shadowRoot.querySelector('#bottom')!
    this.#sizeContext = new Context(this.#$bottomWrapper, 'size')
  }

  connectedCallback() {
    super.connectedCallback()
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.role = 'textbox'
    this.ariaMultiLine = 'true'
    this.#$input.addEventListener('input', this.#onInput, options)
    this.#$input.addEventListener('compositionstart', this.#onCompositionStart, options)
    this.#$input.addEventListener('mousedown', this.#onSelectionChange, options)
    this.#$input.addEventListener('keydown', this.#onSelectionChange, options)
    this.#$input.addEventListener('focus', this.#onInputFocus, options)
    this.#$input.addEventListener('blur', this.#onInputBlur, options)
    this.#$bottomSlot.addEventListener('slotchange', this.#onBottomSlotChange, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)

    this.#sizeContext.listen(this.#controller.signal)

    this.#onBottomSlotChange()
    this.updateMinRows()
    this.#onSizeUpdate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return [
      'value',
      'placeholder',
      'invalid',
      'disabled',
      'rows',
      'minrows',
      'resizable',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
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
        if (isAttrEqual(oldVal, newVal)) {
          break
        }

        const isInvalid = isAttrTrue(newVal)

        updateExplicitBooleanAttribute(this, 'aria-invalid', isInvalid)
        updateBooleanAttribute(this, 'invalid', isInvalid)

        break
      }

      case 'disabled': {
        if (isAttrEqual(oldVal, newVal)) {
          break
        }

        const isDisabled = isAttrTrue(newVal)

        this.#$input.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }

      case 'rows': {
        updateAttribute(this.#$input, 'rows', newVal)

        break
      }

      case 'minrows': {
        this.updateMinRows()

        break
      }

      case 'resizable': {
        if (isAttrEqual(oldVal, newVal)) {
          break
        }

        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }
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

  set minRows(value: number) {
    updateAttribute(this, 'minrows', value)
  }

  get minRows(): number {
    return getIntegerAttribute(this, 'minrows', 0)
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

  get focusable() {
    return true
  }

  focus() {
    this.#$input.focus()
  }

  blur() {
    this.#$input.blur()
  }

  updateMinRows() {
    if (!this.isDomConnected) {
      return
    }

    const minRows = this.minRows

    if (minRows <= 0) {
      this.#$input.style.removeProperty('min-height')
    } else {
      this.#$input.rows = minRows
      this.#$input.style.setProperty('min-height', `${this.#$input.clientHeight}px`)
      this.#$input.rows = this.rows
    }
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

  #onBottomSlotChange = () => {
    const isEmpty = this.#$bottomSlot.assignedElements().length === 0

    setClass(this.#$bottomWrapper, 'empty', isEmpty)
  }

  #onSizeUpdate() {
    if (!this.isDomConnected) {
      return
    }

    const size = this.getAttribute('data-size') ?? DEFAULT_SIZE

    this.#sizeContext.dispatch(size)
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
