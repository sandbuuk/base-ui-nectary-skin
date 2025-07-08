import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html'
import type React from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

/**
 * Container for channel previews in a styled phone container.
 * This container uses a custom scaling where the internal elements are scaled to fit the container from a fixed size.
 * Because of the fixed size, absolute units (px) are preferred over relative units (rem, em) for the internal elements.
 *
 * @param props.locale Clock locale.
 * @param props.clock Clock `Intl.DateTimeFormat` options.
 * @param props.children Content to display in the phone container.
 */
export class PhonePreview extends NectaryElement {
  #clockElement: HTMLSpanElement
  #resizeObserver: ResizeObserver
  #clockInterval: number | null = null
  #formatter: Intl.DateTimeFormat

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#clockElement = shadowRoot.querySelector('#clock')!

    this.#resizeObserver = new ResizeObserver(() => {
      this.#updateScale()
    })

    this.#formatter = new Intl.DateTimeFormat(this.locale, this.clockOptions)
  }

  connectedCallback() {
    super.connectedCallback()

    const section = this.shadowRoot!.querySelector('section')!

    this.#resizeObserver.observe(this)
    this.#resizeObserver.observe(section)

    this.#startClock()
    this.#updateClock()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#resizeObserver.disconnect()
    this.#stopClock()
  }

  static get observedAttributes() {
    return ['locale', 'clock']
  }

  attributeChangedCallback() {
    this.#formatter = new Intl.DateTimeFormat(this.locale, this.clockOptions)
    this.#updateClock()
  }

  get locale(): string {
    return this.getAttribute('locale') ?? 'en-US'
  }

  set locale(value: string) {
    this.setAttribute('locale', value)
  }

  get clockOptions(): Intl.DateTimeFormatOptions {
    const clockAttr = this.getAttribute('clock')

    if (clockAttr !== null && clockAttr !== '') {
      try {
        return JSON.parse(clockAttr)
      } catch {
        // Fallback to default if JSON parsing fails
      }
    }

    return { hour: '2-digit', minute: '2-digit' }
  }

  set clockOptions(value: Intl.DateTimeFormatOptions) {
    this.setAttribute('clock', JSON.stringify(value))
  }

  #updateScale() {
    const style = getComputedStyle(this)
    const baseSize = parseFloat(style.getPropertyValue('--base-size'))
    const currentSize = this.getBoundingClientRect().width

    this.style.setProperty('--scale', `${currentSize / baseSize}`)
  }

  #startClock() {
    this.#stopClock()
    this.#clockInterval = window.setInterval(() => {
      this.#updateClock()
    }, 60000)
  }

  #stopClock() {
    if (this.#clockInterval !== null) {
      clearInterval(this.#clockInterval)
      this.#clockInterval = null
    }
  }

  #updateClock() {
    if (this.isDomConnected) {
      this.#clockElement.textContent = this.#formatter.format(new Date())
    }
  }
}

defineCustomElement('sinch-labs-phone-preview', PhonePreview)

type Props = {
  locale?: string,
  clock?: Intl.DateTimeFormatOptions | string,
}

type ElementProps = Partial<{ [K in keyof Props]: Props[K] | string }>

declare global {
  interface HTMLElementTagNameMap {
    'sinch-labs-phone-preview': ElementProps & HTMLElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-phone-preview': ElementProps &
        React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement>,
    }
  }
}
