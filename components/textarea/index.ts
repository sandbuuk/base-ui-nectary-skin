import {
  Context,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getReactEventHandler,
  getRect,
  hasClass,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import { setFormValue } from '../utils/form'
import { DEFAULT_SIZE } from '../utils/size'
import templateHTML from './template.html?raw'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Textarea extends NectaryElement {
  #$input: HTMLTextAreaElement
  #$bottomSlot: HTMLSlotElement
  #$bottomWrapper: HTMLElement
  #$resizeHandle: HTMLElement
  #cursorPos: number | null = null
  #isPendingDk = false
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>
  #prevContentHeight: number = 0
  #dragStartY = 0
  #intersectionObserver: IntersectionObserver | null = null
  #internals: ElementInternals

  static formAssociated = true

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#internals = this.attachInternals()
    this.#$input = shadowRoot.querySelector('#input')!
    this.#$bottomSlot = shadowRoot.querySelector('slot[name="bottom"]')!
    this.#$bottomWrapper = shadowRoot.querySelector('#bottom')!
    this.#$resizeHandle = shadowRoot.querySelector('#resize-handle')!
    this.#sizeContext = new Context(this.#$bottomWrapper, 'size')
  }

  connectedCallback() {
    super.connectedCallback()
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.setAttribute('role', 'textbox')
    this.#internals.role = 'textbox'
    this.ariaMultiLine = 'true'
    this.#internals.ariaMultiLine = 'true'
    this.#$input.addEventListener('input', this.#onInput, options)
    this.#$input.addEventListener('compositionstart', this.#onCompositionStart, options)
    this.#$input.addEventListener('mousedown', this.#onSelectionChange, options)
    this.#$input.addEventListener('keydown', this.#onSelectionChange, options)
    this.#$input.addEventListener('focus', this.#onInputFocus, options)
    this.#$input.addEventListener('blur', this.#onInputBlur, options)
    this.#$resizeHandle.addEventListener('mousedown', this.#onDragStart, options)
    this.#$bottomSlot.addEventListener('slotchange', this.#onBottomSlotChange, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)

    this.#sizeContext.listen(this.#controller.signal)

    this.#onBottomSlotChange()
    this.#updateMinRows()
    this.#onSizeUpdate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null

    if (this.#intersectionObserver !== null) {
      this.#intersectionObserver.disconnect()
      this.#intersectionObserver = null
    }
  }

  formAssociatedCallback() {
    setFormValue(this.#internals, this.#$input.value)
  }

  formResetCallback() {
    this.#$input.value = ''
    setFormValue(this.#internals, '')
  }

  formStateRestoreCallback(state: string | FormData | null) {
    if (this.#internals.form === null || getBooleanAttribute(this.#internals.form, 'data-form-state-restore') === false) {
      return
    }

    if (state !== null) {
      const value = typeof state === 'string' ? state : state.get(this.name)

      this.#$input.value = value?.toString() ?? ''
      setFormValue(this.#internals, value?.toString() ?? '')
    }
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
          const isShrinkingContent = nextVal.length < prevVal.length

          this.#$input.value = nextVal

          setFormValue(this.#internals, nextVal)

          // Auto-resize textarea if "resizable" attribute is not set
          if (!this.resizable) {
            // Remove height property when shrinking content
            if (isShrinkingContent) {
              this.#$input.style.removeProperty('height')
            }

            // Measure height
            const nextContentHeight = this.#$input.scrollHeight

            // Update auto-resize height
            if (isShrinkingContent || nextContentHeight !== this.#prevContentHeight) {
              this.#prevContentHeight = nextContentHeight
              this.#$input.style.setProperty('height', `${this.#prevContentHeight}px`)
            }
          }

          if (!isPrevCursorEnd) {
            this.#$input.setSelectionRange(this.#cursorPos, this.#cursorPos)
          }
        }

        break
      }

      case 'placeholder': {
        this.#$input.placeholder = newVal ?? ''
        updateAttribute(this, 'aria-placeholder', newVal)
        this.#internals.ariaPlaceholder = newVal ?? ''

        break
      }

      case 'invalid': {
        if (isAttrEqual(oldVal, newVal)) {
          break
        }

        const isInvalid = isAttrTrue(newVal)

        this.ariaInvalid = isInvalid.toString()
        this.#internals.ariaInvalid = isInvalid.toString()
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
        this.#updateMinRows()

        break
      }

      case 'resizable': {
        if (isAttrEqual(oldVal, newVal)) {
          break
        }

        const isNewValTrue = isAttrTrue(newVal)

        updateBooleanAttribute(this, name, isNewValTrue)

        if (hasClass(this.#$bottomWrapper, 'empty') && isNewValTrue) {
          setClass(this.#$bottomWrapper, 'empty', false)
        }

        break
      }
    }
  }

  set name(value: string) {
    updateAttribute(this, 'name', value)
  }

  get name() {
    return getAttribute(this, 'name', '')
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

  #updateMinRows() {
    const minRows = this.minRows

    if (minRows <= 0) {
      this.#$input.style.removeProperty('min-height')

      // unsub
      if (this.#intersectionObserver !== null) {
        this.#intersectionObserver.disconnect()
        this.#intersectionObserver = null
      }
    } else {
      if (this.isDomConnected) {
        this.#calcMinRows()
      }

      // sub
      if (this.#intersectionObserver === null) {
        this.#intersectionObserver = new IntersectionObserver(this.#intersectionObserverCallback, { root: null })
        this.#intersectionObserver.observe(this.#$input)
      }
    }
  }

  #intersectionObserverCallback: IntersectionObserverCallback = ([entry]) => {
    if (entry != null && entry.isIntersecting) {
      this.#calcMinRows()
    }
  }

  #calcMinRows() {
    this.#$input.rows = this.minRows
    this.#$input.style.setProperty('min-height', `${getRect(this.#$input).height}px`)
    this.#$input.rows = this.rows
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

    setFormValue(this.#internals, nextValue)

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

  #onDragStart = (e: MouseEvent) => {
    // Prevent drag start while already dragging
    if (this.#dragStartY !== 0) {
      return
    }

    this.#dragStartY = e.clientY
    this.#prevContentHeight = getRect(this.#$input).height

    window.addEventListener('mousemove', this.#onDragResize, { signal: this.#controller!.signal, capture: true })
    window.addEventListener('mouseup', this.#onDragEnd, { signal: this.#controller!.signal, capture: true })
  }

  #onDragResize = (e: MouseEvent) => {
    const dy = e.clientY - this.#dragStartY
    const height = Math.round(Math.max(0, this.#prevContentHeight + dy))

    this.#$input.style.setProperty('height', `${height}px`)
  }

  #onDragEnd = () => {
    window.removeEventListener('mousemove', this.#onDragResize, { capture: true })
    window.removeEventListener('mouseup', this.#onDragEnd, { capture: true })

    this.#dragStartY = 0
    this.#prevContentHeight = 0
  }

  #onInputFocus = () => {
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onInputBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
  }

  #onBottomSlotChange = () => {
    const isEmpty = this.#$bottomSlot.assignedElements().length === 0

    if (!this.resizable) {
      setClass(this.#$bottomWrapper, 'empty', isEmpty)
    }
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
}

defineCustomElement('sinch-textarea', Textarea)
