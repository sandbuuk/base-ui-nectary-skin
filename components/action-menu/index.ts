import { orientationValues } from '../popover/utils'
import '../popover'
import {
  attrValueToPixels,
  defineCustomElement,
  getBooleanAttribute,
  getIntegerAttribute,
  getLiteralAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateIntegerAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchActionMenuOptionElement } from '../action-menu-option/types'
import type { TSinchPopoverElement, TSinchPopoverOrientation } from '../popover/types'
import type { TSinchActionMenuElement, TSinchActionMenuReact } from './types'

const ITEM_HEIGHT = 40
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-action-menu', class extends NectaryElement {
  #$optionSlot: HTMLSlotElement
  #$listbox: HTMLElement
  #$popover: TSinchPopoverElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$optionSlot = shadowRoot.querySelector('slot[name="option"]')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
    this.#$popover = shadowRoot.querySelector('sinch-popover')!
  }

  connectedCallback() {
    this.setAttribute('role', 'listbox')
    this.addEventListener('close', this.#onReactClose)
  }

  disconnectedCallback() {
    this.removeEventListener('close', this.#onReactClose)
  }

  static get observedAttributes() {
    return ['open', 'orientation', 'maxvisibleitems']
  }

  get nodeName() {
    return 'select'
  }

  set maxVisibleItems(value: number | null) {
    updateIntegerAttribute(this, 'maxvisibleitems', value)
  }

  get maxVisibleItems() {
    return getIntegerAttribute(this, 'maxvisibleitems', null)
  }

  get orientation() {
    return getLiteralAttribute(this, orientationValues, 'orientation', 'bottom-right')
  }

  set orientation(value: TSinchPopoverOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  set open(isOpen: boolean) {
    updateBooleanAttribute(this, 'open', isOpen)
  }

  get open(): boolean {
    return getBooleanAttribute(this, 'open')
  }

  get dropdownRect() {
    return this.#$popover.popoverRect
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'open': {
        updateAttribute(this.#$popover, 'open', newVal)

        if (isAttrTrue(newVal)) {
          this.#onOpen()
          this.#$popover.addEventListener('keydown', this.#onListboxKeyDown)
          this.#$popover.addEventListener('close', this.#onClose)
        } else {
          this.#$popover.removeEventListener('keydown', this.#onListboxKeyDown)
          this.#$popover.removeEventListener('close', this.#onClose)
        }

        break
      }

      case 'orientation': {
        updateAttribute(this.#$popover, 'orientation', newVal)

        break
      }

      case 'maxvisibleitems': {
        if (newVal === '0') {
          this.#$listbox.style.maxHeight = 'unset'
        } else {
          this.#$listbox.style.maxHeight = attrValueToPixels(newVal, { min: 2, multiplier: ITEM_HEIGHT })
        }

        break
      }
    }
  }

  #onListboxKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()
        this.#selectOption(this.#getPrevOption())

        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()
        this.#selectOption(this.#getNextOption())

        break
      }
    }
  }

  #getFirstOption() {
    return this.#getEnabledOptionElements()[0] ?? null
  }

  #getLastOption() {
    return this.#getEnabledOptionElements().reverse()[0] ?? null
  }

  #getNextOption() {
    const $options = this.#getEnabledOptionElements()
    const $selectedOption = this.#findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getFirstOption()
    }

    return $options[(currentIndex + 1) % $options.length]
  }

  #getPrevOption() {
    const $options = this.#getEnabledOptionElements()
    const $selectedOption = this.#findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getLastOption()
    }

    return $options[(currentIndex - 1 + $options.length) % $options.length]
  }

  #selectOption($option: TSinchActionMenuOptionElement | null) {
    for (const $op of this.#getOptionElements()) {
      const isSelected = $op === $option

      updateBooleanAttribute($op, 'selected', isSelected)

      if (isSelected) {
        $op.focus()
      }
    }
  }

  #getOptionElements(): TSinchActionMenuOptionElement[] {
    let $elements = this.#$optionSlot.assignedElements()

    if ($elements.length === 1 && $elements[0].tagName === 'SLOT') {
      $elements = ($elements[0] as HTMLSlotElement).assignedElements()
    }

    return $elements as TSinchActionMenuOptionElement[]
  }

  #findSelectedOption(elements: readonly TSinchActionMenuOptionElement[]): TSinchActionMenuOptionElement | null {
    for (const el of elements) {
      if (getBooleanAttribute(el, 'selected')) {
        return el
      }
    }

    return null
  }

  #getEnabledOptionElements(): TSinchActionMenuOptionElement[] {
    return this.#getOptionElements().filter((opt) => opt.disabled !== true)
  }

  #onOpen() {
    this.#selectOption(this.#getFirstOption())
  }

  #onClose = () => {
    this.dispatchEvent(
      new CustomEvent('close', { bubbles: true })
    )
  }

  #onReactClose = () => {
    getReactEventHandler(this, 'onClose')?.()
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-action-menu': TSinchActionMenuReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-action-menu': TSinchActionMenuElement,
  }
}
