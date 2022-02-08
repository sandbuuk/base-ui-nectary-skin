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
import type { FocusEvent } from 'react'

export const isRadioOptionElement = (element: EventTarget | Element | null): element is TSinchRadioOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-RADIO-OPTION'
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-radio-option', class extends HTMLElement {
  #$input: HTMLInputElement
  #$label: HTMLLabelElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('input')!
    this.#$label = shadowRoot.querySelector('label')!
  }

  connectedCallback() {
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

        break
      }
      case 'disabled': {
        this.#$input.disabled = isAttrTrue(newVal)

        break
      }
      case 'value': {
        this.#$input.value = newVal ?? ''

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

    this.#$input.checked = false
    this.dispatchEvent(
      new CustomEvent('change', { bubbles: true, detail: this.value })
    )
  }
})

type TSinchRadioOptionElement = HTMLElement & {
  value: string,
  checked: boolean,
  disabled: boolean,
  text: string,
  focus(): void,
  blur(): void,
}

type TSinchRadioOptionReact = TSinchElementReact<TSinchRadioOptionElement> & {
  value: string,
  disabled?: boolean,
  text: string,
  onFocus?: (e: FocusEvent<TSinchRadioOptionElement>) => void,
  onBlur?: (e: FocusEvent<TSinchRadioOptionElement>) => void,
}

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
