import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

class SinchSearchOption extends NectaryElement {
  #$content: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$content = shadowRoot.querySelector('#wrapper')!
  }

  connectedCallback() {
    this.setAttribute('role', 'option')
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$content.textContent = newVal

        break
      }
    }
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get text(): string {
    return getAttribute(this, 'text', '')
  }

  set selected(isSelected: boolean) {
    updateBooleanAttribute(this, 'data-selected', isSelected)
    updateExplicitBooleanAttribute(this, 'aria-selected', isSelected)
  }

  get selected() {
    return getBooleanAttribute(this, 'data-selected')
  }
}

defineCustomElement('sinch-search-option', SinchSearchOption)

export const isSinchSearchOptionElement = (element: EventTarget | Element | null): element is TSinchSearchOptionElement => {
  return element instanceof SinchSearchOption
}

export type TSinchSearchOptionElement = HTMLElement & {
  text: string,
  selected: boolean,
}

export type TSinchSearchOptionReact = TSinchElementReact<TSinchSearchOptionElement> & {
  text: string,
  'aria-label': string,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-search-option': TSinchSearchOptionReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-search-option': TSinchSearchOptionElement,
  }
}
