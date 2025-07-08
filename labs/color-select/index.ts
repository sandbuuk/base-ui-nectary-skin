import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'
import '@nectary/components/color-swatch'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class ColorSelect extends NectaryElement {
  #popover: HTMLElement
  #selectButton: HTMLElement
  #colorSwatch: HTMLElement
  #colorMenu: HTMLElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#popover = shadowRoot.querySelector('sinch-popover')!
    this.#selectButton = shadowRoot.querySelector('sinch-select-button')!
    this.#colorSwatch = shadowRoot.querySelector('sinch-color-swatch')!
    this.#colorMenu = shadowRoot.querySelector('sinch-color-menu')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#selectButton.addEventListener('-click', this.#onOpen as EventListener, { signal })
    this.#popover.addEventListener('-close', this.#onClose as EventListener, { signal })
    this.#colorMenu.addEventListener('-change', this.#onChange as EventListener, { signal })

    this.#updateUI()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller?.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['open', 'value']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'open':
      case 'value': {
        this.#updateUI()

        break
      }
    }
  }

  get open(): boolean {
    return this.hasAttribute('open')
  }

  set open(value: boolean) {
    if (value) {
      this.setAttribute('open', '')
    } else {
      this.removeAttribute('open')
    }
  }

  get value(): string {
    return this.getAttribute('value') ?? ''
  }

  set value(newValue: string) {
    if (newValue !== '') {
      this.setAttribute('value', newValue)
    } else {
      this.removeAttribute('value')
    }
  }

  #updateUI() {
    if (!this.isDomConnected) {
      return
    }

    this.#popover.toggleAttribute('open', this.open)
    this.#selectButton.setAttribute('text', this.value)
    this.#colorSwatch.setAttribute('name', this.value)
    this.#colorMenu.setAttribute('value', this.value)
  }

  #onClose = () => {
    this.open = false
  }

  #onOpen = () => {
    this.open = true
  }

  #onChange = (e: CustomEvent<string>) => {
    this.value = e.detail
    this.dispatchEvent(new CustomEvent('-change', { detail: e.detail }))
  }
}

defineCustomElement('sinch-labs-color-select', ColorSelect)

type Props = {
  open?: boolean,
  value?: string,
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-color-select': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-color-select': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
