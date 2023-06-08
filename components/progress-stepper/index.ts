import {
  defineCustomElement,
  getAttribute,
  getReactEventHandler,
  getRect,
  getTargetAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchProgressStepperElement, TSinchProgressStepperReact } from './types'
import type { TRect } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-progress-stepper', class extends NectaryElement {
  #$slot: HTMLSlotElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.role = 'tablist'
    this.#$slot.addEventListener('click', this.#onOptionClick, { signal })
    this.#$slot.addEventListener('slotchange', this.#onSlotChange, { signal })
    this.addEventListener('-change', this.#onChangeReactHandler, { signal })

    this.#onSlotChange()
  }

  disconnectedCallback() {
    this.#controller!.abort()
  }

  static get observedAttributes() {
    return ['value', 'progressvalue']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange(newVal)

        break
      }
      case 'progressvalue': {
        this.#updateProgressValue()

        break
      }
    }
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set progressValue(value: string) {
    updateAttribute(this, 'progressvalue', value)
  }

  get progressValue(): string {
    return getAttribute(this, 'progressvalue', '')
  }

  nthOptionRect(index: number): TRect | null {
    const $el = this.#$slot.assignedElements()[index]

    if ($el != null) {
      return getRect($el)
    }

    return null
  }

  #onSlotChange = () => {
    this.#onValueChange(this.value)
    this.#updateProgressValue()
  }

  #onOptionClick = (e: Event) => {
    const targetValue = getTargetAttribute(e, 'value')
    const targetStatus = getTargetAttribute(e, 'data-status')

    if (targetValue === null || targetStatus === null || targetStatus === 'inactive') {
      return
    }

    this.dispatchEvent(
      new CustomEvent('-change', { detail: targetValue })
    )
  }

  #onValueChange(value: string | null) {
    for (const $option of this.#$slot.assignedElements()) {
      const isChecked = value === getAttribute($option, 'value')

      updateBooleanAttribute($option, 'data-checked', isChecked)
    }
  }

  #updateProgressValue() {
    const progressValue = this.progressValue
    const $items = this.#$slot.assignedElements()
    const $progressValueIndex = $items.findIndex((it) => getAttribute(it, 'value') === progressValue)

    for (let i = 0; i < $items.length; i++) {
      if ($progressValueIndex < 0 || $progressValueIndex < i) {
        updateAttribute($items[i], 'data-status', 'inactive')
      } else if ($progressValueIndex > i) {
        updateAttribute($items[i], 'data-status', 'complete')
      } else {
        updateAttribute($items[i], 'data-status', 'incomplete')
      }
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-progress-stepper': TSinchProgressStepperReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-progress-stepper': TSinchProgressStepperElement,
  }
}
