import { isSinchCardButtonElement } from '../card-button/utils'
import { isSinchCardLinkElement } from '../card-link/utils'
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
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-card', class extends NectaryElement {
  #$text: HTMLElement
  #$label: HTMLElement
  #$title: HTMLElement
  #$illustrationSlot: HTMLSlotElement
  #$actionSlot: HTMLSlotElement
  #$illustrationSlotWrapper: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#description')!
    this.#$label = shadowRoot.querySelector('#label')!
    this.#$title = shadowRoot.querySelector('#title')!

    this.#$illustrationSlot = shadowRoot.querySelector('slot[name="illustration"]')!
    this.#$actionSlot = shadowRoot.querySelector('slot[name="action"]')!
    this.#$illustrationSlotWrapper = shadowRoot.querySelector('#illustration-wrapper')!
  }

  connectedCallback() {
    // this.setAttribute('role', 'button')

    this.#$illustrationSlot.addEventListener('slotchange', this.#onIllustrationSlotChange)
    this.#$actionSlot.addEventListener('slotchange', this.#updateDisabledAttributeInChildren)
  }

  disconnectedCallback() {
    this.#$illustrationSlot.removeEventListener('slotchange', this.#onIllustrationSlotChange)
    this.#$actionSlot.removeEventListener('slotchange', this.#updateDisabledAttributeInChildren)
  }

  static get observedAttributes() {
    return ['text', 'label', 'header', 'disabled']
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
      case 'header': {
        this.#$title.textContent = newVal

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

  set header(value: string) {
    updateAttribute(this, 'header', value)
  }

  get header(): string {
    return getAttribute(this, 'header', '')
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
    this.#$actionSlot.assignedElements().forEach((el) => {
      if (isSinchCardButtonElement(el) || isSinchCardLinkElement(el)) {
        updateAttribute(el, 'disabled', this.getAttribute('disabled'))
      }
    })
  }
})

export type TSinchCardElement = HTMLElement & {
  text: string,
  label: string,
  header: string,
  disabled: boolean,
}

export type TSinchCardReact = TSinchElementReact<TSinchCardElement> & {
  text: string,
  label?: string,
  header: string,
  disabled?: boolean,
}

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
