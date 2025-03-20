import '../icon'
import {
  defineCustomElement,
  getBooleanAttribute,
  getReactEventHandler,
  isAttrTrue,
  NectaryElement,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchSegmentExpand } from './types'
import type { NectaryComponentVanilla, NectaryComponentReact } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement(
  'sinch-segment-collapse',
  class extends NectaryElement {
    #$button: HTMLElement

    constructor() {
      super()

      const shadowRoot = this.attachShadow()

      shadowRoot.appendChild(template.content.cloneNode(true))

      this.#$button = shadowRoot.querySelector('#button')!
    }

    connectedCallback() {
      this.setAttribute('role', 'checkbox')
      this.#$button.addEventListener('click', this.#onClick)
      this.addEventListener('-change', this.#onChangeReactHandler)
    }

    disconnectedCallback() {
      this.#$button.removeEventListener('click', this.#onClick)
      this.removeEventListener('-change', this.#onChangeReactHandler)
    }

    static get observedAttributes() {
      return ['value']
    }

    attributeChangedCallback(
      name: string,
      oldVal: string | null,
      newVal: string | null
    ) {
      switch (name) {
        case 'value': {
          updateExplicitBooleanAttribute(
            this,
            'aria-checked',
            isAttrTrue(newVal)
          )

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

    get focusable() {
      return true
    }

    focus() {
      this.#$button.focus()
    }

    blur() {
      this.#$button.blur()
    }

    #onClick = () => {
      const detail = !this.value

      this.dispatchEvent(new CustomEvent('-change', { detail }))
    }

    #onChangeReactHandler = (e: Event) => {
      getReactEventHandler(this, 'on-change')?.(e)
    }
  }
)

declare global {
  interface NectaryComponentMap {
    'sinch-segment-collapse': TSinchSegmentExpand,
  }

  interface HTMLElementTagNameMap {
    'sinch-segment-collapse': NectaryComponentVanilla<'sinch-segment-collapse'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-segment-collapse': NectaryComponentReact<'sinch-segment-collapse'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segment-collapse': NectaryComponentReact<'sinch-segment-collapse'>,
    }
  }
}
