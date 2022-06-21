import '../icons/expand-less'
import '../icons/expand-more'
import '../icon-button'
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
  #$button: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$button = shadowRoot.querySelector('#button')!
  }

  connectedCallback() {
    this.setAttribute('role', 'checkbox')
    this.setAttribute('aria-checked', String(getBooleanAttribute(this, 'value')))
    this.#$button.addEventListener('click', this.onClick)
  }

  disconnectedCallback() {
    this.#$button.removeEventListener('click', this.onClick)
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.setAttribute('aria-checked', String(isAttrTrue(newVal)))

        break
      }
    }
  }

  get type() {
    return 'text'
  }

  get nodeName() {
    return 'input'
  }

  set value(isChecked: boolean) {
    updateBooleanAttribute(this, 'value', isChecked)
  }

  get value() {
    return getBooleanAttribute(this, 'value')
  }

  focus() {
    this.#$button.focus()
  }

  blur() {
    this.#$button.blur()
  }

  onClick = (e: Event) => {
    e.stopPropagation()

    this.dispatchEvent(
      new CustomEvent(
        'change',
        {
          detail: !this.value,
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
