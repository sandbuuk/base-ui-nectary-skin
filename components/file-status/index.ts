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
import templateHTML from './template.html?raw'
import { typeValues } from './utils'
import type { TSinchFileStatusType } from './types'
import type { NectaryComponentVanilla } from '../types'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class FileStatus extends NectaryElement {
  #$filename: NectaryComponentVanilla<'sinch-text'>
  #$contentSlot: HTMLSlotElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$filename = shadowRoot.querySelector('#filename')!
    this.#$contentSlot = shadowRoot.querySelector('slot[name="content"]')!
  }

  connectedCallback() {
    super.connectedCallback()
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$contentSlot.addEventListener(
      'slotchange',
      this.#onContentSlotChange,
      options
    )

    this.#onContentSlotChange()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
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

  attributeChangedCallback(
    name: string,
    oldVal: string | null,
    newVal: string | null
  ) {
    switch (name) {
      case 'filename': {
        this.#$filename.textContent = newVal

        break
      }
    }
  }

  #onContentSlotChange = () => {
    updateBooleanAttribute(
      this.#$filename,
      'emphasized',
      this.#$contentSlot.assignedElements().length > 0
    )
  }
}

defineCustomElement('sinch-file-status', FileStatus)
