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

const template = document.createElement('template')

template.innerHTML = templateHTML

class DropdownRadioOption extends NectaryElement {
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
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
        this.#$text.textContent = newVal

        break
      }

      case 'checked': {
        updateAttribute(this, 'aria-selected', isAttrTrue(newVal))
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

  set selected(isSelected: boolean) {
    updateBooleanAttribute(this, 'data-selected', isSelected)
  }

  get selected() {
    return getBooleanAttribute(this, 'data-selected')
  }
}

defineCustomElement('sinch-dropdown-radio-option', DropdownRadioOption)

export const isDropdownRadioOptionElement = (element: EventTarget | Element | null): element is TSinchDropdownRadioOptionElement => {
  return element instanceof DropdownRadioOption
}

export type TSinchDropdownRadioOptionElement = HTMLElement & {
  value: string,
  text: string,
  checked: boolean,
  selected: boolean,
  disabled: boolean,
}

export type TSinchDropdownRadioOptionReact = TSinchElementReact<TSinchDropdownRadioOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-dropdown-radio-option': TSinchDropdownRadioOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-dropdown-radio-option': TSinchDropdownRadioOptionElement,
  }
}
