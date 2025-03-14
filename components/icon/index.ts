import {
  defineCustomElement,
  getAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-icon', class extends NectaryElement {
  #$icon: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$icon = shadowRoot.querySelector('#icon')!
  }

  static get observedAttributes() {
    return ['name', 'icons-version']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'name': {
        this.#$icon.textContent = newVal
        updateAttribute(this.#$icon, 'aria-label', newVal)

        if (getAttribute(this, 'icons-version', '1') !== '1') {
          this._matchNameToFont()
        }

        break
      }
      case 'icons-version': {
        if (getAttribute(this, 'icons-version') !== '1') {
          this._matchNameToFont()
        }

        break
      }
    }
  }

  set name(value: string) {
    updateAttribute(this, 'name', value)
  }

  get name() {
    return getAttribute(this, 'name', '')
  }

  set iconsVersion(value: '1' | '2') {
    updateAttribute(this, 'icons-version', value)
  }

  get iconsVersion() {
    return getAttribute(this, 'icons-version', '1') as '1' | '2'
  }

  _matchNameToFont() {
    // ignore "fa-" part of file since 90% of files has it.
    if (/^(fa-|(?!fa-))[0-9a-d]/.test(this.name)) {
      return updateAttribute(this.#$icon, 'class', 'zero-to-d')
    }

    if (/^(fa-|(?!fa-))[e-o]/.test(this.name)) {
      return updateAttribute(this.#$icon, 'class', 'e-to-o')
    }

    if (/^(fa-|(?!fa-))[p-z]/.test(this.name)) {
      return updateAttribute(this.#$icon, 'class', 'p-to-z')
    }
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon': TSinchIconReact,
    }
  }
}
