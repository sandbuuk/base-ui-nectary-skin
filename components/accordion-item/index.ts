import '../icon'
import '../text'
import '../title'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { statusValues } from './utils'
import type { TSinchAccordionStatusType } from './types'
import type { TSinchTitleElement } from '../title/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-accordion-item', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$title: TSinchTitleElement
  #$optionalText: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$title = shadowRoot.querySelector('#title')!
    this.#$optionalText = shadowRoot.querySelector('#optional')!
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return [
      'label',
      'disabled',
      'data-checked',
      'optionaltext',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'label': {
        updateAttribute(this.#$title, 'text', newVal)

        break
      }

      case 'disabled': {
        this.#$button.disabled = isAttrTrue(newVal)
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }

      case 'data-checked': {
        updateExplicitBooleanAttribute(this.#$button, 'aria-expanded', isAttrTrue(newVal))

        break
      }

      case 'optionaltext': {
        this.#$optionalText.textContent = newVal

        break
      }
    }
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
    return getAttribute(this, 'optionaltext')
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
})
