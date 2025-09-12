import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  getTargetByAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import { createKeyboardNavigation } from '../utils/control-keyboard-navigation'
import templateHTML from './template.html?raw'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class SegmentedControl extends NectaryElement {
  #$slot: HTMLSlotElement
  #controller: AbortController | null = null
  #enabledOptions: Element[] = []
  #keyboardNav = createKeyboardNavigation()

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$slot = shadowRoot.querySelector('slot')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const options: AddEventListenerOptions = { signal }

    this.setAttribute('role', 'tablist')
    this.setAttribute('aria-orientation', 'horizontal')
    this.#$slot.addEventListener('slotchange', this.#onSlotChange, options)
    this.#$slot.addEventListener('click', this.#onOptionClick, options)
    this.#$slot.addEventListener('keydown', this.#onOptionKeydown, options)
    this.addEventListener('-change', this.#onChangeReactHandler)

    this.#updateEnabledOptions()
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange(newVal)

        break
      }
    }
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  #updateEnabledOptions = () => {
    this.#enabledOptions = Array.from(this.#$slot.assignedElements()).filter(
      (option) => !getBooleanAttribute(option, 'disabled')
    )
  }

  #onSlotChange = () => {
    this.#onValueChange(this.value)
    this.#updateEnabledOptions()
  }

  #onOptionClick = (e: Event) => {
    const target = getTargetByAttribute(e, 'value')

    if (target === null || getBooleanAttribute(target, 'disabled')) {
      return
    }

    const value = getAttribute(target, 'value', '')

    this.dispatchEvent(
      new CustomEvent('-change', { detail: value })
    )
  }

  #onOptionKeydown = (e: KeyboardEvent) => {
    this.#keyboardNav.handleKeyboardNavigation(e, this.#enabledOptions)
  }

  #onValueChange(value: string | null) {
    for (const $option of this.#$slot.assignedElements()) {
      const isChecked = !getBooleanAttribute($option, 'disabled') && value === getAttribute($option, 'value', '')

      updateBooleanAttribute($option, 'data-checked', isChecked)
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
    getReactEventHandler(this, 'onChange')?.(e)
  }
}

defineCustomElement('sinch-segmented-control', SegmentedControl)
