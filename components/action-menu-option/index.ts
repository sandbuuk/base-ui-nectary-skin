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
import type { TSinchActionMenuOptionElement, TSinchActionMenuOptionReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-action-menu-option', class ActionMenuOption extends NectaryElement {
  #$button: HTMLButtonElement
  #$content: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#wrapper')!
    this.#$content = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    this.setAttribute('role', 'option')
  }

  static get observedAttributes() {
    return ['text', 'disabled']
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

      case 'disabled': {
        this.#$button.disabled = isAttrTrue(newVal)
      }
    }
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

  set selected(isSelected: boolean) {
    updateBooleanAttribute(this, 'data-selected', isSelected)
  }

  get selected() {
    return getBooleanAttribute(this, 'data-selected')
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-action-menu-option': TSinchActionMenuOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-action-menu-option': TSinchActionMenuOptionElement,
  }
}
