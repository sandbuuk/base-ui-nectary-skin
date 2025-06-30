import '@nectary/components/icon'
import { defineCustomElement, NectaryElement } from '../utils'
import '../phone-preview-rcs-channel-actions'
import '../phone-preview-rcs-channel-info'
import '../phone-preview-rcs-channel-info-option'
import '../phone-preview-rcs-channel-options'
import '../phone-preview-rcs-channel-tabs'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class PhonePreviewRcsChannel extends NectaryElement {
  #bannerImg: HTMLImageElement
  #logoImg: HTMLImageElement
  #brandName: HTMLHeadingElement
  #brandDescription: HTMLParagraphElement
  #actions: HTMLElement
  #tabs: HTMLElement
  #infoContainer: HTMLElement
  #optionsContainer: HTMLElement
  #controller: AbortController | null = null
  #currentTab = 0

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#bannerImg = shadowRoot.querySelector('#banner-img')!
    this.#logoImg = shadowRoot.querySelector('#logo-img')!
    this.#brandName = shadowRoot.querySelector('#brand-name')!
    this.#brandDescription = shadowRoot.querySelector('#brand-description')!
    this.#actions = shadowRoot.querySelector('#actions')!
    this.#tabs = shadowRoot.querySelector('#tabs')!
    this.#infoContainer = shadowRoot.querySelector('#info-container')!
    this.#optionsContainer = shadowRoot.querySelector('#options-container')!
  }

  connectedCallback() {
    super.connectedCallback()

    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#tabs.addEventListener('-tab-change', this.#onTabChange as EventListener, { signal })

    // Listen for changes in slotted children
    this.addEventListener('slotchange', this.#onSlotChange, { signal })

    // Watch for changes to child elements
    const observer = new MutationObserver(() => {
      this.#updateActionsFromSlottedChildren()
    })

    observer.observe(this, { childList: true, subtree: true })

    // Clean up observer when disconnected
    signal.addEventListener('abort', () => {
      observer.disconnect()
    })

    this.#updateUI()
    this.#updateTabContent()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller?.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['name', 'description', 'color', 'banner', 'logo']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'name':
      case 'description':
      case 'color':
      case 'banner':
      case 'logo':
        this.#updateUI()

        break
    }
  }

  get name(): string {
    return this.getAttribute('name') ?? ''
  }

  set name(value: string) {
    this.setAttribute('name', value)
  }

  get description(): string {
    return this.getAttribute('description') ?? ''
  }

  set description(value: string) {
    this.setAttribute('description', value)
  }

  get color(): string {
    return this.getAttribute('color') ?? ''
  }

  set color(value: string) {
    this.setAttribute('color', value)
  }

  get banner(): string {
    return this.getAttribute('banner') ?? ''
  }

  set banner(value: string) {
    this.setAttribute('banner', value)
  }

  get logo(): string {
    return this.getAttribute('logo') ?? ''
  }

  set logo(value: string) {
    this.setAttribute('logo', value)
  }

  #updateUI() {
    if (!this.isDomConnected) {
      return
    }

    // Transparent placeholder for empty images
    const transparentIcon = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

    // Update banner image
    this.#bannerImg.src = this.banner !== '' ? this.banner : transparentIcon

    // Update logo image
    this.#logoImg.src = this.logo !== '' ? this.logo : transparentIcon

    // Update brand name
    this.#brandName.textContent = this.name !== '' ? this.name : 'Brand name'

    // Update brand description
    this.#brandDescription.textContent = this.description !== '' ? this.description : 'Brand description'

    // Update banner color
    if (this.color !== '') {
      this.style.setProperty('--banner-color', this.color)
    }

    // Update actions component with data from slotted children
    this.#updateActionsFromSlottedChildren()

    // Update tabs color
    this.#tabs.setAttribute('color', this.color)
  }

  #updateActionsFromSlottedChildren() {
    // Get slotted contact options
    const slottedElements = this.querySelectorAll('sinch-labs-phone-preview-rcs-channel-info-option')

    // Find first phone, website, and email from slotted children
    let firstPhone = ''
    let firstWebsite = ''
    let firstEmail = ''

    for (const element of slottedElements) {
      const type = element.getAttribute('type')
      const contact = element.getAttribute('contact') ?? ''

      if (type === 'phone' && firstPhone === '') {
        firstPhone = contact
      } else if (type === 'website' && firstWebsite === '') {
        firstWebsite = contact
      } else if (type === 'email' && firstEmail === '') {
        firstEmail = contact
      }
    }

    this.#actions.setAttribute('phone', firstPhone)
    this.#actions.setAttribute('website', firstWebsite)
    this.#actions.setAttribute('email', firstEmail)
  }

  #updateTabContent() {
    // No longer needed since we use slots
    this.#updateTabVisibility()
  }

  #updateTabVisibility() {
    if (this.#currentTab === 0) {
      this.#infoContainer.style.display = 'block'
      this.#optionsContainer.style.display = 'none'
    } else {
      this.#infoContainer.style.display = 'none'
      this.#optionsContainer.style.display = 'block'
    }
  }

  #onSlotChange = () => {
    this.#updateActionsFromSlottedChildren()
  }

  #onTabChange = (event: CustomEvent) => {
    this.#currentTab = event.detail
    this.#updateTabVisibility()
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-channel', PhonePreviewRcsChannel)

type RcsChannelProps = {
  name?: string,
  description?: string,
  color?: string,
  banner?: string,
  logo?: string,
}

type RcsChannelElementProps = Partial<{ [K in keyof RcsChannelProps]: RcsChannelProps[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-channel': RcsChannelElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-channel': RcsChannelElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
