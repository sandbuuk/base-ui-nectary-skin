import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchRadioOption } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-radio-option', class extends NectaryElement {
  #$label: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$label = shadowRoot.querySelector('#label')!
  }

  connectedCallback() {
    this.setAttribute('role', 'radio')
    this.tabIndex = 0
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return [
      'checked',
      'disabled',
      'text',
      'data-invalid',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$label.textContent = newVal

        break
      }
      case 'checked': {
        const isChecked = isAttrTrue(newVal)

        updateExplicitBooleanAttribute(this, 'aria-checked', isChecked)
        updateBooleanAttribute(this, 'checked', isChecked)

        break
      }
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        updateExplicitBooleanAttribute(this, 'aria-disabled', isDisabled)
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
      case 'data-invalid': {
        updateBooleanAttribute(this, 'data-invalid', isAttrTrue(newVal))

        break
      }
    }
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

  get focusable() {
    return true
  }
})

declare global {
  interface NectaryComponentMap {
    'sinch-radio-option': TSinchRadioOption,
  }

  interface HTMLElementTagNameMap {
    'sinch-radio-option': NectaryComponentVanilla<'sinch-radio-option'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-radio-option': NectaryComponentReact<'sinch-radio-option'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-radio-option': NectaryComponentReact<'sinch-radio-option'>,
    }
  }
}
