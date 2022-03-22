import { defineCustomElement, getAttribute, getBooleanAttribute, isAttrTrue, updateAttribute, updateBooleanAttribute } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class DropdownOption extends HTMLElement {
  #$iconSlot: HTMLSlotElement
  #$content: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$iconSlot = shadowRoot.querySelector('slot')!
    this.#$content = shadowRoot.querySelector('span')!
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

  get icon(): Element | null {
    return this.#$iconSlot.assignedElements()[0] ?? null
  }
}

defineCustomElement('sinch-dropdown-option', DropdownOption)

export const isDropdownOptionElement = (element: EventTarget | Element | null): element is TSinchDropdownOptionElement => {
  return element instanceof DropdownOption
}

export type TSinchDropdownOptionElement = HTMLElement & {
  value: string,
  text: string,
  checked: boolean,
  selected: boolean,
  disabled: boolean,
  readonly icon: Element | null,
}

export type TSinchDropdownOptionReact = TSinchElementReact<TSinchDropdownOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-dropdown-option': TSinchDropdownOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-dropdown-option': TSinchDropdownOptionElement,
  }
}
