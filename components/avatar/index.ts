import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  NectaryElement,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import { DEFAULT_SIZE, sizeValues } from '../utils/size'
import templateHTML from './template.html'
import { getAvatarColorBg, getAvatarColorFg, statusValues } from './utils'
import type { TSinchAvatarStatus, TSinchAvatar } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla } from '../types'
import type { TSinchSize } from '../utils/size'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-avatar', class extends NectaryElement {
  #$circle: HTMLElement
  #$text: HTMLElement
  #$image: HTMLImageElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$circle = shadowRoot.querySelector('#circle')!
    this.#$text = shadowRoot.querySelector('#text')!
    this.#$image = shadowRoot.querySelector('#image')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#updateColor()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  static get observedAttributes() {
    return ['alt', 'src', 'color']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'alt': {
        this.#$text.textContent = newVal
        this.#$image.alt = newVal ?? ''

        break
      }

      case 'src': {
        this.#$image.src = newVal ?? ''

        break
      }

      case 'color': {
        this.#updateColor()

        break
      }
    }
  }

  get src() {
    return getAttribute(this, 'src')
  }

  set src(value: string | null) {
    updateAttribute(this, 'src', value)
  }

  get alt() {
    return getAttribute(this, 'alt', '')
  }

  set alt(value: string) {
    updateAttribute(this, 'alt', value)
  }

  get color() {
    return getAttribute(this, 'color')
  }

  set color(value: string | null) {
    updateAttribute(this, 'color', value)
  }

  get size() {
    return getLiteralAttribute(this, sizeValues, 'size', DEFAULT_SIZE)
  }

  set size(value: TSinchSize) {
    updateLiteralAttribute(this, sizeValues, 'size', value)
  }

  get status() {
    return getLiteralAttribute(this, statusValues, 'status', null)
  }

  set status(value: TSinchAvatarStatus | null) {
    updateLiteralAttribute(this, statusValues, 'status', value)
  }

  #updateColor() {
    if (!this.isDomConnected) {
      return
    }

    const colorName = this.color

    if (colorName !== null && colorName.length > 0) {
      const bg = getAvatarColorBg(colorName)
      const fg = getAvatarColorFg(colorName)

      this.#$circle.style.setProperty('background-color', bg)
      this.#$circle.style.setProperty('color', fg)
    } else {
      this.#$circle.style.removeProperty('background-color')
      this.#$circle.style.removeProperty('color')
    }
  }
})

declare global {
  interface NectaryComponentMap {
    'sinch-avatar': TSinchAvatar,
  }

  interface HTMLElementTagNameMap {
    'sinch-avatar': NectaryComponentVanilla<'sinch-avatar'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-avatar': NectaryComponentReact<'sinch-avatar'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-avatar': NectaryComponentReact<'sinch-avatar'>,
    }
  }
}
