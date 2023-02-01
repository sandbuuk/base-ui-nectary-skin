import '../icon-button'
import '../icon'
import '../stop-events'
import {
  Context,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getCssVar,
  getLiteralAttribute,
  getReactEventHandler,
  getRect,
  isAttrTrue,
  NectaryElement,
  setClass,
  subscribeContext,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import { assertSize, DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html'
import { assertType, inputTypes } from './utils'
import type { TSinchInputElement, TSinchInputReact, TSinchInputType } from './types'
import type { TSinchIconButtonElement } from '../icon-button/types'
import type { TRect } from '../types'
import type { TContextSize } from '../utils'
import type { TSinchSize } from '../utils/size'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input', class extends NectaryElement {
  #$input: HTMLInputElement
  #$clear: TSinchIconButtonElement
  #$iconClear: HTMLElement
  #$iconSlot: HTMLSlotElement
  #$iconWrapper: HTMLElement
  #$rightSlot: HTMLSlotElement
  #$rightWrapper: HTMLElement
  #$leftSlot: HTMLSlotElement
  #$leftWrapper: HTMLElement
  #$wrapper: HTMLElement
  #cursorPos: number | null = null
  #isPendingDk = false
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('#input')!
    this.#$iconSlot = shadowRoot.querySelector('slot[name="icon"]')!
    this.#$iconWrapper = shadowRoot.querySelector('#icon-wrapper')!
    this.#$rightSlot = shadowRoot.querySelector('slot[name="right"]')!
    this.#$rightWrapper = shadowRoot.querySelector('#right')!
    this.#$leftSlot = shadowRoot.querySelector('slot[name="left"]')!
    this.#$leftWrapper = shadowRoot.querySelector('#left')!
    this.#$clear = shadowRoot.querySelector('#clear')!
    this.#$iconClear = shadowRoot.querySelector('#icon-clear')!
    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
    this.#sizeContext = new Context(this.#$wrapper, 'size')
  }

  connectedCallback() {
    super.connectedCallback()

    this.setAttribute('role', 'textbox')

    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$input.addEventListener('input', this.#onInput, options)
    this.#$input.addEventListener('compositionstart', this.#onCompositionStart, options)
    this.#$input.addEventListener('mousedown', this.#onSelectionChange, options)
    this.#$input.addEventListener('keydown', this.#onSelectionChange, options)
    this.#$input.addEventListener('focus', this.#onInputFocus, options)
    this.#$input.addEventListener('blur', this.#onInputBlur, options)
    this.#$clear.addEventListener('click', this.#onClearButtonClick, options)
    this.#$clear.addEventListener('blur', this.#onClearButtonBlur, options)
    this.#$clear.addEventListener('-tooltip-show', this.#onClearButtonTooltipShow, options)
    this.#$clear.addEventListener('-tooltip-hide', this.#onClearButtonTooltipHide, options)
    this.#$iconSlot.addEventListener('slotchange', this.#onIconSlotChange, options)
    this.#$leftSlot.addEventListener('slotchange', this.#onLeftSlotChange, options)
    this.#$rightSlot.addEventListener('slotchange', this.#onRightSlotChange, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)

    updateAttribute(this.#$iconClear, 'name', getCssVar(this, '--sinch-input-icon-clear'))

    this.#sizeContext.listen(this.#controller.signal)
    subscribeContext(this, 'size', this.#onContextSize, this.#controller.signal)

    this.#onIconSlotChange()
    this.#onLeftSlotChange()
    this.#onRightSlotChange()

    this.#onSizeUpdate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
  }

  static get observedAttributes() {
    return [
      'type',
      'value',
      'placeholder',
      'invalid',
      'disabled',
      'size',
      'autocomplete',
      'data-size',
    ]
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'type': {
        if (process.env.NODE_ENV !== 'production') {
          assertType(newVal)
        }

        updateLiteralAttribute(this.#$input, inputTypes, 'type', newVal)
        updateAttribute(this.#$input, 'spellcheck', newVal === 'password' ? 'false' : null)

        break
      }
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

        this.#onRightSlotChange()

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

      case 'size': {
        updateAttribute(this, 'data-size', newVal)

        break
      }

      case 'data-size': {
        if (process.env.NODE_ENV !== 'production') {
          assertSize(newVal, 'sinch-input')
        }

        this.#onSizeUpdate()

        break
      }

      case 'autocomplete': {
        updateAttribute(this.#$input, 'autocomplete', newVal)
      }
    }
  }

  get nodeName() {
    return 'input'
  }

  set type(value: TSinchInputType) {
    updateAttribute(this, 'type', value)
  }

  get type(): TSinchInputType {
    return getLiteralAttribute(this, inputTypes, 'type', 'text')
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
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

  set size(size: TSinchSize) {
    updateLiteralAttribute(this, sizeValues, 'size', size)
  }

  get size(): TSinchSize {
    return getLiteralAttribute(this, sizeValues, 'size', DEFAULT_SIZE)
  }

  set autocomplete(value: string) {
    updateAttribute(this, 'autocomplete', value)
  }

  get autocomplete(): string {
    return getAttribute(this, 'autocomplete', '')
  }

  get selectionStart(): HTMLInputElement['selectionStart'] {
    return this.#$input.selectionStart
  }

  set selectionStart(value: HTMLInputElement['selectionStart']) {
    this.#$input.selectionStart = value
  }

  get selectionEnd(): HTMLInputElement['selectionEnd'] {
    return this.#$input.selectionEnd
  }

  set selectionEnd(value: HTMLInputElement['selectionEnd']) {
    this.#$input.selectionEnd = value
  }

  get selectionDirection(): HTMLInputElement['selectionDirection'] {
    return this.#$input.selectionDirection
  }

  set selectionDirection(value: HTMLInputElement['selectionDirection']) {
    this.#$input.selectionDirection = value
  }

  get clearButtonRect(): TRect {
    return getRect(this.#$clear)
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

  #onCompositionStart = () => {
    this.#isPendingDk = true
  }

  #onSelectionChange = () => {
    this.#cursorPos = this.#$input.selectionEnd
  }

  #onInput = (e: Event) => {
    e.stopPropagation()

    this.#handleInput()
  }

  #onContextSize = (e: CustomEvent<TContextSize>) => {
    if (this.hasAttribute('size')) {
      return
    }

    switch (e.detail) {
      case 'l': {
        this.setAttribute('data-size', 'm')

        break
      }
      default: {
        this.setAttribute('data-size', 's')
      }
    }
  }

  #handleInput() {
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

  #onIconSlotChange = () => {
    const isEmpty = this.#$iconSlot.assignedElements().length === 0

    setClass(this.#$iconWrapper, 'empty', isEmpty)
  }

  #onLeftSlotChange = () => {
    const isEmpty = this.#$leftSlot.assignedElements().length === 0

    setClass(this.#$leftWrapper, 'empty', isEmpty)
  }

  #onRightSlotChange = () => {
    const isEmpty = this.#$rightSlot.assignedElements().length === 0

    setClass(this.#$rightWrapper, 'empty', isEmpty)
  }

  #onInputFocus = () => {
    this.#$clear.setAttribute('data-focus', '')
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onInputBlur = (e: FocusEvent) => {
    this.dispatchEvent(new CustomEvent('-blur'))

    if (e.relatedTarget !== this.#$clear) {
      this.#$clear.removeAttribute('data-focus')
    }
  }

  #onSizeUpdate() {
    if (!this.isConnected) {
      return
    }

    const size = this.getAttribute('data-size') ?? DEFAULT_SIZE

    this.#sizeContext.dispatch(size)
  }

  #onClearButtonClick = () => {
    this.#$input.value = ''
    this.#$input.focus()

    this.#handleInput()
  }

  #onClearButtonBlur = (e: FocusEvent) => {
    if (e.relatedTarget !== this.#$input) {
      this.#$clear.removeAttribute('data-focus')
    }
  }

  #onClearButtonTooltipShow = () => {
    this.#$clear.setAttribute('data-tooltip', '')
  }

  #onClearButtonTooltipHide = () => {
    this.#$input.focus()
    this.#$clear.removeAttribute('data-tooltip')
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
      'sinch-input': TSinchInputReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input': TSinchInputElement,
  }
}
