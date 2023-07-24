import {
  clampNumber,
  defineCustomElement,
  getAttribute,
  getIntegerAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchVerticalStepperElement, TSinchVerticalStepperReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-vertical-stepper', class extends NectaryElement {
  #$itemsSlot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$itemsSlot = shadowRoot.querySelector('slot')!
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

    this.setAttribute('aria-valuemax', String($items.length))
    this.setAttribute('aria-valuenow', String(clampNumber(activeIndex, 0, $items.length)))
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-vertical-stepper': TSinchVerticalStepperReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-vertical-stepper': TSinchVerticalStepperElement,
  }
}
