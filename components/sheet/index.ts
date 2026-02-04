import '../icon'
import '../stop-events'
import '../title'
import {
  NectaryElement,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getCssVar,
  getReactEventHandler,
  getRect,
  isAttrEqual,
  isAttrTrue,
  isTargetEqual,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import { disableScroll, enableScroll } from '../utils/scroll-lock'
import templateHTML from './template.html?raw'
import type { TSinchSheetCloseDetail } from './types'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Sheet extends NectaryElement {
  #$dialog: HTMLDialogElement
  #$closeButton: HTMLButtonElement
  #$caption: HTMLElement
  #$actionWrapper: HTMLElement
  #$actionSlot: HTMLSlotElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$dialog = shadowRoot.querySelector('#dialog')!
    this.#$closeButton = shadowRoot.querySelector('#close')!
    this.#$caption = shadowRoot.querySelector('#caption')!
    this.#$actionWrapper = shadowRoot.querySelector('#action')!
    this.#$actionSlot = shadowRoot.querySelector('slot[name="buttons"]')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.setAttribute('role', 'dialog')
    this.#$closeButton.addEventListener('click', this.#onCloseClick, options)
    this.#$dialog.classList.add(`placement-${this.placement}`)
    this.#$dialog.classList.add(`overlay-${this.overlay}`)
    this.#$dialog.addEventListener(
      'mousedown',
      this.#onBackdropMouseDown,
      options
    )
    this.#$dialog.addEventListener('cancel', this.#onCancel, options)
    this.#$dialog.addEventListener(
      'transitionstart',
      this.#onAnimationStart,
      options
    )
    this.#$dialog.addEventListener(
      'transitionend',
      this.#onAnimationEnd,
      options
    )
    this.#$actionSlot.addEventListener(
      'slotchange',
      this.#onActionSlotChange,
      options
    )
    this.addEventListener('-close', this.#onCloseReactHandler, options)
    this.addEventListener(
      '-animation-start',
      this.#onAnimationStartReactHandler,
      options
    )
    this.addEventListener(
      '-animation-end',
      this.#onAnimationEndReactHandler,
      options
    )

    this.#onActionSlotChange()

    if (this.open) {
      requestAnimationFrame(() => {
        this.#onExpand()
      })
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#onCollapse()
    this.#controller!.abort()
    this.#controller = null

    // multiple sheets are not supported
    document.body.style.removeProperty('--sinch-sheet-export-current-width')
    document.body.style.removeProperty('--sinch-sheet-export-current-height')
  }

  // overlay attribute is not observed because it is expected to be set once on initialization
  // there is no practical use case for changing it dynamically
  static get observedAttributes() {
    return ['caption', 'open', 'placement']
  }

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'caption': {
        updateAttribute(this.#$caption, 'text', newVal)

        break
      }
      case 'open': {
        const shouldOpen = isAttrTrue(newVal)

        if (shouldOpen) {
          this.#onExpand()
        } else {
          this.#onCollapse()
        }

        updateBooleanAttribute(this, 'open', shouldOpen)

        break
      }
      case 'placement': {
        this.#$dialog.classList.remove(...Array.from(this.#$dialog.classList).filter((cls) => cls.startsWith('placement-')))
        this.#$dialog.classList.add(`placement-${newVal ?? 'right'}`)

        break
      }
    }
  }

  set caption(caption: string) {
    updateAttribute(this, 'caption', caption)
  }

  get caption(): string {
    return getAttribute(this, 'caption', '')
  }

  set open(isOpen: boolean) {
    updateBooleanAttribute(this, 'open', isOpen)
  }

  get open(): boolean {
    return getBooleanAttribute(this, 'open')
  }

  set placement(placement: string) {
    updateAttribute(this, 'placement', placement)
  }

  get placement(): string {
    return getAttribute(this, 'placement', 'right')
  }

  set overlay(overlayMode: string) {
    updateAttribute(this, 'overlay', overlayMode)
  }

  get overlay(): string {
    return getAttribute(this, 'overlay', 'modal')
  }

  get dialogRect() {
    return getRect(this.#$dialog)
  }

  #onAnimationStart = (e: TransitionEvent) => {
    if (e.propertyName !== 'transform') {
      return
    }

    this.#dispatchAnimationEvent('start')
  }

  #onAnimationEnd = (e: TransitionEvent) => {
    if (e.propertyName !== 'transform') {
      return
    }

    this.#dispatchAnimationEvent('end')
  }

  #onCancel = (e: Event) => {
    if (e.cancelable) {
      e.preventDefault()
    } else {
      this.#onCollapse()
    }

    e.stopPropagation()
    this.#dispatchCloseEvent('escape', e.cancelable)
  }

  #onCloseClick = () => {
    this.#dispatchCloseEvent('close', true)
  }

  #onBackdropMouseDown = (e: MouseEvent) => {
    if (isTargetEqual(e, this.#$dialog)) {
      const rect = this.dialogRect
      const isInside =
        e.x >= rect.x &&
        e.x < rect.x + rect.width &&
        e.y >= rect.y &&
        e.y < rect.y + rect.height

      if (!isInside) {
        e.stopPropagation()
        this.#dispatchCloseEvent('backdrop', e.cancelable)
      }
    }
  }

  #onCloseReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-close')?.(e)
    getReactEventHandler(this, 'onClose')?.(e)
  }

  #onAnimationStartReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-animation-start')?.(e)
    getReactEventHandler(this, 'onAnimationStart')?.(e)
  }

  #onAnimationEndReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-animation-end')?.(e)
    getReactEventHandler(this, 'onAnimationEnd')?.(e)
  }

  #dispatchCloseEvent(detail: TSinchSheetCloseDetail, cancelable: boolean) {
    this.dispatchEvent(new CustomEvent('-close', { detail, cancelable }))
  }

  #dispatchAnimationEvent(type: 'start' | 'end') {
    const eventName = type === 'start' ? '-animation-start' : '-animation-end'
    const action = this.#$dialog.open ? 'expand' : 'collapse'
    const width = this.#$dialog.offsetWidth
    const height = this.#$dialog.offsetHeight
    const duration =
      getCssVar(this, '--sinch-comp-sheet-animation-duration') ?? '300ms'
    const easing =
      getCssVar(this, '--sinch-comp-sheet-animation-easing') ?? 'ease'
    const detail = {
      action,
      width,
      height,
      duration,
      easing,
    }

    document.body.style.setProperty(
      '--sinch-sheet-export-current-width',
      `${width}px`
    )
    document.body.style.setProperty(
      '--sinch-sheet-export-current-height',
      `${height}px`
    )
    this.dispatchEvent(new CustomEvent(eventName, { detail }))
  }

  #onExpand() {
    if (!this.isDomConnected || this.#$dialog.open || !this.open) {
      return
    }

    if (this.overlay === 'modal') {
      this.#$dialog.showModal()
      disableScroll()
    } else {
      this.#$dialog.show()
    }
  }

  #onCollapse() {
    if (!this.#$dialog.open) {
      return
    }

    this.#$dialog.close?.()

    if (this.overlay === 'modal') {
      enableScroll()
    }
  }

  #onActionSlotChange = () => {
    setClass(
      this.#$actionWrapper,
      'empty',
      this.#$actionSlot.assignedElements().length === 0
    )
  }
}

defineCustomElement('sinch-sheet', Sheet)
