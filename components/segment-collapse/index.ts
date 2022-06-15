import '../icons/expand-less'
import '../icons/expand-more'
import {
  defineCustomElement,
  getBooleanAttribute,
  isAttrTrue,
  NectaryElement,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segment-collapse', class extends NectaryElement {
  #$input: HTMLInputElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('input')!
  }

  connectedCallback() {
    this.setAttribute('role', 'checkbox')
    this.#$input.addEventListener('input', this.onCheckboxInput)
  }

  disconnectedCallback() {
    this.#$input.removeEventListener('input', this.onCheckboxInput)
  }

  get type() {
    return 'text'
  }

  get nodeName() {
    return 'input'
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#$input.checked = isAttrTrue(newVal)

        break
      }
    }
  }

  set value(isChecked: boolean) {
    updateBooleanAttribute(this, 'value', isChecked)
  }

  get value() {
    return getBooleanAttribute(this, 'value')
  }

  focus() {
    this.#$input.focus()
  }

  blur() {
    this.#$input.blur()
  }

  onCheckboxInput = (e: Event) => {
    e.stopPropagation()

    const isChecked = this.#$input.checked

    this.#$input.checked = this.value

    this.dispatchEvent(
      new CustomEvent(
        'change',
        {
          detail: isChecked,
          bubbles: true,
        }
      )
    )
  }
})

export type TSinchSegmentExpandElement = HTMLElement & {
  value: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchSegmentExpandReact = TSinchElementReact<TSinchSegmentExpandElement> & {
  value: boolean,
  'aria-label': string,
  onChange: (e: SyntheticEvent<TSinchSegmentExpandElement, CustomEvent<boolean>>) => void,
  onFocus?: (e: FocusEvent<TSinchSegmentExpandElement>) => void,
  onBlur?: (e: FocusEvent<TSinchSegmentExpandElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segment-collapse': TSinchSegmentExpandReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-segment-collapse': TSinchSegmentExpandElement,
  }
}
