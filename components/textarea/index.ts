import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { DOMAttributes, FocusEvent, SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-textarea', class extends HTMLElement {
  #$input: HTMLTextAreaElement
  #$label: HTMLLabelElement
  #$optionalText: HTMLSpanElement
  #$additionalText: HTMLSpanElement
  #$invalidText: HTMLSpanElement
  #selectionStart: number | null = null
  #selectionEnd: number | null = null
  #isPendingDk = false

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('#input')!
    this.#$label = shadowRoot.querySelector('#label')!
    this.#$optionalText = shadowRoot.querySelector('#optional')!
    this.#$additionalText = shadowRoot.querySelector('#additional')!
    this.#$invalidText = shadowRoot.querySelector('#invalid')!
  }

  connectedCallback() {
    this.setAttribute('role', 'textbox')
    this.setAttribute('aria-multiline', 'true')
    this.#$input.addEventListener('input', this.#onInput)
    this.#$input.addEventListener('keydown', this.#onKeydown)
  }

  disconnectedCallback() {
    this.#$input.removeEventListener('input', this.#onInput)
    this.#$input.removeEventListener('keydown', this.#onKeydown)
  }

  static get observedAttributes() {
    return [
      'value',
      'placeholder',
      'label',
      'optionaltext',
      'additionaltext',
      'invalidtext',
      'disabled',
    ]
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
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

  focus() {
    this.#$input.focus()
  }

  blur() {
    this.#$input.blur()
  }

  #onKeydown = (e: KeyboardEvent) => {
    if (e.keyCode === 229) {
      this.#isPendingDk = true
    }
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

export type TSinchTextareaElement = HTMLElement & {
  value: string,
  label: string,
  placeholder: string | null,
  optionalText: string | null,
  invalidText: string | null,
  additionalText: string | null,
  disabled: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchTextareaReact = TSinchElementReact<TSinchTextareaElement> & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  'aria-label': string,
  onChange: (e: SyntheticEvent<TSinchTextareaElement, CustomEvent<string>>) => void,
  onKeyPress?: DOMAttributes<TSinchTextareaElement>['onKeyPress'],
  onFocus?: (e: FocusEvent<TSinchTextareaElement>) => void,
  onBlur?: (e: FocusEvent<TSinchTextareaElement>) => void,
}

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
