import { isRadioOptionElement } from '../radio-option'
import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

type TSinchRadioOption = HTMLElementTagNameMap['sinch-radio-option']

const getEnabledRadioElements = ($slot: HTMLSlotElement): TSinchRadioOption[] => {
  return $slot.assignedElements().filter((opt) => isRadioOptionElement(opt) && opt.disabled !== true) as TSinchRadioOption[]
}
const findSelectedOption = (elements: readonly TSinchRadioOption[]) => {
  return elements.find((el) => el.checked) ?? null
}

const getFirstOption = ($slot: HTMLSlotElement) => {
  for (const $option of $slot.assignedElements()) {
    if (isRadioOptionElement($option) && $option.disabled !== true) {
      return $option
    }
  }

  return null
}

const getLastOption = ($slot: HTMLSlotElement) => {
  for (const $option of $slot.assignedElements().reverse()) {
    if (isRadioOptionElement($option) && $option.disabled !== true) {
      return $option
    }
  }

  return null
}

const getNextOption = ($slot: HTMLSlotElement) => {
  const $options = getEnabledRadioElements($slot)
  const $selectedOption = findSelectedOption($options)
  const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

  if (currentIndex < 0) {
    return getFirstOption($slot)
  }

  return $options[(currentIndex + 1) % $options.length]
}

const getPrevOption = ($slot: HTMLSlotElement) => {
  const $options = getEnabledRadioElements($slot)
  const $selectedOption = findSelectedOption($options)
  const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

  if (currentIndex < 0) {
    return getLastOption($slot)
  }

  return $options[(currentIndex - 1 + $options.length) % $options.length]
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-radio', class extends HTMLElement {
  #$slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
    shadowRoot.addEventListener('keydown', this.#onOptionKeyDown)
    shadowRoot.addEventListener('change', this.#onOptionChange)

    this.#$slot = shadowRoot.querySelector('slot')!
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
  }

  static get observedAttributes() {
    return ['value']
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

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.onValueChange(newVal ?? '')

        break
      }
    }
  }

  #onOptionKeyDown = (e: Event) => {
    switch ((e as KeyboardEvent).code) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()

        const $option = getPrevOption(this.#$slot)

        if ($option !== null) {
          $option.focus()
          this.dispatchChangeEvent($option.value)
        }

        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()

        const $option = getNextOption(this.#$slot)

        if ($option !== null) {
          $option.focus()
          this.dispatchChangeEvent($option.value)
        }

        break
      }
    }
  }

  #onSlotChange = () => {
    this.onValueChange(this.value)
  }

  #onOptionChange = (e: Event) => {
    e.stopPropagation()

    this.dispatchChangeEvent((e as CustomEvent).detail)
  }

  onValueChange(value: string) {
    for (const $option of this.#$slot.assignedElements()) {
      if (isRadioOptionElement($option)) {
        $option.checked = $option.disabled !== true && $option.value === value
      }
    }
  }

  dispatchChangeEvent(value: string) {
    this.dispatchEvent(
      new CustomEvent('change', { detail: value, bubbles: true })
    )
  }
})

type TSinchRadioElement = HTMLElement & {
  value: string,
}

type TSinchRadioReact = TSinchElementReact<TSinchRadioElement> & {
  value: string,
  onChange: (event: SyntheticEvent<TSinchRadioElement, CustomEvent<boolean>>) => void,
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
