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
} from '../utils'
import templateHTML from './template.html'
import { typeValues } from './utils'
import type { TSinchFileStatusElement, TSinchFileStatusReact, TSinchFileStatusType } from './types'
import type { TSinchTextElement } from '../text/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-file-status', class extends NectaryElement {
  #$filename: TSinchTextElement
  #$contentSlot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$filename = shadowRoot.querySelector('#filename')!
    this.#$contentSlot = shadowRoot.querySelector('slot[name="content"]')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#$contentSlot.addEventListener('slotchange', this.#onContentSlotChange)

    this.#onContentSlotChange()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#$contentSlot.removeEventListener('slotchange', this.#onContentSlotChange)
  }

  get type(): TSinchFileStatusType {
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
    return ['filename']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'filename': {
        this.#$filename.textContent = newVal

        break
      }
    }
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
