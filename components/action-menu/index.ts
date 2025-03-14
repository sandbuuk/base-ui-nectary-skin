import { isSinchActionMenuOption } from '../action-menu-option/utils'
import {
  attrValueToPixels,
  defineCustomElement,
  getBooleanAttribute,
  getIntegerAttribute,
  NectaryElement,
  subscribeContext,
  updateBooleanAttribute,
  updateIntegerAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchActionMenuElement, TSinchActionMenuReact } from './types'
import type { TSinchActionMenuOptionElement } from '../action-menu-option/types'
import type { TContextKeydown, TContextVisibility } from '../utils'

const ITEM_HEIGHT = 40
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-action-menu', class extends NectaryElement {
  #$optionSlot: HTMLSlotElement
  #$listbox: HTMLElement
  #controller: AbortController | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$optionSlot = shadowRoot.querySelector('slot')!
    this.#$listbox = shadowRoot.querySelector('#listbox')!
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.setAttribute('role', 'listbox')
    this.setAttribute('tabindex', '0')
    this.addEventListener('keydown', this.#onListboxKeyDown, { signal })
    this.addEventListener('blur', this.#onListboxBlur, { signal })
    this.#$listbox.addEventListener('click', this.#onListboxClick, { signal })
    subscribeContext(this, 'keydown', this.#onContextKeyDown, signal)
    subscribeContext(this, 'visibility', this.#onContextVisibility, signal)
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['rows']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    switch (name) {
      case 'rows': {
        this.#$listbox.style.maxHeight = attrValueToPixels(newVal, { min: 1, itemSizeMultiplier: ITEM_HEIGHT })

        break
      }
    }
  }

  set rows(value: number | null) {
    updateIntegerAttribute(this, 'rows', value)
  }

  get rows() {
    return getIntegerAttribute(this, 'rows', null)
  }

  #onListboxBlur = () => {
    this.#selectOption(null)
  }

  #onListboxClick = (e: Event) => {
    this.focus()

    if (isSinchActionMenuOption(e.target)) {
      this.#selectOption(e.target)
    }
  }

  #onListboxKeyDown = (e: KeyboardEvent) => {
    this.#handleKeydown(e)
  }

  #onContextKeyDown = (e: CustomEvent<TContextKeydown>) => {
    this.#handleKeydown(e.detail)
  }

  #onContextVisibility = (e: CustomEvent<TContextVisibility>) => {
    if (!e.detail) {
      this.#selectOption(null)
      this.#$listbox.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  #handleKeydown(e: TContextKeydown) {
    switch (e.code) {
      case 'Enter':
      case 'Space': {
        const $opt = this.#findSelectedOption()

        if ($opt !== null) {
          e.preventDefault()
          $opt.click()
        }

        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        this.#selectOption(this.#getPrevOption())

        break
      }
      case 'ArrowDown': {
        e.preventDefault()
        this.#selectOption(this.#getNextOption())

        break
      }
    }
  }

  #getFirstOption() {
    const $options = this.#getOptionElements()

    for (let i = 0; i < $options.length; i++) {
      const el = $options[i]

      if (!getBooleanAttribute(el, 'disabled')) {
        return el
      }
    }

    return null
  }

  #getLastOption() {
    const $options = this.#getOptionElements()

    for (let i = $options.length - 1; i >= 0 ; i--) {
      const el = $options[i]

      if (!getBooleanAttribute(el, 'disabled')) {
        return el
      }
    }

    return null
  }

  #getNextOption() {
    const index = this.#getSelectedOptionIndex()

    if (index !== null) {
      const $options = this.#getOptionElements()

      for (let i = 1; i <= $options.length; i++) {
        const el = $options[(i + index) % $options.length]

        if (!getBooleanAttribute(el, 'disabled')) {
          return el
        }
      }
    }

    return this.#getFirstOption()
  }

  #getPrevOption() {
    const index = this.#getSelectedOptionIndex()

    if (index !== null) {
      const $options = this.#getOptionElements()

      for (let i = 1; i <= $options.length; i++) {
        const el = $options[(index - i + $options.length) % $options.length]

        if (!getBooleanAttribute(el, 'disabled')) {
          return el
        }
      }
    }

    return this.#getLastOption()
  }

  #selectOption($option: TSinchActionMenuOptionElement | null) {
    const hasRows = this.hasAttribute('rows')

    for (const $op of this.#getOptionElements()) {
      const isSelected = $op === $option

      // Select / Unselect
      updateBooleanAttribute($op, 'data-selected', isSelected)

      if (isSelected && hasRows) {
        $op.scrollIntoView?.({ block: 'nearest' })
      }
    }
  }

  #getOptionElements(): TSinchActionMenuOptionElement[] {
    return this.#$optionSlot.assignedElements() as TSinchActionMenuOptionElement[]
  }

  #getSelectedOptionIndex(): number | null {
    const elements = this.#getOptionElements()

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i]

      if (!getBooleanAttribute(el, 'disabled') && getBooleanAttribute(el, 'data-selected')) {
        return i
      }
    }

    return null
  }

  #findSelectedOption(): TSinchActionMenuOptionElement | null {
    const elements = this.#getOptionElements()

    for (const el of elements) {
      if (getBooleanAttribute(el, 'data-selected')) {
        return el
      }
    }

    return null
  }

  get focusable() {
    return true
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-action-menu': TSinchActionMenuElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-action-menu': TSinchActionMenuReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-action-menu': TSinchActionMenuReact,
    }
  }
}
