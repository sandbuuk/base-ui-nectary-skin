import { defineCustomElement, getEventHandler } from '../../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button-primary', class extends HTMLElement {
  button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.button = shadowRoot.querySelector('button')!

    this.button.addEventListener('click', this.#onClick)
  }

  static get observedAttributes() {
    return ['value', 'disabled']
  }

  set value(value: string) {
    this.setAttribute('value', value)
  }

  get value(): string {
    return this.getAttribute('value') ?? ''
  }

  set disabled(value: boolean) {
    if (value) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get disabled(): boolean {
    const attrValue = this.getAttribute('disabled')

    return attrValue === '' || Boolean(attrValue)
  }

  set small(value: boolean) {
    if (value) {
      this.setAttribute('small', '')
    } else {
      this.removeAttribute('small')
    }
  }

  get small(): boolean {
    const attrValue = this.getAttribute('small')

    return attrValue === '' || Boolean(attrValue)
  }

  attributeChangedCallback(name: string, _: unknown, newVal: unknown) {
    switch (name) {
      case 'value': {
        this.button.textContent = String(newVal)

        break
      }
      case 'disabled': {
        this.button.disabled = newVal === '' || Boolean(newVal)

        break
      }
    }
  }

  disconnectedCallback() {
    this.button.removeEventListener('click', this.#onClick)
  }

  #onClick(e: MouseEvent) {
    const onClick = getEventHandler(this, 'onClick')

    if (onClick != null) {
      onClick()
    }

    this.dispatchEvent(
      new CustomEvent('click')
    )

    e.stopPropagation()
  }
})

export type TSinchButtonPrimary = {
  value: string,
  disabled?: boolean,
  small?: boolean,
  onClick: () => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-primary': TSinchButtonPrimary,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button-primary': HTMLElement & TSinchButtonPrimary,
  }
}
