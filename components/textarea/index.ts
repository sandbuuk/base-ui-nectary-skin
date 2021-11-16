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
  }

  disconnectedCallback() {
    this.$input.removeEventListener('input', this.onInput)
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
        this.$input.textContent = newVal

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

  set disabled(isDisabled: boolean | undefined) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
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
})

export type TSinchTextarea = {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  onChange: (value: string) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-textarea': TSinchTextarea,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-textarea': HTMLElement & TSinchTextarea,
  }
}
