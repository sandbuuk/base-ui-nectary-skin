import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  getRect,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import { assertSize, DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html'
import { assertBadgeColor, assertMode, getBadgeColorBg, getBadgeColorFg, modeValues } from './utils'
import type { TRect } from '../types'
import type { TSinchSize } from '../utils/size'
import type { TSinchBadgeElement, TSinchBadgeMode, TSinchBadgeReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-badge', class extends NectaryElement {
  #$badgeWrapper: HTMLElement
  #$badge: HTMLElement
  #$text: HTMLElement

  #observer: ResizeObserver

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$badgeWrapper = shadowRoot.querySelector('#badge-wrapper')!
    this.#$badge = shadowRoot.querySelector('#badge')!
    this.#$text = shadowRoot.querySelector('#text')!

    this.#observer = new ResizeObserver(this.#onResize)
  }

  connectedCallback() {
    super.connectedCallback()
    this.#updateColor()
    this.#observer.observe(this)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#observer.unobserve(this)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get size() {
    return getLiteralAttribute(this, sizeValues, 'size', DEFAULT_SIZE)
  }

  set size(value: TSinchSize) {
    updateLiteralAttribute(this, sizeValues, 'size', value)
  }

  get mode() {
    return getLiteralAttribute(this, modeValues, 'mode', 'square')
  }

  set mode(value: TSinchBadgeMode) {
    updateLiteralAttribute(this, modeValues, 'mode', value)
  }

  get color() {
    return getAttribute(this, 'color')
  }

  set color(value: string | null) {
    updateAttribute(this, 'color', value)
  }

  get hidden() {
    return getBooleanAttribute(this, 'hidden')
  }

  set hidden(isHidden: boolean) {
    updateBooleanAttribute(this, 'hidden', isHidden)
  }

  get badgeRect(): TRect {
    if (this.hidden) {
      const selfRect = getRect(this)

      return { x: selfRect.x + selfRect.width, y: selfRect.y, width: 0, height: 0 }
    }

    return getRect(this.#$badgeWrapper)
  }

  static get observedAttributes() {
    return ['text', 'size', 'mode', 'color', 'hidden']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal
        setClass(this.#$badge, 'long', newVal !== null && newVal.length > 1)

        break
      }

      case 'size': {
        if (process.env.NODE_ENV !== 'production') {
          assertSize(newVal, 'sinch-badge')
        }

        this.#updatePosition()

        break
      }

      case 'mode': {
        assertMode(newVal)
        this.#updatePosition()

        break
      }

      case 'color': {
        this.#updateColor()

        break
      }

      case 'hidden': {
        this.#updatePosition()

        break
      }
    }
  }

  #updateColor() {
    if (!this.isConnected) {
      return
    }

    const colorName = this.color

    if (colorName !== null && colorName.length > 0) {
      assertBadgeColor(this, colorName)

      const bg = getBadgeColorBg(colorName)
      const fg = getBadgeColorFg(colorName)

      this.#$badge.style.setProperty('background-color', bg)
      this.#$badge.style.setProperty('color', fg)
    } else {
      this.#$badge.style.removeProperty('background-color')
      this.#$badge.style.removeProperty('color')
    }
  }

  #updatePosition() {
    if (this.hidden) {
      return
    }

    const mode = this.mode

    const targetRect = this.getBoundingClientRect()
    const badgeRect = this.#$badgeWrapper.getBoundingClientRect()
    const offsetMultX = mode === 'circle' ? 0.85 : 1
    const offsetMultY = mode === 'circle' ? 0.15 : 0

    const posX = Math.round(targetRect.width * offsetMultX - badgeRect.height / 2)
    const posY = Math.round(targetRect.height * offsetMultY - badgeRect.height / 2)

    this.#$badgeWrapper.style.setProperty('left', `${posX}px`)
    this.#$badgeWrapper.style.setProperty('top', `${posY}px`)
  }

  #onResize = () => {
    this.#updatePosition()
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-badge': TSinchBadgeReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-badge': TSinchBadgeElement,
  }
}
