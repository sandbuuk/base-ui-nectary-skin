import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getReactEventHandler,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import { doFilesSatisfySize } from './utils'
import type { TSinchFilePicker } from './types'
import type { NectaryComponentVanilla, NectaryComponentReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-file-picker', class extends NectaryElement {
  #$input: HTMLInputElement
  #$targetSlot: HTMLSlotElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = document.createElement('input')
    this.#$input.type = 'file'
    this.#$targetSlot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = { signal: this.#controller.signal }

    this.#$targetSlot.addEventListener('slotchange', this.#onTargetSlotChange, options)
    this.#$input.addEventListener('change', this.#onInputChange, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-invalid', this.#onInvalidReactHandler, options)

    this.#onTargetSlotChange()
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['accept', 'multiple']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'multiple': {
        if (isAttrEqual(oldVal, newVal)) {
          return
        }

        updateBooleanAttribute(this.#$input, 'multiple', isAttrTrue(newVal))

        break
      }

      case 'accept': {
        updateAttribute(this.#$input, 'accept', newVal)

        break
      }
    }
  }

  set multiple(isMultiple: boolean) {
    updateBooleanAttribute(this, 'multiple', isMultiple)
  }

  get multiple(): boolean {
    return getBooleanAttribute(this, 'multiple')
  }

  set accept(value: string | null) {
    updateAttribute(this, 'accept', value)
  }

  get accept() {
    return getAttribute(this, 'accept')
  }

  get size() {
    return getIntegerAttribute(this, 'size', null)
  }

  set size(value: number | null) {
    updateAttribute(this, 'size', value)
  }

  #onTargetSlotChange = () => {
    this.#$targetSlot.removeEventListener('click', this.#onTargetClick)
    this.#$targetSlot.addEventListener('click', this.#onTargetClick)
  }

  #onTargetClick = () => {
    this.#$input.click()
  }

  #onInputChange = () => {
    if (this.#$input.files === null) {
      return
    }

    const files = Array.from(this.#$input.files)

    // Reset value to allow picking same files
    this.#$input.value = ''

    if (!doFilesSatisfySize(files, this.size)) {
      this.dispatchEvent(
        new CustomEvent('-invalid', {
          detail: 'size',
        })
      )

      return
    }

    this.dispatchEvent(
      new CustomEvent('-change', {
        detail: files,
      })
    )
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }

  #onInvalidReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-invalid')?.(e)
  }
})

declare global {
  interface NectaryComponentMap {
    'sinch-file-picker': TSinchFilePicker,
  }

  interface HTMLElementTagNameMap {
    'sinch-file-picker': NectaryComponentVanilla<'sinch-file-picker'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-file-picker': NectaryComponentReact<'sinch-file-picker'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-file-picker': NectaryComponentReact<'sinch-file-picker'>,
    }
  }
}
