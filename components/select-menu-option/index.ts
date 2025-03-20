import '../icon'
import '../text'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSelectMenuOption } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class SelectMenuOption extends NectaryElement {
  #$contentSlot: HTMLSlotElement
  #$content: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$contentSlot = shadowRoot.querySelector('slot[name="content"]')!
    this.#$content = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    this.setAttribute('role', 'option')
    this.#$contentSlot.addEventListener(
      'slotchange',
      this.#onContentSlotChange
    )
    this.#onContentSlotChange()
  }

  static get observedAttributes() {
    return ['text', 'data-checked', 'disabled']
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$content.textContent = newVal

        break
      }

      case 'data-checked': {
        updateExplicitBooleanAttribute(
          this,
          'aria-selected',
          isAttrTrue(newVal)
        )

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
    return this.text.toLowerCase().includes(searchValue.toLowerCase())
  }

  #onContentSlotChange = () => {
    const elements = this.#$contentSlot.assignedElements()

    this.#$content.style.display = elements.length > 0 ? 'none' : ''
  }
}

defineCustomElement('sinch-select-menu-option', SelectMenuOption)

declare global {
  interface NectaryComponentMap {
    'sinch-select-menu-option': TSinchSelectMenuOption,
  }

  interface HTMLElementTagNameMap {
    'sinch-select-menu-option': NectaryComponentVanilla<'sinch-select-menu-option'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-menu-option': NectaryComponentReact<'sinch-select-menu-option'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-menu-option': NectaryComponentReact<'sinch-select-menu-option'>,
    }
  }
}
