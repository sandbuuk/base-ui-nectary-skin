import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getEventHandler,
  getLiteralAttribute,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import '../select-option'
import type { TSinchElementReact } from '../types'

export const isAccordionItemElement = (element: EventTarget | Element | null): element is TSinchAccordionItemElement => {
  return element instanceof Element && element.tagName === 'SINCH-ACCORDION-ITEM'
}

const statusValues = ['info', 'success', 'warn', 'error'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-accordion-item', class extends HTMLElement {
  $button: HTMLButtonElement
  $labelContent: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$button = shadowRoot.querySelector('#button')!
    this.$labelContent = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    this.$button.addEventListener('click', this.onButtonClick)
    this.addEventListener('focus', this.onButtonFocus)
    this.addEventListener('blur', this.onButtonBlur)
  }

  disconnectedCallback() {
    this.$button.removeEventListener('click', this.onButtonClick)
    this.removeEventListener('focus', this.onButtonFocus)
    this.removeEventListener('blur', this.onButtonBlur)
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
        this.$labelContent.textContent = newVal

        break
      }

      case 'disabled': {
        this.$button.disabled = isAttrTrue(newVal)

        break
      }

      case 'checked': {
        updateAttribute(this.$button, 'aria-expanded', isAttrTrue(newVal))

        break
      }
    }
  }

  onButtonClick = () => {
    this.dispatchEvent(
      new CustomEvent('change', { bubbles: true, detail: { value: this.value, isChecked: !this.checked } })
    )
  }

  focus() {
    this.$button.focus()
  }

  blur() {
    this.$button.blur()
  }

  onButtonFocus = () => {
    getEventHandler(this, 'onFocus')?.()
  }

  onButtonBlur = () => {
    getEventHandler(this, 'onBlur')?.()
  }
})

type TSinchAccordionStatusType = typeof statusValues[number]

type TSinchAccordionItemElement = HTMLElement & {
  value: string,
  label: string,
  disabled: boolean,
  checked: boolean,
  status: TSinchAccordionStatusType | null,
  focus(): void,
  blur(): void,
}

type TSinchAccordionItemReact = TSinchElementReact<TSinchAccordionItemElement> & {
  value: string,
  label: string,
  disabled?: boolean,
  status?: TSinchAccordionStatusType,
  onFocus?: () => void,
  onBlur?: () => void,
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
