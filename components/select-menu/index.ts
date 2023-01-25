import '../input'
import '../icon-button'
import '../icons/search'
import '../icons/close'
import '../text'
import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  unpackCsv,
  getFirstCsvValue,
  getIntegerAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateCsv,
  updateExplicitBooleanAttribute,
  updateIntegerAttribute,
  debounceTimeout,
  setClass,
  subscribeContext,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSelectMenuElement, TSinchSelectMenuReact } from './types'
import type { TSinchInputElement } from '../input/types'
import type { TSinchSelectMenuOptionElement } from '../select-menu-option/types'
import type { TContextKeydown, TContextVisibility } from '../utils'

type TSelectMenuOption = TSinchSelectMenuOptionElement

const ITEM_HEIGHT = 40
const NUM_ITEMS_SEARCH = 20
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select-menu', class extends NectaryElement {
  #$optionSlot: HTMLSlotElement
  #$listbox: HTMLElement
  #$search: TSinchInputElement
  #$notFound: HTMLElement
  #controller: AbortController | null = null
  #searchDebounce

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$optionSlot = shadowRoot.querySelector('slot')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$search = shadowRoot.querySelector('#search')!
    this.#$notFound = shadowRoot.querySelector('#not-found')!

    this.#searchDebounce = debounceTimeout(200)(this.#updateSearch)
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'listbox')
    this.setAttribute('tabindex', '0')
    this.addEventListener('keydown', this.#onListboxKeyDown, { signal })
    this.addEventListener('blur', this.#onListboxBlur, { signal })
    this.#$listbox.addEventListener('mousedown', this.#onListboxMousedown, { signal })
    this.#$listbox.addEventListener('click', this.#onListboxClick, { signal })
    this.#$search.addEventListener('-change', this.#onSearchChange as any, { signal })
    this.#$optionSlot.addEventListener('slotchange', this.#onOptionSlotChange, { signal })
    this.addEventListener('-change', this.#onChangeReactHandler, { signal })
    subscribeContext(this, 'keydown', this.#onContextKeyDown, signal)
    subscribeContext(this, 'visibility', this.#onContextVisibility, signal)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#searchDebounce.cancel()
  }

  static get observedAttributes() {
    return ['value', 'rows', 'multiple']
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set rows(value: number | null) {
    updateIntegerAttribute(this, 'rows', value)
  }

  get rows() {
    return getIntegerAttribute(this, 'rows', null)
  }

  set multiple(isMultiple: boolean) {
    updateBooleanAttribute(this, 'multiple', isMultiple)
  }

  get multiple() {
    return getBooleanAttribute(this, 'multiple')
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'multiple': {
        this.#onValueChange(this.value)
        updateExplicitBooleanAttribute(this, 'aria-multiselectable', isAttrTrue(newVal))

        break
      }

      case 'value': {
        this.#onValueChange(newVal ?? '')

        break
      }

      case 'rows': {
        this.#$listbox.style.maxHeight = attrValueToPixels(newVal, { min: 2, itemSizeMultiplier: ITEM_HEIGHT })

        break
      }
    }
  }

  #onListboxMousedown = (e: Event) => {
    const $elem = (e.target) as TSelectMenuOption

    if (!getBooleanAttribute($elem, 'disabled')) {
      this.#dispatchChangeEvent($elem)
    }
  }

  #onListboxBlur = () => {
    this.#selectOption(null)
  }

  #onListboxClick = (e: Event) => {
    const $elem = (e.target) as TSelectMenuOption

    if (!getBooleanAttribute($elem, 'disabled')) {
      this.#selectOption($elem)
    }
  }

  #onSearchChange = (e: CustomEvent<string>) => {
    this.#$search.value = e.detail
    this.#searchDebounce.fn()
  }

  #updateSearch = () => {
    const searchValue = this.#$search.value.toLowerCase()
    const $options = this.#getOptionElements()
    let someFound = false

    for (const $opt of $options) {
      const isHidden = searchValue.length > 0 && !$opt.matchesSearch(searchValue)

      someFound ||= !isHidden
      setClass($opt, 'hidden', isHidden)
    }

    setClass(this.#$notFound, 'active', !someFound)

    this.#selectOption(null)
  }

  #onContextKeyDown = (e: CustomEvent<TContextKeydown>) => {
    this.#handleKeydown(e.detail)
  }

  #onContextVisibility = (e: CustomEvent<TContextVisibility>) => {
    if (e.detail) {
      // Select element when becoming visible
      this.#selectOption(this.#findCheckedOption())
    } else {
      // Deselect element when becoming invisible
      this.#selectOption(null)
    }
  }

  #onListboxKeyDown = (e: KeyboardEvent) => {
    this.#handleKeydown(e)
  }

  #handleKeydown(e: TContextKeydown) {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        const $option = this.#findSelectedOption()

        if ($option !== null) {
          e.preventDefault()
          this.#dispatchChangeEvent($option)
        }

        break
      }
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
    }
  }

  #onOptionSlotChange = () => {
    const isSearchActive = this.#$optionSlot.assignedElements().length >= NUM_ITEMS_SEARCH

    if (!isSearchActive) {
      updateAttribute(this.#$search, 'value', null)
    }

    setClass(this.#$search, 'active', isSearchActive)
    this.#onValueChange(this.value)
  }

  #onValueChange(csv: string) {
    if (this.multiple) {
      const values = unpackCsv(csv)

      for (const $option of this.#getOptionElements()) {
        const isChecked = !getBooleanAttribute($option, 'disabled') && values.includes(getAttribute($option, 'value', ''))

        updateBooleanAttribute($option, 'data-checked', isChecked)
      }
    } else {
      const value = getFirstCsvValue(csv)

      for (const $option of this.#getOptionElements()) {
        const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

        updateBooleanAttribute($option, 'data-checked', isChecked)
      }
    }
  }

  #getFirstOption(): TSelectMenuOption | null {
    const $options = this.#getOptionElements()

    for (let i = 0; i < $options.length; i++) {
      const el = $options[i]

      if (!getBooleanAttribute(el, 'disabled') && !el.classList.contains('hidden')) {
        return el
      }
    }

    return null
  }

  #getLastOption(): TSelectMenuOption | null {
    const $options = this.#getOptionElements()

    for (let i = $options.length - 1; i >= 0 ; i--) {
      const el = $options[i]

      if (!getBooleanAttribute(el, 'disabled') && !el.classList.contains('hidden')) {
        return el
      }
    }

    return null
  }

  #getNextOption(): TSelectMenuOption | null {
    const index = this.#getSelectedOptionIndex()

    if (index !== null) {
      const $options = this.#getOptionElements()

      for (let i = 1; i <= $options.length; i++) {
        const el = $options[(i + index) % $options.length]

        if (!getBooleanAttribute(el, 'disabled') && !el.classList.contains('hidden')) {
          return el
        }
      }
    }

    return this.#getFirstOption()
  }

  #getPrevOption(): TSelectMenuOption | null {
    const index = this.#getSelectedOptionIndex()

    if (index !== null) {
      const $options = this.#getOptionElements()

      for (let i = 1; i <= $options.length; i++) {
        const el = $options[(index - i + $options.length) % $options.length]

        if (!getBooleanAttribute(el, 'disabled') && !el.classList.contains('hidden')) {
          return el
        }
      }
    }

    return this.#getLastOption()
  }

  #selectOption($option: TSelectMenuOption | null) {
    const hasRows = this.hasAttribute('rows')

    for (const $op of this.#getOptionElements()) {
      const isSelected = $op === $option

      // Select / Unselect
      updateBooleanAttribute($op, 'data-selected', isSelected)

      if (isSelected && hasRows) {
        $op.scrollIntoView?.({ block: 'nearest' })
      }
    }
  }

  #getOptionElements(): TSelectMenuOption[] {
    return this.#$optionSlot.assignedElements() as TSelectMenuOption[]
  }

  #getSelectedOptionIndex(): number | null {
    const elements = this.#getOptionElements()

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i]

      if (!getBooleanAttribute(el, 'disabled') && getBooleanAttribute(el, 'data-selected')) {
        return i
      }
    }

    return null
  }

  #findSelectedOption(): TSelectMenuOption | null {
    const elements = this.#getOptionElements()

    for (const el of elements) {
      if (!getBooleanAttribute(el, 'disabled') && getBooleanAttribute(el, 'data-selected')) {
        return el
      }
    }

    return null
  }

  #findCheckedOption(): TSelectMenuOption | null {
    const elements = this.#getOptionElements()
    const value = this.multiple ? getFirstCsvValue(this.value) : this.value

    for (const $el of elements) {
      if (!getBooleanAttribute($el, 'disabled') && getAttribute($el, 'value') === value) {
        return $el
      }
    }

    return null
  }

  #dispatchChangeEvent($opt: TSelectMenuOption | null) {
    if ($opt === null) {
      return
    }

    const value = $opt.value
    const result = this.multiple
      ? updateCsv(this.value, value, !getBooleanAttribute($opt, 'data-checked'))
      : value

    this.dispatchEvent(
      new CustomEvent('-change', { detail: result })
    )
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }

  get focusable() {
    return true
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-menu': TSinchSelectMenuReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select-menu': TSinchSelectMenuElement,
  }
}
