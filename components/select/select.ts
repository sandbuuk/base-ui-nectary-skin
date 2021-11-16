import { defineCustomElement, getEventHandler } from '../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select', class extends HTMLElement {
  $input: HTMLSelectElement
  $label: HTMLLabelElement
  $optionalText: HTMLSpanElement
  $additionalText: HTMLSpanElement
  $invalidText: HTMLSpanElement
  onChange!: (e: any) => void

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$input = shadowRoot.querySelector('#input')!
    this.$label = shadowRoot.querySelector('#label')!
    this.$optionalText = shadowRoot.querySelector('#optional')!
    this.$additionalText = shadowRoot.querySelector('#additional')!
    this.$invalidText = shadowRoot.querySelector('#invalid')!

    this.$input.addEventListener('input', this.onInput)

    const slot: HTMLSlotElement = shadowRoot.querySelector('slot[name="select"]')!

    slot.addEventListener('slotchange', () => {
      const $fragment = document.createDocumentFragment()

      for (const node of slot.assignedNodes()) {
        if (node instanceof HTMLElement && node.tagName === 'SINCH-SELECT-OPTION') {
          const $option = document.createElement('option')

          $option.textContent = node.getAttribute('text') ?? ''
          $option.value = node.getAttribute('value') ?? ''

          const disabledAttributeValue = node.getAttribute('disabled')

          $option.disabled = disabledAttributeValue === '' || Boolean(disabledAttributeValue)

          $fragment.appendChild($option)
        }
      }

      this.$input.replaceChildren($fragment)
    })
  }

  disconnectedCallback() {
    this.$input.removeEventListener('click', this.onInput)
  }

  static get observedAttributes() {
    return [
      'value',
      'label',
      'optionaltext',
      'additionaltext',
      'invalidtext',
      'disabled',
    ]
  }

  set value(value: string) {
    this.setAttribute('value', value)
  }

  get value(): string {
    return this.getAttribute('value') ?? ''
  }

  set placeholder(value: string | undefined) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('placeholder', value)
    } else {
      this.removeAttribute('placeholder')
    }
  }

  get placeholder(): string {
    return this.getAttribute('placeholder') ?? ''
  }

  set label(value: string) {
    this.setAttribute('label', value)
  }

  get label(): string {
    return this.getAttribute('label') ?? ''
  }

  set optionalText(value: string) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('optionaltext', value)
    } else {
      this.removeAttribute('optionaltext')
    }
  }

  get optionalText(): string {
    return this.getAttribute('optionaltext') ?? ''
  }

  set additionalText(value: string) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('additionaltext', value)
    } else {
      this.removeAttribute('additionaltext')
    }
  }

  get additionalText(): string {
    return this.getAttribute('additionaltext') ?? ''
  }

  set invalidText(value: string | undefined) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('invalidtext', value)
    } else {
      this.removeAttribute('invalidtext')
    }
  }

  get invalidText(): string {
    return this.getAttribute('invalidtext') ?? ''
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

  attributeChangedCallback(name: string, _: string, newVal: string) {
    switch (name) {
      case 'value': {
        this.$input.value = newVal

        break
      }

      case 'label': {
        this.$label.textContent = newVal

        break
      }

      case 'optionaltext': {
        this.$optionalText.textContent = newVal

        break
      }

      case 'additionaltext': {
        this.$additionalText.textContent = newVal

        break
      }

      case 'invalidtext': {
        this.$invalidText.textContent = newVal

        break
      }

      case 'disabled': {
        this.$input.disabled = newVal === '' || Boolean(newVal)

        break
      }
    }
  }

  onInput = (e: Event) => {
    const onChange = getEventHandler(this, 'onChange')

    if (onChange != null) {
      onChange(this.$input.value)
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.$input.value,
      })
    )

    this.$input.value = this.value

    e.stopPropagation()
  }
})

export type TSinchSelect = {
  value: string,
  label: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  onChange: (value: string) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select': TSinchSelect,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select': HTMLElement & TSinchSelect,
  }
}
