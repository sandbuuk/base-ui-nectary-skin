import '../text'
import '../icon'
import {
  defineCustomElement,
  getAttribute,
  updateAttribute,
  NectaryElement,
  isAttrEqual,
  updateBooleanAttribute,
  isAttrTrue,
  getBooleanAttribute,
} from '../utils'
import templateHTML from './template.html?raw'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class RichTextareaChip extends NectaryElement {
  #$text: HTMLElement

  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$text = shadowRoot.querySelector('#text')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'button')
    this.tabIndex = 0
    this.addEventListener('click', this.#onClick, { signal })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['text', 'readonly']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal
        updateAttribute(this, 'aria-label', newVal)

        break
      }

      case 'readonly': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }
    }
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get readonly() {
    return getBooleanAttribute(this, 'readonly')
  }

  set readonly(isReadonly: boolean) {
    updateBooleanAttribute(this, 'readonly', isReadonly)
  }

  #onClick = () => {
    this.dispatchEvent(
      new CustomEvent('-click', { bubbles: true, composed: true })
    )
  }
}

defineCustomElement('sinch-rich-textarea-chip', RichTextareaChip)
