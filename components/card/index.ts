import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateBooleanAttribute,
  updateAttribute,
  setClass,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchCardElement, TSinchCardReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-card', class extends NectaryElement {
  #$text: HTMLElement
  #$label: HTMLElement
  #$caption: HTMLElement
  #$illustrationSlot: HTMLSlotElement
  #$actionSlot: HTMLSlotElement
  #$illustrationSlotWrapper: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#description')!
    this.#$label = shadowRoot.querySelector('#label')!
    this.#$caption = shadowRoot.querySelector('#caption')!

    this.#$illustrationSlot = shadowRoot.querySelector('slot[name="illustration"]')!
    this.#$actionSlot = shadowRoot.querySelector('slot[name="action"]')!
    this.#$illustrationSlotWrapper = shadowRoot.querySelector('#illustration-wrapper')!
  }

  connectedCallback() {
    this.#$illustrationSlot.addEventListener('slotchange', this.#onIllustrationSlotChange)
    this.#$actionSlot.addEventListener('slotchange', this.#updateDisabledAttributeInChildren)
  }

  disconnectedCallback() {
    this.#$illustrationSlot.removeEventListener('slotchange', this.#onIllustrationSlotChange)
    this.#$actionSlot.removeEventListener('slotchange', this.#updateDisabledAttributeInChildren)
  }

  static get observedAttributes() {
    return ['text', 'label', 'caption', 'disabled']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'label': {
        this.#$label.textContent = newVal

        break
      }
      case 'caption': {
        this.#$caption.textContent = newVal

        break
      }
      case 'disabled': {
        this.#updateDisabledAttributeInChildren()

        break
      }
    }
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set caption(value: string) {
    updateAttribute(this, 'caption', value)
  }

  get caption(): string {
    return getAttribute(this, 'caption', '')
  }

  set label(value: string) {
    updateAttribute(this, 'label', value)
  }

  get label(): string {
    return getAttribute(this, 'label', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  #onIllustrationSlotChange = () => {
    setClass(this.#$illustrationSlotWrapper, 'active', this.#$illustrationSlot.assignedElements().length > 0)
  }

  #updateDisabledAttributeInChildren = () => {
    for (const $el of this.#$actionSlot.assignedElements()) {
      updateAttribute($el, 'disabled', this.getAttribute('disabled'))
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-card': TSinchCardReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-card': TSinchCardElement,
  }
}
