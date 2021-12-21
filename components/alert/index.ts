import {
  defineCustomElement,
  getBooleanAttribute,
  getAttribute,
  getLiteralAttribute,
  updateBooleanAttribute,
  updateAttribute,
  updateLiteralAttribute,
  getEventHandler,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchElementReact } from '../types'

const typeValues = ['info', 'success', 'warn', 'error'] as const

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-alert', class extends HTMLElement {
  $text: HTMLParagraphElement
  $title: HTMLParagraphElement
  $action: HTMLButtonElement
  $dismiss: HTMLButtonElement
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: process.env.NODE_ENV === 'development' ? 'open' : 'closed',
    })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$text = shadowRoot.querySelector('#text')!
    this.$title = shadowRoot.querySelector('#title')!
    this.$action = shadowRoot.querySelector('#action')!
    this.$dismiss = shadowRoot.querySelector('#dismiss')!
  }

  connectedCallback() {
    this.$action.addEventListener('click', this.onActionClick)
    this.$dismiss.addEventListener('click', this.onDismissClick)
  }

  disconnectedCallback() {
    this.$action.removeEventListener('click', this.onActionClick)
    this.$dismiss.removeEventListener('click', this.onDismissClick)
  }

  get type() {
    return getLiteralAttribute(this, typeValues, 'type')
  }

  set type(value: TSinchAlertType | undefined) {
    updateLiteralAttribute(this, typeValues, 'type', value)
  }

  get text() {
    return getAttribute(this, 'text', '')
  }

  set text(value: string) {
    updateAttribute(this, 'text', value)
  }

  get title() {
    return getAttribute(this, 'title', '')
  }

  set title(value: string) {
    updateAttribute(this, 'title', value)
  }

  get actionText() {
    return getAttribute(this, 'action-text', '')
  }

  set actionText(value: string) {
    updateAttribute(this, 'action-text', value)
  }

  get dismissable() {
    return getBooleanAttribute(this, 'dismissable')
  }

  set dismissable(isDismissable: boolean | undefined) {
    updateBooleanAttribute(this, 'dismissable', isDismissable)
  }

  get multiline() {
    return getBooleanAttribute(this, 'multiline')
  }

  set multiline(isMultiline: boolean | undefined) {
    updateBooleanAttribute(this, 'multiline', isMultiline)
  }

  static get observedAttributes() {
    return ['text', 'title', 'action-text']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'text': {
        this.$text.textContent = newVal

        break
      }
      case 'title': {
        this.$title.textContent = newVal

        break
      }
      case 'action-text': {
        this.$action.textContent = newVal

        break
      }
    }
  }

  onActionClick = (e: Event) => {
    e.stopPropagation()

    getEventHandler(this, 'onAction')?.()

    this.dispatchEvent(
      new CustomEvent('action')
    )
  }

  onDismissClick = (e: Event) => {
    e.stopPropagation()

    getEventHandler(this, 'onDismiss')?.()

    this.dispatchEvent(
      new CustomEvent('dismiss')
    )
  }
})

type TSinchAlertType = typeof typeValues[number]

type TSinchAlertElement = HTMLElement & {
  type: TSinchAlertType,
  text: string,
  title: string,
  actionText: string,
  dismissable: boolean,
  multiline: boolean,
}

type TSinchAlertReact = TSinchElementReact<TSinchAlertElement> & {
  type: TSinchAlertType,
  text: string,
  title?: string,
  actionText?: string,
  dismissable?: boolean,
  multiline?: boolean,
  onDismiss?: () => void,
  onAction?: () => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-alert': TSinchAlertReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-alert': TSinchAlertElement,
  }
}
