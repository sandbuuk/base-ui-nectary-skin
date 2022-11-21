import '../tooltip'
import {
  defineCustomElement,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import { assertSizeEx, DEFAULT_SIZE, sizeExValues } from '../utils/size'
import templateHTML from './template.html'
import type { TSinchTooltipElement } from '../tooltip/types'
import type { TRect } from '../types'
import type { TSinchIconButtonElement, TSinchIconButtonReact } from './types'
import type { TContextSize } from '../utils'
import type { TSinchSizeEx } from '../utils/size'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-icon-button', class extends NectaryElement {
  #$button: HTMLButtonElement
  #$tooltip: TSinchTooltipElement
  #controller: AbortController | null = null
  #sizeContext: Context<'size'>

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
    this.#$tooltip = shadowRoot.querySelector('#tooltip')!

    this.#sizeContext = new Context(this.#$button, 'size')
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const options = { signal: this.#controller.signal }

    this.setAttribute('role', 'button')
    this.#$button.addEventListener('click', this.#onButtonClick, options)
    this.#$button.addEventListener('focus', this.#onButtonFocus, options)
    this.#$button.addEventListener('blur', this.#onButtonBlur, options)
    this.addEventListener('-click', this.#onClickReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)
    subscribeContext(this, 'size', this.#onContextSize, this.#controller.signal)
    this.#sizeContext.listen(this.#controller.signal)

    this.#onSizeUpdate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
  }

  static get observedAttributes() {
    return ['disabled', 'aria-label']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

        this.#$button.disabled = isDisabled
        updateBooleanAttribute(this, 'disabled', isDisabled)

        break
      }
      case 'aria-label': {
        updateAttribute(this.#$tooltip, 'text', newVal)

        break
      }
      case 'size': {
        updateAttribute(this, 'data-size', newVal)

        break
      }
      case 'data-size': {
        if (process.env.NODE_ENV !== 'production') {
          assertSizeEx(newVal, 'sinch-icon-button')
        }

        this.#onSizeUpdate()

        break
      }
    }
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set size(size: TSinchSizeEx) {
    updateLiteralAttribute(this, sizeExValues, 'size', size)
  }

  get size(): TSinchSizeEx {
    return getLiteralAttribute(this, sizeExValues, 'size', DEFAULT_SIZE)
  }

  get tooltipRect(): TRect {
    return this.#$tooltip.tooltipRect
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
      case 'm': {
        this.setAttribute('data-size', 's')

        break
      }
      default: {
        this.setAttribute('data-size', 'xs')
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
      'sinch-icon-button': TSinchIconButtonReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-button': TSinchIconButtonElement,
  }
}
