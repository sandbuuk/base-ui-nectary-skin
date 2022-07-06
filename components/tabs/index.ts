import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTabsOptionElement } from '../tabs-option/types'
import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const findSelectedOption = (elements: readonly TSinchTabsOptionElement[]) => {
  return elements.find((el) => el.checked) ?? null
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tabs', class extends NectaryElement {
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
    this.setAttribute('role', 'tablist')
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
        this.#onValueChange(newVal)

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

  #onValueChange(value: string | null) {
    for (const $option of this.#$slot.assignedElements()) {
      const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

      updateBooleanAttribute($option, 'checked', isChecked)
    }
  }

  #dispatchChangeEvent(value: string) {
    this.dispatchEvent(
      new CustomEvent('change', { detail: value, bubbles: true })
    )
  }

  #getFirstOption() {
    for (const $option of this.#$slot.assignedElements() as TSinchTabsOptionElement[]) {
      if ($option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  #getLastOption() {
    for (const $option of (this.#$slot.assignedElements() as TSinchTabsOptionElement[]).reverse()) {
      if ($option.disabled !== true) {
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

  #getEnabledRadioElements(): TSinchTabsOptionElement[] {
    return (this.#$slot.assignedElements()as TSinchTabsOptionElement[]).filter((opt) => opt.disabled !== true)
  }
})

export type TSinchTabsElement = HTMLElement & {
  value: string,
  addEventListener(type: 'change', listener: (this: TSinchTabsElement, e: CustomEvent<string>) => void): void,
}

export type TSinchTabsReact = TSinchElementReact<TSinchTabsElement> & {
  value: string,
  'aria-label': string,
  onChange: (event: SyntheticEvent<TSinchTabsElement, CustomEvent<string>>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tabs': TSinchTabsReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tabs': TSinchTabsElement,
  }
}
