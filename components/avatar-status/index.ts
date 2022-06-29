import {
  defineCustomElement,
  getLiteralAttribute,
  NectaryElement,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const colorValues = ['red', 'yellow', 'green', 'grey'] as const

type TAssertColor = (value: string | null) => asserts value is TSinchAvatarStatusColor

const assertColor: TAssertColor = (value) => {
  if (value === null || !colorValues.includes(value as any)) {
    throw new Error(`sinch-avatar-status: invalid color attribute: ${value}`)
  }
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-avatar-status', class extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    assertColor(this.getAttribute('color'))
  }

  static get observedAttributes() {
    return ['color']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'color': {
        assertColor(newVal)

        break
      }
    }
  }

  get color() {
    return getLiteralAttribute(this, colorValues, 'color')
  }

  set color(value: string) {
    updateLiteralAttribute(this, colorValues, 'color', value)
  }
})

export type TSinchAvatarStatusColor = typeof colorValues[number]

export type TSinchAvatarStatusElement = HTMLElement & {
  color: TSinchAvatarStatusColor,
}

export type TSinchAvatarStatusReact = TSinchElementReact<TSinchAvatarStatusElement> & {
  color: TSinchAvatarStatusColor,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-avatar-status': TSinchAvatarStatusReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-avatar-status': TSinchAvatarStatusElement,
  }
}
