import { defineCustomElement, getEventHandler } from '../utils'

const template = document.createElement('template')

template.innerHTML = `
<style>
  input {
    width: 100%;
    background-color: white;
    color: var(--sinch-input-text-color);
  }
</style>
<input type="text"/>
`

defineCustomElement('sinch-input', class extends HTMLElement {
  input: HTMLInputElement
  onChange!: (e: any) => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.input = shadowRoot.querySelector('input')!

    this.input.addEventListener('input', this.#onInput)
    // this.input.addEventListener('beforeinput', (e) => {
    //   console.log(e)
    //   e.stopPropagation()
    //   e.preventDefault()
    // })
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
      this.input.value = newVal
    }
  }

  #onInput = (e: Event) => {
    const onChange = getEventHandler(this, 'onChange')

    if (onChange != null) {
      onChange(this.input.value)
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.input.value
      })
    )

    this.input.value = this.value

    e.stopPropagation()
  }
})

export type TSinchInput = {
  value: string,
  onChange: (value: string) => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-input': TSinchInput
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-input': HTMLElement & TSinchInput
  }
}
