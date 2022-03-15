import '../icon/north'
import '../icon/south'
import {
  defineCustomElement, getBooleanAttribute, isAttrTrue, updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'
import type { FocusEvent, SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-table-head-sort', class extends HTMLElement {
  #$input: HTMLInputElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$input = shadowRoot.querySelector('input')!
  }

  connectedCallback() {
    this.setAttribute('aria-label', 'column sort toggle')
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

export type TSinchTableHeaderSortElement = HTMLElement & {
  value: boolean,
  focus(): void,
  blur(): void,
}

export type TSinchTableHeaderSortReact = TSinchElementReact<TSinchTableHeaderSortElement> & {
  value: boolean,
  'aria-label': string,
  onChange: (e: SyntheticEvent<TSinchTableHeaderSortElement, CustomEvent<boolean>>) => void,
  onFocus?: (e: FocusEvent<TSinchTableHeaderSortElement>) => void,
  onBlur?: (e: FocusEvent<TSinchTableHeaderSortElement>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-head-sort': TSinchTableHeaderSortReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-table-head-sort': TSinchTableHeaderSortElement,
  }
}
