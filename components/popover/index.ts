import '../pop'
import {
  defineCustomElement,
  getBooleanAttribute,
  getLiteralAttribute,
  updateLiteralAttribute,
  updateBooleanAttribute,
  NectaryElement,
  updateAttribute,
  getReactEventHandler,
  isAttrTrue,
  setClass,
  rectOverlap,
  subscribeContext,
  isAttrEqual,
} from '../utils'
import templateHTML from './template.html'
import { getPopOrientation, orientationValues } from './utils'
import type { TSinchPopoverElement, TSinchPopoverOrientation, TSinchPopoverReact } from './types'
import type { TSinchPopElement } from '../pop/types'
import type { TContextVisibility } from '../utils'

const TIP_SIZE = 16
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-popover', class extends NectaryElement {
  #$pop: TSinchPopElement
  #$content: HTMLElement
  #$tip: HTMLElement
  #controller: AbortController | null = null
  #resizeObserver: ResizeObserver | null = null
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$pop = shadowRoot.querySelector('#pop')!
    this.#$content = shadowRoot.querySelector('#content')!
    this.#$tip = shadowRoot.querySelector('#tip')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.addEventListener('-close', this.#onCloseReactHandler, { signal })
    this.#$pop.addEventListener('-close', this.#onPopClose, { signal })

    subscribeContext(this.#$content, 'visibility', this.#onContextVisibility, signal)
    updateAttribute(this.#$pop, 'orientation', getPopOrientation(this.orientation))

    this.#resizeObserver = new ResizeObserver(() => {
      if (this.#$pop.open) {
        this.#updateContentMaxWidth()
      }
    })
    this.#resizeObserver.observe(document.body)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
    this.#resizeObserver?.disconnect()
    this.#resizeObserver = null
  }

  static get observedAttributes() {
    return [
      'orientation',
      'open',
      'modal',
      'tip',
      'aria-label',
      'aria-description',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'orientation': {
        updateAttribute(this.#$pop, 'orientation', getPopOrientation(this.orientation))

        if (this.#$pop.open) {
          this.#updateTipOrientation()
        }

        break
      }

      case 'tip': {
        const hasTip = isAttrTrue(newVal)

        if (hasTip && this.#$pop.open) {
          this.#updateTipOrientation()
        }

        updateBooleanAttribute(this, name, hasTip)

        break
      }

      case 'modal':
      case 'open': {
        updateAttribute(this.#$pop, name, newVal)
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }

      case 'aria-label':
      case 'aria-description': {
        updateAttribute(this.#$pop, name, newVal)

        break
      }
    }
  }

  set modal(isModal: boolean) {
    updateBooleanAttribute(this, 'modal', isModal)
  }

  get modal(): boolean {
    return getBooleanAttribute(this, 'modal')
  }

  set open(isOpen: boolean) {
    updateBooleanAttribute(this, 'open', isOpen)
  }

  get open(): boolean {
    return getBooleanAttribute(this, 'open')
  }

  set tip(hasTip: boolean) {
    updateBooleanAttribute(this, 'tip', hasTip)
  }

  get tip(): boolean {
    return getBooleanAttribute(this, 'tip')
  }

  get orientation() {
    return getLiteralAttribute(this, orientationValues, 'orientation', 'bottom-left')
  }

  set orientation(value: TSinchPopoverOrientation) {
    updateLiteralAttribute(this, orientationValues, 'orientation', value)
  }

  get footprintRect() {
    return this.#$pop.footprintRect
  }

  get popoverRect() {
    return this.#$pop.popoverRect
  }

  #onPopClose = () => {
    this.#dispatchCloseEvent()
  }

  #onCloseReactHandler = (e: Event) => {
    getReactEventHandler(this, 'onClose')?.()
    getReactEventHandler(this, 'on-close')?.(e)
  }

  #dispatchCloseEvent() {
    this.dispatchEvent(
      new CustomEvent('-close')
    )
  }

  #onContextVisibility = (e: CustomEvent<TContextVisibility>) => {
    if (e.detail) {
      this.#updateTipOrientation()
      this.#updateContentMaxWidth()
    } else {
      this.#resetTipOrientation()
    }
  }

  #resetTipOrientation() {
    this.#$tip.style.top = ''
    this.#$tip.style.left = ''
  }

  #updateTipOrientation = () => {
    const orientation = this.orientation
    const targetRect = this.#$pop.footprintRect
    const contentRect = this.#$content.getBoundingClientRect()
    const diffX = targetRect.x - contentRect.x
    let desiredX = diffX + targetRect.width / 2

    if (orientation === 'bottom-left' || orientation === 'top-left') {
      desiredX = Math.max(desiredX, contentRect.width * 0.75)
    }

    if (orientation === 'bottom-right' || orientation === 'top-right') {
      desiredX = Math.min(desiredX, contentRect.width * 0.25)
    }

    const xPos = Math.max(TIP_SIZE, Math.min(desiredX, contentRect.width - TIP_SIZE))

    this.#$tip.style.left = `${xPos}px`

    setClass(this.#$tip, 'hidden', rectOverlap(targetRect, contentRect))
  }

  // Prevent content from overflowing the viewport
  #updateContentMaxWidth = () => {
    const contentRect = this.#$content.getBoundingClientRect()
    const availableSpace = window.innerWidth - contentRect.left - 16 // 16px safety margin

    this.#$content.style.maxWidth = `${availableSpace}px`
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-popover': TSinchPopoverReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-popover': TSinchPopoverElement,
  }
}
