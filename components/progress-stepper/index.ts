import {
  isProgressStepperItemActive,
  isProgressStepperItemActiveDescendant,
  isProgressStepperItemChecked,
  setProgressStepperItemActiveDescendant,
  setProgressStepperItemChecked,
  setProgressStepperItemStatus,
} from '../progress-stepper-item/utils'
import {
  defineCustomElement,
  getAttribute,
  getReactEventHandler,
  getRect,
  getTargetByAttribute,
  NectaryElement,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TSinchProgressStepperElement, TSinchProgressStepperReact } from './types'
import type { TRect } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-progress-stepper', class extends NectaryElement {
  #$slot: HTMLSlotElement
  #controller: AbortController | null = null
  #$items: HTMLElement[] = []

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

    this.role = 'tablist'
    this.#$slot.addEventListener('click', this.#onOptionClick, options)
    this.#$slot.addEventListener('keydown', this.#onOptionKeydown, options)
    this.#$slot.addEventListener('focusout', this.#onOptionBlur, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)

    queueMicrotask(() => {
      this.#$slot.addEventListener('slotchange', this.#onSlotChange, options)
      this.#onSlotChange()
    })
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  static get observedAttributes() {
    return ['value', 'progressvalue']
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'value': {
        this.#onValueChange(newVal)

        break
      }
      case 'progressvalue': {
        this.#updateProgressValue()

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

  set progressValue(value: string) {
    updateAttribute(this, 'progressvalue', value)
  }

  get progressValue(): string {
    return getAttribute(this, 'progressvalue', '')
  }

  nthOptionRect(index: number): TRect | null {
    const $el = this.#$slot.assignedElements()[index]

    if ($el != null) {
      return getRect($el)
    }

    return null
  }

  #onSlotChange = () => {
    this.#$items = this.#$slot.assignedElements()as HTMLElement[]
    this.#onValueChange(this.value)
    this.#updateProgressValue()
  }

  #onOptionClick = (e: Event) => {
    const target = getTargetByAttribute(e, 'value')

    if (target !== null) {
      this.#dispatchChangeEvent(target)
    }
  }

  #onValueChange(value: string | null) {
    for (const $item of this.#$items) {
      const isChecked = value === getAttribute($item, 'value')

      setProgressStepperItemChecked($item, isChecked)
    }

    this.#resetActiveDescendant()
  }

  #dispatchChangeEvent($item: Element) {
    if (!isProgressStepperItemActive($item)) {
      return
    }

    this.dispatchEvent(
      new CustomEvent('-change', { detail: getAttribute($item, 'value') })
    )
  }

  #getActiveDescendantItemIndex() {
    for (let i = 0; i < this.#$items.length; i++) {
      if (isProgressStepperItemActiveDescendant(this.#$items[i])) {
        return i
      }
    }

    return -1
  }

  #focusNextItem() {
    const currentActiveDescendantIndex = this.#getActiveDescendantItemIndex()

    if (currentActiveDescendantIndex >= 0) {
      setProgressStepperItemActiveDescendant(this.#$items[currentActiveDescendantIndex], false)
    }

    for (let i = 0; i < this.#$items.length; i++) {
      const nextIndex = (currentActiveDescendantIndex + 1 + i) % this.#$items.length
      const item = this.#$items[nextIndex]

      if (isProgressStepperItemActive(item)) {
        setProgressStepperItemActiveDescendant(item, true)
        item.focus()

        break
      }
    }
  }

  #focusPrevItem() {
    const currentActiveDescendantIndex = this.#getActiveDescendantItemIndex()

    if (currentActiveDescendantIndex >= 0) {
      setProgressStepperItemActiveDescendant(this.#$items[currentActiveDescendantIndex], false)
    }

    for (let i = 0; i < this.#$items.length; i++) {
      const nextIndex = (currentActiveDescendantIndex - i - 1 + this.#$items.length) % this.#$items.length
      const item = this.#$items[nextIndex]

      if (isProgressStepperItemActive(item)) {
        setProgressStepperItemActiveDescendant(item, true)
        item.focus()

        break
      }
    }
  }

  #updateProgressValue() {
    const progressValue = this.progressValue
    const $items = this.#$slot.assignedElements()
    const $progressValueIndex = $items.findIndex((it) => getAttribute(it, 'value') === progressValue)

    for (let i = 0; i < $items.length; i++) {
      if ($progressValueIndex < 0 || $progressValueIndex < i) {
        setProgressStepperItemStatus($items[i], 'inactive')
      } else if ($progressValueIndex > i) {
        setProgressStepperItemStatus($items[i], 'complete')
      } else {
        setProgressStepperItemStatus($items[i], 'incomplete')
      }
    }
  }

  #findCheckedItem() {
    for (const $item of this.#$items) {
      if (isProgressStepperItemChecked($item)) {
        return $item
      }
    }

    return null
  }

  #findFirstActiveItem() {
    for (const $item of this.#$items) {
      if (isProgressStepperItemActive($item)) {
        return $item
      }
    }

    return null
  }

  #resetActiveDescendant() {
    // Remove active-descendant
    for (let i = 0; i < this.#$items.length;i++) {
      setProgressStepperItemActiveDescendant(this.#$items[i], false)
    }

    const $item = this.#findCheckedItem() ?? this.#findFirstActiveItem()

    if ($item !== null) {
      setProgressStepperItemActiveDescendant($item, true)
    }
  }

  #onOptionKeydown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Enter':
      case 'Space': {
        e.preventDefault()
        getTargetByAttribute(e, 'value')?.click()

        break
      }
      case 'ArrowRight': {
        e.preventDefault()
        this.#focusNextItem()

        break
      }
      case 'ArrowLeft': {
        e.preventDefault()
        this.#focusPrevItem()

        break
      }
    }
  }

  #onOptionBlur = (e: FocusEvent) => {
    const tgt = e.relatedTarget

    for (let i = 0; i < this.#$items.length; i++) {
      if (this.#$items[i] === tgt) {
        return
      }
    }

    this.#resetActiveDescendant()
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-progress-stepper': TSinchProgressStepperReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-progress-stepper': TSinchProgressStepperElement,
  }
}
