import '../icons/cancel'
import {
  defineCustomElement,
  getAttribute,
  getLiteralAttribute,
  NectaryElement,
  updateAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const backgroundValues = ['grey', 'yellow', 'blue'] as const
const sizeValues = ['l', 'm', 's'] as const

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
    return getAttribute(this, 'src', null)
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

export type TSinchAvatarBackground = typeof backgroundValues[number]
export type TSinchAvatarSize = typeof sizeValues[number]

export type TSinchAvatarElement = HTMLElement & {
  alt: string,
  src: string | null,
  background: TSinchAvatarBackground,
  size: TSinchAvatarSize,
}

export type TSinchAvatarReact = TSinchElementReact<TSinchAvatarElement> & {
  alt: string,
  src?: string,
  background?: TSinchAvatarBackground,
  size?: TSinchAvatarSize,
}

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
