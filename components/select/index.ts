import { isDropdownOptionElement } from '../dropdown-option'
import '../select-option'
import '../dropdown'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
  updateIntegerAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchDropdownElement } from '../dropdown'
import type { TSinchDropdownOptionElement } from '../dropdown-option'
import type { TRect, TSinchElementReact } from '../types'
import type { FocusEvent, SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select', class extends HTMLElement {
  #$button: HTMLButtonElement
  #$buttonContent: HTMLSpanElement
  #$label: HTMLLabelElement
  #$optionalText: HTMLSpanElement
  #$additionalText: HTMLSpanElement
  #$invalidText: HTMLSpanElement
  #$dropdown: TSinchDropdownElement
  #$optionSlot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$buttonContent = shadowRoot.querySelector('#content')!
    this.#$label = shadowRoot.querySelector('#label')!
    this.#$optionalText = shadowRoot.querySelector('#optional')!
    this.#$additionalText = shadowRoot.querySelector('#additional')!
    this.#$invalidText = shadowRoot.querySelector('#invalid')!
    this.#$dropdown = shadowRoot.querySelector('sinch-dropdown')!
    this.#$optionSlot = shadowRoot.querySelector('slot[name="option"]')!
  }

  connectedCallback() {
    this.setAttribute('role', 'listbox')

    this.#$dropdown.addEventListener('change', this.#onValueChange)
    this.#$label.addEventListener('click', this.#onLabelClick)
  }

  disconnectedCallback() {
    this.#$dropdown.removeEventListener('change', this.#onValueChange)
    this.#$label.removeEventListener('click', this.#onLabelClick)
  }

  static get observedAttributes() {
    return [
      'value',
      'label',
      'placeholder',
      'optionaltext',
      'additionaltext',
      'invalidtext',
      'disabled',
      'maxvisibleitems',
    ]
  }

  get nodeName() {
    return 'select'
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set placeholder(value: string | null) {
    updateAttribute(this, 'placeholder', value)
  }

  get placeholder() {
    return getAttribute(this, 'placeholder', null)
  }

  set label(value: string) {
    updateAttribute(this, 'label', value)
  }

  get label() {
    return getAttribute(this, 'label', '')
  }

  set optionalText(value: string | null) {
    updateAttribute(this, 'optionaltext', value)
  }

  get optionalText() {
    return getAttribute(this, 'optionaltext', null)
  }

  set additionalText(value: string | null) {
    updateAttribute(this, 'additionaltext', value)
  }

  get additionalText() {
    return getAttribute(this, 'additionaltext', null)
  }

  set invalidText(value: string | null) {
    updateAttribute(this, 'invalidtext', value)
  }

  get invalidText() {
    return getAttribute(this, 'placeholder', null)
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled(): boolean {
    return getBooleanAttribute(this, 'disabled')
  }

  set maxVisibleItems(value: number | null) {
    updateIntegerAttribute(this, 'maxvisibleitems', value)
  }

  get maxVisibleItems() {
    return getIntegerAttribute(this, 'maxvisibleitems', null)
  }

  get dropdownRect() {
    return this.#$dropdown.dropdownRect
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        updateAttribute(this.#$dropdown, 'value', newVal)
        this.#updateButtonContent()

        break
      }

      case 'placeholder': {
        updateAttribute(this, 'role-description', newVal)
        this.#updateButtonContent()

        break
      }

      case 'label': {
        this.#$label.textContent = newVal

        break
      }

      case 'optionaltext': {
        this.#$optionalText.textContent = newVal

        break
      }

      case 'additionaltext': {
        this.#$additionalText.textContent = newVal

        break
      }

      case 'invalidtext': {
        this.#$invalidText.textContent = newVal
        updateAttribute(this, 'aria-invalid', String(newVal !== null && newVal !== ''))

        break
      }

      case 'disabled': {
        updateAttribute(this.#$dropdown, 'disabled', newVal)
        this.#$button.disabled = isAttrTrue(newVal)

        break
      }

      case 'maxvisibleitems': {
        updateAttribute(this.#$dropdown, 'maxvisibleitems', newVal)

        break
      }
    }
  }

  #updateButtonContent() {
    // Remove icon element
    if (this.#$button.firstElementChild !== this.#$buttonContent) {
      this.#$button.removeChild(this.#$button.firstElementChild!)
    }

    const $option = this.#getOptionWithValue(this.value)

    if ($option == null) {
      this.#$button.setAttribute('data-unselected', '')
      this.#$buttonContent.textContent = this.placeholder ?? ''
    } else {
      this.#$button.removeAttribute('data-unselected')
      this.#$buttonContent.textContent = $option.text

      // Try adding icon
      const $icon = $option.icon

      if ($icon != null) {
        this.#$button.prepend($icon.cloneNode(true))
      }
    }
  }

  #onValueChange = (e: Event) => {
    this.dispatchEvent(new CustomEvent('change', {
      detail: (e as CustomEvent).detail,
      bubbles: true,
    }))
  }

  #getOptionWithValue(value: string): TSinchDropdownOptionElement | null {
    for (const $option of this.#$optionSlot.assignedElements()) {
      if (isDropdownOptionElement($option) && $option.disabled !== true && $option.value === value) {
        return $option
      }
    }

    return null
  }

  #onLabelClick = () => {
    this.focus()
  }

  focus() {
    this.#$dropdown.focus()
  }

  blur() {
    this.#$dropdown.blur()
  }
})

export type TSinchSelectElement = HTMLElement & {
  value: string,
  label: string,
  placeholder: string | null,
  optionalText: string | null,
  invalidText: string | null,
  additionalText: string | null,
  disabled: boolean,
  maxVisibleItems: number | null,
  readonly dropdownRect: TRect,
  focus(): void,
  blur(): void,
}

export type TSinchSelectReact = TSinchElementReact<TSinchSelectElement> & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  maxVisibleItems?: number,
  'aria-label': string,
  onChange: (e: SyntheticEvent<TSinchSelectElement, CustomEvent<string>>) => void,
  onFocus?: (e: FocusEvent<TSinchSelectElement>) => void,
  onBlur?: (e: FocusEvent<TSinchSelectElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select': TSinchSelectReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select': TSinchSelectElement,
  }
}
