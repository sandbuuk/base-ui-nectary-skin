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
import type { FocusEvent, SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input', class extends HTMLElement {
  #$input: HTMLInputElement
  #$label: HTMLLabelElement
  #$optionalText: HTMLSpanElement
  #$additionalText: HTMLSpanElement
  #$invalidText: HTMLSpanElement

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
    this.#$input.addEventListener('input', this.#onInput)
    this.setAttribute('aria-label', 'input')
  }

  disconnectedCallback() {
    this.#$input.removeEventListener('input', this.#onInput)
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

  get type() {
    return 'text'
  }

  get nodeName() {
    return 'input'
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

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#$input.value = newVal ?? ''

        break
      }

      case 'label': {
        this.#$label.textContent = newVal

        break
      }

      case 'placeholder': {
        this.#$input.placeholder = newVal ?? ''

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

  #onInput = (e: Event) => {
    e.stopPropagation()

    const value = (e.target as HTMLInputElement).value

    this.#$input.value = this.value

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: value,
        bubbles: true,
      })
    )
  }
})

export type TSinchInputElement = HTMLElement & {
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

export type TSinchInputReact = TSinchElementReact<TSinchInputElement> & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  onChange: (e: SyntheticEvent<TSinchInputElement, CustomEvent<string>>) => void,
  onFocus?: (e: FocusEvent<TSinchInputElement>) => void,
  onBlur?: (e: FocusEvent<TSinchInputElement>) => void,
}

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
