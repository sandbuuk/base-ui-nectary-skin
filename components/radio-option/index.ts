import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchRadioOptionElement, TSinchRadioOptionReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-radio-option', class extends NectaryElement {
  #$input: HTMLInputElement
  #$label: HTMLLabelElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('input')!
    this.#$label = shadowRoot.querySelector('label')!
  }

  connectedCallback() {
    this.setAttribute('role', 'radio')
    this.#$input.addEventListener('input', this.#onInput)
  }

  disconnectedCallback() {
    this.#$input.removeEventListener('input', this.#onInput)
  }

  static get observedAttributes() {
    return ['checked', 'disabled', 'text', 'value']
  }

  set checked(isChecked: boolean) {
    updateBooleanAttribute(this, 'checked', isChecked)
  }

  get checked() {
    return getBooleanAttribute(this, 'checked')
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value() {
    return getAttribute(this, 'value', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$label.textContent = newVal

        break
      }
      case 'checked': {
        this.#$input.checked = isAttrTrue(newVal)
        updateAttribute(this, 'aria-checked', isAttrTrue(newVal))

        break
      }
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$input.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
      case 'value': {
        this.#$input.value = newVal ?? ''

        break
      }
    }
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

  #onInput = (e: Event) => {
    e.stopPropagation()

    this.#$input.checked = false
    this.dispatchEvent(
      new CustomEvent('option-change', { bubbles: true, detail: this.value })
    )
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-radio-option': TSinchRadioOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-radio-option': TSinchRadioOptionElement,
  }
}
