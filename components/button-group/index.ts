import { typeValues } from '../button/utils'
import {
  NectaryElement,
  defineCustomElement,
  getLiteralAttribute,
  updateLiteralAttribute,
} from '../utils'
import { DEFAULT_SIZE, sizeExValues } from '../utils/size'
import templateHTML from './template.html'
import type { TSinchButtonGroupElement, TSinchButtonGroupReact } from './types'
import type { TSinchButtonType } from '../button/types'
import type { TSinchSizeEx } from '../utils/size'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button-group', class extends NectaryElement {
  #$slot: HTMLSlotElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$slot = shadowRoot.querySelector('slot')!
  }

  static get observedAttributes() {
    return ['size', 'type']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'size':
        for (const $option of this.#$slot.assignedElements()) {
          updateLiteralAttribute($option, sizeExValues, name, newVal)
        }

        break
      case 'type':
        for (const $option of this.#$slot.assignedElements()) {
          updateLiteralAttribute($option, typeValues, name, newVal)
        }

        break
      default:
        break
    }
  }

  set type(value: TSinchButtonType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get type(): TSinchButtonType {
    return getLiteralAttribute(this, typeValues, 'type', 'primary')
  }

  set size(size: TSinchSizeEx) {
    updateLiteralAttribute(this, sizeExValues, 'size', size)
  }

  get size(): TSinchSizeEx {
    return getLiteralAttribute(this, sizeExValues, 'size', DEFAULT_SIZE)
  }

  connectedCallback() {
    this.setAttribute('role', 'group')
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-button-group': TSinchButtonGroupElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-group': TSinchButtonGroupReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-group': TSinchButtonGroupReact,
    }
  }
}
