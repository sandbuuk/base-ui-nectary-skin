import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getEventHandler,
  isAttrTrue,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import '../select-option'
import type { TSinchElementReact } from '../types'

const isOptionElement = (element: EventTarget | Element | null): element is HTMLElementTagNameMap['sinch-select-option'] => {
  return element instanceof Element && element.tagName === 'SINCH-SELECT-OPTION'
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
  $selectedOption: HTMLElementTagNameMap['sinch-select-option'] | null = null

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
    this.$listbox.addEventListener('blur', this.onListboxBlur)
    this.$listbox.addEventListener('click', this.onListboxClick)
    this.$listbox.addEventListener('keydown', this.onListboxKeyDown)
    this.$listbox.addEventListener('keypress', this.onListboxKeyUp)
    this.$selectSlot.addEventListener('slotchange', this.onSlotChange)
  }

  disconnectedCallback() {
    this.$button.removeEventListener('click', this.onButtonClick)
    this.$listbox.removeEventListener('blur', this.onListboxBlur)
    this.$listbox.removeEventListener('click', this.onListboxClick)
    this.$listbox.addEventListener('keydown', this.onListboxKeyDown)
    this.$listbox.addEventListener('keypress', this.onListboxKeyUp)
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
    ]
  }

  set value(value: string) {
    updateAttribute(this, 'value', value.trim())
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
        updateAttribute(this, 'aria-label', newVal)

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
    }
  }

  onButtonClick = (e: Event) => {
    e.stopPropagation()

    if (this.$button.ariaExpanded !== 'true') {
      this.onExpand()
    }
  }

  onListboxClick = (e: Event) => {
    e.stopPropagation()

    const $elem = e.target

    if ($elem === this.$listbox) {
      this.onCollapse()

      return
    }

    if (isOptionElement($elem) && $elem.disabled !== true) {
      this.selectOption($elem)
      this.dispatchSelectedOption()
      this.onCollapse()
      this.$button.focus()
    }
  }

  onListboxKeyUp = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        this.dispatchSelectedOption()
        this.onCollapse()
        this.$button.focus()
        e.preventDefault()

        break
      }
    }
  }

  onListboxKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowUp': {
        this.selectOption(this.getPrevOption())
        e.preventDefault()

        break
      }
      case 'ArrowDown': {
        this.selectOption(this.getNextOption())
        e.preventDefault()

        break
      }
      case 'Escape': {
        this.onCollapse()
        this.$button.focus()

        break
      }
    }
  }

  onSlotChange = () => {
    this.onCollapse()

    // Update data-checked attribute and button textContent
    this.onValueChange(this.value)
  }

  onListboxBlur = (e: Event) => {
    e.stopPropagation()

    this.onCollapse()
  }

  onExpand() {
    this.$button.setAttribute('aria-expanded', 'true')
    this.$listbox.focus()
    this.selectOption(this.getOptionWithValue(this.value) ?? this.getFirstOption())
  }

  onCollapse() {
    this.$button.setAttribute('aria-expanded', 'false')
    this.$listbox.blur()
  }

  onValueChange(value: string) {
    this.uncheckAllOptions()

    const $option = this.getOptionWithValue(value)

    this.updateButtonContent($option)

    if ($option !== null) {
      $option.checked = true
      this.$listbox.setAttribute('aria-activedescendant', $option.id)
    }
  }

  uncheckAllOptions() {
    for (const $option of this.$selectSlot.assignedElements()) {
      if (isOptionElement($option)) {
        $option.checked = false
      }
    }
  }

  getFirstOption() {
    for (const $option of this.$selectSlot.assignedElements()) {
      if (isOptionElement($option) && $option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  getLastOption() {
    for (const $option of this.$selectSlot.assignedElements().reverse()) {
      if (isOptionElement($option) && $option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  getNextOption() {
    let $current: Element | null = this.$selectedOption

    if ($current === null) {
      // Cannot get element to start iteration
      return this.getFirstOption()
    }

    const $parent = $current.parentElement!

    // For-loop prevents infinite loop
    for (let i = 0; i < $parent.childElementCount; ++i) {
      $current = $current!.nextElementSibling

      if ($current === null) {
        // Reached end, get last element
        $current = $parent.firstElementChild

        if ($current === this.$selectedOption) {
          // Completed full circle
          return this.$selectedOption
        }
      }

      if (isOptionElement($current) && $current.disabled !== true) {
        return $current
      }
    }

    return this.$selectedOption
  }

  getPrevOption() {
    let $current: Element | null = this.$selectedOption

    if ($current === null) {
      // Cannot get element to start iteration
      return this.getLastOption()
    }

    const $parent = $current.parentElement!

    // For-loop prevents infinite loop
    for (let i = 0; i < $parent.childElementCount; ++i) {
      $current = $current!.previousElementSibling

      if ($current === null) {
        // Reached end, get last element
        $current = $parent.lastElementChild

        if ($current === this.$selectedOption) {
          // Completed full circle
          return this.$selectedOption
        }
      }

      if (isOptionElement($current) && $current.disabled !== true) {
        return $current
      }
    }

    return this.$selectedOption
  }

  getOptionWithValue(value: string) {
    for (const $option of this.$selectSlot.assignedElements()) {
      if (isOptionElement($option) && $option.disabled !== true && $option.value === value) {
        return $option
      }
    }

    return null
  }

  dispatchSelectedOption() {
    if (this.$selectedOption !== null) {
      this.dispatchEvent(
        new CustomEvent('change', { detail: this.$selectedOption.value })
      )

      getEventHandler(this, 'onChange')?.(this.$selectedOption.value)
      this.onCollapse()
    }
  }

  selectOption($option: HTMLElementTagNameMap['sinch-select-option'] | null) {
    if ($option === this.$selectedOption) {
      return
    }

    if (this.$selectedOption !== null) {
      this.$selectedOption.selected = false
    }

    this.$selectedOption = $option

    if (this.$selectedOption !== null) {
      this.$selectedOption.selected = true
    }
  }

  updateButtonContent($option: HTMLElementTagNameMap['sinch-select-option'] | null) {
    // Remove icon element
    if (this.$button.firstElementChild !== this.$buttonContent) {
      this.$button.removeChild(this.$button.firstElementChild!)
    }

    if ($option === null) {
      this.$button.setAttribute('data-unselected', '')
      this.$buttonContent.textContent = this.placeholder ?? 'Select'
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
})

type TSinchSelectElement = HTMLElement & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled: boolean,
}

type TSinchSelectReact = TSinchElementReact<TSinchSelectElement> & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  onChange: (value: string) => void,
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
