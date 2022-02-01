import '../icon/cancel'
import {
  defineCustomElement,
  getBooleanAttribute,
  updateAttribute,
  getEventHandler,
  isAttrTrue,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-tag-close', class extends HTMLElement {
  $dismissIcon: HTMLElementTagNameMap['sinch-icon-cancel']

  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$dismissIcon = shadowRoot.querySelector('sinch-icon-cancel')!

    shadowRoot.querySelector('#close')!.addEventListener('click', this.onClick)
  }

  get small() {
    return getBooleanAttribute(this, 'small')
  }

  set small(isSmall: boolean | undefined) {
    updateAttribute(this, 'small', isSmall)
  }

  static get observedAttributes() {
    return ['small']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'small': {
        updateAttribute(this.$dismissIcon, 'size', isAttrTrue(newVal) ? 12 : 14)

        break
      }
    }
  }

  onClick = (e: Event) => {
    e.stopPropagation()

    getEventHandler(this, 'onClick')?.()

    this.dispatchEvent(
      new CustomEvent('click')
    )
  }
})

type TSinchTagDismissElement = HTMLElement & {
  small: boolean,
}

type TSinchTagDismissReact = TSinchElementReact<TSinchTagDismissElement> & {
  small?: boolean,
  onClick?: () => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-tag-close': TSinchTagDismissReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-tag-close': TSinchTagDismissElement,
  }
}
