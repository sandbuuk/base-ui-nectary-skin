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
import { DEFAULT_SIZE, sizeExValues } from '../utils/size'
import templateHTML from './template.html'
import { typeValues } from './utils'
import type { TSinchButtonElement, TSinchButtonReact, TSinchButtonType } from './types'
import type { TContextSize } from '../utils'
import type { TSinchSizeEx } from '../utils/size'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$text: HTMLElement
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

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
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }
      case 'disabled': {
        if (!isAttrEqual(oldVal, newVal)) {
          updateBooleanAttribute(this, 'disabled', isAttrTrue(newVal))
        }

        this.ariaDisabled = isAttrTrue(newVal).toString()

        break
      }
      case 'toggled': {
        if (!isAttrEqual(oldVal, newVal)) {
          updateBooleanAttribute(this, 'toggled', isAttrTrue(newVal))
        }

        this.ariaPressed = isAttrTrue(newVal).toString()

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

  #onSizeUpdate() {
    if (!this.isDomConnected) {
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

  #onButtonClick = (e: MouseEvent) => {
    if (this.disabled) {
      e.stopPropagation()
      e.preventDefault()
    } else {
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
