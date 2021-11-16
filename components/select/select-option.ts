import { defineCustomElement } from '../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select-option', class extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['value', 'text', 'disabled']
  }

  set value(value: string) {
    this.setAttribute('value', value)
  }

  get value(): string {
    return this.getAttribute('value') ?? ''
  }

  set text(value: string) {
    this.setAttribute('text', value)
  }

  get text(): string {
    return this.getAttribute('text') ?? ''
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
})

export type TSinchSelectOption = {
  value: string,
  text: string,
  disabled?: boolean,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-option': TSinchSelectOption,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select-option': HTMLElement & TSinchSelectOption,
  }
}
