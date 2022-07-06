import '../dropdown'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
  updateIntegerAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchDropdownElement } from '../dropdown/types'
import type { TSinchSelectOptionElement } from '../select-option/types'
import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$buttonContent: HTMLSpanElement
  #$label: HTMLLabelElement
  #$optionalText: HTMLSpanElement
  #$additionalText: HTMLSpanElement
  #$invalidText: HTMLSpanElement
  #$dropdown: TSinchDropdownElement
  #$optionSlot: HTMLSlotElement
  #$sh: ShadowRoot

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$sh = shadowRoot
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
    this.setAttribute('aria-haspopup', 'listbox')

    this.#$dropdown.addEventListener('change', this.#onValueChange)
    this.#$dropdown.addEventListener('close', this.#onDropdownClose)
    this.#$button.addEventListener('click', this.#onDropdownClick)
    this.#$label.addEventListener('click', this.#onLabelClick)
  }

  disconnectedCallback() {
    this.#$dropdown.removeEventListener('change', this.#onValueChange)
    this.#$dropdown.removeEventListener('close', this.#onDropdownClose)
    this.#$button.removeEventListener('click', this.#onDropdownClick)
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
        const isInvalid = newVal !== null && newVal !== ''

        this.#$invalidText.textContent = newVal
        updateExplicitBooleanAttribute(this, 'aria-invalid', isInvalid)

        break
      }

      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        updateBooleanAttribute(this.#$dropdown, 'disabled', isDisabled)
        updateBooleanAttribute(this, 'disabled', isDisabled)
        this.#$button.disabled = isDisabled

        break
      }

      case 'maxvisibleitems': {
        updateAttribute(this.#$dropdown, 'maxvisibleitems', newVal)

        break
      }
    }
  }

  #createElement(name: string): HTMLElement {
    if (Reflect.has(this.#$sh, 'createElement')) {
      // @ts-expect-error
      return this.#$sh.createElement(name)
    }

    return document.createElement(name)
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
      this.#$buttonContent.textContent = getAttribute($option, 'text', null)

      // Try adding icon
      const $icon = $option.icon

      if ($icon != null) {
        this.#$button.prepend(this.#createElement($icon.tagName.toLowerCase()))
      }
    }
  }

  #onValueChange = (e: Event) => {
    this.#$dropdown.open = false
    this.dispatchEvent(new CustomEvent('change', {
      detail: (e as CustomEvent).detail,
      bubbles: true,
    }))
  }

  #getOptionWithValue(value: string): TSinchSelectOptionElement | null {
    for (const $option of this.#$optionSlot.assignedElements() as TSinchSelectOptionElement[]) {
      if ($option.disabled !== true && $option.value === value) {
        return $option
      }
    }

    return null
  }

  #onLabelClick = () => {
    this.focus()
  }

  #onDropdownClick = () => {
    this.#$dropdown.open = true
  }

  #onDropdownClose = () => {
    this.#$dropdown.open = false
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
  addEventListener(type: 'change', listener: (this: TSinchSelectElement, e: CustomEvent<string>) => void): void,
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
