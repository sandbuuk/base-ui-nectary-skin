import { isRadioOptionElement } from '../radio-option'
import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

type TSinchRadioOption = HTMLElementTagNameMap['sinch-radio-option']

const findSelectedOption = (elements: readonly TSinchRadioOption[]) => {
  return elements.find((el) => el.checked) ?? null
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-radio', class extends NectaryElement {
  #$slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    shadowRoot.addEventListener('keydown', this.#onOptionKeyDown)
    shadowRoot.addEventListener('change', this.#onOptionChange)

    this.#$slot = shadowRoot.querySelector('slot')!
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
  }

  connectedCallback() {
    this.setAttribute('role', 'radiogroup')
  }

  static get observedAttributes() {
    return ['value']
  }

  get nodeName() {
    return 'select'
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
        this.#onValueChange(newVal ?? '')

        break
      }
    }
  }

  #onOptionKeyDown = (e: Event) => {
    switch ((e as KeyboardEvent).code) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()

        const $option = this.#getPrevOption()

        if ($option !== null) {
          $option.focus()
          this.#dispatchChangeEvent($option.value)
        }

        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()

        const $option = this.#getNextOption()

        if ($option !== null) {
          $option.focus()
          this.#dispatchChangeEvent($option.value)
        }

        break
      }
    }
  }

  #onSlotChange = () => {
    this.#onValueChange(this.value)
  }

  #onOptionChange = (e: Event) => {
    e.stopPropagation()

    this.#dispatchChangeEvent((e as CustomEvent).detail)
  }

  #onValueChange(value: string) {
    for (const $option of this.#$slot.assignedElements()) {
      if (isRadioOptionElement($option)) {
        $option.checked = $option.disabled !== true && $option.value === value
      }
    }
  }

  #dispatchChangeEvent(value: string) {
    this.dispatchEvent(
      new CustomEvent('change', { detail: value, bubbles: true })
    )
  }

  #getFirstOption() {
    for (const $option of this.#$slot.assignedElements()) {
      if (isRadioOptionElement($option) && $option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  #getLastOption() {
    for (const $option of this.#$slot.assignedElements().reverse()) {
      if (isRadioOptionElement($option) && $option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  #getNextOption() {
    const $options = this.#getEnabledRadioElements()
    const $selectedOption = findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getFirstOption()
    }

    return $options[(currentIndex + 1) % $options.length]
  }

  #getPrevOption() {
    const $options = this.#getEnabledRadioElements()
    const $selectedOption = findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getLastOption()
    }

    return $options[(currentIndex - 1 + $options.length) % $options.length]
  }

  #getEnabledRadioElements(): TSinchRadioOption[] {
    return this.#$slot.assignedElements().filter((opt) => isRadioOptionElement(opt) && opt.disabled !== true) as TSinchRadioOption[]
  }
})

export type TSinchRadioElement = HTMLElement & {
  value: string,
}

export type TSinchRadioReact = TSinchElementReact<TSinchRadioElement> & {
  value: string,
  'aria-label': string,
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
