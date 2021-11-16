import { defineCustomElement, getEventHandler } from '../utils'
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

    this.$input.addEventListener('input', this.onInput)
  }

  disconnectedCallback() {
    this.$input.removeEventListener('click', this.onInput)
  }

  static get observedAttributes() {
    return ['value', 'label', 'optionaltext', 'additionaltext', 'invalidtext']
  }

  set value(value: string) {
    this.setAttribute('value', value)
  }

  get value() {
    return this.getAttribute('value') ?? ''
  }

  set label(value: string) {
    this.setAttribute('label', value)
  }

  get label() {
    return this.getAttribute('label') ?? ''
  }

  set optionalText(value: string) {
    this.setAttribute('optionaltext', value)
  }

  get optionalText() {
    return this.getAttribute('optionaltext') ?? ''
  }

  set additionalText(value: string) {
    this.setAttribute('additionaltext', value)
  }

  get additionalText() {
    return this.getAttribute('additionaltext') ?? ''
  }

  set invalidText(value: string) {
    this.setAttribute('invalidtext', value)
  }

  get invalidText() {
    return this.getAttribute('invalidtext') ?? ''
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    switch (name) {
      case 'value': {
        this.$input.value = newVal

        break
      }

      case 'label': {
        this.$label.textContent = newVal

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
    }
  }

  onInput = (e: Event) => {
    const onChange = getEventHandler(this, 'onChange')

    if (onChange != null) {
      onChange(this.$input.value)
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.$input.value,
      })
    )

    this.$input.value = this.value

    e.stopPropagation()
  }
})

export type TSinchInput = {
  value: string,
  label: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  onChange: (value: string) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-input': TSinchInput,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input': HTMLElement & TSinchInput,
  }
}
