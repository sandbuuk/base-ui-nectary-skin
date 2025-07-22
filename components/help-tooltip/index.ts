import '../tooltip'
import '../icon'
import {
  defineCustomElement,
  getAttribute,
  getIntegerAttribute,
  getReactEventHandler,
  NectaryElement,
  updateAttribute,
  updateIntegerAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchHelpTooltip } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class HelpTooltip extends NectaryElement {
  #$tooltip: NectaryComponentVanilla<'sinch-tooltip'>
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$tooltip = shadowRoot.querySelector('sinch-tooltip')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const options = { signal: this.#controller.signal }

    this.#$tooltip.addEventListener('-show', this.#onTooltipShow, options)
    this.#$tooltip.addEventListener('-hide', this.#onTooltipHide, options)
    this.addEventListener('-show', this.#onTooltipShowReactHandler, options)
    this.addEventListener('-hide', this.#onTooltipHideReactHandler, options)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['text', 'width', 'orientation']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    updateAttribute(this.#$tooltip, name, newVal)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get width() {
    return getIntegerAttribute(this, 'width')
  }

  set width(value: number | undefined) {
    updateIntegerAttribute(this, 'width', value)
  }

  get orientation() {
    return getAttribute(this, 'orientation', 'top')
  }

  set orientation(value: string) {
    updateAttribute(this, 'orientation', value)
  }

  get footprintRect() {
    return this.#$tooltip.footprintRect
  }

  get tooltipRect() {
    return this.#$tooltip.tooltipRect
  }

  #onTooltipShow = () => {
    this.dispatchEvent(new CustomEvent('-show'))
  }

  #onTooltipHide = () => {
    this.dispatchEvent(new CustomEvent('-hide'))
  }

  #onTooltipShowReactHandler = () => {
    getReactEventHandler(this, 'on-show')?.()
  }

  #onTooltipHideReactHandler = () => {
    getReactEventHandler(this, 'on-hide')?.()
  }
}

defineCustomElement('sinch-help-tooltip', HelpTooltip)

declare global {
  interface NectaryComponentMap {
    'sinch-help-tooltip': TSinchHelpTooltip,
  }

  interface HTMLElementTagNameMap {
    'sinch-help-tooltip': NectaryComponentVanilla<'sinch-help-tooltip'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-help-tooltip': NectaryComponentReact<'sinch-help-tooltip'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-help-tooltip': NectaryComponentReact<'sinch-help-tooltip'>,
    }
  }
}
