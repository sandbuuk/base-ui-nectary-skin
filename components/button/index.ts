import { isSinchIcon } from '../icon/create-icon-class'
import { isSinchSpinner } from '../spinner'
import {
  defineCustomElement,
  getBooleanAttribute,
  getEventHandler,
  getAttribute,
  getLiteralAttribute,
  isAttrTrue,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const buttonTypes = ['primary', 'secondary', 'cta', 'destructive'] as const
const ICON_SIZE = 18
const ICON_SIZE_SMALL = 12

const updateIconSize = ($slot: HTMLSlotElement, isSmall: boolean) => {
  for (const $el of $slot.assignedElements()) {
    if (isSinchIcon($el)) {
      $el.size = isSmall ? ICON_SIZE_SMALL : ICON_SIZE
    }

    if (isSinchSpinner($el)) {
      $el.type = isSmall ? 'small' : 'medium'
    }
  }
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button', class extends HTMLElement {
  $button: HTMLButtonElement
  $text: HTMLSpanElement
  $slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$button = shadowRoot.querySelector('button')!
    this.$text = shadowRoot.querySelector('#text')!
    this.$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.$button.addEventListener('click', this.onButtonClick)
    this.$button.addEventListener('focus', this.onButtonFocus)
    this.$button.addEventListener('blur', this.onButtonBlur)
    this.$slot.addEventListener('slotchange', this.onSlotChange)
  }

  disconnectedCallback() {
    this.$button.removeEventListener('click', this.onButtonClick)
    this.$button.removeEventListener('focus', this.onButtonFocus)
    this.$button.removeEventListener('blur', this.onButtonBlur)
    this.$slot.removeEventListener('slotchange', this.onSlotChange)
  }

  static get observedAttributes() {
    return ['text', 'disabled', 'small']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.$text.textContent = newVal

        break
      }
      case 'disabled': {
        this.$button.disabled = isAttrTrue(newVal)

        break
      }
      case 'small': {
        updateIconSize(this.$slot, isAttrTrue(newVal))

        break
      }
    }
  }

  set type(value: TSinchButtonType) {
    updateLiteralAttribute(this, buttonTypes, 'type', value)
  }

  get type(): TSinchButtonType {
    return getLiteralAttribute(this, buttonTypes, 'type', 'primary')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set small(isSmall: boolean) {
    updateBooleanAttribute(this, 'small', isSmall)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  onButtonClick = (e: MouseEvent) => {
    e.stopPropagation()

    getEventHandler(this, 'onClick')?.()

    this.dispatchEvent(
      new CustomEvent('click')
    )
  }

  focus() {
    this.$button.focus()
  }

  blur() {
    this.$button.blur()
  }

  onButtonFocus = () => {
    getEventHandler(this, 'onFocus')?.()
  }

  onButtonBlur = () => {
    getEventHandler(this, 'onBlur')?.()
  }

  onSlotChange = () => {
    updateIconSize(this.$slot, this.small)
  }
})

type TSinchButtonType = typeof buttonTypes[number]

type TSinchButtonElement = HTMLElement & {
  type: TSinchButtonType,
  text: string,
  disabled: boolean,
  small: boolean,
  focus(): void,
  blur(): void,
}

type TSinchButtonReact = TSinchElementReact<TSinchButtonElement> & {
  type: TSinchButtonType,
  text: string,
  disabled?: boolean,
  small?: boolean,
  onClick: () => void,
  onFocus?: () => void,
  onBlur?: () => {},
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button': TSinchButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button': TSinchButtonElement,
  }
}
