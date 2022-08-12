import '../stop-events'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  isAttrTrue,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { inputTypes } from './utils'
import type { TSinchInputElement, TSinchInputReact, TSinchInputType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input', class extends NectaryElement {
  #$input: HTMLInputElement
  #$label: HTMLLabelElement
  #$optionalText: HTMLSpanElement
  #$additionalText: HTMLSpanElement
  #$invalidText: HTMLSpanElement
  #$iconSlot: HTMLSlotElement
  #$iconWrapper: HTMLElement
  #$rightSlot: HTMLSlotElement
  #$rightWrapper: HTMLElement
  #cursorPos: number | null = null
  #isPendingDk = false

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('#input')!
    this.#$label = shadowRoot.querySelector('#label')!
    this.#$optionalText = shadowRoot.querySelector('#optional')!
    this.#$additionalText = shadowRoot.querySelector('#additional')!
    this.#$invalidText = shadowRoot.querySelector('#invalid')!
    this.#$iconSlot = shadowRoot.querySelector('slot[name="icon"]')!
    this.#$iconWrapper = shadowRoot.querySelector('#icon')!
    this.#$rightSlot = shadowRoot.querySelector('slot[name="right"]')!
    this.#$rightWrapper = shadowRoot.querySelector('#right')!
  }

  connectedCallback() {
    this.setAttribute('role', 'textbox')
    this.#$input.addEventListener('input', this.#onInput)
    this.#$input.addEventListener('compositionstart', this.#onCompositionStart)
    this.#$input.addEventListener('mousedown', this.#onSelectionChange)
    this.#$input.addEventListener('keydown', this.#onSelectionChange)
    this.#$iconSlot.addEventListener('slotchange', this.#onIconSlotChange)
    this.#$rightSlot.addEventListener('slotchange', this.#onRightSlotChange)

    this.#onIconSlotChange()
    this.#onRightSlotChange()
  }

  disconnectedCallback() {
    this.#$input.removeEventListener('input', this.#onInput)
    this.#$input.removeEventListener('compositionstart', this.#onCompositionStart)
    this.#$input.removeEventListener('mousedown', this.#onSelectionChange)
    this.#$input.removeEventListener('keydown', this.#onSelectionChange)
    this.#$iconSlot.removeEventListener('slotchange', this.#onIconSlotChange)
    this.#$rightSlot.removeEventListener('slotchange', this.#onRightSlotChange)
  }

  static get observedAttributes() {
    return [
      'type',
      'value',
      'placeholder',
      'label',
      'optionaltext',
      'additionaltext',
      'invalidtext',
      'disabled',
    ]
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
    return getAttribute(this, 'placeholder', null)
  }

  set label(value: string) {
    updateAttribute(this, 'label', value)
  }

  get label() {
    return getAttribute(this, 'label', '')
  }

  set optionalText(value: string | null) {
    updateAttribute(this, 'optionaltext', value)
  }

  get optionalText() {
    return getAttribute(this, 'optionaltext', null)
  }

  set additionalText(value: string | null) {
    updateAttribute(this, 'additionaltext', value)
  }

  get additionalText() {
    return getAttribute(this, 'additionaltext', null)
  }

  set invalidText(value: string | null) {
    updateAttribute(this, 'invalidtext', value)
  }

  get invalidText() {
    return getAttribute(this, 'invalidtext', null)
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
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

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'type': {
        updateLiteralAttribute(this.#$input, inputTypes, 'type', newVal)

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

        break
      }

      case 'label': {
        this.#$label.textContent = newVal

        break
      }

      case 'placeholder': {
        this.#$input.placeholder = newVal ?? ''
        updateAttribute(this, 'aria-placeholder', newVal)

        break
      }

      case 'optionaltext': {
        this.#$optionalText.textContent = newVal

        break
      }

      case 'additionaltext': {
        this.#$additionalText.textContent = newVal

        break
      }

      case 'invalidtext': {
        const isInvalid = newVal !== null && newVal !== ''

        this.#$invalidText.textContent = newVal
        updateExplicitBooleanAttribute(this, 'aria-invalid', isInvalid)

        break
      }

      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$input.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
    }
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
    }
  }

  #onIconSlotChange = () => {
    setClass(this.#$iconWrapper, 'empty', this.#$iconSlot.assignedElements().length === 0)
  }

  #onRightSlotChange = () => {
    setClass(this.#$rightWrapper, 'empty', this.#$rightSlot.assignedElements().length === 0)
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
