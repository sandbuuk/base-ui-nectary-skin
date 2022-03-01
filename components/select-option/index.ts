import { defineCustomElement, getAttribute, getBooleanAttribute, updateAttribute, updateBooleanAttribute } from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

export const isSelectOptionElement = (element: EventTarget | Element | null): element is TSinchSelectOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-SELECT-OPTION'
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select-option', class extends HTMLElement {
  #$iconSlot: HTMLSlotElement
  #$content: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
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
        updateAttribute(this, 'aria-selected', newVal)
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
    updateBooleanAttribute(this, 'selected', isSelected)
  }

  get selected() {
    return getBooleanAttribute(this, 'selected')
  }

  get icon(): Element | null {
    return this.#$iconSlot.assignedElements()[0] ?? null
  }
})

export type TSinchSelectOptionElement = HTMLElement & {
  value: string,
  text: string,
  checked: boolean,
  selected: boolean,
  disabled: boolean,
  readonly icon: Element | null,
}

export type TSinchSelectOptionReact = TSinchElementReact<TSinchSelectOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-option': TSinchSelectOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select-option': TSinchSelectOptionElement,
  }
}
