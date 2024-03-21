import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getFirstSlotElement,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchFieldElement, TSinchFieldReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-field', class extends NectaryElement {
  topSection: HTMLDivElement
  #$label: HTMLLabelElement
  #$optionalText: HTMLSpanElement
  #$additionalText: HTMLSpanElement
  #$invalidText: HTMLSpanElement
  #$inputSlot: HTMLSlotElement
  #$tooltipWrapper: HTMLElement
  #$tooltipSlot: HTMLSlotElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.topSection = shadowRoot.querySelector('#top')!
    this.#$label = shadowRoot.querySelector('#label')!
    this.#$optionalText = shadowRoot.querySelector('#optional')!
    this.#$additionalText = shadowRoot.querySelector('#additional')!
    this.#$invalidText = shadowRoot.querySelector('#invalid')!
    this.#$inputSlot = shadowRoot.querySelector('slot[name="input"]')!
    this.#$tooltipSlot = shadowRoot.querySelector('slot[name="tooltip"]')!
    this.#$tooltipWrapper = shadowRoot.querySelector('#tooltip')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.shouldShowTopSection()
    this.#$label.addEventListener('click', this.#onLabelClick, options)
    this.#$tooltipSlot.addEventListener('slotchange', this.#onTooltipSlotChange, options)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return [
      'label',
      'optionaltext',
      'additionaltext',
      'invalidtext',
      'disabled',
    ]
  }

  shouldShowTopSection() {
    const label = getAttribute(this, 'label')
    const optionaltext = getAttribute(this, 'optionaltext')

    if (label === null && optionaltext === null) {
      this.topSection.style.display = 'none'
    }
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
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

      case 'disabled': {
        if (isAttrEqual(oldVal, newVal)) {
          break
        }

        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }

    this.shouldShowTopSection()
  }

  set label(value: string | null) {
    updateAttribute(this, 'label', value)
  }

  get label() {
    return getAttribute(this, 'label')
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

  #onLabelClick = () => {
    getFirstSlotElement(this.#$inputSlot)?.focus?.()
  }

  #onTooltipSlotChange = () => {
    setClass(this.#$tooltipWrapper, 'empty', this.#$tooltipSlot.assignedElements().length === 0)
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
