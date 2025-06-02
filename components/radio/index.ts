import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  getTargetByAttribute,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import { setFormValue } from '../utils/form'
import templateHTML from './template.html'
import type { TSinchRadio } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

type TSinchRadioOptionElement = HTMLElementTagNameMap['sinch-radio-option']

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-radio', class extends NectaryElement {
  #$slot: HTMLSlotElement
  #controller: AbortController | null = null
  #internals: ElementInternals

  static formAssociated = true

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#internals = this.attachInternals()
    this.#$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.setAttribute('role', 'radiogroup')
    this.#internals.role = 'radiogroup'
    this.#$slot.addEventListener('slotchange', this.#onSlotChange, options)
    this.#$slot.addEventListener('keydown', this.#onOptionKeyDown, options)
    this.#$slot.addEventListener('click', this.#onOptionClick, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  formAssociatedCallback() {
    setFormValue(this.#internals, this.value)
  }

  formResetCallback() {
    this.value = ''
    setFormValue(this.#internals, '')
  }

  formStateRestoreCallback(state: string | FormData | null) {
    if (this.#internals.form === null || getBooleanAttribute(this.#internals.form, 'data-form-state-restore') === false) {
      return
    }

    if (state !== null) {
      const value = typeof state === 'string' ? state : state.get(this.name)

      this.value = value?.toString() ?? ''
      setFormValue(this.#internals, value?.toString() ?? '')
    }
  }

  static get observedAttributes() {
    return ['value', 'invalid']
  }

  set name(value: string) {
    updateAttribute(this, 'name', value)
  }

  get name(): string {
    return getAttribute(this, 'name', '')
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set invalid(isInvalid: boolean) {
    updateBooleanAttribute(this, 'invalid', isInvalid)
  }

  get invalid() {
    return getBooleanAttribute(this, 'invalid')
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange(newVal ?? '')

        setFormValue(this.#internals, newVal ?? '')

        break
      }

      case 'invalid': {
        this.#updateInvalid(isAttrTrue(newVal))

        break
      }
    }
  }

  #onOptionKeyDown = (e: Event) => {
    switch ((e as KeyboardEvent).code) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()

        const $option = this.#getPrevOption()

        if ($option !== null) {
          $option.focus()
          $option.click()
        }

        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()

        const $option = this.#getNextOption()

        if ($option !== null) {
          $option.focus()
          $option.click()
        }

        break
      }
    }
  }

  #onSlotChange = () => {
    this.#onValueChange(this.value)
  }

  #onOptionClick = (e: Event) => {
    const target = getTargetByAttribute(e, 'value')

    if (target === null || target.hasAttribute('disabled')) {
      return
    }

    const value = getAttribute(target, 'value')!

    this.dispatchEvent(
      new CustomEvent('-change', { detail: value })
    )
  }

  #onValueChange(value: string) {
    for (const $option of this.#$slot.assignedElements()) {
      const isChecked = value === getAttribute($option, 'value', '')

      updateBooleanAttribute($option, 'checked', isChecked)
    }
  }

  #getFirstOption(): TSinchRadioOptionElement | null {
    for (const $option of this.#$slot.assignedElements() as TSinchRadioOptionElement[]) {
      if ($option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  #getLastOption(): TSinchRadioOptionElement | null {
    for (const $option of (this.#$slot.assignedElements() as TSinchRadioOptionElement[]).reverse()) {
      if ($option.disabled !== true) {
        return $option
      }
    }

    return null
  }

  #getNextOption(): TSinchRadioOptionElement | null {
    const $options = this.#getEnabledRadioElements()
    const $selectedOption = this.#findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getFirstOption()
    }

    return $options[(currentIndex + 1) % $options.length]
  }

  #getPrevOption(): TSinchRadioOptionElement | null {
    const $options = this.#getEnabledRadioElements()
    const $selectedOption = this.#findSelectedOption($options)
    const currentIndex = $selectedOption !== null ? $options.indexOf($selectedOption) : -1

    if (currentIndex < 0) {
      return this.#getLastOption()
    }

    return $options[(currentIndex - 1 + $options.length) % $options.length]
  }

  #getEnabledRadioElements(): TSinchRadioOptionElement[] {
    return (this.#$slot.assignedElements() as TSinchRadioOptionElement[]).filter((el) => !el.hasAttribute('disabled'))
  }

  #findSelectedOption(elements: readonly TSinchRadioOptionElement[]) {
    return elements.find((el) => el.checked) ?? null
  }

  #updateInvalid(isInvalid: boolean) {
    for (const opt of this.#$slot.assignedElements()) {
      updateBooleanAttribute(opt, 'data-invalid', isInvalid)
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  interface NectaryComponentMap {
    'sinch-radio': TSinchRadio,
  }

  interface HTMLElementTagNameMap {
    'sinch-radio': NectaryComponentVanilla<'sinch-radio'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-radio': NectaryComponentReact<'sinch-radio'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-radio': NectaryComponentReact<'sinch-radio'>,
    }
  }
}
