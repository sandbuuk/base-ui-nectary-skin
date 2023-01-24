import '../text'
import '../file-picker'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import { areFilesAccepted, doFilesSatisfySize } from './utils'
import type { TSinchFileDropElement, TSinchFileDropInvalidType, TSinchFileDropReact } from './types'
import type { TSinchFilePickerElement, TSinchFilePickerInvalidType } from '../file-picker/types'
import type { TSinchTextElement } from '../text/types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-file-drop', class extends NectaryElement {
  #$filePicker: TSinchFilePickerElement
  #$dropArea: HTMLElement
  #$placeholder: TSinchTextElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$dropArea = shadowRoot.querySelector('#wrapper')!
    this.#$placeholder = shadowRoot.querySelector('#placeholder')!
    this.#$filePicker = shadowRoot.querySelector('#file-picker')!
  }

  connectedCallback() {
    this.addEventListener('-change', this.#onChangeReactHandler)
    this.addEventListener('-invalid', this.#onInvalidReactHandler)
    this.addEventListener('dragenter', this.#onDragEnter)
    this.addEventListener('dragleave', this.#onDragLeave)
    this.addEventListener('dragover', this.#onDragOver)
    this.addEventListener('drop', this.#onDrop)
    this.#$filePicker.addEventListener('-change', this.#onFilePickerChange)
    this.#$filePicker.addEventListener('-invalid', this.#onFilePickerInvalid)
  }

  disconnectedCallback() {
    this.removeEventListener('-change', this.#onChangeReactHandler)
    this.removeEventListener('-invalid', this.#onInvalidReactHandler)
    this.removeEventListener('dragenter', this.#onDragEnter)
    this.removeEventListener('dragleave', this.#onDragLeave)
    this.removeEventListener('dragover', this.#onDragOver)
    this.removeEventListener('drop', this.#onDrop)
    this.#$filePicker.removeEventListener('-change', this.#onFilePickerChange as any)
    this.#$filePicker.removeEventListener('-invalid', this.#onFilePickerInvalid as any)
  }

  static get observedAttributes() {
    return [
      'accept',
      'multiple',
      'placeholder',
      'disabled',
      'invalid',
      'size',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (newVal === oldVal) {
      return
    }

    switch (name) {
      case 'multiple': {
        updateAttribute(this.#$filePicker, 'multiple', newVal)

        break
      }

      case 'accept': {
        updateAttribute(this.#$filePicker, 'accept', newVal)

        break
      }

      case 'placeholder': {
        this.#$placeholder.textContent = newVal

        break
      }

      case 'disabled': {
        updateBooleanAttribute(this, 'disabled', isAttrTrue(newVal))
        this.#setDragEffect(false)

        break
      }

      case 'invalid': {
        updateBooleanAttribute(this, 'invalid', isAttrTrue(newVal))

        break
      }

      case 'size': {
        updateAttribute(this.#$filePicker, 'size', newVal)

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

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set placeholder(value: string) {
    updateAttribute(this, 'placeholder', value)
  }

  get placeholder() {
    return getAttribute(this, 'placeholder', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set invalid(isInvalid: boolean) {
    updateBooleanAttribute(this, 'invalid', isInvalid)
  }

  get invalid() {
    return getBooleanAttribute(this, 'invalid')
  }

  #setDragEffect(shouldEnable: boolean, isValid = false) {
    const isElementEnabled = !this.disabled

    if (shouldEnable) {
      if (isElementEnabled) {
        setClass(this.#$dropArea, 'drop', true)
        setClass(this.#$dropArea, 'valid', isValid)
      }
    } else {
      setClass(this.#$dropArea, 'drop', false)
      setClass(this.#$dropArea, 'valid', false)
    }
  }

  #onDragEnter = (e: DragEvent) => {
    e.stopPropagation()
    e.preventDefault()

    const hasTypes = e.dataTransfer?.types?.includes('Files') === true
    const hasItems = e.dataTransfer?.items != null && e.dataTransfer.items.length > 0

    this.#setDragEffect(true, hasTypes || hasItems)
  }

  #onDragLeave = (e: DragEvent) => {
    e.stopPropagation()
    e.preventDefault()

    this.#setDragEffect(false)
  }

  #onDragOver = (e: DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }

  #onDrop = (e: DragEvent) => {
    e.stopPropagation()
    e.preventDefault()

    this.#setDragEffect(false)

    if (this.disabled) {
      return
    }

    const dt = e.dataTransfer

    if (dt === null) {
      return
    }

    if (dt.files.length === 0) {
      return
    }

    if (!this.multiple && dt.files.length > 1) {
      this.#dispatchInvalidEvent('multiple')

      return
    }

    const files = Array.from(dt.files)

    if (!areFilesAccepted(files, this.accept)) {
      this.#dispatchInvalidEvent('accept')

      return
    }

    if (!doFilesSatisfySize(files, this.size)) {
      this.#dispatchInvalidEvent('size')

      return
    }

    this.#dispatchChangeEvent(files)
  }

  #onFilePickerChange = (e: CustomEvent<File[]>) => {
    this.#dispatchChangeEvent(e.detail)
  }

  #onFilePickerInvalid = (e: CustomEvent<TSinchFilePickerInvalidType>) => {
    this.#dispatchInvalidEvent(e.detail)
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }

  #onInvalidReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-invalid')?.(e)
  }

  #dispatchChangeEvent(files: File[]) {
    this.dispatchEvent(
      new CustomEvent('-change', {
        detail: files,
      })
    )
  }

  #dispatchInvalidEvent(type: TSinchFileDropInvalidType) {
    this.dispatchEvent(
      new CustomEvent('-invalid', {
        detail: type,
      })
    )
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-file-drop': TSinchFileDropReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-file-drop': TSinchFileDropElement,
  }
}
