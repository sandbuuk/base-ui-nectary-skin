import dialogPolyfill from 'dialog-polyfill'
import { isDropdownOptionElement } from '../dropdown-option'
import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getLiteralAttribute,
  getReactEventHandler,
  getRect,
  isAttrTrue,
  NectaryElement,
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

defineCustomElement('sinch-dropdown', class extends NectaryElement {
  #$target: HTMLElement
  #$optionSlot: HTMLSlotElement
  #$listbox: HTMLDialogElement
  #isConnected = false

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$target = shadowRoot.querySelector('#target')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$optionSlot = shadowRoot.querySelector('slot[name="option"]')!

    dialogPolyfill.registerDialog(this.#$listbox)
  }

  connectedCallback() {
    this.#isConnected = true
    this.setAttribute('role', 'listbox')

    this.#$listbox.addEventListener('cancel', this.#onCancel)
    this.#$listbox.addEventListener('click', this.#onListboxClick)
    this.#$listbox.addEventListener('keydown', this.#onListboxKeyDown)
    this.#$listbox.addEventListener('keypress', this.#onListboxKeyPress)
    this.#$optionSlot.addEventListener('slotchange', this.#onOptionSlotChange)
    this.addEventListener('close', this.#onCloseReactHandler)

    if (getBooleanAttribute(this, 'open')) {
      this.#onExpand()
    } else {
      this.#onCollapse()
    }
  }

  disconnectedCallback() {
    this.#isConnected = false
    this.#$listbox.removeEventListener('cancel', this.#onCancel)
    this.#$listbox.removeEventListener('click', this.#onListboxClick)
    this.#$listbox.removeEventListener('keydown', this.#onListboxKeyDown)
    this.#$listbox.removeEventListener('keypress', this.#onListboxKeyPress)
    this.#$optionSlot.removeEventListener('slotchange', this.#onOptionSlotChange)
    this.removeEventListener('close', this.#onCloseReactHandler)
  }

  static get observedAttributes() {
    return ['value', 'maxvisibleitems', 'open', 'orientation']
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

  get dropdownRect() {
    return getRect(this.#$listbox)
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'open': {
        if (this.#isConnected) {
          if (isAttrTrue(newVal)) {
            this.#onExpand()
          } else {
            this.#onCollapse()
          }
        }

        break
      }

      case 'orientation': {
        if (this.#isOpen()) {
          this.#updateOrientation()
        }

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
    const rect = this.dropdownRect
    const isInside = e.x >= rect.x && e.x < rect.x + rect.width && e.y >= rect.y && e.y < rect.y + rect.height

    if (!isInside) {
      this.#dispatchCloseEvent()

      return
    }

    const $elem = e.target

    if ($elem !== this.#$listbox && isDropdownOptionElement($elem)) {
      e.stopPropagation()
      this.#dispatchChangeEvent($elem)
    }
  }

  #onListboxKeyPress = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()
        this.#dispatchChangeEvent(findSelectedOption(this.#getEnabledOptionElements()))

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
    }
  }

  #onOptionSlotChange = () => {
    this.#onValueChange(this.value)
  }

  #onExpand() {
    this.#$target.setAttribute('aria-expanded', 'true')

    if (!this.#isOpen()) {
      (this.#$listbox as any).showModal()
    }

    this.#updateOrientation()
    this.#selectOption(this.#getOptionWithValue(this.value) ?? this.#getFirstOption())
  }

  #onCollapse() {
    this.#$target.setAttribute('aria-expanded', 'false')

    if (this.#isOpen()) {
      (this.#$listbox as any).close?.()
    }
  }

  #isOpen() {
    return this.#isConnected && getBooleanAttribute(this.#$listbox, 'open')
  }

  #updateOrientation() {
    this.#$listbox.style.transform = `initial`
    this.#$listbox.style.width = `max-content`

    const buttonRect = this.#$target.getBoundingClientRect()
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
    if ($opt != null) {
      this.dispatchEvent(
        new CustomEvent('change', { detail: $opt.value, bubbles: true })
      )
    }
  }

  #dispatchCloseEvent() {
    this.dispatchEvent(
      new CustomEvent('close', { bubbles: true })
    )
  }

  #onCancel = (e: Event) => {
    e.preventDefault()
    this.#dispatchCloseEvent()
  }

  #onCloseReactHandler = () => {
    getReactEventHandler(this, 'onClose')?.()
  }

  focus() {}

  blur() {}
})

export type TSinchDropdownOrientation = typeof orientationValues[number]

export type TSinchDropdownElement = HTMLElement & {
  open: boolean,
  orientation: TSinchDropdownOrientation,
  value: string,
  maxVisibleItems: number | null,
  readonly dropdownRect: TRect,
  focus(): void,
  blur(): void,
}

export type TSinchDropdownReact = TSinchElementReact<TSinchDropdownElement> & {
  open: boolean,
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
