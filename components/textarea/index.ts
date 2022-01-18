import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getEventHandler,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-textarea', class extends HTMLElement {
  $input: HTMLTextAreaElement
  $label: HTMLLabelElement
  $optionalText: HTMLSpanElement
  $additionalText: HTMLSpanElement
  $invalidText: HTMLSpanElement
  onChange!: (e: any) => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

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

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value() {
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
    updateAttribute(this, 'invalidtext', value)
  }

  get invalidText() {
    return getAttribute(this, 'invalidtext')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  focus() {
    this.$input.focus()
  }

  blur() {
    this.$input.blur()
  }

  onInput = (e: Event) => {
    e.stopPropagation()

    const value = this.$input.value

    getEventHandler(this, 'onChange')?.(value)

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: value,
      })
    )

    this.$input.value = this.value
  }

  onInputFocus = (e: Event) => {
    e.stopPropagation()
    getEventHandler(this, 'onFocus')?.()

    this.dispatchEvent(
      new CustomEvent('focus')
    )
  }

  onInputBlur = (e: Event) => {
    e.stopPropagation()
    getEventHandler(this, 'onBlur')?.()

    this.dispatchEvent(
      new CustomEvent('blur')
    )
  }
})

type TSinchTextareaElement = HTMLElement & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled: boolean,
  focus(): void,
  blur(): void,
}

type TSinchTextareaReact = TSinchElementReact<TSinchTextareaElement> & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  onChange: (value: string) => void,
  onFocus?: () => void,
  onBlur?: () => void,
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
