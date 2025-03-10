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
  isAttrEqual,
} from '../utils'
import templateHTML from './template.html'
import { disableScroll, enableScroll } from './utils'
import type {
  TSinchDialogCloseDetail,
  TSinchDialogElement,
  TSinchDialogReact,
} from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement(
  'sinch-dialog',
  class extends NectaryElement {
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
      this.#$dialog.addEventListener(
        'mousedown',
        this.#onBackdropMouseDown,
        options
      )
      this.#$dialog.addEventListener('cancel', this.#onCancel, options)
      this.#$actionSlot.addEventListener(
        'slotchange',
        this.#onActionSlotChange,
        options
      )
      this.addEventListener('-close', this.#onCloseReactHandler, options)

      this.#onActionSlotChange()

      if (this.open) {
        this.#onExpand()
      }
    }

    disconnectedCallback() {
      super.disconnectedCallback()
      this.#onCollapse()
      this.#controller!.abort()
      this.#controller = null
    }

    static get observedAttributes() {
      return ['caption', 'open', 'close-aria-label']
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

    set open(isOpen: boolean) {
      updateBooleanAttribute(this, 'open', isOpen)
    }

    get open(): boolean {
      return getBooleanAttribute(this, 'open')
    }

    get dialogRect() {
      return getRect(this.#$dialog)
    }

    get closeButtonRect() {
      return getRect(this.#$closeButton)
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
    }

    #dispatchCloseEvent(detail: TSinchDialogCloseDetail, cancelable: boolean) {
      this.dispatchEvent(new CustomEvent('-close', { detail, cancelable }))
    }

    #onExpand() {
      if (!this.isDomConnected || this.#$dialog.open || !this.open) {
        return
      }

      this.#$dialog.showModal()
      disableScroll()
    }

    #onCollapse() {
      if (!this.#$dialog.open) {
        return
      }

      this.#$dialog.close?.()
      enableScroll()
    }

    #onActionSlotChange = () => {
      setClass(
        this.#$actionWrapper,
        'empty',
        this.#$actionSlot.assignedElements().length === 0
      )
    }
  }
)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-dialog': TSinchDialogElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-dialog': TSinchDialogReact,
    }
  }
}
