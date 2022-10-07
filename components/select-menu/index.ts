import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getCsvSet,
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
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSelectMenuOptionElement } from '../select-menu-option/types'
import type { TContextKeyboard, TContextVisibility } from '../utils/context'
import type { TSinchSelectMenuElement, TSinchSelectMenuReact } from './types'

type TSelectMenuOption = TSinchSelectMenuOptionElement

const ITEM_HEIGHT = 40
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select-menu', class extends NectaryElement {
  #$optionSlot: HTMLSlotElement
  #$listbox: HTMLElement
  #controller = new AbortController()

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$optionSlot = shadowRoot.querySelector('slot')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
  }

  connectedCallback() {
    const { signal } = this.#controller

    this.setAttribute('role', 'listbox')
    this.setAttribute('tabindex', '0')
    this.addEventListener('keydown', this.#onListboxKeyDown, { signal })
    this.addEventListener('-keydown', this.#onContexKeydown as any, { signal })
    this.addEventListener('blur', this.#onListboxBlur, { signal })
    this.#$listbox.addEventListener('mousedown', this.#onListboxMousedown, { signal })
    this.#$listbox.addEventListener('click', this.#onListboxClick, { signal })
    this.#$optionSlot.addEventListener('slotchange', this.#onOptionSlotChange, { signal })
    this.addEventListener('-change', this.#onChangeReactHandler, { signal })
    this.addEventListener('-visibility', this.#onContextVisibility as any, { signal })
    this.dispatchEvent(new CustomEvent('-context-connect-keydown', { bubbles: true }))
    this.dispatchEvent(new CustomEvent('-context-connect-visibility', { bubbles: true }))
  }

  disconnectedCallback() {
    this.#controller.abort()
    this.dispatchEvent(new CustomEvent('-context-disconnect-keydown', { bubbles: true }))
    this.dispatchEvent(new CustomEvent('-context-disconnect-visibility', { bubbles: true }))
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

  #onContexKeydown = (e: CustomEvent<TContextKeyboard>) => {
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
    this.#onValueChange(this.value)
  }

  #onValueChange(csv: string) {
    if (this.multiple) {
      const values = getCsvSet(csv)

      for (const $option of this.#getOptionElements()) {
        const isChecked = !getBooleanAttribute($option, 'disabled') && values.has(getAttribute($option, 'value', ''))

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

      if (!getBooleanAttribute(el, 'disabled')) {
        return el
      }
    }

    return null
  }

  #getLastOption(): TSelectMenuOption | null {
    const $options = this.#getOptionElements()

    for (let i = $options.length - 1; i >= 0 ; i--) {
      const el = $options[i]

      if (!getBooleanAttribute(el, 'disabled')) {
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

        if (!getBooleanAttribute(el, 'disabled')) {
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

        if (!getBooleanAttribute(el, 'disabled')) {
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
