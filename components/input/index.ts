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

  set value(value: string) {
    this.setAttribute('value', value)
  }

  get value(): string {
    return this.getAttribute('value') ?? ''
  }

  set placeholder(value: string | undefined) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('placeholder', value)
    } else {
      this.removeAttribute('placeholder')
    }
  }

  get placeholder(): string {
    return this.getAttribute('placeholder') ?? ''
  }

  set label(value: string) {
    this.setAttribute('label', value)
  }

  get label(): string {
    return this.getAttribute('label') ?? ''
  }

  set optionalText(value: string) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('optionaltext', value)
    } else {
      this.removeAttribute('optionaltext')
    }
  }

  get optionalText(): string {
    return this.getAttribute('optionaltext') ?? ''
  }

  set additionalText(value: string) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('additionaltext', value)
    } else {
      this.removeAttribute('additionaltext')
    }
  }

  get additionalText(): string {
    return this.getAttribute('additionaltext') ?? ''
  }

  set invalidText(value: string | undefined) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('invalidtext', value)
    } else {
      this.removeAttribute('invalidtext')
    }
  }

  get invalidText(): string {
    return this.getAttribute('invalidtext') ?? ''
  }

  set disabled(isDisabled: boolean | undefined) {
    if (isDisabled === true) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get disabled(): boolean {
    const attrValue = this.getAttribute('disabled')

    return attrValue === '' || Boolean(attrValue)
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
        this.$input.disabled = newVal === '' || Boolean(newVal)

        break
      }
    }
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

export type TSinchInput = {
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
      'sinch-input': TSinchInput,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input': HTMLElement & TSinchInput,
  }
}
