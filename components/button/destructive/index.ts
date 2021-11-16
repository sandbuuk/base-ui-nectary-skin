import { defineCustomElement, getEventHandler } from '../../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-button-destructive', class extends HTMLElement {
  button: HTMLButtonElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.button = shadowRoot.querySelector('button')!

    this.button.addEventListener('click', this.onClick)
  }

  static get observedAttributes() {
    return ['text', 'disabled']
  }

  set text(text: string) {
    this.setAttribute('text', text)
  }

  get text(): string {
    return this.getAttribute('text') ?? ''
  }

  set disabled(isDisabled: boolean | undefined) {
    if (isDisabled === true) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get disabled(): boolean {
    const attrValue = this.getAttribute('disabled')

    return attrValue === '' || Boolean(attrValue)
  }

  set small(isSmall: boolean | undefined) {
    if (isSmall === true) {
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
      case 'text': {
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
    this.button.removeEventListener('click', this.onClick)
  }

  onClick = (e: MouseEvent) => {
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

export type TSinchButtonDestructive = {
  text: string,
  disabled?: boolean,
  small?: boolean,
  onClick: () => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-destructive': TSinchButtonDestructive,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button-destructive': HTMLElement & TSinchButtonDestructive,
  }
}
