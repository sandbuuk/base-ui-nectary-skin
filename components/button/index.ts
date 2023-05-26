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
import { DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html'
import { typeValues } from './utils'
import type { TSinchButtonElement, TSinchButtonReact, TSinchButtonType } from './types'
import type { TContextSize } from '../utils'
import type { TSinchSize } from '../utils/size'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$text: HTMLElement
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: false })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$text = shadowRoot.querySelector('#text')!

    this.#sizeContext = new Context(this.#$button, 'size')
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
    subscribeContext(this, 'size', this.#onContextSize, signal)
    this.#sizeContext.listen(signal)

    this.#onSizeUpdate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
  }

  static get observedAttributes() {
    return ['text', 'disabled', 'size', 'data-size']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

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
