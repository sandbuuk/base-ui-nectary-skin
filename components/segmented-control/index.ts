import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  getTargetByAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSegmentedControlElement, TSinchSegmentedControlReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segmented-control', class extends NectaryElement {
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
    const options: AddEventListenerOptions = { signal }

    this.role = 'tablist'
    this.#$slot.addEventListener('slotchange', this.#onSlotChange, options)
    this.#$slot.addEventListener('click', this.#onOptionClick, options)
    this.#$slot.addEventListener('keydown', this.#onOptionKeydown, options)
    this.addEventListener('-change', this.#onChangeReactHandler)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange(newVal)

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

  #onSlotChange = () => {
    this.#onValueChange(this.value)
  }

  #onOptionClick = (e: Event) => {
    const target = getTargetByAttribute(e, 'value')

    if (target === null || getBooleanAttribute(target, 'disabled')) {
      return
    }

    const value = getAttribute(target, 'value', '')

    this.dispatchEvent(
      new CustomEvent('-change', { detail: value })
    )
  }

  #onOptionKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()

        const target = getTargetByAttribute(e, 'value')

        if (target !== null) {
          target.click()
        }
      }
    }
  }

  #onValueChange(value: string | null) {
    for (const $option of this.#$slot.assignedElements()) {
      const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

      updateBooleanAttribute($option, 'data-checked', isChecked)
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segmented-control': TSinchSegmentedControlReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-segmented-control': TSinchSegmentedControlElement,
  }
}
