import { isSearchOptionElement } from '../search-option'
import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getIntegerAttribute,
  getRect,
  updateAttribute,
  updateIntegerAttribute,
} from '../utils'
import templateHTML from './template.html'
import '../icon/search'
import '../icon/close'
import '../icon-button'
import type { TSinchSearchOptionElement } from '../search-option'
import type { TRect, TSinchElementReact } from '../types'
import type { FocusEvent, SyntheticEvent } from 'react'

const ITEM_HEIGHT = 40

const findSelectedOption = (elements: readonly TSinchSearchOptionElement[]) => {
  for (const el of elements) {
    if (el.selected) {
      return el
    }
  }

  return null
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-search', class extends HTMLElement {
  #$label: HTMLLabelElement
  #$input: HTMLInputElement
  #selectionStart: number | null = null
  #selectionEnd: number | null = null
  #$optionSlot: HTMLSlotElement
  #$listbox: HTMLElement
  #$clear: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('#input')!
    this.#$label = shadowRoot.querySelector('#label')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$optionSlot = shadowRoot.querySelector('slot[name="option"]')!
    this.#$clear = shadowRoot.querySelector('#clear')!
  }

  connectedCallback() {
    this.setAttribute('role', 'listbox')
    this.setAttribute('autocomplete', 'off')
    this.setAttribute('aria-expanded', 'false')

    this.#$input.addEventListener('input', this.#onInput)
    this.#$input.addEventListener('focus', this.#onInputFocus)
    this.#$input.addEventListener('blur', this.#onInputBlur)
    this.#$input.addEventListener('keydown', this.#onListboxKeyDown)
    this.#$input.addEventListener('keypress', this.#onListboxKeyPress)
    this.#$listbox.addEventListener('click', this.#onListboxClick)
    this.#$optionSlot.addEventListener('slotchange', this.#onOptionSlotChange)
    this.#$clear.addEventListener('mousedown', this.#onClearMouseDown)
    this.#$clear.addEventListener('click', this.#onClear)
  }

  disconnectedCallback() {
    this.#$input.removeEventListener('input', this.#onInput)
    this.#$input.removeEventListener('focus', this.#onInputFocus)
    this.#$input.removeEventListener('blur', this.#onInputBlur)
    this.#$input.removeEventListener('keydown', this.#onListboxKeyDown)
    this.#$input.removeEventListener('keypress', this.#onListboxKeyPress)
    this.#$listbox.removeEventListener('click', this.#onListboxClick)
    this.#$optionSlot.removeEventListener('slotchange', this.#onOptionSlotChange)
    this.#$clear.removeEventListener('mousedown', this.#onClearMouseDown)
    this.#$clear.removeEventListener('click', this.#onClear)
  }

  static get observedAttributes() {
    return [
      'label',
      'value',
      'placeholder',
      'maxvisibleitems',
      'clear-aria-label',
    ]
  }

  get type() {
    return 'text'
  }

  get nodeName() {
    return 'input'
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

  set label(value: string | null) {
    updateAttribute(this, 'label', value)
  }

  get label() {
    return getAttribute(this, 'label', null)
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
        const nextVal = newVal ?? ''

        if (nextVal !== this.#$input.value) {
          this.#$input.value = nextVal

          const isNextCursorEnd = this.#selectionStart === null || this.#selectionStart === nextVal.length

          if (!isNextCursorEnd) {
            this.#$input.setSelectionRange(this.#selectionStart, this.#selectionEnd)
          }
        }

        break
      }

      case 'label': {
        this.#$label.textContent = newVal

        break
      }

      case 'placeholder': {
        this.#$input.placeholder = newVal ?? ''
        updateAttribute(this, 'aria-placeholder', newVal)

        break
      }

      case 'maxvisibleitems': {
        this.#$listbox.style.maxHeight = attrValueToPixels(newVal, { min: 2, multiplier: ITEM_HEIGHT })

        break
      }

      case 'clear-aria-label': {
        updateAttribute(this.#$clear, 'aria-label', newVal)
      }
    }
  }

  #onInput = (e: Event) => {
    e.stopPropagation()

    this.#onValueChange(this.#$input.value, true)
  }

  #onValueChange(nextValue: string, preserveCursorPosition = false) {
    const prevValue = this.value

    if (prevValue !== nextValue) {
      const nextSelectionStart = preserveCursorPosition ? this.#$input.selectionStart : nextValue.length
      const nextSelectionEnd = preserveCursorPosition ? this.#$input.selectionEnd : nextValue.length
      const prevSelectionStart = this.#selectionStart
      const prevSelectionEnd = this.#selectionEnd
      const isPrevCursorEnd = prevSelectionStart === prevSelectionEnd && prevSelectionStart === prevValue.length

      // Reset input value to enforce controlled state
      this.#$input.value = prevValue

      if (!isPrevCursorEnd) {
        this.#$input.setSelectionRange(prevSelectionStart, prevSelectionEnd)
      }

      this.#selectionStart = nextSelectionStart
      this.#selectionEnd = nextSelectionEnd

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: nextValue,
          bubbles: true,
        })
      )
    }
  }

  #onClearMouseDown = (e: Event) => {
    e.preventDefault()
  }

  #onClear = (e: Event) => {
    e.stopPropagation()

    this.#onValueChange('')
    this.#$input.focus()
  }

  #onInputFocus = () => {
    this.#onExpand()
  }

  #onInputBlur = () => {
    this.#onCollapse()
  }

  #onListboxClick = (e: Event) => {
    e.stopPropagation()

    const $elem = e.target

    if (isSearchOptionElement($elem)) {
      this.#onValueChange($elem.text)
    }

    this.#onCollapse()
  }

  #onListboxKeyPress = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Enter': {
        e.preventDefault()

        const $elem = findSelectedOption(this.#getOptionElements())

        if ($elem != null) {
          this.#onValueChange($elem.text)
        }

        this.#onCollapse()

        break
      }
    }
  }

  #onListboxKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowUp': {
        e.preventDefault()
        this.#selectOption(this.#getPrevOption())

        break
      }
      case 'ArrowDown': {
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
    this.#onExpand()
  }

  #onExpand() {
    const elems = this.#getOptionElements()

    if (elems.length === 0 || document.activeElement !== this) {
      this.#onCollapse()

      return
    }

    this.setAttribute('aria-expanded', 'true')
    this.#selectOption(elems[0])
  }

  #onCollapse() {
    this.setAttribute('aria-expanded', 'false')
  }

  #getFirstOption() {
    return this.#getOptionElements()[0] ?? null
  }

  #getLastOption() {
    return this.#getOptionElements().reverse()[0] ?? null
  }

  #getNextOption() {
    const $options = this.#getOptionElements()
    const $selectedOption = findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getFirstOption()
    }

    return $options[(currentIndex + 1) % $options.length]
  }

  #getPrevOption() {
    const $options = this.#getOptionElements()
    const $selectedOption = findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getLastOption()
    }

    return $options[(currentIndex - 1 + $options.length) % $options.length]
  }

  #selectOption($option: TSinchSearchOptionElement | null) {
    for (const $op of this.#getOptionElements()) {
      const isSelected = $op === $option

      // Select / Unselect
      $op.selected = isSelected

      if (isSelected) {
        $op.scrollIntoView?.({ block: 'nearest' })
      }
    }
  }

  #getOptionElements(): TSinchSearchOptionElement[] {
    return this.#$optionSlot.assignedElements().filter(isSearchOptionElement)
  }

  focus() {
    this.#$input.focus()
  }

  blur() {
    this.#$input.blur()
  }
})

export type TSinchSearchElement = HTMLElement & {
  value: string,
  label: string | null,
  placeholder: string | null,
  maxVisibleItems: number | null,
  readonly dropdownRect: TRect,
  focus(): void,
  blur(): void,
}

export type TSinchSearchReact = TSinchElementReact<TSinchSearchElement> & {
  value: string,
  label?: string,
  placeholder?: string,
  maxVisibleItems?: number,
  'aria-label': string,
  'clear-aria-label': string,
  onChange: (e: SyntheticEvent<TSinchSearchElement, CustomEvent<string>>) => void,
  onFocus?: (e: FocusEvent<TSinchSearchElement>) => void,
  onBlur?: (e: FocusEvent<TSinchSearchElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-search': TSinchSearchReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-search': TSinchSearchElement,
  }
}
