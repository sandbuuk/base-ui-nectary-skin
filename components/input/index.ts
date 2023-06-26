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
import {
  deleteContentBackward,
  deleteContentForward,
  getMaskSymbols,
  inputTypes,
  insertText,
  beginMaskedComposition,
  endMaskedComposition,
  splitValueAndMask,
  getMergedValueSliced,
  insertFromPaste,
} from './utils'
import type { TSinchInputElement, TSinchInputReact, TSinchInputType } from './types'
import type { TContextSize } from '../utils'
import type { TSinchSize } from '../utils/size'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input', class extends NectaryElement {
  #$input: HTMLInputElement
  #$inputMask: HTMLElement
  #$iconSlot: HTMLSlotElement
  #$iconWrapper: HTMLElement
  #$rightSlot: HTMLSlotElement
  #$rightWrapper: HTMLElement
  #$leftSlot: HTMLSlotElement
  #$leftWrapper: HTMLElement
  #$wrapper: HTMLElement
  #selectionStart = 0
  #selectionEnd = 0
  #isCompositionInProgress = false
  #compositionBeginValue = ''
  #wasClearedByMask = false
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>
  #maskSymbols: ReturnType<typeof getMaskSymbols> | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('#input')!
    this.#$inputMask = shadowRoot.querySelector('#input-mask')!
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
    this.#$input.addEventListener('cut', this.#onCut as any, options)
    this.#$input.addEventListener('copy', this.#onCopy as any, options)
    this.#$input.addEventListener('paste', this.#onPaste as any, options)
    this.#$input.addEventListener('compositionstart', this.#onCompositionStart, options)
    this.#$input.addEventListener('compositionend', this.#onCompositionEnd, options)
    this.#$input.addEventListener('focus', this.#onInputFocus, options)
    this.#$input.addEventListener('blur', this.#onInputBlur, options)
    this.#$iconSlot.addEventListener('slotchange', this.#onIconSlotChange, options)
    this.#$leftSlot.addEventListener('slotchange', this.#onLeftSlotChange, options)
    this.#$rightSlot.addEventListener('slotchange', this.#onRightSlotChange, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)
    this.addEventListener('-copy', this.#onCopyReactHandler, options)
    this.addEventListener('-cut', this.#onCutReactHandler, options)
    this.addEventListener('-paste', this.#onPasteReactHandler, options)

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
        const nextVal = newVal ?? ''
        const prevVal = this.#$input.value

        // Was it previously cleared by Incomplete Mask input
        // Dont touch the input, which currently has partially filled value
        if (this.#wasClearedByMask && nextVal.length === 0) {
          this.#wasClearedByMask = false

          break
        }

        if (this.#maskSymbols !== null) {
          const { value, placeholder } = splitValueAndMask(nextVal, this.#maskSymbols)

          this.#$input.value = value
          this.#$input.setSelectionRange(this.#selectionEnd, this.#selectionEnd)
          this.#$inputMask.textContent = placeholder

          break
        }

        if (nextVal !== prevVal) {
          this.#$input.value = nextVal
          this.#$input.setSelectionRange(this.#selectionEnd, this.#selectionEnd)
        }

        break
      }

      case 'placeholder': {
        this.#updatePlaceholder()

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
    this.#isCompositionInProgress = true

    if (this.#maskSymbols !== null) {
      const selectionStart = this.#$input.selectionStart!

      this.#compositionBeginValue = this.#$input.value

      if (selectionStart === this.#$input.value.length) {
        return
      }

      const { value, placeholder } = beginMaskedComposition(this.#$input.value, this.#maskSymbols, selectionStart)

      this.#$input.value = value
      this.#$input.setSelectionRange(selectionStart, selectionStart)
      this.#$inputMask.textContent = placeholder
      this.#compositionBeginValue = value
    }
  }

  #onCompositionEnd = (e: CompositionEvent) => {
    this.#isCompositionInProgress = false

    if (this.#maskSymbols !== null) {
      const value = this.#$input.value
      const wasValueInserted = value.length !== this.#compositionBeginValue.length
      const res = endMaskedComposition(value, e.data!, this.#maskSymbols, this.#$input.selectionStart!, wasValueInserted)

      this.#compositionBeginValue = ''

      if (res !== null) {
        const { value, placeholder, mergedValue, cursorPos } = res

        this.#$input.value = value
        this.#$input.setSelectionRange(cursorPos, cursorPos)
        this.#$inputMask.textContent = placeholder

        if (mergedValue.length > 0) {
          this.#selectionStart = cursorPos
          this.#selectionEnd = cursorPos
          this.#dispatchChangeEvent(mergedValue)
        }
      }

      if ((res === null || res.mergedValue.length === 0) && this.value.length !== 0) {
        this.#wasClearedByMask = true
        this.#dispatchChangeEvent('')
      }
    } else {
      this.#onInput()
    }
  }

  #onMaskBeforeInput = (e: InputEvent) => {
    this.#handleMaskBeforeInput(e.inputType, e.data)

    e.preventDefault()
  }

  #handleMaskBeforeInput(inputType: string, data: string | null) {
    this.#selectionStart = this.#$input.selectionStart!
    this.#selectionEnd = this.#$input.selectionEnd!

    let res: ReturnType<typeof insertText> | null = null

    switch (inputType) {
      case 'insertText': {
        res = insertText(this.#$input.value, data!, this.#maskSymbols!, this.#selectionStart, this.#selectionEnd)

        break
      }
      case 'insertFromPaste': {
        res = insertFromPaste(this.#$input.value, data!, this.#maskSymbols!, this.#selectionStart, this.#selectionEnd)

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
      const { value, placeholder, mergedValue, cursorPos } = res

      this.#$input.value = value
      this.#$input.setSelectionRange(cursorPos, cursorPos)
      this.#$inputMask.textContent = placeholder

      if (mergedValue.length > 0) {
        this.#selectionStart = cursorPos
        this.#selectionEnd = cursorPos
        this.#dispatchChangeEvent(mergedValue)
      }
    }

    if ((res === null || res.mergedValue.length === 0) && this.value.length !== 0) {
      // Dispatch clear event
      this.#wasClearedByMask = true
      this.#dispatchChangeEvent('')
    }
  }

  #onInput = () => {
    if (this.#isCompositionInProgress) {
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

  #onCopy = (e: ClipboardEvent) => {
    const value = this.#$input.value
    const selectionStart = this.#$input.selectionStart ?? 0
    const selectionEnd = this.#$input.selectionEnd ?? 0

    e.preventDefault()

    if (e.clipboardData === null || selectionStart === selectionEnd) {
      return
    }

    const copiedValue = this.#maskSymbols === null
      ? value.slice(selectionStart, selectionEnd)
      : getMergedValueSliced(value, this.#maskSymbols, selectionStart, selectionEnd)
    let replacedValue: string | null = null
    const replaceWith = (value: string) => {
      replacedValue = value ?? null
    }

    const event = new CustomEvent('-copy', {
      detail: {
        value: copiedValue,
        replaceWith,
      },
      cancelable: true,
    })

    this.dispatchEvent(event)

    if (!event.defaultPrevented) {
      e.clipboardData.setData('text/plain', replacedValue ?? copiedValue)
    }
  }

  #onCut = (e: ClipboardEvent) => {
    const value = this.#$input.value
    const selectionStart = this.#$input.selectionStart ?? 0
    const selectionEnd = this.#$input.selectionEnd ?? 0

    if (e.clipboardData === null || selectionStart === selectionEnd) {
      e.preventDefault()

      return
    }

    const copiedValue = this.#maskSymbols === null
      ? value.slice(selectionStart, selectionEnd)
      : getMergedValueSliced(value, this.#maskSymbols, selectionStart, selectionEnd)
    let replacedValue: string | null = null
    const replaceWith = (value: string) => {
      replacedValue = value ?? null
    }

    const event = new CustomEvent('-cut', {
      detail: {
        value: copiedValue,
        replaceWith,
      },
      cancelable: true,
    })

    this.dispatchEvent(event)

    if (!event.defaultPrevented) {
      e.clipboardData.setData('text/plain', replacedValue ?? copiedValue)
    } else {
      e.preventDefault()
    }
  }

  #onPaste = (e: ClipboardEvent) => {
    const pasteValue = e.clipboardData?.getData('text/plain') ?? ''
    let replacedValue = ''
    const replaceWith = (value: string) => {
      replacedValue = value ?? ''
    }

    this.dispatchEvent(new CustomEvent('-paste', {
      detail: {
        value: pasteValue,
        replaceWith,
      },
    }))

    if (replacedValue.length === 0) {
      return
    }

    e.preventDefault()

    if (this.#maskSymbols !== null) {
      this.#handleMaskBeforeInput('insertFromPaste', replacedValue)
    } else {
      const value = this.value
      const selectionStart = this.#$input.selectionStart!
      const selectionEnd = this.#$input.selectionEnd!
      const cursorPos = selectionStart + replacedValue.length

      this.value = value.substring(0, selectionStart) + replacedValue + value.substring(selectionEnd)
      this.#$input.setSelectionRange(cursorPos, cursorPos)
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
    if (this.mask !== null) {
      // Subscribe once, so only if the mask disabled before
      if (this.#maskSymbols === null) {
        this.#$input.addEventListener('beforeinput', this.#onMaskBeforeInput, { signal: this.#controller!.signal })
      }

      this.#maskSymbols = getMaskSymbols(this.mask, this.placeholder)

      const { value, placeholder } = splitValueAndMask(this.#$input.value, this.#maskSymbols)

      this.#$input.value = value
      this.#$inputMask.textContent = placeholder
    } else {
      this.#maskSymbols = null
      this.#$input.removeEventListener('beforeinput', this.#onMaskBeforeInput)
    }

    this.#updatePlaceholder()
  }

  #updatePlaceholder() {
    if (this.#maskSymbols === null) {
      const value = this.placeholder

      this.#$input.placeholder = value ?? ''
      updateAttribute(this, 'aria-placeholder', value)
    } else {
      updateAttribute(this, 'aria-placeholder', null)
      this.#$input.placeholder = ''
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

  #onCopyReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-copy')?.(e)
  }

  #onCutReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-cut')?.(e)
  }

  #onPasteReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-paste')?.(e)
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
