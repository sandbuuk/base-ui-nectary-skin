import '../icons/cancel'
import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
  updateLiteralAttribute,
  getLiteralAttribute,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const typeValues = ['xl', 'l', 'm', 's', 'xs'] as const
const levelValues = ['1', '2', '3', '4', '5', '6'] as const

type TAssertLevel = (value: string | null) => asserts value is TSinchTitleLevel
type TAssertType = (value: string | null) => asserts value is TSinchTitleType

const assertLevel: TAssertLevel = (value) => {
  if (value === null || !levelValues.includes(value as any)) {
    throw new Error(`sinch-title: invalid aria-level attribute: ${value}`)
  }
}

const assertType: TAssertType = (value) => {
  if (value === null || !typeValues.includes(value as any)) {
    throw new Error(`sinch-title: invalid type attribute: ${value}`)
  }
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-title', class extends NectaryElement {
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    this.setAttribute('role', 'heading')
    assertLevel(this.getAttribute('aria-level'))
    assertType(this.getAttribute('type'))
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  set type(value: TSinchTitleType) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get type(): TSinchTitleType {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  static get observedAttributes() {
    return ['text', 'type', 'aria-level']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'aria-level': {
        assertLevel(newVal)

        break
      }

      case 'type': {
        assertType(newVal)

        break
      }
    }
  }
})

export type TSinchTitleType = typeof typeValues[number]
export type TSinchTitleLevel = typeof levelValues[number]

export type TSinchTitleElement = HTMLElement & {
  text: string,
  type: TSinchTitleType,
}

export type TSinchTitleReact = TSinchElementReact<TSinchTitleElement> & {
  text: string,
  type: TSinchTitleType,
  'aria-level': TSinchTitleLevel,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-title': TSinchTitleReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-title': TSinchTitleElement,
  }
}
