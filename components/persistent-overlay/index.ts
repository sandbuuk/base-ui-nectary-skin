import '../dialog'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  updateAttribute,
  NectaryElement,
  updateBooleanAttribute,
  isAttrTrue,
  getReactEventHandler,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchPersistentOverlayElement, TSinchPersistentOverlayReact } from './types'
import type { TSinchDialogElement } from '../dialog/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

function isVisible(elementStyle: CSSStyleDeclaration): boolean {
  return elementStyle.visibility === 'visible' && elementStyle.display !== 'none'
}

const observeDialogVisibilityManipulation = (sinchDialogElement: TSinchDialogElement, cb: () => void, intervalLength: number = 1000) => {
  const checkInterval = setInterval(() => {
    const dialogElement = sinchDialogElement.shadowRoot?.querySelector('dialog')

    if (
      !isVisible(getComputedStyle(sinchDialogElement))
      || sinchDialogElement.open !== true
      || (dialogElement === null)
      || (dialogElement === undefined)
      || !isVisible(getComputedStyle(dialogElement))
      || dialogElement.open !== true
    ) {
      cb()
    }
  }, intervalLength)

  return checkInterval
}

defineCustomElement('sinch-persistent-overlay', class extends NectaryElement {
  #$sinchDialog: TSinchDialogElement
  #visibilityObserverInterval?: ReturnType<typeof setInterval>
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$sinchDialog = shadowRoot.querySelector('#persisted-dialog')!
  }

  static get observedAttributes() {
    return ['caption', 'open']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'caption': {
        updateAttribute(this.#$sinchDialog, 'caption', newVal)

        break
      }
      case 'open': {
        updateAttribute(this.#$sinchDialog, 'open', newVal)

        const shouldOpen = isAttrTrue(newVal)

        if (shouldOpen) {
          requestAnimationFrame(() => {
            this.#startObservingAlteration()
          })
        } else {
          this.#stopObservingAlteration()
        }
      }
    }
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'dialog')
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.addEventListener('-visibility-altered', this.#onVisibilityAlteredReactHandler, { signal })

    if (this.open) {
      this.#startObservingAlteration()
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null

    if (this.open || (this.#visibilityObserverInterval !== undefined)) {
      this.#onVisibilityAltered()
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

  #startObservingAlteration() {
    this.#visibilityObserverInterval = observeDialogVisibilityManipulation(this.#$sinchDialog, () => {
      this.#onVisibilityAltered()
    })
  }

  #stopObservingAlteration() {
    clearInterval(this.#visibilityObserverInterval)
  }

  #onVisibilityAltered() {
    this.dispatchEvent(new CustomEvent('-visibility-altered'))
  }

  #onVisibilityAlteredReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-visibility-altered')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-persistent-overlay': TSinchPersistentOverlayReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-persistent-overlay': TSinchPersistentOverlayElement,
  }
}
