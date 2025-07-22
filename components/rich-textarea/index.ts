import { getEmojiBaseUrl } from '../emoji/utils'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getReactEventHandler,
  isElementFocused,
  NectaryElement,
  parseMarkdown,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import {
  createParseVisitor,
  deleteContentBackward,
  formatIndent,
  formatInline,
  formatList,
  formatOutdent,
  getEndRange,
  getSelectionInfo,
  handleEmojiMousedown,
  insertFromPaste,
  insertLineBreak,
  insertLink,
  insertText,
  isEditorEmpty,
  isSelectionEqual,
  serializeMarkdown,
  setBrowserCaret,
} from './utils'
import type { TRichTextareaSelection, TSinchRichTextarea } from './types'
import type {
  TActionResult,
  TRange,
  TRichTextareaRoot,
} from './utils'
import type { NectaryComponentVanilla, NectaryComponentReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

// @ts-ignore
const SUPPORTS_SHADOW_SELECTION = typeof window.ShadowRoot.prototype.getSelection === 'function'

export class RichTextarea extends NectaryElement {
  #$input: TRichTextareaRoot
  #$placeholder: HTMLElement
  #controller: AbortController | null = null
  #sh: ShadowRoot & {getSelection(): Selection | null}
  #pendingRangePolyfill = false
  #$bottomSlot: HTMLSlotElement
  #$bottomWrapper: HTMLElement
  #$topSlot: HTMLSlotElement
  #$topWrapper: HTMLElement
  #rangePolyfill: TRange | null = null
  #cachedRange: TRange | null = null
  #lastSelectionInfo: TRichTextareaSelection | null = null
  #prevDispatchedValue: string | null = null
  #parseVisitor

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#sh = shadowRoot as any
    this.#$input = shadowRoot.querySelector('#input')!
    this.#$placeholder = shadowRoot.querySelector('#placeholder')!
    this.#$topSlot = shadowRoot.querySelector('#top')!
    this.#$topWrapper = shadowRoot.querySelector('#top-wrapper')!
    this.#$bottomSlot = shadowRoot.querySelector('#bottom')!
    this.#$bottomWrapper = shadowRoot.querySelector('#bottom-wrapper')!

    Object.defineProperty(this.#$input, 'ownerDocument', { value: shadowRoot })

    if (typeof (shadowRoot as unknown as Document).createElement !== 'function') {
      Object.defineProperty(shadowRoot, 'createElement', {
        value: document.createElement.bind(shadowRoot.ownerDocument),
      })
    }

    Object.defineProperty(shadowRoot, 'createTextNode', {
      value: document.createTextNode.bind(shadowRoot.ownerDocument),
    })
    Object.defineProperty(shadowRoot, 'createElementNS', {
      value: document.createElementNS.bind(shadowRoot.ownerDocument),
    })
    Object.defineProperty(shadowRoot, 'createDocumentFragment', {
      value: document.createDocumentFragment.bind(shadowRoot.ownerDocument),
    })

    this.#parseVisitor = createParseVisitor(shadowRoot as unknown as Document)
  }

  connectedCallback() {
    super.connectedCallback()
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.setAttribute('role', 'textbox')
    this.ariaMultiLine = 'true'
    this.#$input.addEventListener('beforeinput', this.#onBeforeInput, options)
    this.#$input.addEventListener('keydown', this.#onKeydown, options)
    this.#$input.addEventListener('mousedown', this.#onMouseDown, options)
    this.#$input.addEventListener('focus', this.#onInputFocus, options)
    this.#$input.addEventListener('blur', this.#onInputBlur, options)
    this.#$input.addEventListener('dragstart', this.#onDragStart, options)
    this.#$input.addEventListener('cut', this.#onCut, options)
    this.#$input.addEventListener('copy', this.#onCopy, options)
    this.#$input.addEventListener('paste', this.#onPaste, options)
    this.#$bottomSlot.addEventListener('slotchange', this.#onBottomSlotChange, options)
    this.#$topSlot.addEventListener('slotchange', this.#onTopSlotChange, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)
    this.addEventListener('-selection', this.#onSelectionReactHandler, options)
    document.addEventListener('selectionchange', this.#onSelectionChange, options)

    this.#parseVisitor.updateEmojiBaseUrl(getEmojiBaseUrl(this))
    this.#onTopSlotChange()
    this.#onBottomSlotChange()
    this.#onValueChange(this.value)
    this.#cachedRange = getEndRange(this.#$input)
    this.#updateEditorEmptyClass()
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
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        if (this.isConnected) {
          this.#onValueChange(newVal)
        }

        break
      }

      case 'placeholder': {
        this.#$placeholder.textContent = newVal
        updateAttribute(this, 'aria-placeholder', newVal)

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

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set rows(value: HTMLTextAreaElement['rows']) {
    updateAttribute(this, 'rows', value)
  }

  get rows(): HTMLTextAreaElement['rows'] {
    return getIntegerAttribute(this, 'rows', 0)
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

  insertText(value: string) {
    const res = this.#handleInput('insertText', this.#getCurrentRange(), value)

    this.#handleActionResult(res)
  }

  insertLink(text: string, href: string) {
    const res = this.#handleInput('insertLink', this.#getCurrentRange(), text, href)

    this.#handleActionResult(res)
  }

  formatItalic() {
    const res = this.#handleInput('formatItalic', this.#getCurrentRange())

    this.#handleActionResult(res)
  }

  formatBold() {
    const res = this.#handleInput('formatBold', this.#getCurrentRange())

    this.#handleActionResult(res)
  }

  formatStrikethrough() {
    const res = this.#handleInput('formatStrikeThrough', this.#getCurrentRange())

    this.#handleActionResult(res)
  }

  formatCodeTag() {
    const res = this.#handleInput('formatCodeTag', this.#getCurrentRange())

    this.#handleActionResult(res)
  }

  formatOrderedList() {
    const res = formatList(true, this.#getCurrentRange())

    this.#handleActionResult(res)
  }

  formatUnorderedList() {
    const res = formatList(false, this.#getCurrentRange())

    this.#handleActionResult(res)
  }

  /**
   * Input must be in focus
   */
  #getSelectionRange(): TRange | null {
    /* Chrome */
    if (SUPPORTS_SHADOW_SELECTION) {
      const selection = this.#sh.getSelection()

      if (selection === null || selection.rangeCount === 0) {
        return null
      }

      return selection.getRangeAt(0)
    }

    /* Firefox */
    {
      const selection = document.getSelection()

      if (selection === null || selection.rangeCount === 0) {
        return null
      }

      const range = selection.getRangeAt(0)

      if (this.#$input.contains(range.startContainer)) {
        return range
      }
    }

    /* Safari */
    this.#pendingRangePolyfill = true
    this.#rangePolyfill = null

    // Trigger "beforeinput" event to capture selection range
    document.execCommand('indent')

    this.#pendingRangePolyfill = false

    return this.#rangePolyfill
  }

  #onMouseDown = (e: Event) => {
    this.#handleActionResult(
      handleEmojiMousedown(e.target as Node)
    )
  }

  #onKeydown = (e: KeyboardEvent) => {
    if (e.shiftKey) {
      switch (e.key) {
        case 'Tab': {
          const res = this.#handleInput('formatOutdent', this.#getSelectionRange())

          if (res.prevent) {
            e.preventDefault()
          }

          this.#handleActionResult(res)

          break
        }
      }
    } else {
      switch (e.key) {
        case 'Tab': {
          const res = this.#handleInput('formatIndent', this.#getSelectionRange())

          if (res.prevent) {
            e.preventDefault()
          }

          this.#handleActionResult(res)

          break
        }
      }
    }

    if (e.metaKey || e.ctrlKey) {
      switch (e.key) {
        case 'b': {
          const res = this.#handleInput('formatBold', this.#getSelectionRange())

          if (res.prevent) {
            e.preventDefault()
          }

          this.#handleActionResult(res)

          break
        }
        case 'i': {
          const res = this.#handleInput('formatItalic', this.#getSelectionRange())

          if (res.prevent) {
            e.preventDefault()
          }

          this.#handleActionResult(res)

          break
        }
      }

      if (e.shiftKey) {
        switch (e.key) {
          case 'x': {
            const res = this.#handleInput('formatStrikeThrough', this.#getSelectionRange())

            if (res.prevent) {
              e.preventDefault()
            }

            this.#handleActionResult(res)

            break
          }
          case 'c': {
            const res = this.#handleInput('formatCodeTag', this.#getSelectionRange())

            if (res.prevent) {
              e.preventDefault()
            }

            this.#handleActionResult(res)

            break
          }
        }
      }
    }
  }

  #onBeforeInput = (e: InputEvent) => {
    const [range] = e.getTargetRanges()

    if (this.#pendingRangePolyfill) {
      this.#pendingRangePolyfill = false
      this.#rangePolyfill = range

      e.preventDefault()
      e.stopImmediatePropagation()

      return
    }

    const handleResult = this.#handleInput(e.inputType, range, e.data)

    if (handleResult.prevent) {
      e.preventDefault()
    }

    this.#handleActionResult(handleResult)
  }

  #handleInput(inputType: string, range: TRange | null, text?: string | null, href?: string): TActionResult {
    if (range === null) {
      return { prevent: true, range: null }
    }

    switch (inputType) {
      // case 'deleteByDrag':
      // case 'deleteByCut':
      //   break
      // }
      // case 'insertLink': {
      //   break
      // }
      case 'deleteContent':
      case 'deleteContentForward':
      case 'deleteWordForward':
      case 'deleteContentBackward':
      case 'deleteWordBackward': {
        return deleteContentBackward(this.#$input, range)
      }
      case 'insertLineBreak':
      case 'insertParagraph': {
        return insertLineBreak(range)
      }
      case 'insertReplacementText':
      case 'insertText': {
        return insertText(this.#$input, text!, range)
      }
      case 'insertLink': {
        return insertLink(this.#$input, text!, href!, range)
      }
      // case 'formatUnderline':
      case 'formatItalic':
      case 'formatBold':
      case 'formatStrikeThrough':
      case 'formatCodeTag': {
        return formatInline(inputType, range)
      }
      case 'formatIndent': {
        return formatIndent(range)
      }
      case 'formatOutdent': {
        return formatOutdent(range)
      }
      // case 'formatSuperscript':
      // case 'formatSubscript':
      // case 'historyUndo':
      // case 'historyRedo':
      default: {
        return { prevent: true, range: null }
      }
    }
  }

  #handleActionResult(result: TActionResult) {
    if (result.prevent) {
      this.#cachedRange = result.range

      if (result.range !== null) {
        setBrowserCaret(result.range)
      }
    }

    this.#updateEditorEmptyClass()
  }

  #onInputFocus = () => {
    if (this.#cachedRange !== null) {
      setBrowserCaret(this.#cachedRange)
    }

    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onInputBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
    this.#dispatchChangeEvent()
  }

  #dispatchChangeEvent() {
    const value = serializeMarkdown(this.#$input, null)

    this.#prevDispatchedValue = value

    // Dispatch only if state has changed
    if (value !== this.value) {
      this.dispatchEvent(new CustomEvent('-change', { detail: value }))
    }
  }

  #getCurrentRange = (): TRange => {
    // Update value only if focused
    if (isElementFocused(this.#$input)) {
      this.#cachedRange = this.#getSelectionRange()
    }

    // Update value if not initialized
    if (this.#cachedRange === null) {
      this.#cachedRange = getEndRange(this.#$input)
    }

    return this.#cachedRange
  }

  #onSelectionChange = () => {
    if (isElementFocused(this.#$input)) {
      this.#cachedRange = this.#getSelectionRange()
    }

    if (this.#cachedRange === null) {
      return
    }

    const selectionInfo = getSelectionInfo(this.#cachedRange)

    if (!isSelectionEqual(this.#lastSelectionInfo, selectionInfo)) {
      this.#lastSelectionInfo = selectionInfo
      this.dispatchEvent(new CustomEvent('-selection', { detail: selectionInfo }))
    }
  }

  #onValueChange(value: string | null) {
    if (value === this.#prevDispatchedValue) {
      return
    }

    if (value === null || value.length === 0) {
      // Reset editor
      this.#$input.innerHTML = ''
      this.#cachedRange = getEndRange(this.#$input)
      this.#prevDispatchedValue = value
      this.#updateEditorEmptyClass()

      return
    }

    this.#cachedRange = null
    this.#prevDispatchedValue = value
    this.#$input.replaceChildren(
      parseMarkdown(value, this.#parseVisitor.createVisitor())
    )
    this.#updateEditorEmptyClass()
  }

  #onCopy = (e: ClipboardEvent) => {
    e.preventDefault()

    if (this.#cachedRange === null) {
      return
    }

    if (e.clipboardData != null) {
      e.clipboardData.setData('text/plain', serializeMarkdown(this.#$input, this.#cachedRange))
    }
  }

  #onCut = (e: ClipboardEvent) => {
    e.preventDefault()

    if (this.#cachedRange === null) {
      return
    }

    if (e.clipboardData != null) {
      e.clipboardData.setData('text/plain', serializeMarkdown(this.#$input, this.#cachedRange))
    }

    this.#handleActionResult(
      deleteContentBackward(this.#$input, this.#cachedRange)
    )
  }

  #onPaste = (e: ClipboardEvent) => {
    e.preventDefault()

    const pasteValue = e.clipboardData?.getData('text/plain') ?? ''

    if (pasteValue.length === 0 || this.#cachedRange === null) {
      return
    }

    this.#handleActionResult(
      insertFromPaste(
        pasteValue,
        this.#cachedRange,
        this.#parseVisitor.createVisitor()
      )
    )
  }

  #updateEditorEmptyClass() {
    setClass(this.#$input, 'empty', isEditorEmpty(this.#$input))
  }

  #onBottomSlotChange = () => {
    const isEmpty = this.#$bottomSlot.assignedElements().length === 0

    setClass(this.#$bottomWrapper, 'empty', isEmpty)
  }

  #onTopSlotChange = () => {
    const isEmpty = this.#$topSlot.assignedElements().length === 0

    setClass(this.#$topWrapper, 'empty', isEmpty)
  }

  #onDragStart = (e: Event) => {
    e.preventDefault()
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

  #onSelectionReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-selection')?.(e)
  }
}

defineCustomElement('sinch-rich-textarea', RichTextarea)
declare global {
  interface NectaryComponentMap {
    'sinch-rich-textarea': TSinchRichTextarea,
  }

  interface HTMLElementTagNameMap {
    'sinch-rich-textarea': NectaryComponentVanilla<'sinch-rich-textarea'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-rich-textarea': NectaryComponentReact<'sinch-rich-textarea'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-rich-textarea': NectaryComponentReact<'sinch-rich-textarea'>,
    }
  }
}
