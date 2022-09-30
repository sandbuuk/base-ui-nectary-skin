import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  NectaryElement,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { backgroundValues, sizeValues } from './utils'
import type { TSinchAvatarBackground, TSinchAvatarElement, TSinchAvatarReact, TSinchAvatarSize } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-avatar', class extends NectaryElement {
  #$text: HTMLSpanElement
  #$image: HTMLImageElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
    this.#$image = shadowRoot.querySelector('#image')!
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

  get background() {
    return getLiteralAttribute(this, backgroundValues, 'background', 'grey')
  }

  set background(value: TSinchAvatarBackground) {
    updateLiteralAttribute(this, backgroundValues, 'background', value)
  }

  get size() {
    return getLiteralAttribute(this, sizeValues, 'size', 'm')
  }

  set size(value: TSinchAvatarSize) {
    updateLiteralAttribute(this, sizeValues, 'size', value)
  }

  static get observedAttributes() {
    return ['alt', 'src']
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
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-avatar': TSinchAvatarReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-avatar': TSinchAvatarElement,
  }
}
