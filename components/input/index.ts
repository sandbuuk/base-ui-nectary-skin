import {
  Context,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  getReactEventHandler,
  isAttrEqual,
  isAttrTrue,
  isElementFocused,
  NectaryElement,
  setClass,
  subscribeContext,
  updateAttribute,
  updateBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import { requestSubmitForm, setFormValue } from '../utils/form'
import { DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html?raw'
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
import type { TSinchInputType } from './types'
import type { NectaryComponentVanilla } from '../types'
import type { TContextSize } from '../utils'
import type { TSinchSize } from '../utils/size'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Input extends NectaryElement {
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
  #internals: ElementInternals

  static formAssociated = true

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#internals = this.attachInternals()
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

    const role = this.type === 'number' ? 'spinbutton' : 'textbox'

    this.#setRole(role)

    if (this.#controller === null) {
      this.#controller = new AbortController()
    }

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$input.addEventListener('keydown', this.#onKeyDown, options)
    this.#$input.addEventListener('input', this.#onInput, options)
    this.#$input.addEventListener('cut', this.#onCut, options)
    this.#$input.addEventListener('copy', this.#onCopy, options)
    this.#$input.addEventListener('paste', this.#onPaste, options)
    this.#$input.addEventListener('compositionstart', this.#onCompositionStart, options)
    this.#$input.addEventListener('compositionend', this.#onCompositionEnd, options)
    this.#$input.addEventListener('focus', this.#onInputFocus, options)
    this.#$input.addEventListener('blur', this.#onInputBlur, options)
    this.#$input.addEventListener('wheel', this.#onWheel, options)
    this.#$iconSlot.addEventListener('slotchange', this.#onIconSlotChange, options)
    this.#$leftSlot.addEventListener('slotchange', this.#onLeftSlotChange, options)
    this.#$rightSlot.addEventListener('slotchange', this.#onRightSlotChange, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)
    this.addEventListener('-copy', this.#onCopyReactHandler, options)
    this.addEventListener('-cut', this.#onCutReactHandler, options)
    this.addEventListener('-paste', this.#onPasteReactHandler, options)
    this.addEventListener('-wheel', this.#onWheelReactHandler, options)

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

  formAssociatedCallback() {
    setFormValue(this.#internals, this.#$input.value)
  }

  formResetCallback() {
    this.#$input.value = ''
    setFormValue(this.#internals, '')
  }

  formStateRestoreCallback(state: string | FormData | null) {
    // * opt-in feature for backwards compatability
    // * formStateRestoreCallback only works in the Light DOM
    if (this.#internals.form === null || getBooleanAttribute(this.#internals.form, 'data-form-state-restore') === false) {
      return
    }

    if (state !== null) {
      const value = typeof state === 'string' ? state : state.get(this.name)

      this.#$input.value = value?.toString() ?? ''
      setFormValue(this.#internals, value?.toString() ?? '')
    }
  }

  // This handler mimicks the behavior (with some exceptions) of the implicit form submission logic from the HTML spec:
  // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission
  #formSubmitHandler = () => {
    const form = this.#internals.form

    if (form === null) {
      return
    }

    if (form.disabled === true) {
      return
    }

    const submitSelectors = [
      'sinch-button[form-type="submit"]',
    ]

    const formSubmitters = Array.from(form.querySelectorAll(submitSelectors.join(','))) as NectaryComponentVanilla<'sinch-button'>[]

    const formSubmitter = formSubmitters.find((submitter) => !submitter.disabled) ?? null

    if (formSubmitter !== null) {
      requestSubmitForm(form, formSubmitter as NectaryComponentVanilla<'sinch-button'>)
    }
  }

  #onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Enter': {
        this.#formSubmitHandler()

        break
      }
      case 'Home': {
        if (this.type === 'number') {
          const min = getAttribute(this, 'min')

          if (min !== null && !isNaN(parseFloat(min))) {
            this.#$input.value = min
            setFormValue(this.#internals, min)
          }
        }

        break
      }
      case 'End': {
        if (this.type === 'number') {
          const max = getAttribute(this, 'max')

          if (max !== null && !isNaN(parseFloat(max))) {
            this.#$input.value = max
            setFormValue(this.#internals, max)
          }
        }
      }
    }
  }

  static get observedAttributes() {
    return [
      'name',
      'type',
      'value',
      'placeholder',
      'mask',
      'max',
      'min',
      'invalid',
      'disabled',
      'size',
      'step',
      'autocomplete',
      'autofocus',
      'data-size',
      'aria-label',
      'maxlength',
      'required',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'name': {
        if (isAttrEqual(oldVal, newVal)) {
          return
        }

        updateAttribute(this.#$input, 'name', newVal)

        break
      }

      case 'type': {
        updateLiteralAttribute(this.#$input, inputTypes, 'type', newVal)
        updateAttribute(this.#$input, 'spellcheck', newVal === 'password' ? 'false' : null)

        const role = newVal === 'number' ? 'spinbutton' : 'textbox'

        this.#setRole(role)

        if (newVal === 'number') {
          this.#resetAriaPlaceholder()
        }

        break
      }

      case 'value': {
        const nextVal = newVal ?? ''
        const prevVal = this.#$input.value

        // Was it previously cleared by Incomplete Mask input
        // Dont touch the input, which currently has partially filled value
        if (this.#wasClearedByMask) {
          this.#wasClearedByMask = false

          if (nextVal.length === 0) {
            break
          }
        }

        if (this.#maskSymbols !== null) {
          const { value, placeholder } = splitValueAndMask(nextVal, this.#maskSymbols)

          this.#$input.value = value

          setFormValue(this.#internals, value)

          this.#$inputMask.textContent = placeholder

          if (isElementFocused(this.#$input)) {
            this.#setSelectionRange(this.#selectionEnd, this.#selectionEnd)
          }

          break
        }

        if (nextVal !== prevVal) {
          this.#$input.value = nextVal
          setFormValue(this.#internals, nextVal)

          if (isElementFocused(this.#$input)) {
            this.#setSelectionRange(this.#selectionEnd, this.#selectionEnd)
          }
        }

        break
      }

      case 'placeholder': {
        this.#updatePlaceholder()

        break
      }

      case 'mask': {
        this.#updateMask()

        break
      }

      case 'invalid': {
        if (isAttrEqual(oldVal, newVal)) {
          return
        }

        const isInvalid = isAttrTrue(newVal)

        this.ariaInvalid = isInvalid.toString()
        this.#$input.ariaInvalid = this.ariaInvalid
        this.#internals.ariaInvalid = this.ariaInvalid
        updateBooleanAttribute(this, name, isInvalid)

        break
      }

      case 'disabled': {
        if (isAttrEqual(oldVal, newVal)) {
          return
        }

        const isDisabled = isAttrTrue(newVal)

        this.#$input.disabled = isDisabled
        updateBooleanAttribute(this, name, isDisabled)

        break
      }

      case 'autofocus': {
        if (isAttrEqual(oldVal, newVal)) {
          return
        }

        const isAutofocus = isAttrTrue(newVal)

        this.#$input.autofocus = isAutofocus
        updateBooleanAttribute(this, name, isAutofocus)

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
      case 'autocomplete':
      case 'maxlength':
      case 'required':
      case 'max':
      case 'min':
      case 'step': {
        updateAttribute(this.#$input, name, newVal)

        break
      }

      case 'aria-label': {
        this.#$input.ariaLabel = newVal
        this.#internals.ariaLabel = newVal

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

  set autofocus(isAutofocus: boolean) {
    updateBooleanAttribute(this, 'autofocus', isAutofocus)
  }

  get autofocus() {
    return getBooleanAttribute(this, 'autofocus')
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

  setSelectionRange(selectionStart: number, selectionEnd: number): void {
    this.#setSelectionRange(selectionStart, selectionEnd)
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

  #setSelectionRange = (start: number | null, end: number | null, direction?: 'forward' | 'backward' | 'none' | undefined) => {
    if (this.type !== 'number') {
      this.#$input.setSelectionRange(start, end, direction)
    }
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
      this.#setSelectionRange(selectionStart, selectionStart)
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
        this.#setSelectionRange(cursorPos, cursorPos)
        this.#$inputMask.textContent = placeholder

        if (mergedValue.length > 0) {
          this.#selectionStart = cursorPos
          this.#selectionEnd = cursorPos
          this.#dispatchChangeEvent(mergedValue)
        }
      }

      if ((res === null || res.mergedValue.length === 0) && this.value.length !== 0) {
        this.#dispatchMaskClearChangeEvent()
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
    const selectionStart = this.#$input.selectionStart ?? 0
    const selectionEnd = this.#$input.selectionEnd ?? 0

    let res: ReturnType<typeof insertText> | null = null

    switch (inputType) {
      case 'insertText': {
        res = insertText(this.#$input.value, data!, this.#maskSymbols!, selectionStart, selectionEnd)

        break
      }
      case 'insertFromPaste': {
        res = insertFromPaste(this.#$input.value, data!, this.#maskSymbols!, selectionStart, selectionEnd)

        break
      }
      case 'deleteByCut':
      case 'deleteContent':
      case 'deleteContentBackward': {
        res = deleteContentBackward(this.#$input.value, this.#maskSymbols!, selectionStart, selectionEnd)

        break
      }
      case 'deleteContentForward': {
        res = deleteContentForward(this.#$input.value, this.#maskSymbols!, selectionStart, selectionEnd)

        break
      }
    }

    if (res !== null) {
      const { value, placeholder, mergedValue, cursorPos } = res

      this.#$input.value = value
      this.#setSelectionRange(cursorPos, cursorPos)
      this.#$inputMask.textContent = placeholder

      if (mergedValue.length > 0) {
        this.#selectionStart = cursorPos
        this.#selectionEnd = cursorPos
        this.#dispatchChangeEvent(mergedValue)
      }
    }

    if ((res === null || res.mergedValue.length === 0) && this.value.length !== 0) {
      // Dispatch clear event
      this.#dispatchMaskClearChangeEvent()
    }
  }

  #handleBeforeInput(inputType: string, data: string | null) {
    const selectionStart = this.#$input.selectionStart ?? 0
    const selectionEnd = this.#$input.selectionEnd ?? 0

    switch (inputType) {
      case 'insertFromPaste': {
        if (data === null) {
          return
        }

        const value = this.value
        const cursorPos = selectionStart + data.length
        const nextValue = value.substring(0, selectionStart) + data + value.substring(selectionEnd)

        this.#selectionStart = cursorPos
        this.#selectionEnd = cursorPos
        this.#dispatchChangeEvent(nextValue)

        break
      }
      case 'deleteByCut': {
        const value = this.value
        const cursorPos = selectionStart
        const nextValue = value.substring(0, selectionStart) + value.substring(selectionEnd)

        this.#selectionStart = cursorPos
        this.#selectionEnd = cursorPos
        this.#dispatchChangeEvent(nextValue)

        break
      }
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

    setFormValue(this.#internals, nextValue)

    if (prevValue !== nextValue) {
      const nextSelectionStart = this.#$input.selectionStart!
      const nextSelectionEnd = this.#$input.selectionEnd!

      // Only enforce controlled state if value attribute is present
      if (this.hasAttribute('value') === true) {
        this.#$input.value = prevValue
        this.#setSelectionRange(this.#selectionStart, this.#selectionEnd)
      }

      this.#selectionStart = nextSelectionStart
      this.#selectionEnd = nextSelectionEnd
      this.#dispatchChangeEvent(nextValue)
    }
  }

  #onWheel = () => {
    this.dispatchEvent(
      new CustomEvent('-wheel')
    )
  }

  #onMaskInputAutofillChange = () => {
    const nextVal = this.#$input.value

    if (this.#maskSymbols !== null) {
      const { value, placeholder, mergedValue, cursorPos } = splitValueAndMask(nextVal, this.#maskSymbols)

      this.#$input.value = value
      this.#setSelectionRange(cursorPos, cursorPos)
      this.#$inputMask.textContent = placeholder

      if (mergedValue.length > 0) {
        this.#selectionStart = cursorPos
        this.#selectionEnd = cursorPos
        this.#dispatchChangeEvent(mergedValue)
      } else {
        // Dispatch clear event
        this.#dispatchMaskClearChangeEvent()
      }
    }
  }

  #onCopy = (e: ClipboardEvent) => {
    const value = this.#$input.value
    const selectionStart = this.#$input.selectionStart ?? 0
    const selectionEnd = this.#$input.selectionEnd ?? 0

    if (e.clipboardData === null || selectionStart === selectionEnd) {
      return
    }

    const copiedValue = this.#maskSymbols === null
      ? value.substring(selectionStart, selectionEnd)
      : getMergedValueSliced(value, this.#maskSymbols, selectionStart, selectionEnd)
    let replacedValue: string | null = null
    const replaceWith = (value: string) => {
      replacedValue = value ?? null
    }

    if (this.#maskSymbols !== null) {
      e.preventDefault()
      e.clipboardData.setData('text/plain', copiedValue)
    }

    const event = new CustomEvent('-copy', {
      detail: {
        value: copiedValue,
        replaceWith,
      },
      cancelable: true,
    })

    this.dispatchEvent(event)

    if (event.defaultPrevented || replacedValue !== null) {
      e.preventDefault()
    }

    if (replacedValue !== null) {
      e.clipboardData.setData('text/plain', replacedValue)
    }
  }

  #onCut = (e: ClipboardEvent) => {
    const value = this.#$input.value
    const selectionStart = this.#$input.selectionStart ?? 0
    const selectionEnd = this.#$input.selectionEnd ?? 0

    if (e.clipboardData === null || selectionStart === selectionEnd) {
      return
    }

    const copiedValue = this.#maskSymbols === null
      ? value.substring(selectionStart, selectionEnd)
      : getMergedValueSliced(value, this.#maskSymbols, selectionStart, selectionEnd)
    let replacedValue: string | null = null
    const replaceWith = (value: string) => {
      replacedValue = value ?? null
    }

    if (this.#maskSymbols !== null) {
      e.preventDefault()
      e.clipboardData.setData('text/plain', copiedValue)
    }

    const event = new CustomEvent('-cut', {
      detail: {
        value: copiedValue,
        replaceWith,
      },
      cancelable: true,
    })

    this.dispatchEvent(event)

    if (event.defaultPrevented || replacedValue !== null) {
      e.preventDefault()
    }

    if (replacedValue !== null) {
      e.clipboardData.setData('text/plain', replacedValue)

      if (this.#maskSymbols !== null) {
        this.#handleMaskBeforeInput('deleteByCut', null)
      } else {
        this.#handleBeforeInput('deleteByCut', null)
      }
    }
  }

  #onPaste = (e: ClipboardEvent) => {
    const pasteValue = e.clipboardData?.getData('text/plain') ?? ''
    let replacedValue = ''
    const replaceWith = (value: string) => {
      replacedValue = value ?? ''
    }

    const event = new CustomEvent('-paste', {
      detail: {
        value: pasteValue,
        replaceWith,
      },
      cancelable: true,
    })

    this.dispatchEvent(event)

    if (event.defaultPrevented) {
      e.preventDefault()
    }

    if (replacedValue.length === 0) {
      return
    }

    e.preventDefault()

    if (this.#maskSymbols !== null) {
      this.#handleMaskBeforeInput('insertFromPaste', replacedValue)
    } else {
      this.#handleBeforeInput('insertFromPaste', replacedValue)
    }
  }

  #dispatchMaskClearChangeEvent() {
    this.#wasClearedByMask = true
    this.#dispatchChangeEvent('')
  }

  #dispatchChangeEvent(value: string) {
    // Dont send same value
    if (value === this.value) {
      return
    }

    this.dispatchEvent(
      new CustomEvent('-change', {
        detail: value,
      })
    )
  }

  #onContextSize = (e: CustomEvent<TContextSize>) => {
    if (this.hasAttribute('size') === true) {
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
        this.#$input.addEventListener('change', this.#onMaskInputAutofillChange, { signal: this.#controller!.signal })
      }

      this.#maskSymbols = getMaskSymbols(this.mask)

      const { value, placeholder } = splitValueAndMask(this.#$input.value, this.#maskSymbols)

      this.#$input.value = value
      this.#$inputMask.textContent = placeholder
    } else {
      this.#maskSymbols = null
      this.#$input.removeEventListener('beforeinput', this.#onMaskBeforeInput)
      this.#$input.removeEventListener('change', this.#onMaskInputAutofillChange)
    }

    this.#updatePlaceholder()
  }

  #updatePlaceholder() {
    if (this.#maskSymbols === null) {
      const value = this.placeholder

      this.#$input.placeholder = value ?? ''

      // ARIA spec does not allow aria-placeholder for non textbox role inputs
      if (this.type !== 'number') {
        this.#internals.ariaPlaceholder = value ?? ''
        updateAttribute(this, 'aria-placeholder', value)
      }
    } else {
      this.#$input.placeholder = ''
      this.#resetAriaPlaceholder()
    }
  }

  #resetAriaPlaceholder() {
    updateAttribute(this, 'aria-placeholder', null)
    this.#internals.ariaPlaceholder = ''
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
    if (!this.isDomConnected) {
      return
    }

    const size = this.getAttribute('data-size') ?? DEFAULT_SIZE

    this.#sizeContext.dispatch(size)
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
    getReactEventHandler(this, 'onChange')?.(e)
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

  #onWheelReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-wheel')?.(e)
  }

  #setRole = (role: string) => {
    this.setAttribute('role', role)
    this.#internals.role = role
  }
}

defineCustomElement('sinch-input', Input)
