import '../text'
import '../icon'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  setClass,
  subscribeContext,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
  updateLiteralAttribute,
  Context,
} from '../utils'
import { DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html'
import type { TSinchSelectButtonElement, TSinchSelectButtonReact } from './types'
import type {
  TContextSize,
} from '../utils'
import type { TSinchSize } from '../utils/size'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select-button', class extends NectaryElement {
  #$text: HTMLElement
  #$placeholder: HTMLElement
  #$leftSlot: HTMLSlotElement
  #$leftWrapper: HTMLElement
  #$wrapper: HTMLElement
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
    this.#$placeholder = shadowRoot.querySelector('#placeholder')!
    this.#$leftSlot = shadowRoot.querySelector('slot[name="left"]')!
    this.#$leftWrapper = shadowRoot.querySelector('#left')!
    this.#$wrapper = shadowRoot.querySelector('#wrapper')!
    this.#sizeContext = new Context(this.#$wrapper, 'size')
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.role = 'button'
    this.tabIndex = 0
    this.addEventListener('click', this.#onButtonClick, { signal })
    this.addEventListener('focus', this.#onButtonFocus, { signal })
    this.addEventListener('blur', this.#onButtonBlur, { signal })
    this.addEventListener('keydown', this.#onButtonKeydown, { signal })
    this.addEventListener('-click', this.#onClickReactHandler, { signal })
    this.addEventListener('-focus', this.#onFocusReactHandler, { signal })
    this.addEventListener('-blur', this.#onBlurReactHandler, { signal })
    this.#$leftSlot.addEventListener('slotchange', this.#onLeftSlotChange, { signal })

    this.#sizeContext.listen(this.#controller.signal)
    subscribeContext(this, 'size', this.#onContextSize, signal)

    this.#onLeftSlotChange()
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
      'placeholder',
      'invalid',
      'disabled',
      'size',
      'data-size',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'placeholder': {
        this.#$placeholder.textContent = newVal

        break
      }

      case 'invalid': {
        const isInvalid = isAttrTrue(newVal)

        updateExplicitBooleanAttribute(this, 'aria-invalid', isInvalid)
        updateBooleanAttribute(this, 'invalid', isInvalid)

        break
      }

      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        updateBooleanAttribute(this, 'disabled', isDisabled)

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

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set placeholder(value: string | null) {
    updateAttribute(this, 'placeholder', value)
  }

  get placeholder() {
    return getAttribute(this, 'placeholder')
  }

  set invalid(isInvalid: boolean) {
    updateBooleanAttribute(this, 'invalid', isInvalid)
  }

  get invalid() {
    return getBooleanAttribute(this, 'invalid')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set size(size: TSinchSize) {
    updateLiteralAttribute(this, sizeValues, 'size', size)
  }

  get size(): TSinchSize {
    return getLiteralAttribute(this, sizeValues, 'size', DEFAULT_SIZE)
  }

  get focusable() {
    return true
  }

  #onContextSize = (e: CustomEvent<TContextSize>) => {
    if (this.hasAttribute('size')) {
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

  #onSizeUpdate() {
    if (!this.isDomConnected) {
      return
    }

    const size = this.getAttribute('data-size') ?? DEFAULT_SIZE

    this.#sizeContext.dispatch(size)
  }

  #onLeftSlotChange = () => {
    setClass(this.#$leftWrapper, 'empty', this.#$leftSlot.assignedElements().length === 0)
  }

  #onButtonFocus = () => {
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onButtonBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
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

  #onButtonClick = () => {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('-click'))
    }
  }

  #onClickReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-click')?.(e)
  }

  #onFocusReactHandler = () => {
    getReactEventHandler(this, 'on-focus')?.()
  }

  #onBlurReactHandler = () => {
    getReactEventHandler(this, 'on-blur')?.()
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-button': TSinchSelectButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select-button': TSinchSelectButtonElement,
  }
}
