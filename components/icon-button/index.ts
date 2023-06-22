import '../tooltip'
import {
  defineCustomElement,
  getBooleanAttribute,
  getLiteralAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  subscribeContext,
  updateAttribute,
  updateBooleanAttribute,
  updateLiteralAttribute,
  Context,
  getAttribute,
} from '../utils'
import { DEFAULT_SIZE, sizeExValues } from '../utils/size'
import templateHTML from './template.html'
import { typeValues } from './utils'
import type { TSinchIconButtonElement, TSinchIconButtonReact, TSinchIconButtonType } from './types'
import type { TSinchTooltipElement } from '../tooltip/types'
import type { TRect } from '../types'
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

    this.role = 'button'
    this.tabIndex = 0
    this.addEventListener('click', this.#onButtonClick, options)
    this.addEventListener('focus', this.#onButtonFocus, options)
    this.addEventListener('blur', this.#onButtonBlur, options)
    this.addEventListener('keydown', this.#onButtonKeydown, options)
    this.addEventListener('-click', this.#onClickReactHandler, options)
    this.addEventListener('-focus', this.#onFocusReactHandler, options)
    this.addEventListener('-blur', this.#onBlurReactHandler, options)
    this.#$tooltip.addEventListener('-show', this.#onTooltipShow, options)
    this.#$tooltip.addEventListener('-hide', this.#onTooltipHide, options)
    this.addEventListener('-tooltip-show', this.#onTooltipShowReactHandler, options)
    this.addEventListener('-tooltip-hide', this.#onTooltipHideReactHandler, options)
    subscribeContext(this, 'size', this.#onContextSize, this.#controller.signal)
    this.#sizeContext.listen(this.#controller.signal)

    this.#onSizeUpdate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return [
      'size',
      'disabled',
      'aria-label',
      'data-size',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'disabled': {
        const isDisabled = isAttrTrue(newVal)

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
        this.#onSizeUpdate()

        break
      }
    }
  }

  set type(value: TSinchIconButtonType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get type(): TSinchIconButtonType {
    return getLiteralAttribute(this, typeValues, 'type', 'tertiary')
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

  #onButtonKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Space':
      case 'Enter': {
        e.preventDefault()
        this.click()
      }
    }
  }

  #onTooltipShow = () => {
    this.dispatchEvent(new CustomEvent('-tooltip-show'))
  }

  #onTooltipHide = () => {
    this.dispatchEvent(new CustomEvent('-tooltip-hide'))
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

  #onTooltipShowReactHandler = () => {
    getReactEventHandler(this, 'on-tooltip-show')?.()
  }

  #onTooltipHideReactHandler = () => {
    getReactEventHandler(this, 'on-tooltip-hide')?.()
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
