import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent } from 'react'

export const isAccordionItemElement = (element: EventTarget | Element | null): element is TSinchAccordionItemElement => {
  return element instanceof Element && element.tagName === 'SINCH-ACCORDION-ITEM'
}

const statusValues = ['info', 'success', 'warn', 'error'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-accordion-item', class extends HTMLElement {
  #$button: HTMLButtonElement
  #$buttonContent: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$buttonContent = shadowRoot.querySelector('#title')!
  }

  connectedCallback() {
    this.#$button.addEventListener('click', this.#onButtonClick)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onButtonClick)
  }

  static get observedAttributes() {
    return ['label', 'disabled', 'checked']
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

  set checked(isChecked: boolean) {
    updateBooleanAttribute(this, 'checked', isChecked)
  }

  get checked() {
    return getBooleanAttribute(this, 'checked')
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
        updateAttribute(this.#$button, 'aria-expanded', isAttrTrue(newVal))

        break
      }
    }
  }

  #onButtonClick = (e: Event) => {
    e.stopPropagation()

    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        detail: { value: this.value, isChecked: !this.checked },
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

export type TSinchAccordionStatusType = typeof statusValues[number]

export type TSinchAccordionItemElement = HTMLElement & {
  value: string,
  label: string,
  disabled: boolean,
  checked: boolean,
  status: TSinchAccordionStatusType | null,
  focus(): void,
  blur(): void,
}

export type TSinchAccordionItemReact = TSinchElementReact<TSinchAccordionItemElement> & {
  value: string,
  label: string,
  disabled?: boolean,
  status?: TSinchAccordionStatusType,
  onFocus?: (e: FocusEvent<TSinchAccordionItemElement>) => void,
  onBlur?: (e: FocusEvent<TSinchAccordionItemElement>) => void,
}

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
