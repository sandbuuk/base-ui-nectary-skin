import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segment', class extends NectaryElement {
  #$caption: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$caption = shadowRoot.querySelector('#caption')!
  }

  static get observedAttributes() {
    return ['caption']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'caption': {
        this.#$caption.textContent = newVal

        break
      }
    }
  }

  set caption(caption: string) {
    updateAttribute(this, 'caption', caption)
  }

  get caption(): string {
    return getAttribute(this, 'caption', '')
  }

  set collapsed(isChecked: boolean) {
    updateBooleanAttribute(this, 'collapsed', isChecked)
  }

  get collapsed() {
    return getBooleanAttribute(this, 'collapsed')
  }
})

type TSinchSegmentElement = HTMLElement & {
  caption: string,
  collapsed: boolean,
}

type TSinchSegmentReact = TSinchElementReact<TSinchSegmentElement> & {
  caption: string,
  collapsed?: boolean,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segment': TSinchSegmentReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-segment': TSinchSegmentElement,
  }
}
