import { getEmojiBaseUrl } from '../emoji/utils'
import '../emoji'
import '../code-tag'
import '../link'
import '../chip'
import {
  defineCustomElement,
  NectaryElement,
  getLiteralAttribute,
  updateLiteralAttribute,
  getAttribute,
  updateAttribute,
  parseMarkdown,
  getReactEventHandler,
} from '../utils'
import templateHTML from './template.html?raw'
import { createParseVisitor, sizeValues } from './utils'
import type { TSinchTextType } from '../text/types'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class RichText extends NectaryElement {
  #wrapper: HTMLElement
  #parseVisitor
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    if (typeof (shadowRoot as unknown as Document).createElement !== 'function') {
      Object.defineProperty(shadowRoot, 'createElement', {
        value: document.createElement.bind(shadowRoot.ownerDocument),
      })
    }

    Object.defineProperty(shadowRoot, 'createTextNode', {
      value: document.createTextNode.bind(shadowRoot.ownerDocument),
    })
    Object.defineProperty(shadowRoot, 'createDocumentFragment', {
      value: document.createDocumentFragment.bind(shadowRoot.ownerDocument),
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#wrapper = shadowRoot.querySelector('#wrapper')!
    this.#parseVisitor = createParseVisitor(shadowRoot as unknown as Document)
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    super.connectedCallback()
    this.setAttribute('role', 'paragraph')

    this.#parseVisitor.updateEmojiBaseUrl(getEmojiBaseUrl(this))
    this.#updateText()
    this.#wrapper.addEventListener('click', this.#handleElementClick, { signal })
    this.addEventListener('-element-click', this.#onClickReactHandler, { signal })
  }

  disconnectedCallback() {
    this.#controller?.abort()
    this.#controller = null
    this.#wrapper.removeEventListener('click', this.#handleElementClick)
    this.removeEventListener('-element-click', this.#onClickReactHandler)
    super.disconnectedCallback()
  }

  static get observedAttributes() {
    return ['text']
  }

  attributeChangedCallback(name: string, _oldVal: string | null, _newVal: string | null) {
    switch (name) {
      case 'text': {
        this.#updateText()

        break
      }
    }
  }

  get size() {
    return getLiteralAttribute(this, sizeValues, 'size', 'm')
  }

  set size(value: TSinchTextType) {
    updateLiteralAttribute(this, sizeValues, 'size', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  #handleElementClick = (e: Event) => {
    const eventTarget = e.target as HTMLElement

    const elementClickEvent = new CustomEvent('-element-click')

    Object.defineProperty(elementClickEvent, 'currentTarget', { value: eventTarget })

    this.dispatchEvent(elementClickEvent)
  }

  #updateText() {
    if (!this.isDomConnected) {
      return
    }

    const text = this.text

    if (text === null) {
      this.#wrapper.innerHTML = ''
    } else {
      this.#wrapper.replaceChildren(
        parseMarkdown(text, this.#parseVisitor.createVisitor())
      )
    }
  }

  #onClickReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-element-click')?.(e)
    getReactEventHandler(this, 'onElementClick')?.(e)
  }
}

defineCustomElement('sinch-rich-text', RichText)
