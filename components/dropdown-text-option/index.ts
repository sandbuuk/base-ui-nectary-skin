import '../icons/check'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchDropdownTextOptionElement, TSinchDropdownTextOptionReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class DropdownTextOption extends NectaryElement {
  #$iconSlot: HTMLSlotElement
  #$content: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$iconSlot = shadowRoot.querySelector('slot')!
    this.#$content = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    this.setAttribute('role', 'option')
  }

  static get observedAttributes() {
    return ['text', 'checked']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$content.textContent = newVal

        break
      }

      case 'checked': {
        updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal))
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

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set checked(isChecked: boolean) {
    updateBooleanAttribute(this, 'checked', isChecked)
  }

  get checked() {
    return getBooleanAttribute(this, 'checked')
  }

  get icon(): Element | null {
    return this.#$iconSlot.assignedElements()[0] ?? null
  }
}

defineCustomElement('sinch-dropdown-text-option', DropdownTextOption)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-dropdown-text-option': TSinchDropdownTextOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-dropdown-text-option': TSinchDropdownTextOptionElement,
  }
}
