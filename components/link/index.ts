import '../icon'
import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  updateBooleanAttribute,
  updateAttribute,
  NectaryElement,
  isAttrTrue,
  getReactEventHandler,
  isAttrEqual,
} from '../utils'
import templateHTML from './template.html?raw'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class Link extends NectaryElement {
  #$anchor: HTMLAnchorElement
  #$text: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$anchor = shadowRoot.querySelector('a')!
    this.#$text = shadowRoot.querySelector('#content')!
  }

  connectedCallback() {
    this.#$anchor.addEventListener('click', this.#onAnchorClick)
    this.#$anchor.addEventListener('focus', this.#onAnchorFocus)
    this.#$anchor.addEventListener('blur', this.#onAnchorBlur)
    this.addEventListener('-click', this.#onClickReactHandler)
    this.addEventListener('-focus', this.#onFocusReactHandler)
    this.addEventListener('-blur', this.#onBlurReactHandler)
  }

  disconnectedCallback() {
    this.#$anchor.removeEventListener('click', this.#onAnchorClick)
    this.#$anchor.removeEventListener('focus', this.#onAnchorFocus)
    this.#$anchor.removeEventListener('blur', this.#onAnchorBlur)
    this.removeEventListener('-click', this.#onClickReactHandler)
    this.removeEventListener('-focus', this.#onFocusReactHandler)
    this.removeEventListener('-blur', this.#onBlurReactHandler)
  }

  static get observedAttributes() {
    return [
      'text',
      'href',
      'use-history',
      'external',
      'standalone',
      'disabled',
    ]
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (isAttrEqual(oldVal, newVal)) {
      return
    }

    switch (name) {
      case 'text': {
        this.#$text.textContent = newVal

        break
      }

      case 'href': {
        updateAttribute(this.#$anchor, 'href', newVal)

        break
      }

      case 'use-history': {
        const shouldUseHistory = isAttrTrue(newVal)

        if (shouldUseHistory) {
          updateBooleanAttribute(this, 'preventdefault', true)
        }

        updateBooleanAttribute(this, name, shouldUseHistory)

        break
      }

      case 'standalone':
      case 'disabled': {
        updateBooleanAttribute(this, name, isAttrTrue(newVal))

        break
      }

      case 'external': {
        const isExternal = isAttrTrue(newVal)

        updateAttribute(this.#$anchor, 'target', isExternal ? '_blank' : null)
        updateBooleanAttribute(this, name, isExternal)

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

  get href() {
    return getAttribute(this, 'href', '')
  }

  set href(value: string) {
    updateAttribute(this, 'href', value)
  }

  set 'use-history'(value: boolean) {
    updateBooleanAttribute(this, 'use-history', value)
  }

  get 'use-history'() {
    return getBooleanAttribute(this, 'use-history')
  }

  set disabled(isDisabled: boolean) {
    updateBooleanAttribute(this, 'disabled', isDisabled)
  }

  get disabled() {
    return getBooleanAttribute(this, 'disabled')
  }

  set external(isExternal: boolean) {
    updateBooleanAttribute(this, 'external', isExternal)
  }

  get external() {
    return getBooleanAttribute(this, 'external')
  }

  set standalone(isstandalone: boolean) {
    updateBooleanAttribute(this, 'standalone', isstandalone)
  }

  get standalone() {
    return getBooleanAttribute(this, 'standalone')
  }

  set preventDefault(isPrevented: boolean) {
    updateBooleanAttribute(this, 'preventdefault', isPrevented)
  }

  get preventDefault() {
    return getBooleanAttribute(this, 'preventdefault')
  }

  get focusable() {
    return true
  }

  focus() {
    this.#$anchor.focus()
  }

  blur() {
    this.#$anchor.blur()
  }

  #onAnchorClick = (e: Event) => {
    if (this.preventDefault) {
      e.preventDefault()

      if (this['use-history']) {
        history.pushState({}, '', this.href)
      }
    }

    this.dispatchEvent(
      new CustomEvent('-click')
    )
  }

  #onAnchorFocus = () => {
    this.dispatchEvent(new CustomEvent('-focus'))
  }

  #onAnchorBlur = () => {
    this.dispatchEvent(new CustomEvent('-blur'))
  }

  #onFocusReactHandler = () => {
    getReactEventHandler(this, 'on-focus')?.()
  }

  #onBlurReactHandler = () => {
    getReactEventHandler(this, 'on-blur')?.()
  }

  #onClickReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-click')?.(e)
  }
}

defineCustomElement('sinch-link', Link)
