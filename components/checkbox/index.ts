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
import type { TSinchElementReact } from '../types'
import type { FocusEvent, SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-checkbox', class extends NectaryElement {
  #$input: HTMLInputElement
  #$label: HTMLLabelElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('input')!
    this.#$label = shadowRoot.querySelector('label')!
    this.#$input.addEventListener('input', this.#onCheckboxInput)
  }

  connectedCallback() {
    this.setAttribute('role', 'checkbox')
  }

  static get observedAttributes() {
    return ['checked', 'disabled', 'text']
  }

  get type() {
    return 'text'
  }

  get nodeName() {
    return 'input'
  }

  set checked(isChecked: boolean) {
    updateBooleanAttribute(this, 'checked', isChecked)
  }

  get checked() {
    return getBooleanAttribute(this, 'checked')
  }

  set indeterminate(isIndeterminate: boolean) {
    updateBooleanAttribute(this, 'indeterminate', isIndeterminate)
  }

  get indeterminate() {
    return getBooleanAttribute(this, 'indeterminate')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set invalid(isInvalid: boolean) {
    updateBooleanAttribute(this, 'invalid', isInvalid)
  }

  get invalid() {
    return getBooleanAttribute(this, 'invalid')
  }

  set text(value: string | null) {
    updateAttribute(this, 'text', value)
  }

  get text() {
    return getAttribute(this, 'text', null)
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

  #onCheckboxInput = (e: Event) => {
    e.stopPropagation()

    const isChecked = this.#$input.checked

    this.#$input.checked = this.checked

    this.dispatchEvent(
      new CustomEvent(
        'change',
        {
          detail: isChecked,
          bubbles: true,
        }
      )
    )
  }
})

export type TSinchCheckboxElement = HTMLElement & {
  checked: boolean,
  indeterminate: boolean,
  disabled: boolean,
  invalid: boolean,
  text: string | null,
  focus(): void,
  blur(): void,
}

export type TSinchCheckboxReact = TSinchElementReact<TSinchCheckboxElement> & {
  checked?: boolean,
  indeterminate?: boolean,
  disabled?: boolean,
  invalid?: boolean,
  text?: string,
  'aria-label': string,
  onChange: (event: SyntheticEvent<TSinchCheckboxElement, CustomEvent<boolean>>) => void,
  onFocus?: (e: FocusEvent<TSinchCheckboxElement>) => void,
  onBlur?: (e: FocusEvent<TSinchCheckboxElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-checkbox': TSinchCheckboxReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-checkbox': TSinchCheckboxElement,
  }
}
