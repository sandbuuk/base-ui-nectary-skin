import {
  attrValueToPixels,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getEventHandler,
  getIntegerAttribute,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
  updateIntegerAttribute,
} from '../utils'
import templateHTML from './template.html'
import '../select-option'
import type { TSinchElementReact } from '../types'

type TSinchSelectOption = HTMLElementTagNameMap['sinch-select-option']

const ITEM_HEIGHT = 36

const isOptionElement = (element: EventTarget | Element | null): element is TSinchSelectOption => {
  return element instanceof Element && element.tagName === 'SINCH-SELECT-OPTION'
}

const getEnabledOptionElements = ($slot: HTMLSlotElement): TSinchSelectOption[] => {
  return $slot.assignedElements().filter((opt) => isOptionElement(opt) && opt.disabled !== true) as TSinchSelectOption[]
}
const findSelectedOption = (elements: readonly TSinchSelectOption[]) => {
  return elements.find((el) => el.selected) ?? null
}
const getOptionWithValue = ($slot: HTMLSlotElement, value: string): TSinchSelectOption | null => {
  for (const $option of $slot.assignedElements()) {
    if (isOptionElement($option) && $option.disabled !== true && $option.value === value) {
      return $option
    }
  }

  return null
}

const getFirstOption = ($slot: HTMLSlotElement) => {
  for (const $option of $slot.assignedElements()) {
    if (isOptionElement($option) && $option.disabled !== true) {
      return $option
    }
  }

  return null
}

const getLastOption = ($slot: HTMLSlotElement) => {
  for (const $option of $slot.assignedElements().reverse()) {
    if (isOptionElement($option) && $option.disabled !== true) {
      return $option
    }
  }

  return null
}

const getNextOption = ($slot: HTMLSlotElement) => {
  const $options = getEnabledOptionElements($slot)
  const $selectedOption = findSelectedOption($options)
  const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

  if (currentIndex < 0) {
    return getFirstOption($slot)
  }

  return $options[(currentIndex + 1) % $options.length]
}

const getPrevOption = ($slot: HTMLSlotElement) => {
  const $options = getEnabledOptionElements($slot)
  const $selectedOption = findSelectedOption($options)
  const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

  if (currentIndex < 0) {
    return getLastOption($slot)
  }

  return $options[(currentIndex - 1 + $options.length) % $options.length]
}

const selectOption = ($slot: HTMLSlotElement, $option: TSinchSelectOption | null) => {
  for (const $op of $slot.assignedElements()) {
    if (isOptionElement($op)) {
      const isSelected = $op === $option

      // Select / Unselect
      $op.selected = isSelected

      if (isSelected) {
        $op.scrollIntoView({ block: 'nearest' })
      }
    }
  }
}

