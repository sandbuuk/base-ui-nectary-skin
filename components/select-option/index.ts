import { defineCustomElement } from '../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select-option', class extends HTMLElement {
  $iconSlot: HTMLSlotElement
  $content: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$iconSlot = shadowRoot.querySelector('slot')!
    this.$content = shadowRoot.querySelector('span')!
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'text': {
        this.$content.textContent = newVal

        break
      }
    }
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

  set checked(isChecked: boolean | undefined) {
    if (isChecked === true) {
      this.setAttribute('checked', '')
    } else {
      this.removeAttribute('checked')
    }
  }

  get checked(): boolean {
    const attrValue = this.getAttribute('checked')

    return attrValue === '' || Boolean(attrValue)
  }

  set selected(isSelected: boolean | undefined) {
    if (isSelected === true) {
      this.setAttribute('selected', '')
    } else {
      this.removeAttribute('selected')
    }
  }

  get selected(): boolean {
    const attrValue = this.getAttribute('selected')

    return attrValue === '' || Boolean(attrValue)
  }
})

export type TSinchSelectOption = {
  value: string,
  text: string,
  checked?: boolean,
  selected?: boolean,
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
