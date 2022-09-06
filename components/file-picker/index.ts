import '../dropdown'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getFirstSlotElement,
  getIntegerAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import { doFilesSatisfySize } from './utils'
import type { TSinchFilePickerElement, TSinchFilePickerReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-file-picker', class extends NectaryElement {
  #$input: HTMLInputElement
  #$targetSlot: HTMLSlotElement
  #$target: HTMLElement | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = document.createElement('input')
    this.#$input.type = 'file'
    this.#$targetSlot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.#$targetSlot.addEventListener('slotchange', this.#onTargetSlotChange)
    this.#$input.addEventListener('change', this.#onInputChange)
    this.addEventListener('-change', this.#onChangeReactHandler)
    this.addEventListener('-invalid', this.#onInvalidReactHandler)

    this.#onTargetSlotChange()
  }

  disconnectedCallback() {
    this.#$targetSlot.removeEventListener('slotchange', this.#onTargetSlotChange)
    this.#$input.removeEventListener('change', this.#onInputChange)
    this.removeEventListener('-change', this.#onChangeReactHandler)
    this.removeEventListener('-invalid', this.#onInvalidReactHandler)
    this.#$target?.removeEventListener('-click', this.#onTargetClick)
    this.#$target = null
  }

  static get observedAttributes() {
    return ['accept', 'multiple']
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
    return getAttribute(this, 'accept', null)
  }

  get size() {
    return getIntegerAttribute(this, 'size', null)
  }

  set size(value: number | null) {
    updateAttribute(this, 'size', value)
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (newVal === oldVal) {
      return
    }

    switch (name) {
      case 'multiple': {
        updateBooleanAttribute(this.#$input, 'multiple', isAttrTrue(newVal))

        break
      }

      case 'accept': {
        updateAttribute(this.#$input, 'accept', newVal)

        break
      }
    }
  }

  #onTargetSlotChange = () => {
    this.#$target?.removeEventListener('-click', this.#onTargetClick)
    this.#$target = getFirstSlotElement(this.#$targetSlot)
    this.#$target?.addEventListener('-click', this.#onTargetClick)
  }

  #onTargetClick = () => {
    this.#$input.click()
  }

  #onInputChange = () => {
    if (this.#$input.files === null) {
      return
    }

    const files = Array.from(this.#$input.files)

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
  namespace JSX {
    interface IntrinsicElements {
      'sinch-file-picker': TSinchFilePickerReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-file-picker': TSinchFilePickerElement,
  }
}
