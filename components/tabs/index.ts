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
import type { TSinchTabs } from './types'
import type { NectaryComponentVanilla, NectaryComponentReact, TRect } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Tabs extends NectaryElement {
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

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
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
}

defineCustomElement('sinch-tabs', Tabs)

declare global {
  interface NectaryComponentMap {
    'sinch-tabs': TSinchTabs,
  }

  interface HTMLElementTagNameMap {
    'sinch-tabs': NectaryComponentVanilla<'sinch-tabs'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-tabs': NectaryComponentReact<'sinch-tabs'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-tabs': NectaryComponentReact<'sinch-tabs'>,
    }
  }
}