const dispatchChangeEvent = ($root: HTMLElement, $opt: TSinchSelectOption | null) => {
  if ($opt != null) {
    getEventHandler($root, 'onChange')?.($opt.value)
    $root.dispatchEvent(
      new CustomEvent('change', { detail: $opt.value })
    )
  }
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select', class extends HTMLElement {
  $button: HTMLButtonElement
  $buttonContent: HTMLSpanElement
  $label: HTMLLabelElement
  $optionalText: HTMLSpanElement
  $additionalText: HTMLSpanElement
  $invalidText: HTMLSpanElement
  $selectSlot: HTMLSlotElement
  $listbox: HTMLUListElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$button = shadowRoot.querySelector('#button')!
    this.$buttonContent = shadowRoot.querySelector('#content')!
    this.$listbox = shadowRoot.querySelector('#listbox')!
    this.$label = shadowRoot.querySelector('#label')!
    this.$optionalText = shadowRoot.querySelector('#optional')!
    this.$additionalText = shadowRoot.querySelector('#additional')!
    this.$invalidText = shadowRoot.querySelector('#invalid')!
    this.$selectSlot = shadowRoot.querySelector('slot[name="select"]')!
  }

  connectedCallback() {
    this.setAttribute('role', 'listbox')

    this.$button.addEventListener('click', this.onButtonClick)
    this.addEventListener('focus', this.onInputFocus)
    this.addEventListener('blur', this.onInputBlur)
    this.$listbox.addEventListener('blur', this.onListboxBlur)
    this.$listbox.addEventListener('click', this.onListboxClick)
    this.$listbox.addEventListener('keydown', this.onListboxKeyDown)
    this.$listbox.addEventListener('keypress', this.onListboxKeyUp)
    this.$selectSlot.addEventListener('slotchange', this.onSlotChange)
  }

  disconnectedCallback() {
    this.$button.removeEventListener('click', this.onButtonClick)
    this.removeEventListener('focus', this.onInputFocus)
    this.removeEventListener('blur', this.onInputBlur)
    this.$listbox.removeEventListener('blur', this.onListboxBlur)
    this.$listbox.removeEventListener('click', this.onListboxClick)
    this.$listbox.removeEventListener('keydown', this.onListboxKeyDown)
    this.$listbox.removeEventListener('keypress', this.onListboxKeyUp)
    this.$selectSlot.removeEventListener('slotchange', this.onSlotChange)
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

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set placeholder(value: string | undefined) {
    updateAttribute(this, 'placeholder', value)
  }

  get placeholder() {
    return getAttribute(this, 'placeholder')
  }

  set label(value: string) {
    updateAttribute(this, 'label', value)
  }

  get label() {
    return getAttribute(this, 'label', '')
  }

  set optionalText(value: string | undefined) {
    updateAttribute(this, 'optionaltext', value)
  }

  get optionalText() {
    return getAttribute(this, 'optionaltext')
  }

  set additionalText(value: string | undefined) {
    updateAttribute(this, 'additionaltext', value)
  }

  get additionalText() {
    return getAttribute(this, 'additionaltext')
  }

  set invalidText(value: string | undefined) {
    updateAttribute(this, 'invalidtext', value)
  }

  get invalidText() {
    return getAttribute(this, 'placeholder')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled(): boolean {
    return getBooleanAttribute(this, 'disabled')
  }

  set maxVisibleItems(value: number | undefined) {
    updateIntegerAttribute(this, 'maxvisibleitems', value)
  }

  get maxVisibleItems() {
    return getIntegerAttribute(this, 'maxvisibleitems', 0)!
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.onValueChange(newVal ?? '')

        break
      }

      case 'placeholder': {
        this.onValueChange(this.value)

        break
      }

      case 'label': {
        this.$label.textContent = newVal
        updateAttribute(this, 'aria-label', newVal ?? '')

        break
      }

      case 'optionaltext': {
        this.$optionalText.textContent = newVal

        break
      }

      case 'additionaltext': {
        this.$additionalText.textContent = newVal

        break
      }

      case 'invalidtext': {
        this.$invalidText.textContent = newVal

        break
      }

      case 'disabled': {
        this.$button.disabled = isAttrTrue(newVal)

        if (this.$button.disabled) {
          this.onCollapse()
        }

        break
      }

      case 'maxvisibleitems': {
        const $list = (this.$listbox.firstElementChild as HTMLElement)

        $list.style.maxHeight = attrValueToPixels(newVal, { min: 2, multiplier: ITEM_HEIGHT })

        break
      }
    }
  }

  onButtonClick = (e: Event) => {
    e.stopPropagation()

    if (this.$button.getAttribute('aria-expanded') !== 'true') {
      this.onExpand()
    }
  }

  onListboxClick = (e: Event) => {
    e.stopPropagation()

    const $elem = e.target

    if ($elem !== this.$listbox && isOptionElement($elem) && $elem.disabled !== true) {
      dispatchChangeEvent(this, $elem)
    }

    this.onCollapse()
    this.$button.focus()
  }

  onListboxKeyUp = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()
        dispatchChangeEvent(this, findSelectedOption(getEnabledOptionElements(this.$selectSlot)))
        this.onCollapse()
        this.$button.focus()

        break
      }
    }
  }

  onListboxKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()
        selectOption(this.$selectSlot, getPrevOption(this.$selectSlot))

        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()
        selectOption(this.$selectSlot, getNextOption(this.$selectSlot))

        break
      }
      case 'Escape': {
        e.preventDefault()
        this.onCollapse()
        this.$button.focus()

        break
      }
    }
  }

  onSlotChange = () => {
    this.onCollapse()
    this.onValueChange(this.value)
  }

  onListboxBlur = (e: Event) => {
    e.stopPropagation()
    this.onCollapse()
  }

  onExpand() {
    this.$button.setAttribute('aria-expanded', 'true')
    this.$listbox.focus()
    selectOption(this.$selectSlot, getOptionWithValue(this.$selectSlot, this.value) ?? getFirstOption(this.$selectSlot))
  }

  onCollapse() {
    this.$button.setAttribute('aria-expanded', 'false')
  }

  onValueChange(value: string) {
    let $checkedOption: TSinchSelectOption | null = null

    for (const $option of this.$selectSlot.assignedElements()) {
      if (isOptionElement($option)) {
        const isChecked = $checkedOption === null && $option.disabled !== true && $option.value === value

        // Check / Uncheck options
        $option.checked = isChecked

        if (isChecked) {
          $checkedOption = $option
          this.$listbox.setAttribute('aria-activedescendant', $option.id)
        }
      }
    }

    // Update button text or placeholder if null
    this.updateButtonContent($checkedOption)
  }

  updateButtonContent($option: TSinchSelectOption | null) {
    // Remove icon element
    if (this.$button.firstElementChild !== this.$buttonContent) {
      this.$button.removeChild(this.$button.firstElementChild!)
    }

    if ($option === null) {
      this.$button.setAttribute('data-unselected', '')
      this.$buttonContent.textContent = this.placeholder ?? ''
    } else {
      this.$button.removeAttribute('data-unselected')
      this.$buttonContent.textContent = $option.text

      // Try adding icon
      const $icon = $option.shadowRoot!.querySelector('slot')?.assignedElements()[0]?.cloneNode(true)

      if ($icon != null) {
        this.$button.prepend($icon)
      }
    }
  }

  focus() {
    this.$button.focus()
  }

  blur() {
    this.$button.blur()
    this.$listbox.blur()
  }

  onInputFocus = () => {
    getEventHandler(this, 'onFocus')?.()
  }

  onInputBlur = () => {
    getEventHandler(this, 'onBlur')?.()
  }
})

type TSinchSelectElement = HTMLElement & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled: boolean,
  maxVisibleItems: number,
  focus(): void,
  blur(): void,
}

type TSinchSelectReact = TSinchElementReact<TSinchSelectElement> & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  maxVisibleItems?: number,
  onChange: (value: string) => void,
  onFocus?: () => void,
  onBlur?: () => void,
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
