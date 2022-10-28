import '../text'
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
import type { TSinchTabsOptionElement, TSinchTabsOptionReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tabs-option', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'tab')
    this.#$button.addEventListener('click', this.#onClick)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onClick)
  }

  static get observedAttributes() {
    return ['data-checked', 'disabled', 'text']
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

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'data-checked': {
        updateExplicitBooleanAttribute(this, 'aria-selected', isAttrTrue(newVal))

        break
      }
      case 'disabled': {
        this.#$button.disabled = isAttrTrue(newVal)

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
      'sinch-tabs-option': TSinchTabsOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tabs-option': TSinchTabsOptionElement,
  }
}
