import { isDropdownOptionElement } from '../dropdown-option'
import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getLiteralAttribute,
  getRect,
  updateAttribute,
  updateBooleanAttribute,
  updateIntegerAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchDropdownOptionElement } from '../dropdown-option'
import type { TRect, TSinchElementReact } from '../types'
import type { FocusEvent, SyntheticEvent } from 'react'

const orientationValues = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const

const ITEM_HEIGHT = 40

const findSelectedOption = (elements: readonly TSinchDropdownOptionElement[]) => {
  for (const el of elements) {
    if (el.selected) {
      return el
    }
  }

  return null
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-dropdown', class extends HTMLElement {
  #$button: HTMLButtonElement
  #$optionSlot: HTMLSlotElement
  #$listbox: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$optionSlot = shadowRoot.querySelector('slot[name="option"]')!
  }

  connectedCallback() {
    this.setAttribute('role', 'listbox')

    this.#$button.addEventListener('click', this.#onButtonClick)
    this.#$listbox.addEventListener('click', this.#onListboxClick)
    this.#$listbox.addEventListener('keydown', this.#onListboxKeyDown)
    this.#$listbox.addEventListener('keypress', this.#onListboxKeyPress)
    this.#$optionSlot.addEventListener('slotchange', this.#onOptionSlotChange)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.#onButtonClick)
    this.#$listbox.removeEventListener('click', this.#onListboxClick)
    this.#$listbox.removeEventListener('keydown', this.#onListboxKeyDown)
    this.#$listbox.removeEventListener('keypress', this.#onListboxKeyPress)
    this.#$optionSlot.removeEventListener('slotchange', this.#onOptionSlotChange)
  }

  static get observedAttributes() {
    return [
      'value',
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

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled(): boolean {
    return getBooleanAttribute(this, 'disabled')
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

  #onButtonClick = (e: Event) => {
    e.stopPropagation()

    if (this.disabled) {
      return
    }

    if (this.#$button.getAttribute('aria-expanded') !== 'true') {
      this.#onExpand()
    }
  }

  #onListboxClick = (e: Event) => {
    e.stopPropagation()

    const $elem = e.target

    if ($elem !== this.#$listbox && isDropdownOptionElement($elem) && $elem.disabled !== true) {
      this.#dispatchChangeEvent($elem)
    }

    this.#onCollapse()
  }

  #onListboxKeyPress = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()
        this.#dispatchChangeEvent(findSelectedOption(this.#getEnabledOptionElements()))
        this.#onCollapse()

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

        break
      }
    }
  }

  #onOptionSlotChange = () => {
    this.#onCollapse()
    this.#onValueChange(this.value)
  }

  #onExpand() {
    this.#$button.setAttribute('aria-expanded', 'true')

    if (!getBooleanAttribute(this.#$listbox, 'open')) {
      (this.#$listbox as any).showModal()
    }

    const buttonRect = this.#$button.getBoundingClientRect()
    const modalRect = this.#$listbox.getBoundingClientRect()
    const width = Math.max(modalRect.width, buttonRect.width)
    const widthDiff = Math.max(buttonRect.width - modalRect.width, 0)
    let leftOffset = 0
    let topOffset = 0

    const orient = this.orientation

    if (orient === 'bottom-right' || orient === 'top-right') {
      leftOffset = Math.min(modalRect.x, Math.max(-modalRect.x, buttonRect.x - modalRect.x + widthDiff * 0.5))
    }

    if (orient === 'bottom-left' || orient === 'top-left') {
      leftOffset = Math.min(modalRect.x, Math.max(-modalRect.x, buttonRect.x + buttonRect.width - modalRect.x - modalRect.width - widthDiff * 0.5))
    }

    if (orient === 'bottom-left' || orient === 'bottom-right') {
      topOffset = Math.min(modalRect.y, Math.max(-modalRect.y, buttonRect.y + buttonRect.height - modalRect.y + 8))
    }

    if (orient === 'top-left' || orient === 'top-right') {
      topOffset = Math.min(modalRect.y, Math.max(-modalRect.y, buttonRect.y - modalRect.y - modalRect.height - 8))
    }

    this.#$listbox.style.transform = `translateX(${leftOffset}px) translateY(${topOffset}px)`
    this.#$listbox.style.width = `${width}px`

    this.#selectOption(this.#getOptionWithValue(this.value) ?? this.#getFirstOption())
  }

  #onCollapse() {
    this.#$button.setAttribute('aria-expanded', 'false')
    ;(this.#$listbox as any).close?.()
    this.#$listbox.style.transform = `initial`
    this.#$listbox.style.width = `max-content`
  }

  #onValueChange(value: string) {
    let $checkedOption: TSinchDropdownOptionElement | null = null

    for (const $option of this.#getOptionElements()) {
      const isChecked = $checkedOption === null && $option.disabled !== true && $option.value === value

      // Check / Uncheck options
      $option.checked = isChecked

      if (isChecked) {
        $checkedOption = $option
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

  #selectOption($option: TSinchDropdownOptionElement | null) {
    for (const $op of this.#getOptionElements()) {
      const isSelected = $op === $option

      // Select / Unselect
      $op.selected = isSelected

      if (isSelected) {
        $op.scrollIntoView?.({ block: 'nearest' })
      }
    }
  }

  #getOptionWithValue(value: string): TSinchDropdownOptionElement | null {
    for (const $option of this.#getOptionElements()) {
      if ($option.disabled !== true && $option.value === value) {
        return $option
      }
    }

    return null
  }

  #getOptionElements(): TSinchDropdownOptionElement[] {
    let $elements = this.#$optionSlot.assignedElements()

    if ($elements.length === 1 && $elements[0].tagName === 'SLOT') {
      $elements = ($elements[0] as HTMLSlotElement).assignedElements()
    }

    return $elements.filter(isDropdownOptionElement)
  }

  #getEnabledOptionElements(): TSinchDropdownOptionElement[] {
    return this.#getOptionElements().filter((opt) => opt.disabled !== true)
  }

  #dispatchChangeEvent($opt: TSinchDropdownOptionElement | null) {
    if ($opt != null && this.value !== $opt.value) {
      this.dispatchEvent(
        new CustomEvent('change', { detail: $opt.value, bubbles: true })
      )
    }
  }

  focus() {}

  blur() {}
})

export type TSinchDropdownOrientation = typeof orientationValues[number]

export type TSinchDropdownElement = HTMLElement & {
  orientation: TSinchDropdownOrientation,
  value: string,
  disabled: boolean,
  maxVisibleItems: number | null,
  readonly dropdownRect: TRect,
  focus(): void,
  blur(): void,
}

export type TSinchDropdownReact = TSinchElementReact<TSinchDropdownElement> & {
  orientation?: TSinchDropdownOrientation,
  value: string,
  disabled?: boolean,
  maxVisibleItems?: number,
  'aria-label': string,
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
