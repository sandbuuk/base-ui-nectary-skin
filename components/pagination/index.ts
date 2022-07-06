import '../icons/keyboard-arrow-left'
import '../icons/keyboard-arrow-right'
import {
  defineCustomElement,
  updateAttribute,
  getIntegerAttribute,
  setClass,
  NectaryElement,
  getRect,
} from '../utils'
import templateHTML from './template.html'
import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const NUM_BUTTONS = 7
const MIDDLE_BTN_INDEX = Math.floor(NUM_BUTTONS / 2)
const FIRST_BTN_INDEX = 0
const LAST_BTN_INDEX = NUM_BUTTONS - 1
const DOTS_LEFT_INDEX = 1
const DOTS_RIGHT_INDEX = LAST_BTN_INDEX - 1

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-pagination', class extends NectaryElement {
  #$left: HTMLButtonElement
  #$right: HTMLButtonElement
  #$buttons: NodeListOf<HTMLButtonElement>
  #$wrapper: Element

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$left = shadowRoot.querySelector('#left')!
    this.#$right = shadowRoot.querySelector('#right')!
    this.#$buttons = shadowRoot.querySelectorAll<HTMLButtonElement>('.page')
    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
  }

  connectedCallback() {
    this.#onValueChange()
    this.#$wrapper.addEventListener('click', this.#onButtonClick)
  }

  disconnectedCallback() {
    this.#$wrapper.removeEventListener('click', this.#onButtonClick)
  }

  static get observedAttributes() {
    return ['max', 'value']
  }

  attributeChangedCallback(name: string, _: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange()

        break
      }
      case 'max': {
        this.#onValueChange()

        break
      }
    }
  }

  get nodeName() {
    return 'select'
  }

  set value(val: number) {
    updateAttribute(this, 'value', val)
  }

  get value(): number {
    return getIntegerAttribute(this, 'value', 0)
  }

  set max(val: number) {
    updateAttribute(this, 'max', val)
  }

  get max(): number {
    return getIntegerAttribute(this, 'value', 0)
  }

  #onValueChange() {
    const value = getIntegerAttribute(this, 'value', 0) - 1
    const max = Math.max(0, getIntegerAttribute(this, 'max', 0))
    const valueOffset = Math.min(Math.max(0, value - MIDDLE_BTN_INDEX), Math.max(0, max - NUM_BUTTONS))

    for (let i = 0; i < this.#$buttons.length; i++) {
      const $b = this.#$buttons[i]

      if (value < 3) {
        setClass($b, 'active', value === i)
      } else if (value >= max - MIDDLE_BTN_INDEX) {
        setClass($b, 'active', i + valueOffset === value)
      } else {
        setClass($b, 'active', i === MIDDLE_BTN_INDEX)
      }

      if (max > NUM_BUTTONS) {
        setClass($b, 'dots', (i === DOTS_LEFT_INDEX && value > MIDDLE_BTN_INDEX) || (i === DOTS_RIGHT_INDEX && value <= max - DOTS_RIGHT_INDEX))
      }

      setClass($b, 'hidden', i >= max)

      const btnText = $b.firstElementChild

      if (btnText != null) {
        btnText.textContent = i === FIRST_BTN_INDEX ? '1' : i === LAST_BTN_INDEX ? String(max) : String(i + 1 + valueOffset)
      }
    }

    const isValueBad = value < 0 || value >= max

    this.#$left.disabled = isValueBad || value === 0
    this.#$right.disabled = isValueBad || value === max - 1
  }

  #onButtonClick = (e: Event) => {
    e.stopPropagation()

    const value = getIntegerAttribute(this, 'value', 0) - 1
    const max = Math.max(0, getIntegerAttribute(this, 'max', 0))

    // Left arrow button
    if (e.target === this.#$left) {
      return this.#dispatchChangeEvent(value - 1)
    }

    // Right arrow button
    if (e.target === this.#$right) {
      return this.#dispatchChangeEvent(value + 1)
    }

    const btnIndex = Array.prototype.indexOf.call(this.#$wrapper.children, e.target) - 1

    if (btnIndex >= 0 && btnIndex < this.#$buttons.length) {
      // First number button
      if (btnIndex === FIRST_BTN_INDEX) {
        return this.#dispatchChangeEvent(0)
      }

      // Last number button
      if (btnIndex === this.#$buttons.length - 1) {
        return this.#dispatchChangeEvent(max - 1)
      }

      // Left dots button
      if (btnIndex === DOTS_LEFT_INDEX && max > NUM_BUTTONS && value > MIDDLE_BTN_INDEX) {
        return this.#dispatchChangeEvent(Math.floor(value / 2))
      }

      // Right dots button
      if (btnIndex === DOTS_RIGHT_INDEX && max > NUM_BUTTONS && value <= max - DOTS_RIGHT_INDEX) {
        return this.#dispatchChangeEvent(Math.floor((max - value) / 2 + value))
      }

      // Regular number button
      return this.#dispatchChangeEvent(btnIndex + Math.min(Math.max(0, value - MIDDLE_BTN_INDEX), Math.max(0, max - NUM_BUTTONS)))
    }
  }

  #clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max - 1, value))
  }

  #dispatchChangeEvent(value: number) {
    const max = getIntegerAttribute(this, 'max', 0)

    this.dispatchEvent(new CustomEvent('change', { detail: this.#clamp(value, max) + 1, bubbles: true }))
  }

  focus() {
    this.#$left.focus()
  }

  blur() {
    this.#$left.blur()
    this.#$right.blur()
    this.#$buttons.forEach(($b) => $b.blur())
  }

  get prevButtonRect() {
    return getRect(this.#$left)
  }

  get nextButtonRect() {
    return getRect(this.#$right)
  }

  nthButtonRect(index: number): TRect | null {
    const btn = this.#$buttons[index]

    return btn == null ? null : getRect(btn)
  }
})

export type TSinchPaginationElement = HTMLElement & {
  value: number,
  max: number,
  focus(): void,
  blur(): void,
  readonly prevButtonRect: TRect,
  readonly nextButtonRect: TRect,
  nthButtonRect(index: number): TRect | null,
  addEventListener(type: 'change', listener: (this: TSinchPaginationElement, e: CustomEvent<number>) => void): void,
}

export type TSinchPaginationReact = TSinchElementReact<TSinchPaginationElement> & {
  value: number,
  max: number,
  onChange: (event: SyntheticEvent<TSinchPaginationElement, CustomEvent<number>>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-pagination': TSinchPaginationReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-pagination': TSinchPaginationElement,
  }
}
