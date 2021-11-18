import { defineCustomElement, getAttribute, getBooleanAttribute, getEventHandler, isAttrTrue, updateAttribute, updateBooleanAttribute } from '../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input', class extends HTMLElement {
  $input: HTMLInputElement
  $label: HTMLLabelElement
  $optionalText: HTMLSpanElement
  $additionalText: HTMLSpanElement
  $invalidText: HTMLSpanElement
  onChange!: (e: any) => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$input = shadowRoot.querySelector('#input')!
    this.$label = shadowRoot.querySelector('#label')!
    this.$optionalText = shadowRoot.querySelector('#optional')!
    this.$additionalText = shadowRoot.querySelector('#additional')!
    this.$invalidText = shadowRoot.querySelector('#invalid')!
  }

  connectedCallback() {
    this.$input.addEventListener('input', this.onInput)
    this.$input.addEventListener('focus', this.onInputFocus)
    this.$input.addEventListener('blur', this.onInputBlur)
  }

  disconnectedCallback() {
    this.$input.removeEventListener('input', this.onInput)
    this.$input.removeEventListener('focus', this.onInputFocus)
    this.$input.removeEventListener('blur', this.onInputBlur)
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

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set placeholder(value: string | undefined) {
    updateAttribute(this, 'placeholder', value)
  }

  get placeholder() {
    return getAttribute(this, 'placeholder')
  }

  set label(value: string) {
    updateAttribute(this, 'label', value)
  }

  get label() {
    return getAttribute(this, 'label', '')
  }

  set optionalText(value: string | undefined) {
    updateAttribute(this, 'optionaltext', value)
  }

  get optionalText() {
    return getAttribute(this, 'optionaltext')
  }

  set additionalText(value: string | undefined) {
    updateAttribute(this, 'additionaltext', value)
  }

  get additionalText() {
    return getAttribute(this, 'additionaltext')
  }

  set invalidText(value: string | undefined) {
    updateAttribute(this, 'placeholder', value)
  }

  get invalidText() {
    return getAttribute(this, 'invalidtext')
  }

  set disabled(isDisabled: boolean | undefined) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.$input.value = newVal ?? ''

        break
      }

      case 'label': {
        this.$label.textContent = newVal

        break
      }

      case 'placeholder': {
        this.$input.placeholder = newVal ?? ''

        break
      }

      case 'optionaltext': {
        this.$optionalText.textContent = newVal

        break
      }

      case 'additionaltext': {
        this.$additionalText.textContent = newVal

        break
      }

      case 'invalidtext': {
        this.$invalidText.textContent = newVal

        break
      }

      case 'disabled': {
        this.$input.disabled = isAttrTrue(newVal)

        break
      }
    }
  }

  focus() {
    this.$input.focus()
  }

  blur() {
    this.$input.blur()
  }

  onInput = (e: Event) => {
    getEventHandler(this, 'onChange')?.(this.$input.value)

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.$input.value,
      })
    )

    e.stopPropagation()
  }

  onInputFocus = (e: Event) => {
    getEventHandler(this, 'onFocus')?.()

    this.dispatchEvent(
      new CustomEvent('focus')
    )

    e.stopPropagation()
  }

  onInputBlur = (e: Event) => {
    getEventHandler(this, 'onBlur')?.()

    this.dispatchEvent(
      new CustomEvent('blur')
    )

    e.stopPropagation()
  }
})

export type TSinchInput = {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  onChange: (value: string) => void,
  onFocus: () => void,
  onBlur: () => void,
}

type TSinchInputElement = HTMLElement & {
  focus: () => void,
  blur: () => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-input': TSinchInput,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input': TSinchInputElement & TSinchInput,
  }
}
