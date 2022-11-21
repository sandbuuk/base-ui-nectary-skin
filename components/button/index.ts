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
} from '../utils'
import { assertSize, DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html'
import { assertType, typeValues } from './utils'
import type { TContextSize } from '../utils'
import type { TSinchSize } from '../utils/size'
import type { TSinchButtonElement, TSinchButtonReact, TSinchButtonType } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$text: HTMLElement
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$text = shadowRoot.querySelector('#text')!

    this.#sizeContext = new Context(this.#$button, 'size')
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'button')
    this.#$button.addEventListener('click', this.#onButtonClick, { signal })
    this.#$button.addEventListener('focus', this.#onButtonFocus, { signal })
    this.#$button.addEventListener('blur', this.#onButtonBlur, { signal })
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
  }

  static get observedAttributes() {
    return ['text', 'disabled', 'size', 'type', 'data-size']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$button.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
      case 'type': {
        if (process.env.NODE_ENV !== 'production') {
          assertType(newVal)
        }

        break
      }
      case 'size': {
        updateAttribute(this, 'data-size', newVal)

        break
      }
      case 'data-size': {
        if (process.env.NODE_ENV !== 'production') {
          assertSize(newVal, 'sinch-button')
        }

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

  set size(size: TSinchSize) {
    updateLiteralAttribute(this, sizeValues, 'size', size)
  }

  get size(): TSinchSize {
    return getLiteralAttribute(this, sizeValues, 'size', DEFAULT_SIZE)
  }

  get focusable() {
    return true
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }

  #onSizeUpdate() {
    if (!this.isConnected) {
      return
    }

    const size = getAttribute(this, 'data-size', DEFAULT_SIZE)

    this.#sizeContext.dispatch(size)
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

  #onButtonClick = () => {
    this.dispatchEvent(
      new CustomEvent('-click')
    )
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
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button': TSinchButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button': TSinchButtonElement,
  }
}
