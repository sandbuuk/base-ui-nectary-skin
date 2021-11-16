import { defineCustomElement } from '../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select-option', class extends HTMLElement {
  $iconSlot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$iconSlot = shadowRoot.querySelector('slot')!
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

  get disabled(): boolean | undefined {
    const attrValue = this.getAttribute('disabled')

    return attrValue === '' || Boolean(attrValue)
  }

  getIcon(): Element | null {
    return this.$iconSlot.assignedElements()[0] ?? null
  }
})

export type TSinchSelectOption = {
  value: string,
  text: string,
  disabled?: boolean,
  getIcon: () => Element | null,
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
