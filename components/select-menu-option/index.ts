import '../icon'
import '../text'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getCssVar,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSelectMenuOptionElement, TSinchSelectMenuOptionReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class SelectMenuOption extends NectaryElement {
  #$iconCheck: HTMLElement
  #$content: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$content = shadowRoot.querySelector('#content')!
    this.#$iconCheck = shadowRoot.querySelector('#icon-check')!
  }

  connectedCallback() {
    this.setAttribute('role', 'option')

    updateAttribute(this.#$iconCheck, 'name', getCssVar(this, '--sinch-select-menu-icon-check'))
  }

  static get observedAttributes() {
    return ['text', 'data-checked', 'disabled']
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

      case 'data-checked': {
        updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal))

        break
      }

      case 'disabled': {
        updateBooleanAttribute(this, 'disabled', isAttrTrue(newVal))

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

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  matchesSearch(searchValue: string): boolean {
    return this.text.toLowerCase().includes(searchValue)
  }
}

defineCustomElement('sinch-select-menu-option', SelectMenuOption)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-menu-option': TSinchSelectMenuOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select-menu-option': TSinchSelectMenuOptionElement,
  }
}
