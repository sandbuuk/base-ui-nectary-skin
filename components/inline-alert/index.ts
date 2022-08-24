import '../icons/report-problem'
import '../icons/report'
import '../icons/check-circle'
import '../icons/info'
import '../title'
import '../text'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  setClass,
} from '../utils'
import templateHTML from './template.html'
import { assertType, typeValues } from './utils'
import type { TSinchInlineAlertElement, TSinchInlineAlertReact, TSinchInlineAlertType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-inline-alert', class extends NectaryElement {
  #$text: HTMLElement
  #$caption: HTMLElement
  #$closeWrapper: HTMLElement
  #$closeSlot: HTMLSlotElement
  #$actionWrapper: HTMLElement
  #$actionSlot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
    this.#$caption = shadowRoot.querySelector('#caption')!
    this.#$closeWrapper = shadowRoot.querySelector('#close')!
    this.#$closeSlot = shadowRoot.querySelector('slot[name="close"]')!
    this.#$actionWrapper = shadowRoot.querySelector('#action')!
    this.#$actionSlot = shadowRoot.querySelector('slot[name="action"]')!
  }

  connectedCallback() {
    this.setAttribute('aria-atomic', 'true')
    this.setAttribute('aria-live', 'polite')
    this.#$closeSlot.addEventListener('slotchange', this.#onCloseSlotChange)
    this.#$actionSlot.addEventListener('slotchange', this.#onActionSlotChange)

    this.#onCloseSlotChange()
    this.#onActionSlotChange()
  }

  disconnectedCallback() {
    this.#$closeSlot.removeEventListener('slotchange', this.#onCloseSlotChange)
    this.#$actionSlot.removeEventListener('slotchange', this.#onActionSlotChange)
  }

  get type() {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set type(value: TSinchInlineAlertType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get caption() {
    return getAttribute(this, 'caption', '')
  }

  set caption(value: string) {
    updateAttribute(this, 'caption', value)
  }

  static get observedAttributes() {
    return ['text', 'caption', 'type']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'type': {
        assertType(newVal)

        break
      }

      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'caption': {
        updateAttribute(this.#$caption, 'text', newVal)

        break
      }
    }
  }

  #onCloseSlotChange = () => {
    setClass(this.#$closeWrapper, 'empty', this.#$closeSlot.assignedElements().length === 0)
  }

  #onActionSlotChange = () => {
    setClass(this.#$actionWrapper, 'empty', this.#$actionSlot.assignedElements().length === 0)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-inline-alert': TSinchInlineAlertReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-inline-alert': TSinchInlineAlertElement,
  }
}
