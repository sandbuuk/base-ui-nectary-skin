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

    this.#updateUI()
    this.#updateTabContent()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#controller?.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['name', 'description', 'color', 'banner', 'logo', 'phones', 'websites', 'emails']
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
      case 'phones':
      case 'websites':
      case 'emails':
        this.#updateUI()
        this.#updateTabContent()

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

  get phones(): { label: string, number: string }[] {
    try {
      const attribute = this.getAttribute('phones')

      return JSON.parse(attribute ?? '[]')
    } catch {
      return []
    }
  }

  set phones(value: { label: string, number: string }[]) {
    this.setAttribute('phones', JSON.stringify(value))
  }

  get websites(): { label: string, url: string }[] {
    try {
      const attribute = this.getAttribute('websites')

      return JSON.parse(attribute ?? '[]')
    } catch {
      return []
    }
  }

  set websites(value: { label: string, url: string }[]) {
    this.setAttribute('websites', JSON.stringify(value))
  }

  get emails(): { label: string, address: string }[] {
    try {
      const attribute = this.getAttribute('emails')

      return JSON.parse(attribute ?? '[]')
    } catch {
      return []
    }
  }

  set emails(value: { label: string, address: string }[]) {
    this.setAttribute('emails', JSON.stringify(value))
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

    // Update actions component
    const firstPhone = this.phones.at(0)?.number ?? ''
    const firstWebsite = this.websites.at(0)?.url ?? ''
    const firstEmail = this.emails.at(0)?.address ?? ''

    this.#actions.setAttribute('phone', firstPhone)
    this.#actions.setAttribute('website', firstWebsite)
    this.#actions.setAttribute('email', firstEmail)

    // Update tabs color
    this.#tabs.setAttribute('color', this.color)
  }

  #updateTabContent() {
    if (!this.isDomConnected) {
      return
    }

    // Clear existing content
    this.#infoContainer.innerHTML = ''

    // Add contact options to info container
    this.phones.forEach(({ label, number }) => {
      const option = document.createElement('sinch-labs-phone-preview-rcs-channel-info-option')

      option.setAttribute('type', 'phone')
      option.setAttribute('contact', number)
      option.setAttribute('label', label)
      this.#infoContainer.appendChild(option)
    })

    this.websites.forEach(({ label, url }) => {
      const option = document.createElement('sinch-labs-phone-preview-rcs-channel-info-option')

      option.setAttribute('type', 'website')
      option.setAttribute('contact', url)
      option.setAttribute('label', label)
      this.#infoContainer.appendChild(option)
    })

    this.emails.forEach(({ label, address }) => {
      const option = document.createElement('sinch-labs-phone-preview-rcs-channel-info-option')

      option.setAttribute('type', 'email')
      option.setAttribute('contact', address)
      option.setAttribute('label', label)
      this.#infoContainer.appendChild(option)
    })

    // Show/hide content based on current tab
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

  #onTabChange = (event: CustomEvent) => {
    this.#currentTab = event.detail
    this.#updateTabVisibility()
  }
}

defineCustomElement('sinch-labs-phone-preview-rcs-channel', PhonePreviewRcsChannel)

type Props = {
  name?: string,
  description?: string,
  color?: string,
  banner?: string,
  logo?: string,
  phones?: { label: string, number: string }[],
  websites?: { label: string, url: string }[],
  emails?: { label: string, address: string }[],
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview-rcs-channel': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview-rcs-channel': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
