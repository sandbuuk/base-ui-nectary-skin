import '../input'
import '../icon'
import '../text'
import { isSelectMenuOption } from '../select-menu-option/utils'
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
  hasClass,
  isTargetEqual,
} from '../utils'
import { CSVToFormData, setFormValue } from '../utils/form'
import templateHTML from './template.html'
import type { TSinchSelectMenu } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'
import type { TContextKeydown, TContextVisibility } from '../utils'

type TSelectMenuOption = HTMLElementTagNameMap['sinch-select-menu-option']

const ITEM_HEIGHT = 40
const NUM_ITEMS_SEARCH = 7
const template = document.createElement('template')

template.innerHTML = templateHTML

export class SelectMenu extends NectaryElement {
  #$optionSlot: HTMLSlotElement
  #$listbox: HTMLElement
  #$search: NectaryComponentVanilla<'sinch-input'>
  #$searchClear: HTMLElement
  #$notFound: HTMLElement
  #controller: AbortController | null = null
  #searchDebounce
  #internals: ElementInternals

  #userManagedSearch = false

  static formAssociated = true

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#internals = this.attachInternals()
    this.#$optionSlot = shadowRoot.querySelector('slot')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$search = shadowRoot.querySelector('#search')!
    this.#$searchClear = shadowRoot.querySelector('#search-clear')!
    this.#$notFound = shadowRoot.querySelector('#not-found')!

    this.#searchDebounce = debounceTimeout(200)(this.#updateSearchValue)
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.setAttribute('role', 'listbox')
    this.#internals.role = 'listbox'
    this.tabIndex = 0
    this.addEventListener('keydown', this.#onListboxKeyDown, options)
    this.addEventListener('focus', this.#onFocus, options)
    this.addEventListener('blur', this.#onListboxBlur, options)
    this.#$listbox.addEventListener('click', this.#onListboxClick, options)
    this.#$search.addEventListener(
      '-change',
      this.#onSearchChange as any,
      options
    )
    this.#$searchClear.addEventListener(
      '-click',
      this.#onSearchClearClick,
      options
    )
    this.#$optionSlot.addEventListener(
      'slotchange',
      this.#onOptionSlotChange,
      options
    )
    this.addEventListener(
      '-search-change',
      this.#onSearchChangeReactHandler,
      options
    )
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    subscribeContext(
      this,
      'keydown',
      this.#onContextKeyDown,
      this.#controller.signal
    )
    subscribeContext(
      this,
      'visibility',
      this.#onContextVisibility,
      this.#controller.signal
    )

