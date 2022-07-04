import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { inputTypes } from './utils'
import type { TSinchInputElement, TSinchInputReact, TTextInputType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input', class extends NectaryElement {
  #$input: HTMLInputElement
  #$label: HTMLLabelElement
  #$optionalText: HTMLSpanElement
  #$additionalText: HTMLSpanElement
  #$invalidText: HTMLSpanElement
  #selectionStart: number | null = null
  #selectionEnd: number | null = null
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
  }

  connectedCallback() {
    this.setAttribute('role', 'textbox')
    this.#$input.addEventListener('input', this.#onInput)
    this.#$input.addEventListener('compositionstart', this.#onCompositionStart)
  }

  disconnectedCallback() {
    this.#$input.removeEventListener('input', this.#onInput)
    this.#$input.removeEventListener('compositionstart', this.#onCompositionStart)
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

  set type(value: TTextInputType) {
    updateAttribute(this, 'type', value)
  }

  get type(): TTextInputType {
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

        if (nextVal !== this.#$input.value) {
          this.#$input.value = nextVal

          const isNextCursorEnd = this.#selectionStart === this.#selectionEnd && (this.#selectionStart === null || this.#selectionStart === nextVal.length)

          if (!isNextCursorEnd) {
            this.#$input.setSelectionRange(this.#selectionStart, this.#selectionEnd)
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
        this.#$invalidText.textContent = newVal
        updateAttribute(this, 'aria-invalid', String(newVal !== null && newVal !== ''))

        break
      }

      case 'disabled': {
        this.#$input.disabled = isAttrTrue(newVal)

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

  #onInput = (e: Event) => {
    e.stopPropagation()

    const nextValue = this.#$input.value
    const prevValue = this.value

    if (prevValue !== nextValue) {
      const nextSelectionStart = this.#$input.selectionStart
      const nextSelectionEnd = this.#$input.selectionEnd
      const prevSelectionStart = this.#selectionStart
      const prevSelectionEnd = this.#selectionEnd
      const isPrevCursorEnd = prevSelectionStart === prevSelectionEnd && prevSelectionStart === prevValue.length

      if (!this.#isPendingDk) {
        // Reset input value to enforce controlled state
        this.#$input.value = prevValue
      }

      this.#isPendingDk = false

      if (!isPrevCursorEnd) {
        this.#$input.setSelectionRange(prevSelectionStart, prevSelectionEnd)
      }

      this.#selectionStart = nextSelectionStart
      this.#selectionEnd = nextSelectionEnd

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: nextValue,
          bubbles: true,
        })
      )
    }
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
