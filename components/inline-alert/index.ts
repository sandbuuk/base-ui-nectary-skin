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
  #$iconCustom: HTMLElement
  #$iconSuccess: HTMLElement
  #$iconWarn: HTMLElement
  #$iconError: HTMLElement
  #$iconInfo: HTMLElement

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
    this.#$iconCustom = shadowRoot.querySelector('#icon-custom')!
    this.#$iconSuccess = shadowRoot.querySelector('#icon-success')!
    this.#$iconWarn = shadowRoot.querySelector('#icon-warn')!
    this.#$iconError = shadowRoot.querySelector('#icon-error')!
    this.#$iconInfo = shadowRoot.querySelector('#icon-info')!
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
    this.#updateIconDisplay()
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
    return ['text', 'caption', 'icon']
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

      case 'icon': {
        this.#updateIconDisplay()

        if (newVal != null && newVal !== '') {
          updateAttribute(this.#$iconCustom, 'name', newVal)
        }

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

  #updateIconDisplay = () => {
    const iconValue = this.icon
    const hasCustomIcon = Boolean(iconValue)

    setClass(this.#$iconCustom, 'hidden', !hasCustomIcon)
    setClass(this.#$iconSuccess, 'hidden', hasCustomIcon)
    setClass(this.#$iconWarn, 'hidden', hasCustomIcon)
    setClass(this.#$iconError, 'hidden', hasCustomIcon)
    setClass(this.#$iconInfo, 'hidden', hasCustomIcon)
  }
}

defineCustomElement('sinch-inline-alert', InlineAlert)
