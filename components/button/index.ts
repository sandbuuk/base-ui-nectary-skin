import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  isAttrTrue,
  updateBooleanAttribute,
  updateAttribute,
  NectaryElement,
  getReactEventHandler,
  getLiteralAttribute,
  updateLiteralAttribute,
  Context,
  subscribeContext,
  isAttrEqual,
} from '../utils'
import { requestSubmitForm } from '../utils/form'
import { DEFAULT_SIZE, sizeExValues } from '../utils/size'
import templateHTML from './template.html?raw'
import { typeValues, formTypeValues } from './utils'
import type { TSinchButtonType, TSinchButtonFormType } from './types'
import type { NectaryComponentVanilla } from '../types'
import type { TContextSize } from '../utils'
import type { TSinchSizeEx } from '../utils/size'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Button extends NectaryElement {
  #$button: HTMLDivElement
  #$text: HTMLElement
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>
  #internals: ElementInternals

  static formAssociated = true

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#internals = this.attachInternals()
    this.#$button = shadowRoot.querySelector('#button')!
    this.#$text = shadowRoot.querySelector('#text')!

    this.#sizeContext = new Context(this.#$button, 'size')
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'button')
    this.#internals.role = 'button'
    this.tabIndex = 0

    this.addEventListener('click', this.#onButtonClick, { signal })
    this.addEventListener('focus', this.#onButtonFocus, { signal })
    this.addEventListener('blur', this.#onButtonBlur, { signal })
    this.addEventListener('keydown', this.#onButtonKeydown, { signal })
    this.addEventListener('-click', this.#onClickReactHandler, { signal })
    this.addEventListener('-focus', this.#onFocusReactHandler, { signal })
    this.addEventListener('-blur', this.#onBlurReactHandler, { signal })
    subscribeContext(this, 'size', this.#onContextSize, signal)
    this.#sizeContext.listen(signal)

    this.#onSizeUpdate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return [
      'text',
      'disabled',
      'toggled',
      'size',
      'data-size',
      'data-managed-aria-disabled',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'data-managed-aria-disabled': {
        this.#updateAriaDisabled(newVal)

        break
      }
      case 'disabled': {
        if (!isAttrEqual(oldVal, newVal)) {
          updateBooleanAttribute(this, 'disabled', isAttrTrue(newVal))
        }

        if (!this.hasAttribute('data-managed-aria-disabled')) {
          this.#updateAriaDisabled(newVal)
        }

        break
      }
      case 'toggled': {
        if (!isAttrEqual(oldVal, newVal)) {
          updateBooleanAttribute(this, 'toggled', isAttrTrue(newVal))
        }

        this.ariaPressed = isAttrTrue(newVal).toString()
        this.#internals.ariaPressed = isAttrTrue(newVal).toString()

        break
      }
      case 'size': {
        updateAttribute(this, 'data-size', newVal)

        break
      }
      case 'data-size': {
        this.#onSizeUpdate()

        break
      }
    }
  }

  set type(value: TSinchButtonType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get type(): TSinchButtonType {
    return getLiteralAttribute(this, typeValues, 'type', 'primary')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set toggled(isToggled: boolean) {
    updateBooleanAttribute(this, 'toggled', isToggled)
  }

  get toggled() {
    return getBooleanAttribute(this, 'toggled')
  }

  set size(size: TSinchSizeEx) {
    updateLiteralAttribute(this, sizeExValues, 'size', size)
  }

  get size(): TSinchSizeEx {
    return getLiteralAttribute(this, sizeExValues, 'size', DEFAULT_SIZE)
  }

  get focusable() {
    return true
  }

  set formType(value: TSinchButtonFormType) {
    updateLiteralAttribute(this, formTypeValues, 'form-type', value)
  }

  get formType(): TSinchButtonFormType {
    return getLiteralAttribute(this, formTypeValues, 'form-type', 'button')
  }

  get dataManagedAriaDisabled(): boolean {
    return getBooleanAttribute(this, 'data-managed-aria-disabled')
  }

  #onSizeUpdate() {
    if (!this.isDomConnected) {
      return
    }

    const size = getAttribute(this, 'data-size', DEFAULT_SIZE)

    this.#sizeContext.dispatch(size)
  }

  #onContextSize = (e: CustomEvent<TContextSize>) => {
    if (this.hasAttribute('size') === true) {
      return
    }

    switch (e.detail) {
      case 'l': {
        this.setAttribute('data-size', 'm')

        break
      }
      default: {
        this.setAttribute('data-size', 's')
      }
    }
  }

  #updateAriaDisabled = (newVal: string | null) => {
    this.ariaDisabled = isAttrTrue(newVal).toString()
    this.#internals.ariaDisabled = isAttrTrue(newVal).toString()
  }

  #onButtonKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()
        this.click()
      }
    }
  }

  #onButtonClick = (e: MouseEvent) => {
    if (this.disabled) {
      e.stopPropagation()
      e.preventDefault()
    } else {
      const form = this.#internals.form

      if (form !== null) {
        if (this.formType === 'submit') {
          requestSubmitForm(form, this as NectaryComponentVanilla<'sinch-button'>)
        }

        if (this.formType === 'reset') {
          form.reset()
        }
      }

      this.dispatchEvent(
        new CustomEvent('-click')
      )
    }
  }

  #onButtonFocus = () => {
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onButtonBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
  }

  #onFocusReactHandler = () => {
    getReactEventHandler(this, 'on-focus')?.()
  }

  #onBlurReactHandler = () => {
    getReactEventHandler(this, 'on-blur')?.()
  }

  #onClickReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-click')?.(e)
  }
}

defineCustomElement('sinch-button', Button)
