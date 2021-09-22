import { defineCustomElement, getEventHandler } from '../utils'

const template = document.createElement('template')

template.innerHTML = `
<style>
  button {
    background-color: white;
    color: var(--sinch-button-text-color);
  }
</style>
<button/>
`

defineCustomElement('sinch-button', class extends HTMLElement {
  button: HTMLButtonElement
  onClick!: () => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.button = shadowRoot.querySelector('button')!

    this.button.addEventListener('click', this.#onClick)
  }

  static get observedAttributes() {
    return ['value']
  }

  set value(value: string) {
    this.setAttribute('value', value)
  }

  get value() {
    return this.getAttribute('value') ?? ''
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    if (name === 'value') {
      this.button.textContent = newVal
    }
  }

  disconnectedCallback() {
    this.button.removeEventListener('click', this.#onClick)
  }

  #onClick = (e: MouseEvent) => {
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

export type TSinchButton = {
  value: string,
  onClick: () => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-button': TSinchButton
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-button': HTMLElement & TSinchButton
  }
}
