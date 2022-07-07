import '../icons/keyboard-arrow-down'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { statusValues } from './utils'
import type { TSinchAccordionItemElement, TSinchAccordionItemReact, TSinchAccordionStatusType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-accordion-item', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$buttonContent: HTMLSpanElement
  #$optionalText: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$buttonContent = shadowRoot.querySelector('#title')!
    this.#$optionalText = shadowRoot.querySelector('#optional')!
  }

  connectedCallback() {
    this.#$button.addEventListener('click', this.#onButtonClick)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onButtonClick)
  }

  static get observedAttributes() {
    return ['label', 'disabled', 'checked', 'optionaltext']
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set label(value: string) {
    updateAttribute(this, 'label', value)
  }

  get label(): string {
    return getAttribute(this, 'label', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled(): boolean {
    return getBooleanAttribute(this, 'disabled')
  }

  get status() {
    return getLiteralAttribute(this, statusValues, 'status', null)
  }

  set status(value: TSinchAccordionStatusType | null) {
    updateLiteralAttribute(this, statusValues, 'status', value)
  }

  set optionalText(value: string | null) {
    updateAttribute(this, 'optionaltext', value)
  }

  get optionalText() {
    return getAttribute(this, 'optionaltext', null)
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'label': {
        this.#$buttonContent.textContent = newVal

        break
      }

      case 'disabled': {
        this.#$button.disabled = isAttrTrue(newVal)

        break
      }

      case 'checked': {
        updateExplicitBooleanAttribute(this.#$button, 'aria-expanded', isAttrTrue(newVal))

        break
      }

      case 'optionaltext': {
        this.#$optionalText.textContent = newVal

        break
      }
    }
  }

  #onButtonClick = (e: Event) => {
    e.stopPropagation()

    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        detail: this.value,
      })
    )
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
      'sinch-accordion-item': TSinchAccordionItemReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-accordion-item': TSinchAccordionItemElement,
  }
}
