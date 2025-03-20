import {
  clampNumber,
  defineCustomElement,
  getAttribute,
  getIntegerAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchHorizontalStepper } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-horizontal-stepper', class extends NectaryElement {
  #$itemsSlot: HTMLSlotElement
  #$progressBar: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$itemsSlot = shadowRoot.querySelector('slot')!
    this.#$progressBar = shadowRoot.querySelector('#bar')!
  }

  connectedCallback() {
    this.setAttribute('role', 'progressbar')
    this.setAttribute('aria-valuemin', '0')
    this.#$itemsSlot.addEventListener('slotchange', this.#updateItems)
  }

  disconnectedCallback() {
    this.#$itemsSlot.removeEventListener('slotchange', this.#updateItems)
  }

  static get observedAttributes() {
    return ['index']
  }

  attributeChangedCallback(name: string) {
    switch (name) {
      case 'index': {
        this.#updateItems()

        break
      }
    }
  }

  set index(value: string) {
    updateAttribute(this, 'index', value)
  }

  get index(): string {
    return getAttribute(this, 'index', '1')
  }

  #updateItems = () => {
    const $items = this.#$itemsSlot.assignedElements()
    const activeIndex = clampNumber(getIntegerAttribute(this, 'index', 0), 0, $items.length + 1)

    for (let i = 0; i < $items.length; i++) {
      const $el = $items[i]
      const itemIndex = i + 1

      $el.setAttribute('data-index', String(itemIndex))

      if (itemIndex === activeIndex) {
        $el.setAttribute('data-progress', 'active')
      } else if (itemIndex < activeIndex) {
        $el.setAttribute('data-progress', 'done')
      } else {
        $el.removeAttribute('data-progress')
      }
    }

    const valueIndex = clampNumber(activeIndex - 1, 0, $items.length - 1)

    this.#$progressBar.style.width = `${Math.floor(valueIndex / Math.max(1, $items.length - 1) * 100)}%`

    this.setAttribute('aria-valuemax', String($items.length))
    this.setAttribute('aria-valuenow', String(valueIndex + 1))
  }
})

declare global {
  interface NectaryComponentMap {
    'sinch-horizontal-stepper': TSinchHorizontalStepper,
  }

  interface HTMLElementTagNameMap {
    'sinch-horizontal-stepper': NectaryComponentVanilla<'sinch-horizontal-stepper'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-horizontal-stepper': NectaryComponentReact<'sinch-horizontal-stepper'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-horizontal-stepper': NectaryComponentReact<'sinch-horizontal-stepper'>,
    }
  }
}
