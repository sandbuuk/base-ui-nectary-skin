import '../icon-button'
import '../icon'
import '../stop-events'
import '../title'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getRect,
  isAttrTrue,
  updateAttribute,
  getReactEventHandler,
  NectaryElement,
  updateBooleanAttribute,
  setClass,
  isTargetEqual,
} from '../utils'
import templateHTML from './template.html'
import { disableScroll, enableScroll } from './utils'
import type { TSinchDialogCloseDetail, TSinchDialogElement, TSinchDialogReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-dialog', class extends NectaryElement {
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
    this.setAttribute('role', 'dialog')
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$closeButton.addEventListener('click', this.#onCloseClick, options)
    this.#$dialog.addEventListener('mousedown', this.#onBackdropMouseDown, options)
    this.#$dialog.addEventListener('cancel', this.#onCancel, options)
    this.#$actionSlot.addEventListener('slotchange', this.#onActionSlotChange, options)
    this.addEventListener('-close', this.#onCloseReactHandler, options)

    this.#onActionSlotChange()

    if (getBooleanAttribute(this, 'open')) {
      this.#onExpand()
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#onCollapse()
  }

  static get observedAttributes() {
    return ['caption', 'open', 'close-aria-label']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'caption': {
        updateAttribute(this.#$caption, 'text', newVal)

        break
      }
      case 'open': {
        const shouldOpen = isAttrTrue(newVal)

        if (shouldOpen) {
          requestAnimationFrame(() => {
            this.#onExpand()
          })
        } else {
          this.#onCollapse()
        }

        updateBooleanAttribute(this, 'open', shouldOpen)

        break
      }
      case 'close-aria-label': {
        updateAttribute(this.#$closeButton, 'aria-label', newVal)

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

  get dialogRect() {
    return getRect(this.#$dialog)
  }

  get closeButtonRect() {
    return getRect(this.#$closeButton)
  }

  #onCancel = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
    this.#dispatchCloseEvent('escape')
  }

  #onCloseClick = () => {
    this.#dispatchCloseEvent('close')
  }

  #onBackdropMouseDown = (e: MouseEvent) => {
    if (isTargetEqual(e, this.#$dialog)) {
      const rect = this.dialogRect
      const isInside = e.x >= rect.x && e.x < rect.x + rect.width && e.y >= rect.y && e.y < rect.y + rect.height

      if (!isInside) {
        e.stopPropagation()
        this.#dispatchCloseEvent('backdrop')
      }
    }
  }

  #onCloseReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-close')?.(e)
  }

  #dispatchCloseEvent(detail: TSinchDialogCloseDetail) {
    this.dispatchEvent(
      new CustomEvent('-close', { detail })
    )
  }

  #onExpand() {
    if (!this.isConnected || this.#isOpen()) {
      return
    }

    this.#$dialog.showModal()
    disableScroll()
  }

  #onCollapse() {
    if (!this.#isOpen()) {
      return
    }

    this.#$dialog.close?.()
    enableScroll()
  }

  #isOpen() {
    return getBooleanAttribute(this.#$dialog, 'open')
  }

  #onActionSlotChange = () => {
    setClass(this.#$actionWrapper, 'empty', this.#$actionSlot.assignedElements().length === 0)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-dialog': TSinchDialogReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-dialog': TSinchDialogElement,
  }
}
