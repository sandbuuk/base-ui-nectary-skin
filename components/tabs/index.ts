import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  getRect,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchTabsElement, TSinchTabsReact } from './types'
import type { TRect } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tabs', class extends NectaryElement {
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

    this.setAttribute('role', 'tablist')
    this.#$slot.addEventListener('option-change', this.#onOptionChange, { signal })
    this.#$slot.addEventListener('slotchange', this.#onSlotChange, { signal })
    this.addEventListener('-change', this.#onChangeReactHandler, { signal })
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
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
        this.#onValueChange(newVal)

        break
      }
    }
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
  }

  #onOptionChange = (e: Event) => {
    e.stopPropagation()

    this.#dispatchChangeEvent((e as CustomEvent).detail)
  }

  #onValueChange(value: string | null) {
    for (const $option of this.#$slot.assignedElements()) {
      const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

      updateBooleanAttribute($option, 'data-checked', isChecked)
    }
  }

  #dispatchChangeEvent(value: string) {
    this.dispatchEvent(
      new CustomEvent('-change', { detail: value })
    )
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

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
