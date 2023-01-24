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
import type { TSinchTabsIconOptionElement, TSinchTabsIconOptionReact } from './types'
import type { TSinchTooltipElement } from '../tooltip/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tabs-icon-option', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$tooltip: TSinchTooltipElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

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
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'data-checked': {
        updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal))

        break
      }
      case 'disabled': {
        this.#$button.disabled = isAttrTrue(newVal)

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
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tabs-icon-option': TSinchTabsIconOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tabs-icon-option': TSinchTabsIconOptionElement,
  }
}
