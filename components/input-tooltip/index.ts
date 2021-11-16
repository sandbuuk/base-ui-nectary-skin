import { defineCustomElement } from '../utils'
import templateHTML from './template.html'
import '../icon/tooltip'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-input-tooltip', class extends HTMLElement {
  $container: HTMLDivElement
  $tooltipText: HTMLSpanElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$container = shadowRoot.querySelector('#container')!
    this.$tooltipText = shadowRoot.querySelector('#text')!
  }

  static get observedAttributes() {
    return ['text', 'width']
  }

  get text(): string {
    return this.getAttribute('text') ?? ''
  }

  set text(text: string) {
    this.setAttribute('text', text)
  }

  get width(): number | undefined {
    const attrValue = parseInt(this.getAttribute('width') ?? '')

    return Number.isInteger(attrValue) ? attrValue : void 0
  }

  set width(value: number | undefined) {
    if (value != null && value >= 0) {
      this.setAttribute('width', value.toFixed(0))
    } else {
      this.removeAttribute('width')
    }
  }

  get inverted(): boolean {
    const attrValue = this.getAttribute('inverted')

    return attrValue === '' || Boolean(attrValue)
  }

  set inverted(isInverted: boolean | undefined) {
    if (isInverted === true) {
      this.setAttribute('inverted', '')
    } else {
      this.removeAttribute('inverted')
    }
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.$tooltipText.textContent = newVal

        break
      }

      case 'width': {
        const value = parseInt(newVal ?? '')

        if (Number.isInteger(value)) {
          this.$container.style.maxWidth = `${value}px`
        } else {
          this.$container.style.maxWidth = 'unset'
        }
      }
    }
  }
})

export type TSinchInput = {
  text: string,
  width?: number,
  inverted?: boolean,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-input-tooltip': TSinchInput,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input-tooltip': HTMLElement & TSinchInput,
  }
}
