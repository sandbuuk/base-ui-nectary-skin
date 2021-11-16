import { defineCustomElement, getAttribute, getBooleanAttribute, updateAttribute, updateBooleanAttribute } from '../utils'
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

  connectedCallback() {
    this.setAttribute('role', 'option')
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
    updateAttribute(this, 'value', value)
  }

  get value() {
    return getAttribute(this, 'value', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set disabled(isDisabled: boolean | undefined) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set checked(isChecked: boolean | undefined) {
    updateBooleanAttribute(this, 'checked', isChecked)
  }

  get checked() {
    return getBooleanAttribute(this, 'checked')
  }

  set selected(isSelected: boolean | undefined) {
    updateBooleanAttribute(this, 'selected', isSelected)
  }

  get selected() {
    return getBooleanAttribute(this, 'selected')
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
