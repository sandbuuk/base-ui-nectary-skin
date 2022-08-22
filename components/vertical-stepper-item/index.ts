import '../icons/check'
import '../icons/exclamation'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  NectaryElement,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { statusValues } from './utils'
import type { TSinchVerticalStepperItemElement, TSinchVerticalStepperItemReact, TSinchVerticalStepperStatusType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-vertical-stepper-item', class extends NectaryElement {
  #$label: HTMLElement
  #$description: HTMLElement
  #$circleText: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$label = shadowRoot.querySelector('#label')!
    this.#$description = shadowRoot.querySelector('#description')!
    this.#$circleText = shadowRoot.querySelector('#circle-text')!
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }

  static get observedAttributes() {
    return ['label', 'description', 'data-index']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'label': {
        this.#$label.textContent = newVal

        break
      }

      case 'description': {
        this.#$description.textContent = newVal

        break
      }

      case 'data-index': {
        this.#$circleText.textContent = newVal

        break
      }
    }
  }

  set label(value: string) {
    updateAttribute(this, 'label', value)
  }

  get label(): string {
    return getAttribute(this, 'label', '')
  }

  set description(value: string) {
    updateAttribute(this, 'description', value)
  }

  get description(): string {
    return getAttribute(this, 'description', '')
  }

  get status() {
    return getLiteralAttribute(this, statusValues, 'status', null)
  }

  set status(value: TSinchVerticalStepperStatusType | null) {
    updateLiteralAttribute(this, statusValues, 'status', value)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-vertical-stepper-item': TSinchVerticalStepperItemReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-vertical-stepper-item': TSinchVerticalStepperItemElement,
  }
}