    this.#onOptionSlotChange()
  }

  disconnectedCallback() {
    this.#searchDebounce.cancel()
    this.#controller!.abort()
    this.#controller = null
  }

  formAssociatedCallback() {
    setFormValue(this.#internals, CSVToFormData(this.name, this.value))
  }

  formResetCallback() {
    this.value = ''
    setFormValue(this.#internals, '')
  }

  formStateRestoreCallback(state: string | FormData | null) {
    if (this.#internals.form === null || getBooleanAttribute(this.#internals.form, 'data-form-state-restore') === false) {
      return
    }

    if (state !== null) {
      const value = typeof state === 'string' ? state : state.get(this.name)

      this.value = value?.toString() ?? ''
      setFormValue(this.#internals, CSVToFormData(this.name, value?.toString() ?? ''))
    }
  }

  static get observedAttributes() {
    return [
      'value',
      'rows',
      'multiple',
      'search-value',
      'search-placeholder',
      'search-autocomplete',
    ]
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    switch (name) {
      case 'multiple': {
        this.#onValueChange(this.value)
        updateExplicitBooleanAttribute(
          this,
          'aria-multiselectable',
          isAttrTrue(newVal)
        )
        this.#internals.ariaMultiSelectable = isAttrTrue(newVal).toString()

        break
      }

      case 'search-autocomplete': {
        updateAttribute(this.#$search, 'autocomplete', newVal)

        break
      }
      case 'value': {
        this.#onValueChange(newVal ?? '')

        break
      }

      case 'rows': {
        const numberOfItems = this.#$optionSlot.assignedElements().length
        const maxNumberOfRows = parseInt(newVal ?? '0', 10)

        this.#$listbox.style.maxHeight = attrValueToPixels(newVal, {
          min: 2,
          itemSizeMultiplier: ITEM_HEIGHT,
          addExtraSpace: numberOfItems > maxNumberOfRows,
        })

        break
      }

      case 'search-placeholder': {
        updateAttribute(this.#$search, 'placeholder', newVal)

        break
      }

      case 'search-value': {
        updateAttribute(this.#$search, 'value', newVal)
        this.#userManagedSearch = true
        this.#updateSearchList(newVal !== null ? newVal : '')

        break
      }
    }
  }

  set name(value: string) {
    updateAttribute(this, 'name', value)
  }

  get name(): string {
    return getAttribute(this, 'name', '')
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

  set searchable(isSearchable: boolean | null) {
    updateBooleanAttribute(this, 'searchable', isSearchable)
  }

  get searchable() {
    const searchableAttribute = this.getAttribute('searchable')

    return searchableAttribute === null
      ? searchableAttribute
      : isAttrTrue(searchableAttribute)
  }

  set 'search-autocomplete'(autocomplete: string) {
    updateAttribute(this.#$search, 'autocomplete', autocomplete)
  }

  get 'search-autocomplete'(): string {
    return getAttribute(this.#$search, 'autocomplete', '')
  }

  set 'search-placeholder'(placeholder: string) {
    updateAttribute(this.#$search, 'placeholder', placeholder)
  }

  get 'search-placeholder'(): string {
    return getAttribute(this.#$search, 'placeholder', '')
  }

  set 'search-value'(value: string) {
    updateAttribute(this, 'search-value', value)
    this.#userManagedSearch = true
  }

  get 'search-value'(): string {
    return getAttribute(this, 'search-value', '')
  }

  get focusable() {
    return true
  }

  #onFocus = () => {
    const isSearchActive = hasClass(this.#$search, 'active')

    if (isSearchActive) {
      this.#$search.focus()
    }
  }

  #onListboxBlur = () => {
    this.#selectOption(null)
  }

  #onListboxClick = (e: Event) => {
    const $elem = e.target

    if (($elem == null) || !($elem instanceof Element) || !isSelectMenuOption($elem)) {
      return
    }

    this.focus()

    if (
      !isTargetEqual(e, this.#$listbox) &&
        !getBooleanAttribute($elem, 'disabled')
    ) {
      this.#selectOption($elem)
      this.#dispatchChangeEvent($elem)
    }
  }

  #onSearchChange = (e: CustomEvent<string>) => {
    if (!this.#userManagedSearch) {
      this.#$search.value = e.detail
      this.#searchDebounce.fn()
    } else {
      this.#updateSearchValue(e.detail)
    }

    setClass(this.#$searchClear, 'active', e.detail.length > 0)
  }

  #onSearchClearClick = () => {
    if (!this.#userManagedSearch) {
      this.#$search.value = ''
      this.#searchDebounce.fn()
    } else {
      this.#updateSearchValue('')
    }

    this.#$search.focus()
    setClass(this.#$searchClear, 'active', false)
  }

  #updateSearchValue = (newValue?: string) => {
    const searchValue =
        newValue === undefined ? this.#$search.value.toLowerCase() : newValue
    const searchChangedEvent = new CustomEvent('-search-change', {
      detail: searchValue,
      cancelable: true,
    })

    this.dispatchEvent(searchChangedEvent)

    // Default behaviour
    if (!searchChangedEvent.defaultPrevented) {
      this.#updateSearchList(searchValue)
    }
  }

  #updateSearchList = (searchValue: string) => {
    const $options = this.#getOptionElements()
    let someFound = false

    for (const $opt of $options) {
      const isHidden =
          searchValue.length > 0 && !$opt.matchesSearch(searchValue)

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

      // Focus search if active
      this.#onFocus()
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
    const searchable = this.searchable
    const options = this.#getOptionElements()
    const isEnoughOptions = options.length >= NUM_ITEMS_SEARCH
    // (default)  searchable is null => show search if enough options
    // searchable is true => always show search
    // searchable is false => never show search
    const isSearchActive =
        (isEnoughOptions && searchable !== false) || Boolean(searchable)

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
        const isChecked =
            !getBooleanAttribute($option, 'disabled') &&
            values.includes(getAttribute($option, 'value', ''))

        updateBooleanAttribute($option, 'data-checked', isChecked)
      }

      const formData = new FormData()

      values.forEach((value) => {
        formData.append(this.name, value)
      })

      setFormValue(this.#internals, formData)
    } else {
      const value = getFirstCsvValue(csv)

      for (const $option of this.#getOptionElements()) {
        const isChecked =
            !getBooleanAttribute($option, 'disabled') &&
            value === getAttribute($option, 'value', '')

        updateBooleanAttribute($option, 'data-checked', isChecked)
      }

      setFormValue(this.#internals, value ?? '')
    }
  }

  #getFirstOption(): TSelectMenuOption | null {
    const $options = this.#getOptionElements()

    for (let i = 0; i < $options.length; i++) {
      const el = $options[i]

      if (
        !getBooleanAttribute(el, 'disabled') &&
          !el.classList.contains('hidden')
      ) {
        return el
      }
    }

    return null
  }

  #getLastOption(): TSelectMenuOption | null {
    const $options = this.#getOptionElements()

    for (let i = $options.length - 1; i >= 0; i--) {
      const el = $options[i]

      if (
        !getBooleanAttribute(el, 'disabled') &&
          !el.classList.contains('hidden')
      ) {
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

        if (
          !getBooleanAttribute(el, 'disabled') &&
            !el.classList.contains('hidden')
        ) {
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

        if (
          !getBooleanAttribute(el, 'disabled') &&
            !el.classList.contains('hidden')
        ) {
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
    const assignedElements = this.#$optionSlot.assignedElements()

    return assignedElements.filter(isSelectMenuOption)
  }

  #getSelectedOptionIndex(): number | null {
    const elements = this.#getOptionElements()

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i]

      if (
        !getBooleanAttribute(el, 'disabled') &&
          getBooleanAttribute(el, 'data-selected')
      ) {
        return i
      }
    }

    return null
  }

  #findSelectedOption(): TSelectMenuOption | null {
    const elements = this.#getOptionElements()

    for (const el of elements) {
      if (
        !getBooleanAttribute(el, 'disabled') &&
          getBooleanAttribute(el, 'data-selected')
      ) {
        return el
      }
    }

    return null
  }

  #findCheckedOption(): TSelectMenuOption | null {
    const elements = this.#getOptionElements()
    const value = this.multiple ? getFirstCsvValue(this.value) : this.value

    for (const $el of elements) {
      if (
        !getBooleanAttribute($el, 'disabled') &&
          getAttribute($el, 'value') === value
      ) {
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
      ? updateCsv(
        this.value,
        value,
        !getBooleanAttribute($opt, 'data-checked')
      )
      : value

    this.dispatchEvent(new CustomEvent('-change', { detail: result }))
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }

  #onSearchChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-search-change')?.(e)
  }
}

defineCustomElement('sinch-select-menu', SelectMenu)

declare global {
  interface NectaryComponentMap {
    'sinch-select-menu': TSinchSelectMenu,
  }

  interface HTMLElementTagNameMap {
    'sinch-select-menu': NectaryComponentVanilla<'sinch-select-menu'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-menu': NectaryComponentReact<'sinch-select-menu'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-select-menu': NectaryComponentReact<'sinch-select-menu'>,
    }
  }
}
