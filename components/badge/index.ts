import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  getRect,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import { DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html'
import { modeValues } from './utils'
import type { TSinchBadgeElement, TSinchBadgeMode, TSinchBadgeReact } from './types'
import type { TRect } from '../types'
import type { TSinchSize } from '../utils/size'

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
    this.#observer.observe(this)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#observer.unobserve(this)
  }

  static get observedAttributes() {
    return [
      'text',
      'size',
      'mode',
      'hidden',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal
        setClass(this.#$badge, 'long', newVal !== null && newVal.length > 1)

        break
      }

      case 'size': {
        this.#updatePosition()

        break
      }

      case 'mode': {
        this.#updatePosition()

        break
      }

      case 'hidden': {
        this.#updatePosition()
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

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
  interface HTMLElementTagNameMap {
    'sinch-badge': TSinchBadgeElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-badge': TSinchBadgeReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-badge': TSinchBadgeReact,
    }
  }
}
