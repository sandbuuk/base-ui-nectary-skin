import { isDropdownCheckboxOptionElement } from '../dropdown-checkbox-option'
import { isDropdownOptionElement } from '../dropdown-option'
import { isDropdownRadioOptionElement } from '../dropdown-radio-option'
import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getCSVSet,
  getFirstCSValue,
  getIntegerAttribute,
  getLiteralAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateCSV,
  updateIntegerAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchDropdownCheckboxOptionElement } from '../dropdown-checkbox-option'
import type { TSinchDropdownOptionElement } from '../dropdown-option'
import type { TSinchDropdownRadioOptionElement } from '../dropdown-radio-option'
import type { TSinchPopoverElement } from '../popover'
import type { TRect, TSinchElementReact } from '../types'
import type { FocusEvent, SyntheticEvent } from 'react'

type TDropdownOption = TSinchDropdownOptionElement | TSinchDropdownCheckboxOptionElement | TSinchDropdownRadioOptionElement

const isDropdownOption = (el: Element | EventTarget | null): el is TDropdownOption => {
  return isDropdownOptionElement(el) || isDropdownCheckboxOptionElement(el) || isDropdownRadioOptionElement(el)
}

const orientationValues = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const
const ITEM_HEIGHT = 40
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-dropdown', class extends NectaryElement {
  #$optionSlot: HTMLSlotElement
  #$listbox: HTMLElement
  #$popover: TSinchPopoverElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$optionSlot = shadowRoot.querySelector('slot[name="option"]')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$popover = shadowRoot.querySelector('sinch-popover')!
  }

  connectedCallback() {
    this.setAttribute('role', 'listbox')

    this.#$optionSlot.addEventListener('slotchange', this.#onOptionSlotChange)
    this.addEventListener('close', this.#onReactClose)
  }

  disconnectedCallback() {
    this.#$optionSlot.removeEventListener('slotchange', this.#onOptionSlotChange)
    this.removeEventListener('close', this.#onReactClose)
  }

  static get observedAttributes() {
    return ['open', 'value', 'orientation', 'maxvisibleitems']
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

  set maxVisibleItems(value: number | null) {
    updateIntegerAttribute(this, 'maxvisibleitems', value)
  }

  get maxVisibleItems() {
    return getIntegerAttribute(this, 'maxvisibleitems', null)
  }

  get orientation() {
    return getLiteralAttribute(this, orientationValues, 'orientation', 'bottom-right')
  }

  set orientation(value: TSinchDropdownOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  set open(isOpen: boolean) {
    updateBooleanAttribute(this, 'open', isOpen)
  }

  get open(): boolean {
    return getBooleanAttribute(this, 'open')
  }

  set multiple(isMultiple: boolean) {
    updateBooleanAttribute(this, 'multiple', isMultiple)
  }

  get multiple() {
    return getBooleanAttribute(this, 'multiple')
  }

  get dropdownRect() {
    return this.#$popover.popoverRect
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'open': {
        updateAttribute(this.#$popover, 'open', newVal)

        if (isAttrTrue(newVal)) {
          this.#onOpen()
          this.#$popover.addEventListener('keydown', this.#onListboxKeyDown)
          this.#$popover.addEventListener('click', this.#onListboxClick)
          this.#$popover.addEventListener('close', this.#onClose)
        } else {
          this.#$popover.removeEventListener('keydown', this.#onListboxKeyDown)
          this.#$popover.removeEventListener('click', this.#onListboxClick)
          this.#$popover.removeEventListener('close', this.#onClose)
        }

        break
      }

      case 'orientation': {
        updateAttribute(this.#$popover, 'orientation', newVal)

        break
      }

      case 'value': {
        this.#onValueChange(newVal ?? '')

        break
      }

      case 'maxvisibleitems': {
        const $list = this.#$listbox

        if (newVal === '0') {
          $list.style.maxHeight = 'unset'
        } else {
          $list.style.maxHeight = attrValueToPixels(newVal, { min: 2, multiplier: ITEM_HEIGHT })
        }

        break
      }
    }
  }

  #onListboxClick = (e: MouseEvent) => {
    const $elem = e.target

    if (isDropdownOption($elem) && !$elem.disabled) {
      e.stopPropagation()
      this.#dispatchChangeEvent($elem)
    }
  }

  #onListboxKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()
        this.#dispatchChangeEvent(this.#findSelectedOption(this.#getEnabledOptionElements()))

        break
      }
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
    }
  }

  #onOptionSlotChange = () => {
    this.#onValueChange(this.value)
  }

  #onValueChange(csv: string) {
    if (this.multiple) {
      const values = getCSVSet(csv)

      for (const $option of this.#getOptionElements()) {
        $option.checked = $option.disabled !== true && values.has($option.value)
      }
    } else {
      const value = getFirstCSValue(csv)

      for (const $option of this.#getOptionElements()) {
        $option.checked = $option.disabled !== true && $option.value === value
      }
    }
  }

  #getFirstOption() {
    return this.#getEnabledOptionElements()[0] ?? null
  }

  #getLastOption() {
    return this.#getEnabledOptionElements().reverse()[0] ?? null
  }

  #getNextOption() {
    const $options = this.#getEnabledOptionElements()
    const $selectedOption = this.#findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getFirstOption()
    }

    return $options[(currentIndex + 1) % $options.length]
  }

  #getPrevOption() {
    const $options = this.#getEnabledOptionElements()
    const $selectedOption = this.#findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getLastOption()
    }

    return $options[(currentIndex - 1 + $options.length) % $options.length]
  }

  #selectOption($option: TDropdownOption | null) {
    for (const $op of this.#getOptionElements()) {
      const isSelected = $op === $option

      // Select / Unselect
      $op.selected = isSelected

      if (isSelected) {
        $op.scrollIntoView?.({ block: 'nearest' })
      }
    }
  }

  #getOptionWithValue(value: string): TDropdownOption | null {
    for (const $option of this.#getOptionElements()) {
      if ($option.disabled !== true && $option.value === value) {
        return $option
      }
    }

    return null
  }

  #getOptionElements(): TDropdownOption[] {
    let $elements = this.#$optionSlot.assignedElements()

    if ($elements.length === 1 && $elements[0].tagName === 'SLOT') {
      $elements = ($elements[0] as HTMLSlotElement).assignedElements()
    }

    return $elements.filter(isDropdownOption)
  }

  #findSelectedOption(elements: readonly TDropdownOption[]): TDropdownOption | null {
    for (const el of elements) {
      if (el.selected) {
        return el
      }
    }

    return null
  }

  #getEnabledOptionElements(): TDropdownOption[] {
    return this.#getOptionElements().filter((opt) => opt.disabled !== true)
  }

  #dispatchChangeEvent($opt: TDropdownOption | null) {
    if ($opt === null) {
      return
    }

    const value = $opt.value
    const result = this.multiple
      ? updateCSV(this.value, value, !$opt.checked)
      : value

    this.dispatchEvent(
      new CustomEvent('change', { detail: result, bubbles: true })
    )
  }

  #onOpen() {
    const $opt = this.#getOptionWithValue(getFirstCSValue(this.value))

    if ($opt !== null) {
      this.#selectOption($opt)
      $opt.scrollIntoView?.({ block: 'nearest' })
    } else {
      this.#selectOption(this.#getFirstOption())
    }
  }

  #onClose = () => {
    this.dispatchEvent(
      new CustomEvent('close', { bubbles: true })
    )
  }

  #onReactClose = () => {
    getReactEventHandler(this, 'onClose')?.()
  }
})

export type TSinchDropdownOrientation = typeof orientationValues[number]

export type TSinchDropdownElement = HTMLElement & {
  open: boolean,
  multiple: boolean,
  orientation: TSinchDropdownOrientation,
  value: string,
  maxVisibleItems: number | null,
  readonly dropdownRect: TRect,
  focus(): void,
  blur(): void,
}

export type TSinchDropdownReact = TSinchElementReact<TSinchDropdownElement> & {
  open: boolean,
  multiple?: boolean,
  orientation?: TSinchDropdownOrientation,
  value: string,
  maxVisibleItems?: number,
  'aria-label': string,
  onClose: (event: SyntheticEvent<TSinchDropdownElement, CustomEvent<void>>) => void,
  onChange: (e: SyntheticEvent<TSinchDropdownElement, CustomEvent<string>>) => void,
  onFocus?: (e: FocusEvent<TSinchDropdownElement>) => void,
  onBlur?: (e: FocusEvent<TSinchDropdownElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-dropdown': TSinchDropdownReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-dropdown': TSinchDropdownElement,
  }
}
