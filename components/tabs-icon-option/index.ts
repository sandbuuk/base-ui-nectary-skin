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
import type { TSinchTabsIconOption } from './types'
import type { NectaryComponentVanilla, NectaryComponentReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class TabsIconOption extends NectaryElement {
  #$button: HTMLButtonElement
  #$tooltip: NectaryComponentVanilla<'sinch-tooltip'>

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$tooltip = shadowRoot.querySelector('#tooltip')!
  }

  connectedCallback() {
    this.setAttribute('role', 'tab')
    this.#$button.addEventListener('click', this.#onClick)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onClick)
  }

  static get observedAttributes() {
    return ['data-checked', 'disabled', 'aria-label']
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value() {
    return getAttribute(this, 'value', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'data-checked': {
        updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal))

        break
      }
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$button.disabled = isDisabled
        updateBooleanAttribute(this, name, isDisabled)

        break
      }
      case 'aria-label': {
        updateAttribute(this.#$tooltip, 'text', newVal)

        break
      }
    }
  }

  get focusable() {
    return true
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }

  #onClick = (e: Event) => {
    e.stopPropagation()

    this.dispatchEvent(
      new CustomEvent('option-change', { bubbles: true, detail: this.value })
    )
  }
}

defineCustomElement('sinch-tabs-icon-option', TabsIconOption)

declare global {
  interface NectaryComponentMap {
    'sinch-tabs-icon-option': TSinchTabsIconOption,
  }

  interface HTMLElementTagNameMap {
    'sinch-tabs-icon-option': NectaryComponentVanilla<'sinch-tabs-icon-option'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-tabs-icon-option': NectaryComponentReact<'sinch-tabs-icon-option'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-tabs-icon-option': NectaryComponentReact<'sinch-tabs-icon-option'>,
    }
  }
}
