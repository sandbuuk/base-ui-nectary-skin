import { isSelectOptionElement } from '../select-option'
import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getRect,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
  updateIntegerAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TRect, TSinchElementReact } from '../types'
import type { FocusEvent, SyntheticEvent } from 'react'

type TSinchSelectOption = HTMLElementTagNameMap['sinch-select-option']

const ITEM_HEIGHT = 36

const findSelectedOption = (elements: readonly TSinchSelectOption[]) => {
  return elements.find((el) => el.selected) ?? null
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select', class extends HTMLElement {
  #$button: HTMLButtonElement
  #$buttonContent: HTMLSpanElement
  #$label: HTMLLabelElement
  #$optionalText: HTMLSpanElement
  #$additionalText: HTMLSpanElement
  #$invalidText: HTMLSpanElement
  #$selectSlot: HTMLSlotElement
  #$listbox: HTMLUListElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$buttonContent = shadowRoot.querySelector('#content')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$label = shadowRoot.querySelector('#label')!
    this.#$optionalText = shadowRoot.querySelector('#optional')!
    this.#$additionalText = shadowRoot.querySelector('#additional')!
    this.#$invalidText = shadowRoot.querySelector('#invalid')!
    this.#$selectSlot = shadowRoot.querySelector('slot[name="select"]')!
  }

  connectedCallback() {
    this.setAttribute('role', 'listbox')

    this.#$button.addEventListener('click', this.#onButtonClick)
    this.#$listbox.addEventListener('blur', this.#onListboxBlur)
    this.#$listbox.addEventListener('click', this.#onListboxClick)
    this.#$listbox.addEventListener('keydown', this.#onListboxKeyDown)
    this.#$listbox.addEventListener('keypress', this.#onListboxKeyUp)
    this.#$selectSlot.addEventListener('slotchange', this.#onSlotChange)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onButtonClick)
    this.#$listbox.removeEventListener('blur', this.#onListboxBlur)
    this.#$listbox.removeEventListener('click', this.#onListboxClick)
    this.#$listbox.removeEventListener('keydown', this.#onListboxKeyDown)
    this.#$listbox.removeEventListener('keypress', this.#onListboxKeyUp)
    this.#$selectSlot.removeEventListener('slotchange', this.#onSlotChange)
  }

  static get observedAttributes() {
    return [
      'value',
      'label',
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
    return getRect(this.#$listbox)
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange(newVal ?? '')

        break
      }

      case 'placeholder': {
        this.#onValueChange(this.value)
        updateAttribute(this, 'aria-placeholder', newVal)

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
        this.#$button.disabled = isAttrTrue(newVal)

        if (this.#$button.disabled) {
          this.#onCollapse()
        }

        break
      }

      case 'maxvisibleitems': {
        const $list = (this.#$listbox.firstElementChild as HTMLElement)

        $list.style.maxHeight = attrValueToPixels(newVal, { min: 2, multiplier: ITEM_HEIGHT })

        break
      }
    }
  }

  #onButtonClick = (e: Event) => {
    e.stopPropagation()

    if (this.#$button.getAttribute('aria-expanded') !== 'true') {
      this.#onExpand()
    }
  }

  #onListboxClick = (e: Event) => {
    e.stopPropagation()

    const $elem = e.target

    if ($elem !== this.#$listbox && isSelectOptionElement($elem) && $elem.disabled !== true) {
      this.#dispatchChangeEvent($elem)
    }

    this.#onCollapse()
    this.#$button.focus()
  }

  #onListboxKeyUp = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()
        this.#dispatchChangeEvent(findSelectedOption(this.#getEnabledOptionElements()))
        this.#onCollapse()
        this.#$button.focus()

        break
      }
    }
  }

  #onListboxKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()
        this.#selectOption(this.#getPrevOption())

        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()
        this.#selectOption(this.#getNextOption())

        break
      }
      case 'Escape': {
        e.preventDefault()
        this.#onCollapse()
        this.#$button.focus()

        break
      }
    }
  }

  #onSlotChange = () => {
    this.#onCollapse()
    this.#onValueChange(this.value)
  }

  #onListboxBlur = (e: Event) => {
    e.stopPropagation()
    this.#onCollapse()
  }

  #onExpand() {
    this.#$button.setAttribute('aria-expanded', 'true')
    this.#$listbox.focus()
    this.#selectOption(this.#getOptionWithValue(this.value) ?? this.#getFirstOption())
  }

  #onCollapse() {
    this.#$button.setAttribute('aria-expanded', 'false')
  }

  #onValueChange(value: string) {
    let $checkedOption: TSinchSelectOption | null = null

    for (const $option of this.#$selectSlot.assignedElements()) {
      if (isSelectOptionElement($option)) {
        const isChecked = $checkedOption === null && $option.disabled !== true && $option.value === value

        // Check / Uncheck options
        $option.checked = isChecked

        if (isChecked) {
          $checkedOption = $option
          // this.#$listbox.setAttribute('aria-activedescendant', $option.id)
        }
      }
    }

    // Update button text or placeholder if null
    this.#updateButtonContent($checkedOption)
  }

  #updateButtonContent($option: TSinchSelectOption | null) {
    // Remove icon element
    if (this.#$button.firstElementChild !== this.#$buttonContent) {
      this.#$button.removeChild(this.#$button.firstElementChild!)
    }

    if ($option === null) {
      this.#$button.setAttribute('data-unselected', '')
      this.#$buttonContent.textContent = this.placeholder ?? ''
    } else {
      this.#$button.removeAttribute('data-unselected')
      this.#$buttonContent.textContent = $option.text

      // Try adding icon
      const $icon = $option.icon?.cloneNode(true)

      if ($icon != null) {
        this.#$button.prepend($icon)
      }
    }
  }

  #getEnabledOptionElements(): TSinchSelectOption[] {
    return this.#$selectSlot.assignedElements().filter((opt) => isSelectOptionElement(opt) && opt.disabled !== true) as TSinchSelectOption[]
  }

  #getOptionWithValue(value: string): TSinchSelectOption | null {
    for (const $option of this.#$selectSlot.assignedElements()) {
      if (isSelectOptionElement($option) && $option.disabled !== true && $option.value === value) {
        return $option
      }
    }

    return null
  }

  #getFirstOption() {
    for (const $option of this.#$selectSlot.assignedElements()) {
      if (isSelectOptionElement($option) && $option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  #getLastOption() {
    for (const $option of this.#$selectSlot.assignedElements().reverse()) {
      if (isSelectOptionElement($option) && $option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  #getNextOption() {
    const $options = this.#getEnabledOptionElements()
    const $selectedOption = findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getFirstOption()
    }

    return $options[(currentIndex + 1) % $options.length]
  }

  #getPrevOption() {
    const $options = this.#getEnabledOptionElements()
    const $selectedOption = findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getLastOption()
    }

    return $options[(currentIndex - 1 + $options.length) % $options.length]
  }

  #selectOption($option: TSinchSelectOption | null) {
    for (const $op of this.#$selectSlot.assignedElements()) {
      if (isSelectOptionElement($op)) {
        const isSelected = $op === $option

        // Select / Unselect
        $op.selected = isSelected

        if (isSelected) {
          $op.scrollIntoView?.({ block: 'nearest' })
        }
      }
    }
  }

  #dispatchChangeEvent($opt: TSinchSelectOption | null) {
    if ($opt != null && this.value !== $opt.value) {
      this.dispatchEvent(
        new CustomEvent('change', { detail: $opt.value, bubbles: true })
      )
    }
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
    this.#$listbox.blur()
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
