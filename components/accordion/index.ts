import {
  NectaryElement,
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getFirstCsvValue,
  getReactEventHandler,
  getTargetByAttribute,
  unpackCsv,
  updateAttribute,
  updateBooleanAttribute,
  updateCsv,
} from '../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-accordion', class extends NectaryElement {
  #$slot: HTMLSlotElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$slot = shadowRoot.querySelector('slot')!
  }

  static get observedAttributes() {
    return ['value']
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.#$slot.addEventListener('slotchange', this.#onSlotChange, options)
    this.#$slot.addEventListener('click', this.#onOptionClick, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set multiple(isMultiple: boolean) {
    updateBooleanAttribute(this, 'multiple', isMultiple)
  }

  get multiple() {
    return getBooleanAttribute(this, 'multiple')
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange(newVal ?? '')

        break
      }
    }
  }

  #onSlotChange = () => {
    this.#onValueChange(this.value)
  }

  #onOptionClick = (e: Event) => {
    const target = getTargetByAttribute(e, 'value')

    if (target === null || getBooleanAttribute(target, 'disabled')) {
      return
    }

    const value = getAttribute(target, 'value', '')
    const result = this.multiple
      ? updateCsv(this.value, value, !getBooleanAttribute(target, 'data-checked'))
      : getBooleanAttribute(target, 'data-checked') ? '' : value

    this.dispatchEvent(
      new CustomEvent('-change', { detail: result })
    )
  }

  #onValueChange(csv: string) {
    if (this.multiple) {
      const values = unpackCsv(csv)

      for (const $option of this.#$slot.assignedElements()) {
        const isChecked = !getBooleanAttribute($option, 'disabled') && values.includes(getAttribute($option, 'value', ''))

        updateBooleanAttribute($option, 'data-checked', isChecked)
      }
    } else {
      const value = getFirstCsvValue(csv)

      for (const $option of this.#$slot.assignedElements()) {
        const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

        updateBooleanAttribute($option, 'data-checked', isChecked)
      }
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})
