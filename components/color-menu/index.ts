import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getReactEventHandler,
  getRect,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
  updateIntegerAttribute,
  subscribeContext,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchColorMenuElement, TSinchColorMenuReact } from './types'
import type { TRect } from '../types'
import type { TContextVisibility, TContextKeydown } from '../utils'

const NUM_COLS_DEFAULT = 5
const ITEM_WIDTH = 44
const ITEM_HEIGHT = 56
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-color-menu', class extends NectaryElement {
  #$listbox: HTMLElement
  #$optionsSlot: HTMLSlotElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: false })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$optionsSlot = shadowRoot.querySelector('#options')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.role = 'listbox'
    this.tabIndex = 0
    this.addEventListener('keydown', this.#onListboxKeyDown, options)
    this.addEventListener('blur', this.#onListboxBlur, options)
    this.#$listbox.addEventListener('click', this.#onListboxClick, options)
    this.#$optionsSlot.addEventListener('slotchange', this.#onSlotChange, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    subscribeContext(this, 'keydown', this.#onContextKeyDown, signal)
    subscribeContext(this, 'visibility', this.#onContextVisibility, signal)

    this.#updateColumns()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['value', 'rows', 'cols']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'value': {
        if (this.isConnected) {
          this.#onValueChange()
        }

        break
      }

      case 'rows': {
        this.#updateRows()

        break
      }

      case 'cols': {
        if (this.isConnected) {
          this.#updateColumns()
        }

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

  set colors(value: string | null) {
    updateAttribute(this, 'colors', value)
  }

  get colors(): string | null {
    return getAttribute(this, 'colors')
  }

  set rows(value: number | null) {
    updateIntegerAttribute(this, 'rows', value)
  }

  get rows() {
    return getIntegerAttribute(this, 'rows', null)
  }

  set cols(value: number | null) {
    updateIntegerAttribute(this, 'cols', value)
  }

  get cols() {
    return getIntegerAttribute(this, 'cols', null)
  }

  get focusable() {
    return true
  }

  nthItemRect(index: number): TRect | null {
    const $item = this.#getOptionElements()[index]

    if ($item != null) {
      return getRect($item)
    }

    return null
  }

  #onSlotChange = () => {
    this.#updateColumns()
    this.#onValueChange()
  }

  #updateRows() {
    const rowsValue = getAttribute(this, 'rows')

    this.#$listbox.style.maxHeight = attrValueToPixels(
      rowsValue,
      {
        min: 2,
        itemSizeMultiplier: ITEM_HEIGHT,
      }
    )
  }

  #updateColumns() {
    const colsValue = getAttribute(this, 'cols')
    const numItems = this.#getOptionElements().length

    this.#$listbox.style.width = attrValueToPixels(
      colsValue,
      {
        min: 1,
        max: numItems,
        defaultValue: Math.min(numItems, NUM_COLS_DEFAULT),
        itemSizeMultiplier: ITEM_WIDTH,
      }
    )
  }

  #onListboxBlur = () => {
    this.#selectOption(null)
  }

  #onListboxClick = (e: Event) => {
    const $elem = e.target as Element

    if ($elem === this.#$listbox) {
      return
    }

    this.focus()
    this.#dispatchChangeEvent($elem)
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

  #onContextKeyDown = (e: CustomEvent<TContextKeydown>) => {
    this.#handleKeydown(e.detail)
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
      case 'ArrowLeft': {
        e.preventDefault()
        this.#selectOption(this.#getPrevOption())

        break
      }
      case 'ArrowRight': {
        e.preventDefault()
        this.#selectOption(this.#getNextOption())

        break
      }
      case 'ArrowDown': {
        e.preventDefault()
        this.#selectOption(this.#getNextRowOption())

        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        this.#selectOption(this.#getPrevRowOption())

        break
      }
    }
  }

  #onValueChange() {
    const value = this.value

    for (const $option of this.#getOptionElements()) {
      const isChecked = value === getAttribute($option, 'value', '')

      updateBooleanAttribute($option, 'data-checked', isChecked)
      updateBooleanAttribute($option, 'data-selected', isChecked)
      updateExplicitBooleanAttribute($option, 'aria-selected', isChecked)
    }
  }

  #getFirstOption(): Element | null {
    const $options = this.#getOptionElements()

    return $options[0] ?? null
  }

  #getLastOption(): Element | null {
    const $options = this.#getOptionElements()

    return $options[$options.length - 1] ?? null
  }

  #getNextOption(): Element | null {
    const index = this.#getSelectedOptionIndex()

    if (index !== null) {
      const $options = this.#getOptionElements()

      return $options[(1 + index) % $options.length]
    }

    return this.#getFirstOption()
  }

  #getPrevOption(): Element | null {
    const index = this.#getSelectedOptionIndex()

    if (index !== null) {
      const $options = this.#getOptionElements()

      return $options[(index - 1 + $options.length) % $options.length]
    }

    return this.#getLastOption()
  }

  #getNextRowOption(): Element | null {
    const selectedIndex = this.#getSelectedOptionIndex()

    if (selectedIndex !== null) {
      const $options = this.#getOptionElements()
      const numCols = Math.min(this.cols ?? NUM_COLS_DEFAULT, $options.length)
      const numColsInLastRow = $options.length % numCols

      if (numColsInLastRow > 0) {
        if (selectedIndex < $options.length - numCols) {
          return $options[selectedIndex + numCols]
        }

        if (numColsInLastRow > 0 && selectedIndex < $options.length - numColsInLastRow) {
          return $options[$options.length - 1]
        }

        return $options[selectedIndex + numColsInLastRow - $options.length]
      }

      return $options[(selectedIndex + numCols) % $options.length]
    }

    return this.#getFirstOption()
  }

  #getPrevRowOption(): Element | null {
    const selectedIndex = this.#getSelectedOptionIndex()

    if (selectedIndex !== null) {
      const $options = this.#getOptionElements()
      const numCols = Math.min(this.cols ?? NUM_COLS_DEFAULT, $options.length)
      const numColsInLastRow = $options.length % numCols

      if (selectedIndex < numColsInLastRow) {
        return $options[(selectedIndex - numColsInLastRow + $options.length) % $options.length]
      }

      if (selectedIndex < numCols) {
        return $options[(selectedIndex - numCols - numColsInLastRow + $options.length) % $options.length]
      }

      return $options[(selectedIndex - numCols + $options.length) % $options.length]
    }

    return this.#getFirstOption()
  }

  #selectOption($option: Element | null) {
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

  #getOptionElements(): Element[] {
    return this.#$optionsSlot.assignedElements()
  }

  #getSelectedOptionIndex(): number | null {
    const elements = this.#getOptionElements()

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i]

      if (getBooleanAttribute(el, 'data-selected')) {
        return i
      }
    }

    return null
  }

  #findSelectedOption(): Element | null {
    const elements = this.#getOptionElements()

    for (const el of elements) {
      if (getBooleanAttribute(el, 'data-selected')) {
        return el
      }
    }

    return null
  }

  #findCheckedOption(): Element | null {
    const elements = this.#getOptionElements()
    const value = this.value

    for (const $el of elements) {
      if (getAttribute($el, 'value') === value) {
        return $el
      }
    }

    return null
  }

  #dispatchChangeEvent($opt: Element | null) {
    if ($opt === null) {
      return
    }

    if ($opt !== null) {
      this.dispatchEvent(
        new CustomEvent('-change', { detail: getAttribute($opt, 'value') })
      )
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-color-menu': TSinchColorMenuReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-color-menu': TSinchColorMenuElement,
  }
}
