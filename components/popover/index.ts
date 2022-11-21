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
  dispatchContextConnectEvent,
  dispatchContextDisconnectEvent,
} from '../utils'
import templateHTML from './template.html'
import { assertOrientation, getPopOrientation, orientationValues } from './utils'
import type { TSinchPopElement } from '../pop/types'
import type { TContextVisibility } from '../utils'
import type { TSinchPopoverElement, TSinchPopoverOrientation, TSinchPopoverReact } from './types'

const TIP_SIZE = 16
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-popover', class extends NectaryElement {
  #$pop: TSinchPopElement
  #$content: HTMLElement
  #$tip: HTMLElement
  #controller: AbortController | null = null
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
    this.#$content.addEventListener('-visibility', this.#onContextVisibility as any, { signal })

    dispatchContextConnectEvent(this.#$content, 'visibility')
    updateAttribute(this.#$pop, 'orientation', getPopOrientation(this.orientation))
  }

  disconnectedCallback() {
    dispatchContextDisconnectEvent(this.#$content, 'visibility')
    this.#controller!.abort()
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

  static get observedAttributes() {
    return ['orientation', 'open', 'modal', 'tip']
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

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'orientation': {
        if (process.env.NODE_ENV !== 'production') {
          assertOrientation(newVal)
        }

        updateAttribute(this.#$pop, 'orientation', getPopOrientation(newVal))

        if (this.#isOpen()) {
          this.#updateTipOrientation()
        }

        break
      }

      case 'tip': {
        updateBooleanAttribute(this, 'tip', isAttrTrue(newVal))

        if (newVal === '' && this.#isOpen()) {
          this.#updateTipOrientation()
        }

        break
      }

      case 'open': {
        const isOpen = isAttrTrue(newVal)

        updateBooleanAttribute(this.#$pop, name, isOpen)
        updateBooleanAttribute(this, name, isOpen)

        break
      }

      default: {
        updateAttribute(this.#$pop, name, newVal)
      }
    }
  }

  #onContextVisibility = (e: CustomEvent<TContextVisibility>) => {
    if (e.detail) {
      this.#updateTipOrientation()
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

  #isOpen() {
    return this.#$pop.open
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
