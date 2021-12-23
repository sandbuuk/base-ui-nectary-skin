import {
  defineCustomElement,
  getAttribute,
  getEventHandler,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import '../radio-option'
import type { TSinchElementReact } from '../types'

const isRadioElement = (element: EventTarget | Element | null): element is HTMLElementTagNameMap['sinch-radio-option'] => {
  return element instanceof Element && element.tagName === 'SINCH-RADIO-OPTION'
}
const getEnabledRadioElements = (slot: HTMLSlotElement): HTMLElementTagNameMap['sinch-radio-option'][] => {
  return slot.assignedElements().filter((opt) => isRadioElement(opt) && opt.disabled !== true) as HTMLElementTagNameMap['sinch-radio-option'][]
}
const findSelectedOption = (elements: readonly HTMLElementTagNameMap['sinch-radio-option'][]) => {
  return elements.find((el) => el.checked) ?? null
}
const findOptionWithValue = (slot: HTMLSlotElement, value: string) => {
  for (const $option of getEnabledRadioElements(slot)) {
    if ($option.value === value) {
      return $option
    }
  }

  return null
}
const uncheckAllOptions = (slot: HTMLSlotElement, $exceptOption?: Element | null) => {
  for (const $option of slot.assignedElements()) {
    if ($option !== $exceptOption && isRadioElement($option)) {
      $option.checked = false
    }
  }
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-radio', class extends HTMLElement {
  $slot: HTMLSlotElement
  $group: HTMLDivElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$group = shadowRoot.querySelector('#group')!
    this.$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.shadowRoot!.addEventListener('keydown', this.onOptionKeyDown)
    this.shadowRoot!.addEventListener('change', this.onOptionChange)
    this.$slot.addEventListener('slotchange', this.onSlotChange)
  }

  disconnectedCallback() {
    this.shadowRoot!.removeEventListener('keydown', this.onOptionKeyDown)
    this.shadowRoot!.removeEventListener('change', this.onOptionChange)
    this.$slot.removeEventListener('slotchange', this.onSlotChange)
  }

  static get observedAttributes() {
    return ['value']
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.onValueChange(newVal ?? '')

        break
      }
    }
  }

  onOptionKeyDown = (e: Event) => {
    switch ((e as KeyboardEvent).code) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        this.selectOption(this.getPrevOption())
        e.preventDefault()

        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        this.selectOption(this.getNextOption())
        e.preventDefault()

        break
      }
    }
  }

  onSlotChange = () => {
    // Update data-checked attribute and button textContent
    this.onValueChange(this.value)
  }

  onOptionChange = (e: Event) => {
    e.stopPropagation()

    const $selectedOption = findSelectedOption(getEnabledRadioElements(this.$slot))

    if ($selectedOption === null) {
      return
    }

    $selectedOption.checked = false

    this.dispatchChangeEvent((e as CustomEvent).detail)
  }

  onValueChange(value: string) {
    uncheckAllOptions(this.$slot)

    const $option = findOptionWithValue(this.$slot, value)

    if ($option !== null) {
      $option.checked = true
    }
  }

  getFirstOption() {
    return getEnabledRadioElements(this.$slot)[0] ?? null
  }

  getLastOption() {
    return getEnabledRadioElements(this.$slot).reverse()[0] ?? null
  }

  getNextOption() {
    const $options = getEnabledRadioElements(this.$slot)
    const $selectedOption = findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if ($selectedOption === null || currentIndex < 0 || $options.length === 0) {
      // Cannot get element to start iteration
      return this.getFirstOption()
    }

    return $options[(currentIndex + 1) % $options.length]
  }

  getPrevOption() {
    const $options = getEnabledRadioElements(this.$slot)
    const $selectedOption = findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if ($selectedOption === null || currentIndex < 0 || $options.length === 0) {
      // Cannot get element to start iteration
      return this.getFirstOption()
    }

    return $options[(currentIndex - 1 + $options.length) % $options.length]
  }

  selectOption($nextOption: HTMLElementTagNameMap['sinch-radio-option'] | null) {
    const $options = getEnabledRadioElements(this.$slot)
    const $selectedOption = findSelectedOption($options)
    // const $focusedOption = findFocusedOption($options)

    if ($nextOption === $selectedOption) {
      return
    }

    if ($selectedOption !== null) {
      $selectedOption.checked = false
    }

    if ($nextOption !== null) {
      $nextOption.checked = true
      $nextOption.focus()
      this.dispatchChangeEvent($nextOption.value)
    }
  }

  dispatchChangeEvent(value: string) {
    this.dispatchEvent(
      new CustomEvent('change', { detail: value })
    )

    getEventHandler(this, 'onChange')?.(value)
  }
})

type TSinchRadioElement = HTMLElement & {
  value: string,
}

type TSinchRadioReact = TSinchElementReact<TSinchRadioElement> & {
  value: string,
  onChange: (value: string) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-radio': TSinchRadioReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-radio': TSinchRadioElement,
  }
}
