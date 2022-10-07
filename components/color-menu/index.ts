import '../color-swatch'
import '../icons/check'
import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getCsvSet,
  getIntegerAttribute,
  getLiteralAttribute,
  getReactEventHandler,
  getRect,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
  updateIntegerAttribute,
  updateLiteralAttribute,
} from '../utils'
import { assertColorNameValue, colorMap, colorNameValues, defaultColorNameValues, NO_COLOR } from '../utils/colors'
import optionTemplateHTML from './option-template.html'
import templateHTML from './template.html'
import type { TContextKeyboard, TContextVisibility, TRect } from '../types'
import type { TSinchColorName } from '../utils/colors'
import type { TSinchSelectMenuElement, TSinchSelectMenuReact } from './types'

const NUM_COLS_DEFAULT = 5
const ITEM_WIDTH = 44
const ITEM_HEIGHT = 56
const template = document.createElement('template')
const optionTemplate = document.createElement('template')

template.innerHTML = templateHTML
optionTemplate.innerHTML = optionTemplateHTML

defineCustomElement('sinch-color-menu', class extends NectaryElement {
  #$listbox: HTMLElement
  #$checkIcon: HTMLElement
  #controller: AbortController | null = null
  #prevColorsValue: string | null = ''
  #isConnected = false

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$checkIcon = shadowRoot.querySelector('#check')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'listbox')
    this.setAttribute('tabindex', '0')
    this.addEventListener('keydown', this.#onListboxKeyDown, { signal })
    this.addEventListener('-keydown', this.#onContexKeydown as any, { signal })
    this.addEventListener('blur', this.#onListboxBlur, { signal })
    this.#$listbox.addEventListener('click', this.#onListboxClick, { signal })
    this.addEventListener('-change', this.#onChangeReactHandler, { signal })
    this.addEventListener('-visibility', this.#onContextVisibility as any, { signal })
    this.dispatchEvent(new CustomEvent('-context-connect-keydown', { bubbles: true }))
    this.dispatchEvent(new CustomEvent('-context-connect-visibility', { bubbles: true }))

    requestAnimationFrame(this.#onMount)
  }

  disconnectedCallback() {
    this.#isConnected = false
    this.#prevColorsValue = null
    this.dispatchEvent(new CustomEvent('-context-disconnect-keydown', { bubbles: true }))
    this.dispatchEvent(new CustomEvent('-context-disconnect-visibility', { bubbles: true }))
    this.#controller!.abort()
  }

  static get observedAttributes() {
    return ['value', 'rows', 'cols', 'colors']
  }

  set value(value: TSinchColorName) {
    updateLiteralAttribute(this, colorNameValues, 'value', value)
  }

  get value(): TSinchColorName {
    return getLiteralAttribute(this, colorNameValues, 'value', NO_COLOR)
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

  nthItemRect(index: number): TRect | null {
    const $item = this.#$listbox.children[index]

    if ($item != null) {
      return getRect($item)
    }

    return null
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'value': {
        if (this.#isConnected) {
          assertColorNameValue(newVal)
          this.#onValueChange()
        }

        break
      }

      case 'colors': {
        if (this.#isConnected) {
          this.#updateColors()
        }

        break
      }

      case 'rows': {
        this.#updateRows()

        break
      }

      case 'cols': {
        if (this.#isConnected) {
          this.#updateColumns()
        }

        break
      }
    }
  }

  #updateColors() {
    const colorsValue = this.colors

    if (colorsValue === this.#prevColorsValue) {
      return
    }

    this.#prevColorsValue = colorsValue

    const colorNames = colorsValue !== null
      ? getCsvSet(colorsValue)
      : defaultColorNameValues
    const fragment = document.createDocumentFragment()

    for (const col of colorNames) {
      if (col === NO_COLOR) {
        continue
      }

      const optFrag = optionTemplate.content.cloneNode(true) as Element
      const $opt = optFrag.querySelector('.option')!
      const $swatch = optFrag.querySelector('sinch-color-swatch')!

      updateAttribute($opt, 'data-value', col)
      updateAttribute($opt, 'title', col)
      updateAttribute($swatch, 'name', col)

      fragment.appendChild(optFrag)
    }

    this.#$listbox.replaceChildren(fragment)

    // Update width of the menu
    this.#updateColumns()

    // Refresh checkmark
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
    const numItems = this.#$listbox.children.length

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

  #onMount = () => {
    this.#updateColors()
    this.#isConnected = true
  }

  #onListboxBlur = () => {
    this.#selectOption(null)
  }

  #onListboxClick = (e: Event) => {
    const $elem = e.target as Element

    if ($elem === this.#$listbox) {
      return
    }

    this.#dispatchChangeEvent($elem)
    this.#selectOption($elem)
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

  #onContexKeydown = (e: CustomEvent<TContextKeyboard>) => {
    this.#handleKeydown(e.detail)
  }

  #onListboxKeyDown = (e: KeyboardEvent) => {
    this.#handleKeydown(e)
  }

  #handleKeydown(e: TContextKeyboard) {
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
    if (!this.hasAttribute('value')) {
      this.#$checkIcon.remove()

      return
    }

    const value = this.value

    this.#$checkIcon.remove()

    for (const $option of this.#getOptionElements()) {
      const isChecked = value === getAttribute($option, 'data-value', '')

      if (isChecked) {
        $option.appendChild(this.#$checkIcon)
        setClass(this.#$checkIcon, 'inverted', colorMap[value].isInverted)
      }

      updateBooleanAttribute($option, 'data-checked', isChecked)
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
    return Array.from(this.#$listbox.children)
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
      if (getAttribute($el, 'data-value') === value) {
        return $el
      }
    }

    return null
  }

  #dispatchChangeEvent($opt: Element | null) {
    if ($opt === null) {
      return
    }

    this.dispatchEvent(
      new CustomEvent('-change', { detail: getAttribute($opt, 'data-value') })
    )
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-color-menu': TSinchSelectMenuReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-color-menu': TSinchSelectMenuElement,
  }
}
