import '../text'
import '../file-picker'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getIntegerAttribute,
  getReactEventHandler,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html?raw'
import { areFilesAccepted, areItemsAccepted, doFilesSatisfySize } from './utils'
import type { TSinchFileDropInvalidType } from './types'
import type { TSinchFilePickerInvalidType } from '../file-picker/types'
import type { NectaryComponentVanilla } from '../types'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class FileDrop extends NectaryElement {
  #$filePicker: NectaryComponentVanilla<'sinch-file-picker'>
  #$dropArea: HTMLElement
  #$placeholder: NectaryComponentVanilla<'sinch-text'>
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$dropArea = shadowRoot.querySelector('#wrapper')!
    this.#$placeholder = shadowRoot.querySelector('#placeholder')!
    this.#$filePicker = shadowRoot.querySelector('#file-picker')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.addEventListener('-change', this.#onChangeReactHandler, options)
    this.addEventListener('-invalid', this.#onInvalidReactHandler, options)
    this.addEventListener('dragenter', this.#onDragEnter, options)
    this.addEventListener('dragleave', this.#onDragLeave, options)
    this.addEventListener('dragover', this.#onDragOver, options)
    this.addEventListener('drop', this.#onDrop, options)
    this.#$filePicker.addEventListener('-change', this.#onFilePickerChange as any, options)
    this.#$filePicker.addEventListener('-invalid', this.#onFilePickerInvalid as any, options)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
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
    if (isAttrEqual(oldVal, newVal)) {
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
        this.#setDragEffect(false)
        updateBooleanAttribute(this, 'disabled', isAttrTrue(newVal))

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
        setClass(this.#$dropArea, 'invalid', !isValid)
      }
    } else {
      setClass(this.#$dropArea, 'drop', false)
      setClass(this.#$dropArea, 'valid', false)
      setClass(this.#$dropArea, 'invalid', false)
    }
  }

  #onDragEnter = (e: DragEvent) => {
    e.stopPropagation()
    e.preventDefault()

    const items = e.dataTransfer?.items

    let isValidItems = false

    if (items != null && items.length > 0) {
      const itemsArray = Array.from(items)

      isValidItems = areItemsAccepted(itemsArray, this.accept)
    }

    this.#setDragEffect(true, isValidItems)
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
}

defineCustomElement('sinch-file-drop', FileDrop)
