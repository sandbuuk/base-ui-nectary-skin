import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class PhonePreviewRcsChannelTabs extends NectaryElement {
  #tabsContainer: HTMLElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#tabsContainer = shadowRoot.querySelector('#tabs-container')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#tabsContainer.addEventListener('click', this.#onTabClick, { signal })

    this.#updateUI()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller?.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['color', 'active-tab']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    this.#updateUI()
  }

  get color(): string {
    return this.getAttribute('color') ?? 'var(--sinch-sys-color-primary-default)'
  }

  set color(value: string) {
    this.setAttribute('color', value)
  }

  get activeTab(): number {
    const value = this.getAttribute('active-tab')
    
    return (value !== null) ? parseInt(value, 10) : 0
  }

  set activeTab(value: number) {
    this.setAttribute('active-tab', value.toString())
  }

  #updateUI() {
    if (!this.isDomConnected) {
      return
    }

    // Update CSS custom property for highlight color
    this.#tabsContainer.style.setProperty('--highlight-color', this.color)

    // Update active tab state
    const buttons = this.#tabsContainer.querySelectorAll('button')
    
    buttons.forEach((button, index) => {
      if (index === this.activeTab) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      }
    })
  }

  #onTabClick = (event: Event) => {
    const target = event.target as HTMLElement
    
    if (target.tagName === 'BUTTON') {
      const buttons = Array.from(this.#tabsContainer.querySelectorAll('button'))
      const clickedIndex = buttons.indexOf(target as HTMLButtonElement)
      
      if (clickedIndex !== -1) {
        this.activeTab = clickedIndex
        this.dispatchEvent(new CustomEvent('-tab-change', {
          detail: clickedIndex,
        }))
      }
    }
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-channel-tabs', PhonePreviewRcsChannelTabs)

type Props = {
  color?: string,
  'active-tab'?: number,
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-channel-tabs': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-channel-tabs': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
