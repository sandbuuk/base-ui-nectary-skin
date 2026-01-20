import '../icon'
import {
  defineCustomElement,
  updateAttribute,
  getIntegerAttribute,
  setClass,
  NectaryElement,
  getRect,
  getReactEventHandler,
  isTargetEqual,
  getTargetIndexInParent,
} from '../utils'
import templateHTML from './template.html?raw'
import type { TRect } from '../types'

export * from './types'

const NUM_BUTTONS = 7
const MIDDLE_BTN_INDEX = Math.floor(NUM_BUTTONS / 2)
const FIRST_BTN_INDEX = 0
const LAST_BTN_INDEX = NUM_BUTTONS - 1
const DOTS_LEFT_INDEX = 1
const DOTS_RIGHT_INDEX = LAST_BTN_INDEX - 1

const isEllipsis = (btnIndex: number, value: number, max: number) => {
  return (btnIndex === DOTS_LEFT_INDEX && value > MIDDLE_BTN_INDEX) ||
(btnIndex === DOTS_RIGHT_INDEX && value <= max - DOTS_RIGHT_INDEX)
}

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Pagination extends NectaryElement {
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
    this.addEventListener('-change', this.#onChangeReactHandler)
  }

  disconnectedCallback() {
    this.#$wrapper.removeEventListener('click', this.#onButtonClick)
    this.removeEventListener('-change', this.#onChangeReactHandler)
  }

  static get observedAttributes() {
    return ['max', 'value']
  }

  attributeChangedCallback(name: string) {
    switch (name) {
      case 'value':
      case 'max': {
        this.#onValueChange()

        break
      }
    }
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
    const valueOffset = Math.min(
      Math.max(0, value - MIDDLE_BTN_INDEX),
      Math.max(0, max - NUM_BUTTONS)
    )

    for (let i = 0; i < this.#$buttons.length; i++) {
      const $b = this.#$buttons[i]
      let isActive = false

      if (value < 3) {
        isActive = value === i
      } else if (value >= max - MIDDLE_BTN_INDEX) {
        isActive = i + valueOffset === value
      } else {
        isActive = i === MIDDLE_BTN_INDEX
      }

      setClass($b, 'active', isActive)
      updateAttribute($b, 'aria-current', isActive ? 'page' : null)

      if (max > NUM_BUTTONS) {
        const ellipsis = isEllipsis(i, value, max)

        setClass($b, 'dots', ellipsis)
        updateAttribute($b, 'aria-hidden', ellipsis)
        $b.disabled = ellipsis
      } else {
        setClass($b, 'dots', false)
        updateAttribute($b, 'aria-hidden', false)
        $b.disabled = false
      }

      setClass($b, 'hidden', i >= max)

      const btnText = $b.firstElementChild

      if (btnText != null) {
        const page = i === FIRST_BTN_INDEX
          ? '1'
          : i === LAST_BTN_INDEX
            ? String(max)
            : String(i + 1 + valueOffset)

        btnText.textContent = page
        $b.setAttribute('aria-label', `Go to page ${page}`)
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
    if (isTargetEqual(e, this.#$left)) {
      return this.#dispatchChangeEvent(Math.max(value - 1, 0))
    }

    // Right arrow button
    if (isTargetEqual(e, this.#$right)) {
      return this.#dispatchChangeEvent(Math.min(value + 1, max))
    }

    const btnIndex = getTargetIndexInParent(e, this.#$wrapper) - 1

    if (btnIndex >= FIRST_BTN_INDEX && btnIndex <= LAST_BTN_INDEX) {
      // First number button
      if (btnIndex === FIRST_BTN_INDEX) {
        return this.#dispatchChangeEvent(0)
      }

      // Last number button
      if (btnIndex === LAST_BTN_INDEX) {
        return this.#dispatchChangeEvent(max)
      }

      // Left dots button
      if (
        btnIndex === DOTS_LEFT_INDEX &&
          max > NUM_BUTTONS &&
          value > MIDDLE_BTN_INDEX
      ) {
        return this.#dispatchChangeEvent(Math.floor(value / 2))
      }

      // Right dots button
      if (
        btnIndex === DOTS_RIGHT_INDEX &&
          max > NUM_BUTTONS &&
          value <= max - DOTS_RIGHT_INDEX
      ) {
        return this.#dispatchChangeEvent(
          Math.floor((max - value) / 2 + value)
        )
      }

      // Regular number button
      return this.#dispatchChangeEvent(
        btnIndex +
            Math.min(
              Math.max(0, value - MIDDLE_BTN_INDEX),
              Math.max(0, max - NUM_BUTTONS)
            )
      )
    }
  }

  #clamp(value: number): number {
    const max = getIntegerAttribute(this, 'max', 0)

    return Math.max(0, Math.min(max - 1, value)) + 1
  }

  #dispatchChangeEvent(value: number) {
    const detail = this.#clamp(value)

    this.dispatchEvent(new CustomEvent('-change', { detail }))
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
    getReactEventHandler(this, 'onChange')?.(e)
  }

  get focusable() {
    return true
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
}

defineCustomElement('sinch-pagination', Pagination)
