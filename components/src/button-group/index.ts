import { typeValues } from '../button/utils'
import {
  NectaryElement,
  defineCustomElement,
  updateLiteralAttribute,
} from '../utils'
import { sizeExValues } from '../utils/size'
import templateHTML from './template.html'
import type { TSinchButtonGroupElement, TSinchButtonGroupReact } from './types'

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

  connectedCallback() {
    this.role = 'group'
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-group': TSinchButtonGroupReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button-group': TSinchButtonGroupElement,
  }
}
