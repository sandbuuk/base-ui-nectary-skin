import '../spinner'
import '../icon'
import '../text'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  updateAttribute,
  updateLiteralAttribute,
  NectaryElement,
  updateBooleanAttribute,
  getCssVar,
} from '../utils'
import templateHTML from './template.html'
import { assertType, typeValues } from './utils'
import type { TSinchFileStatusElement, TSinchFileStatusReact, TSinchFileStatusType } from './types'
import type { TSinchTextElement } from '../text/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-file-status', class extends NectaryElement {
  #$filename: TSinchTextElement
  #$contentSlot: HTMLSlotElement
  #$icon: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$filename = shadowRoot.querySelector('#filename')!
    this.#$contentSlot = shadowRoot.querySelector('slot[name="content"]')!
    this.#$icon = shadowRoot.querySelector('#icon')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#$contentSlot.addEventListener('slotchange', this.#onContentSlotChange)

    this.#onContentSlotChange()
    this.#updateIcon()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#$contentSlot.removeEventListener('slotchange', this.#onContentSlotChange)
  }

  get type() {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set type(value: TSinchFileStatusType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get filename() {
    return getAttribute(this, 'filename', '')
  }

  set filename(value: string) {
    updateAttribute(this, 'filename', value)
  }

  static get observedAttributes() {
    return ['filename', 'type']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'type': {
        if (process.env.NODE_ENV !== 'production') {
          assertType(newVal)
        }

        this.#updateIcon()

        break
      }

      case 'filename': {
        this.#$filename.textContent = newVal

        break
      }
    }
  }

  #updateIcon() {
    if (!this.isConnected) {
      return
    }

    const type = this.type

    if (type === 'loading') {
      return
    }

    updateAttribute(this.#$icon, 'name', getCssVar(this, `--sinch-file-status-icon-${type}`))
  }

  #onContentSlotChange = () => {
    updateBooleanAttribute(this.#$filename, 'emphasized', this.#$contentSlot.assignedElements().length > 0)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-file-status': TSinchFileStatusReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-file-status': TSinchFileStatusElement,
  }
}
