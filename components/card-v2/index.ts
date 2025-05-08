import {
  defineCustomElement,
  NectaryElement,
  updateBooleanAttribute,
  getReactEventHandler,
  getBooleanAttribute,
  updateAttribute,
  isAttrTrue,
  setClass,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchCardV2 } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

const CLICK_EVENTS = ['click', '-click'] as const

type ClickEventType = typeof CLICK_EVENTS[number]

defineCustomElement(
  'sinch-card-v2',
  class extends NectaryElement {
    #$slots: NodeListOf<HTMLSlotElement>
    #controller: AbortController | null = null
    #clickEventListeners = new Map<ClickEventType, Set<EventListenerOrEventListenerObject>>()

    constructor() {
      super()

      const shadowRoot = this.attachShadow()

      shadowRoot.appendChild(template.content.cloneNode(true))

      this.#$slots = shadowRoot.querySelectorAll('slot')!
    }

    connectedCallback() {
      super.connectedCallback()
      this.#setupEventListeners()
      this.#updateClickableState()
    }

    disconnectedCallback() {
      super.disconnectedCallback()
      this.#controller?.abort()
      this.#controller = null
    }

    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
      isInitial = false
    ) {
      super.addEventListener(type, listener, options)

      if (!isInitial && this.#isClickEvent(type)) {
        this.#handleClickListenerAdded(type, listener)
      }
    }

    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ) {
      super.removeEventListener(type, listener, options)

      if (this.#isClickEvent(type)) {
        this.#handleClickListenerRemoved(type as ClickEventType, listener)
      }
    }

    #isClickEvent(type: string): type is ClickEventType {
      return CLICK_EVENTS.includes(type as ClickEventType)
    }

    #setupEventListeners() {
      this.#controller = new AbortController()

      const options = { signal: this.#controller.signal }

      const handleClick = (e: Event) => {
        if (this.disabled) {
          e.stopPropagation()
          e.preventDefault()
        } else {
          this.dispatchEvent(
            new CustomEvent('-click')
          )
        }
      }
      const handleReactClick = (e: Event) => {
        getReactEventHandler(this, 'on-click')?.(e)
      }

      this.addEventListener('click', handleClick, options, true)
      this.addEventListener('-click', handleReactClick, options, true)

      const handleSlotChange = (slot: HTMLSlotElement) => {
        const isEmpty = slot.assignedNodes().length <= 0

        setClass(slot.parentElement!, 'empty', isEmpty)
      }

      this.#$slots.forEach((slot) => {
        handleSlotChange(slot)
        slot.addEventListener('slotchange', () => handleSlotChange(slot), options)
      })
    }

    #updateClickableState() {
      const hasClickHandler =
        this.hasAttribute('onclick') ||
        Boolean(getReactEventHandler(this, 'on-click'))

      if (!this.hasAttribute('clickable') && hasClickHandler) {
        updateBooleanAttribute(this, 'clickable', true)
      }
    }

    #handleClickListenerAdded(type: ClickEventType, listener: EventListenerOrEventListenerObject) {
      const listeners = this.#clickEventListeners.get(type) ?? new Set()

      if (!listeners.has(listener)) {
        listeners.add(listener)
        this.#clickEventListeners.set(type, listeners)
      }

      if (!this.hasAttribute('clickable')) {
        updateBooleanAttribute(this, 'clickable', true)
      }
    }

    #handleClickListenerRemoved(type: ClickEventType, listener: EventListenerOrEventListenerObject) {
      const listeners = this.#clickEventListeners.get(type)

      listeners?.delete(listener)

      const hasListeners = Array.from(this.#clickEventListeners.values())
        .some((set) => set.size > 0)

      if (!hasListeners && this.getAttribute('clickable') === '') {
        updateBooleanAttribute(this, 'clickable', false)
      }
    }

    static get observedAttributes() {
      return ['clickable', 'disabled', 'selected']
    }

    attributeChangedCallback(name: string, _oldVal: string | null, newVal: string | null) {
      switch (name) {
        case 'clickable': {
          const isClickable = isAttrTrue(newVal)

          if (isClickable) {
            updateAttribute(this, 'role', 'button')
            updateAttribute(this, 'tabindex', '0')
          } else {
            updateAttribute(this, 'role', null)
            updateAttribute(this, 'tabindex', null)
          }

          break
        }
        case 'selected':
        case 'disabled': {
          const bool = isAttrTrue(newVal)

          const titleElement = this.querySelector('sinch-card-v2-title')

          if (titleElement !== null) {
            updateBooleanAttribute(titleElement, name, bool)
          }

          break
        }
      }
    }

    get disabled() {
      return getBooleanAttribute(this, 'disabled')
    }

    set disabled(value: boolean) {
      updateBooleanAttribute(this, 'disabled', value)
    }

    get selected() {
      return getBooleanAttribute(this, 'selected')
    }

    set selected(value: boolean) {
      updateBooleanAttribute(this, 'selected', value)
    }
  }
)

declare global {
  interface NectaryComponentMap {
    'sinch-card-v2': TSinchCardV2,
  }

  interface HTMLElementTagNameMap {
    'sinch-card-v2': NectaryComponentVanilla<'sinch-card-v2'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-v2': NectaryComponentReact<'sinch-card-v2'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-card-v2': NectaryComponentReact<'sinch-card-v2'>,
    }
  }
}
