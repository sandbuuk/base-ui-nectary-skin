import {
  Context,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  setClass,
  subscribeContext,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import { DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html'
import { deleteContentBackward, deleteContentForward, getMaskSymbols, inputTypes, insertText, beginMaskedComposition, endMaskedComposition, mergeValueWithMask } from './utils'
import type { TSinchInputElement, TSinchInputMaskSymbol, TSinchInputReact, TSinchInputType, TSinchMaskInputResult } from './types'
import type { TContextSize } from '../utils'
import type { TSinchSize } from '../utils/size'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input', class extends NectaryElement {
  #$input: HTMLInputElement
  #$iconSlot: HTMLSlotElement
  #$iconWrapper: HTMLElement
  #$rightSlot: HTMLSlotElement
  #$rightWrapper: HTMLElement
  #$leftSlot: HTMLSlotElement
  #$leftWrapper: HTMLElement
  #$wrapper: HTMLElement
  #selectionStart = 0
  #selectionEnd = 0
  #isPendingDk = false
  #wasClearedByMask = false
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>
  #maskSymbols: TSinchInputMaskSymbol[] | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('#input')!
    this.#$iconSlot = shadowRoot.querySelector('slot[name="icon"]')!
    this.#$iconWrapper = shadowRoot.querySelector('#icon-wrapper')!
    this.#$rightSlot = shadowRoot.querySelector('slot[name="right"]')!
    this.#$rightWrapper = shadowRoot.querySelector('#right')!
    this.#$leftSlot = shadowRoot.querySelector('slot[name="left"]')!
    this.#$leftWrapper = shadowRoot.querySelector('#left')!
    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
    this.#sizeContext = new Context(this.#$wrapper, 'size')
    this.#controller = new AbortController()
  }

  connectedCallback() {
    super.connectedCallback()

    this.setAttribute('role', 'textbox')

    if (this.#controller === null) {
      this.#controller = new AbortController()
    }

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$input.addEventListener('input', this.#onInput as any, options)
    this.#$input.addEventListener('compositionstart', this.#onCompositionStart, options)
    this.#$input.addEventListener('compositionend', this.#onCompositionEnd, options)
    this.#$input.addEventListener('mousedown', this.#onSelectionChange, options)
    this.#$input.addEventListener('keydown', this.#onSelectionChange, options)
    this.#$input.addEventListener('focus', this.#onInputFocus, options)
    this.#$input.addEventListener('blur', this.#onInputBlur, options)
    this.#$iconSlot.addEventListener('slotchange', this.#onIconSlotChange, options)
    this.#$leftSlot.addEventListener('slotchange', this.#onLeftSlotChange, options)
    this.#$rightSlot.addEventListener('slotchange', this.#onRightSlotChange, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)

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
    this.#controller = null
  }

  static get observedAttributes() {
    return [
      'type',
      'value',
      'placeholder',
      'mask',
      'invalid',
      'disabled',
      'size',
      'autocomplete',
      'data-size',
      'aria-label',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'type': {
        updateLiteralAttribute(this.#$input, inputTypes, 'type', newVal)
        updateAttribute(this.#$input, 'spellcheck', newVal === 'password' ? 'false' : null)

        break
      }
      case 'value': {
        let nextVal = newVal ?? ''
        const prevVal = this.#$input.value

        if (this.#wasClearedByMask && nextVal.length === 0) {
          this.#wasClearedByMask = false

          break
        }

        if (this.#maskSymbols !== null) {
          nextVal = mergeValueWithMask(nextVal, this.#maskSymbols)
        }

        if (nextVal !== prevVal) {
          this.#$input.value = nextVal
          this.#$input.setSelectionRange(this.#selectionEnd, this.#selectionEnd)
        }

        break
      }

      case 'placeholder': {
        this.#$input.placeholder = newVal ?? ''
        updateAttribute(this, 'aria-placeholder', newVal)

        break
      }

      case 'mask': {
        queueMicrotask(() => {
          this.#updateMask()
        })

        break
      }

      case 'invalid': {
        const isInvalid = isAttrTrue(newVal)

        updateExplicitBooleanAttribute(this, 'aria-invalid', isInvalid)
        updateBooleanAttribute(this, name, isInvalid)

        break
      }

      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$input.disabled = isDisabled
        updateBooleanAttribute(this, name, isDisabled)

        break
      }

      case 'size': {
        updateAttribute(this, 'data-size', newVal)

        break
      }

      case 'data-size': {
        this.#onSizeUpdate()

        break
      }

      case 'autocomplete': {
        updateAttribute(this.#$input, name, newVal)

        break
      }

      case 'aria-label': {
        this.#$input.ariaLabel = newVal

        break
      }
    }
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

  set mask(value: string | null) {
    updateAttribute(this, 'mask', value)
  }

  get mask(): string | null {
    return getAttribute(this, 'mask')
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
    console.log('COMPOS_START')
    this.#isPendingDk = true

    if (this.#maskSymbols !== null) {
      if (this.#$input.selectionStart === this.#$input.value.length) {
        return
      }

      const { value, cursorPos } = beginMaskedComposition(this.#$input.value, this.#maskSymbols, this.#$input.selectionStart!, this.#$input.selectionEnd!)

      this.#$input.value = value
      this.#$input.setSelectionRange(cursorPos, cursorPos)
    }
  }

  #onCompositionEnd = (e: CompositionEvent) => {
    console.log('COMPOS_END', e.data, this.#$input.value, this.#$input.selectionStart, this.#$input.selectionEnd)

    this.#isPendingDk = false

    if (this.#maskSymbols !== null) {
      const res = endMaskedComposition(this.#$input.value, e.data!, this.#maskSymbols, this.#$input.selectionStart!)

      if (res !== null) {
        this.#$input.value = res.value
        this.#$input.setSelectionRange(res.cursorPos, res.cursorPos)
      }

      if ((res === null || !res.isComplete) && this.value.length !== 0) {
        this.#wasClearedByMask = true
        this.#dispatchChangeEvent('')
      }

      if (res !== null && res.isComplete) {
        this.#dispatchChangeEvent(res.value)
      }
    } else {
      this.#onInput()
    }
  }

  #onSelectionChange = () => {
    this.#selectionEnd = this.#$input.selectionEnd!
  }

  #onMaskBeforeInput = (e: InputEvent) => {
    this.#selectionStart = this.#$input.selectionStart!
    this.#selectionEnd = this.#$input.selectionEnd!
    console.log('BEFOREINPUT', this.#selectionStart, this.#selectionEnd, e.inputType, e.data)

    let res: TSinchMaskInputResult | null = null

    switch (e.inputType) {
      case 'insertText': {
        res = insertText(this.#$input.value, e.data!, this.#maskSymbols!, this.#selectionStart, this.#selectionEnd)

        break
      }
      case 'insertFromPaste': {
        break
      }
      case 'deleteByCut':
      case 'deleteContent':
      case 'deleteContentBackward': {
        res = deleteContentBackward(this.#$input.value, this.#maskSymbols!, this.#selectionStart, this.#selectionEnd)

        break
      }
      case 'deleteContentForward': {
        res = deleteContentForward(this.#$input.value, this.#maskSymbols!, this.#selectionStart, this.#selectionEnd)

        break
      }
    }

    if (res !== null) {
      this.#$input.value = res.value
      this.#$input.setSelectionRange(res.cursorPos, res.cursorPos)
    }

    if ((res === null || !res.isComplete) && this.value.length !== 0) {
      this.#wasClearedByMask = true
      this.#dispatchChangeEvent('')
    }

    if (res !== null && res.isComplete) {
      this.#dispatchChangeEvent(res.value)
    }

    e.preventDefault()
  }

  #onInput = () => {
    if (this.#isPendingDk) {
      return
    }

    if (this.#maskSymbols !== null) {
      return
    }

    const nextValue = this.#$input.value
    const prevValue = this.value

    if (prevValue !== nextValue) {
      const nextSelectionStart = this.#$input.selectionStart!
      const nextSelectionEnd = this.#$input.selectionEnd!

      // Reset input value to enforce controlled state
      this.#$input.value = prevValue
      this.#$input.setSelectionRange(this.#selectionStart, this.#selectionEnd)

      this.#selectionStart = nextSelectionStart
      this.#selectionEnd = nextSelectionEnd

      this.#dispatchChangeEvent(nextValue)
    }
  }

  #dispatchChangeEvent(value: string) {
    this.dispatchEvent(
      new CustomEvent('-change', {
        detail: value,
      })
    )
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

  #updateMask() {
    console.log('UPDATE_MASK', this.mask)

    if (this.mask !== null) {
      if (this.#maskSymbols === null) {
        this.#$input.addEventListener('beforeinput', this.#onMaskBeforeInput, { signal: this.#controller!.signal })
      }

      this.#maskSymbols = getMaskSymbols(this.mask, this.placeholder)
      this.#$input.value = mergeValueWithMask(this.#$input.value, this.#maskSymbols)
    } else {
      this.#maskSymbols = null
      this.#$input.removeEventListener('beforeinput', this.#onMaskBeforeInput)
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
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onInputBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
  }

  #onSizeUpdate() {
    if (!this.isConnected) {
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
      'sinch-input': TSinchInputReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input': TSinchInputElement,
  }
}
