import '../icon'
import '../stop-events'
import '../title'
import {
  NectaryElement,
  defineCustomElement,
  getAttribute,
  getRect,
  isAttrEqual,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html?raw'
import type { TSinchTitleElement } from '../title'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class SheetTitle extends NectaryElement {
  #$closeButton: HTMLButtonElement
  #$text: TSinchTitleElement
  #$description: HTMLElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$closeButton = shadowRoot.querySelector('#close')!
    this.#$text = shadowRoot.querySelector('#text')!
    this.#$description = shadowRoot.querySelector('#description')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$closeButton.addEventListener('click', this.#onCloseClick, options)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['title', 'description', 'close-aria-label']
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
      case 'title': {
        updateAttribute(this, 'title', newVal)
        updateAttribute(this.#$text, 'text', newVal)

        break
      }
      case 'description': {
        updateAttribute(this, 'description', newVal)
        this.#$description.textContent = newVal

        break
      }
      case 'close-aria-label': {
        updateAttribute(this.#$closeButton, 'aria-label', newVal)

        break
      }
    }
  }

  set title(caption: string) {
    updateAttribute(this, 'title', caption)
  }

  get title(): string {
    return getAttribute(this, 'title', '')
  }

  set description(description: string) {
    updateAttribute(this, 'description', description)
  }

  get description(): string {
    return getAttribute(this, 'description', '')
  }

  get closeButtonRect() {
    return getRect(this.#$closeButton)
  }

  #onCloseClick = () => {
    this.dispatchEvent(new CustomEvent('-close', { cancelable: true, bubbles: true, detail: 'close' }))
  }
}

defineCustomElement('sinch-sheet-title', SheetTitle)
