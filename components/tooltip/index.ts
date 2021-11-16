import { defineCustomElement } from '../utils'
import templateHTML from './template.html'
import '../icon/tooltip'

const orientationValues = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'] as const
const isOrientationValue = (value: string | undefined | null): value is (typeof orientationValues[number]) => {
  return value != null && (orientationValues as readonly string[]).includes(value)
}

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tooltip', class extends HTMLElement {
  $tooltipText: HTMLDivElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

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

  get orientation(): TSinchTooltip['orientation'] {
    const attrValue = this.getAttribute('orientation')

    return isOrientationValue(attrValue) ? attrValue : void 0
  }

  set orientation(value: TSinchTooltip['orientation']) {
    if (isOrientationValue(value)) {
      this.setAttribute('orientation', value)
    } else {
      this.removeAttribute('orientation')
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
          this.$tooltipText.style.maxWidth = `${value}px`
        } else {
          this.$tooltipText.style.maxWidth = 'unset'
        }

        break
      }
    }
  }
})

export type TSinchTooltip = {
  text: string,
  width?: number,
  inverted?: boolean,
  orientation?: typeof orientationValues[number],
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tooltip': TSinchTooltip,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tooltip': HTMLElement & TSinchTooltip,
  }
}
