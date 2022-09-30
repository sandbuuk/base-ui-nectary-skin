import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchFieldElement, TSinchFieldReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-field', class extends NectaryElement {
  #$label: HTMLLabelElement
  #$optionalText: HTMLSpanElement
  #$additionalText: HTMLSpanElement
  #$invalidText: HTMLSpanElement
  #$inputSlot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$label = shadowRoot.querySelector('#label')!
    this.#$optionalText = shadowRoot.querySelector('#optional')!
    this.#$additionalText = shadowRoot.querySelector('#additional')!
    this.#$invalidText = shadowRoot.querySelector('#invalid')!
    this.#$inputSlot = shadowRoot.querySelector('slot[name="input"]')!
  }

  connectedCallback() {
    this.#$label.addEventListener('click', this.#onLabelClick)
  }

  disconnectedCallback() {
    this.#$label.removeEventListener('click', this.#onLabelClick)
  }

  static get observedAttributes() {
    return [
      'label',
      'optionaltext',
      'additionaltext',
      'invalidtext',
    ]
  }

  set label(value: string) {
    updateAttribute(this, 'label', value)
  }

  get label() {
    return getAttribute(this, 'label', '')
  }

  set optionalText(value: string | null) {
    updateAttribute(this, 'optionaltext', value)
  }

  get optionalText() {
    return getAttribute(this, 'optionaltext')
  }

  set additionalText(value: string | null) {
    updateAttribute(this, 'additionaltext', value)
  }

  get additionalText() {
    return getAttribute(this, 'additionaltext')
  }

  set invalidText(value: string | null) {
    updateAttribute(this, 'invalidtext', value)
  }

  get invalidText() {
    return getAttribute(this, 'invalidtext')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'label': {
        this.#$label.textContent = newVal

        break
      }

      case 'optionaltext': {
        this.#$optionalText.textContent = newVal

        break
      }

      case 'additionaltext': {
        this.#$additionalText.textContent = newVal

        break
      }

      case 'invalidtext': {
        this.#$invalidText.textContent = newVal

        break
      }
    }
  }

  #onLabelClick = () => {
    (this.#$inputSlot.assignedElements() as HTMLElement[])[0]?.focus?.()
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-field': TSinchFieldReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-field': TSinchFieldElement,
  }
}
