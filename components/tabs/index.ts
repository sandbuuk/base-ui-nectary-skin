// eslint-disable-next-line import/no-extraneous-dependencies
import '@nectary/components/tabs-option'
import {
  defineCustomElement,
  getAttribute,
  getEventHandler,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

type TSinchRadioOption = HTMLElementTagNameMap['sinch-tabs-option']

const isRadioElement = (element: EventTarget | Element | null): element is TSinchRadioOption => {
  return element instanceof Element && element.tagName === 'SINCH-TABS-OPTION'
}
const getEnabledRadioElements = ($slot: HTMLSlotElement): TSinchRadioOption[] => {
  return $slot.assignedElements().filter((opt) => isRadioElement(opt) && opt.disabled !== true) as TSinchRadioOption[]
}
const findSelectedOption = (elements: readonly TSinchRadioOption[]) => {
  return elements.find((el) => el.checked) ?? null
}

const getFirstOption = ($slot: HTMLSlotElement) => {
  for (const $option of $slot.assignedElements()) {
    if (isRadioElement($option) && $option.disabled !== true) {
      return $option
    }
  }

  return null
}

const getLastOption = ($slot: HTMLSlotElement) => {
  for (const $option of $slot.assignedElements().reverse()) {
    if (isRadioElement($option) && $option.disabled !== true) {
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

defineCustomElement('sinch-tabs', class extends HTMLElement {
  $slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

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
        e.preventDefault()

        const $option = getPrevOption(this.$slot)

        if ($option !== null) {
          $option.focus()
          this.dispatchChangeEvent($option.value)
        }

        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()

        const $option = getNextOption(this.$slot)

        if ($option !== null) {
          $option.focus()
          this.dispatchChangeEvent($option.value)
        }

        break
      }
    }
  }

  onSlotChange = () => {
    this.onValueChange(this.value)
  }

  onOptionChange = (e: Event) => {
    e.stopPropagation()

    this.dispatchChangeEvent((e as CustomEvent).detail)
  }

  onValueChange(value: string) {
    for (const $option of this.$slot.assignedElements()) {
      if (isRadioElement($option)) {
        $option.checked = $option.disabled !== true && $option.value === value
      }
    }
  }

  dispatchChangeEvent(value: string) {
    getEventHandler(this, 'onChange')?.(value)
    this.dispatchEvent(
      new CustomEvent('change', { detail: value })
    )
  }
})

type TSinchTabsElement = HTMLElement & {
  value: string,
}

type TSinchTabsReact = TSinchElementReact<TSinchTabsElement> & {
  value: string,
  onChange: (value: string) => void,
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
