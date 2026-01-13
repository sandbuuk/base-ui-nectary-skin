import '../icon'
import '../text'
import { getTagColorBg, getTagColorFg } from '../tag/utils'
import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
  NectaryElement,
  isAttrEqual,
  updateBooleanAttribute,
  isAttrTrue,
  getBooleanAttribute,
} from '../utils'
import templateHTML from './template.html?raw'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class RichTextareaChip extends NectaryElement {
  #$text: HTMLElement
  #$button: HTMLElement
  #$iconStart: HTMLElement
  #$iconClose: HTMLElement

  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
    this.#$button = shadowRoot.querySelector('#button')!
    this.#$iconStart = shadowRoot.querySelector('#icon-start')!
    this.#$iconClose = shadowRoot.querySelector('#icon-close')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#$iconClose.addEventListener('click', this.#onRightIconClick, { signal })
    this.addEventListener('click', this.#onClick, { signal })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['text', 'color', 'icon', 'readonly']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal
        updateAttribute(this, 'aria-label', newVal)

        break
      }

      case 'readonly': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }

      case 'color': {
        this.#updateColor(newVal)

        break
      }

      case 'icon': {
        this.#$iconStart.setAttribute('name', newVal ?? '')

        break
      }
    }
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get readonly() {
    return getBooleanAttribute(this, 'readonly')
  }

  set readonly(isReadonly: boolean) {
    updateBooleanAttribute(this, 'readonly', isReadonly)
  }

  get color() {
    return getAttribute(this, 'color', '')
  }

  set color(value: string) {
    updateAttribute(this, 'color', value)
  }

  get icon() {
    return getAttribute(this, 'icon', '')
  }

  set icon(value: string) {
    updateAttribute(this, 'icon', value)
  }

  #updateColor(color: string | null) {
    if (color !== null && color !== '') {
      this.#$button.style.setProperty('background-color', getTagColorBg(color))
      this.#$button.style.setProperty('--sinch-global-color-text', getTagColorFg(color))
      this.#$button.style.setProperty('--sinch-global-color-icon', getTagColorFg(color))
    } else {
      this.#$button.style.removeProperty('background-color')
      this.#$button.style.removeProperty('--sinch-global-color-text')
      this.#$button.style.removeProperty('--sinch-global-color-icon')
    }
  }

  #onClick = (e: Event) => {
    // Don't fire chip click if the right icon was clicked
    if (e.target === this.#$iconClose || this.#$iconClose.contains(e.target as Node)) {
      return
    }

    this.dispatchEvent(
      new CustomEvent('-click', { bubbles: true, composed: true })
    )
  }

  #onRightIconClick = (e: Event) => {
    e.stopPropagation()
    this.dispatchEvent(
      new CustomEvent('-right-icon-click', { bubbles: true, composed: true })
    )
  }
}

defineCustomElement('sinch-rich-textarea-chip', RichTextareaChip)
