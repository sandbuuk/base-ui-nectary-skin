import { defineCustomElement, getEventHandler } from '../utils'

const template = document.createElement('template')

template.innerHTML = `
<style>
  input {
    background-color: white;
    color: blue;
  }
</style>
<input type="checkbox"/>
`

defineCustomElement('sinch-checkbox', class extends HTMLElement {
  input: HTMLInputElement
  onChange!: (isChecked: boolean) => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.input = shadowRoot.querySelector('input')!

    this.input.addEventListener('input', this.#onInput)
  }

  static get observedAttributes() {
    return ['ischecked']
  }

  set isChecked(isChecked: boolean) {
    if (isChecked) {
      this.setAttribute('ischecked', 'true')
    } else {
      this.removeAttribute('ischecked')
    }
  }

  get isChecked() {
    return this.getAttribute('ischecked') === 'true'
  }

  attributeChangedCallback(name: string, oldVal: boolean | string, newVal: boolean | string) {
    if (name === 'ischecked') {
      this.input.checked = newVal === true || newVal === 'true'
    }
  }

  #onInput = (e: Event) => {
    const onChange = getEventHandler(this, 'onChange')

    if (onChange != null) {
      onChange(this.input.checked)
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.input.checked
      })
    )

    this.input.checked = this.isChecked

    e.stopPropagation()
  }
})

export type TSinchCheckbox = {
  isChecked: boolean,
  onChange: (isChecked: boolean) => void
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-checkbox': TSinchCheckbox
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-checkbox': HTMLElement & TSinchCheckbox
  }
}
