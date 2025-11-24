import '../icon'
import '../rich-text'
import '../text'
import '../title'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  setClass,
} from '../utils'
import templateHTML from './template.html?raw'
import { typeValues } from './utils'
import type { TSinchInlineAlertType } from './types'
import type { TSinchIcons } from '../icon'
import type { NectaryComponentVanilla } from '../types'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class InlineAlert extends NectaryElement {
  #$text: HTMLElement
  #$caption: HTMLElement
  #$closeWrapper: HTMLElement
  #$closeSlot: HTMLSlotElement
  #$actionWrapper: HTMLElement
  #$actionSlot: HTMLSlotElement
  #$icon: NectaryComponentVanilla<'sinch-icon'>

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
    this.#$icon = shadowRoot.querySelector('#icon')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('aria-atomic', 'true')
    this.setAttribute('aria-live', 'polite')
    this.#$closeSlot.addEventListener('slotchange', this.#onCloseSlotChange)
    this.#$actionSlot.addEventListener(
      'slotchange',
      this.#onActionSlotChange
    )

    this.#onCloseSlotChange()
    this.#onActionSlotChange()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#$closeSlot.removeEventListener(
      'slotchange',
      this.#onCloseSlotChange
    )
    this.#$actionSlot.removeEventListener(
      'slotchange',
      this.#onActionSlotChange
    )
  }

  static get observedAttributes() {
    return ['text', 'caption', 'type', 'icon']
  }

  attributeChangedCallback(
    name: string,
    _: string | null,
    newVal: string | null
  ) {
    switch (name) {
      case 'text': {
        updateAttribute(this.#$text, 'text', newVal)

        break
      }

      case 'caption': {
        updateAttribute(this.#$caption, 'text', newVal)

        break
      }

      case 'type': {
        this.#updateDefaultIcon(newVal)

        break
      }

      case 'icon': {
        updateAttribute(this.#$icon, 'name', newVal)

        break
      }
    }
  }

  get type(): TSinchInlineAlertType {
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

  get icon() {
    return getAttribute(this, 'icon', '') as TSinchIcons
  }

  set icon(value: TSinchIcons) {
    updateAttribute(this, 'icon', value)
  }

  #onCloseSlotChange = () => {
    setClass(
      this.#$closeWrapper,
      'empty',
      this.#$closeSlot.assignedElements().length === 0
    )
  }

  #onActionSlotChange = () => {
    setClass(
      this.#$actionWrapper,
      'empty',
      this.#$actionSlot.assignedElements().length === 0
    )
  }

  #updateDefaultIcon = (type: string | null) => {
    const iconValue = this.icon
    const hasCustomIcon = Boolean(iconValue)

    // Update default if "icon" is not explicitly set
    if (!hasCustomIcon) {
      switch (type) {
        case 'info':
          updateAttribute(this.#$icon, 'name', 'circle-info')

          break
        case 'success':
          updateAttribute(this.#$icon, 'name', 'circle-check')

          break
        case 'warn':
          updateAttribute(this.#$icon, 'name', 'triangle-exclamation')

          break
        case 'error':
          updateAttribute(this.#$icon, 'name', 'octagon-exclamation')

          break
      }
    }
  }
}

defineCustomElement('sinch-inline-alert', InlineAlert)
