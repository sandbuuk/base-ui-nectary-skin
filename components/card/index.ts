import '../title'
import '../text'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateBooleanAttribute,
  updateAttribute,
  setClass,
  NectaryElement,
  isAttrTrue,
  getRect,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchCardElement, TSinchCardReact } from './types'
import type { TRect } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-card', class extends NectaryElement {
  #$text: HTMLElement
  #$label: HTMLElement
  #$caption: HTMLElement
  #$header: HTMLElement
  #$cardBody: HTMLElement
  #$iconSlot: HTMLSlotElement
  #$illustrationSlot: HTMLSlotElement
  #$illustrationSlotWrapper: HTMLElement
  #isDraggingCorrectHandle = false
  #isDraggingSubscribed = false
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#description')!
    this.#$label = shadowRoot.querySelector('#label')!
    this.#$caption = shadowRoot.querySelector('#caption')!
    this.#$header = shadowRoot.querySelector('#header')!
    this.#$cardBody = shadowRoot.querySelector('#wrapper')!
    this.#$iconSlot = shadowRoot.querySelector('slot[name="icon"]')!

    this.#$illustrationSlot = shadowRoot.querySelector('slot[name="illustration"]')!
    this.#$illustrationSlotWrapper = shadowRoot.querySelector('#illustration-wrapper')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$illustrationSlot.addEventListener('slotchange', this.#onIllustrationSlotChange, options)

    this.#onIllustrationSlotChange()

    if (getBooleanAttribute(this, 'draggable')) {
      this.#enableDraggable()
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#disableDragging()
    this.#controller!.abort()
  }

  static get observedAttributes() {
    return [
      'text',
      'label',
      'caption',
      'disabled',
      'draggable',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'label': {
        this.#$label.textContent = newVal

        break
      }
      case 'caption': {
        updateAttribute(this.#$caption, 'text', newVal)

        break
      }
      case 'disabled': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
      case 'draggable': {
        const isDraggingEnabled = isAttrTrue(newVal)

        if (isDraggingEnabled) {
          this.#enableDraggable()
        } else {
          this.#disableDragging()
          this.removeAttribute('draggable')
        }

        break
      }
    }
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set caption(value: string) {
    updateAttribute(this, 'caption', value)
  }

  get caption(): string {
    return getAttribute(this, 'caption', '')
  }

  set label(value: string) {
    updateAttribute(this, 'label', value)
  }

  get label(): string {
    return getAttribute(this, 'label', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  get dragRect(): TRect | null {
    return this.#isDraggingSubscribed ? getRect(this.#$header) : null
  }

  #onIllustrationSlotChange = () => {
    setClass(this.#$illustrationSlotWrapper, 'active', this.#$illustrationSlot.assignedElements().length > 0)
  }

  #enableDraggable() {
    if (this.isConnected && !this.#isDraggingSubscribed) {
      this.addEventListener('dragstart', this.#onDragStart)
      this.#$cardBody.addEventListener('mousedown', this.#onDraggableMouseDown)
      this.#isDraggingSubscribed = true
    }
  }

  #disableDragging() {
    if (this.#isDraggingSubscribed) {
      this.removeEventListener('dragstart', this.#onDragStart)
      this.#$cardBody.removeEventListener('mousedown', this.#onDraggableMouseDown)
      this.#isDraggingSubscribed = false
    }
  }

  #onDraggableMouseDown = (e: Event) => {
    this.#isDraggingCorrectHandle = this.#$header.contains(e.target as Element) ||
     this.#$iconSlot.assignedElements().includes(e.target as HTMLElement)
  }

  #onDragStart = (e: Event) => {
    if (!this.#isDraggingCorrectHandle) {
      e.preventDefault()
      e.stopPropagation()
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-card': TSinchCardReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-card': TSinchCardElement,
  }
}
