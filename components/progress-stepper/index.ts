import {
  isProgressStepperItemActive,
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
import type { TSinchProgressStepper } from './types'
import type { NectaryComponentReact, NectaryComponentVanilla, TRect } from '../types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class ProgressStepper extends NectaryElement {
  #$slot: HTMLSlotElement
  #controller: AbortController | null = null
  #$items: HTMLElement[] = []
  #currentActiveDescendantIndex = -1
  #isGoingToFocusItem = false

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

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
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

    if (target !== null && isProgressStepperItemActive(target)) {
      this.dispatchEvent(new CustomEvent('-change', {
        detail: getAttribute(target, 'value'),
      }))
    }
  }

  #onValueChange(value: string | null) {
    for (const $item of this.#$items) {
      const isChecked = value === getAttribute($item, 'value')

      setProgressStepperItemChecked($item, isChecked)
    }

    this.#resetActiveDescendant()
  }

  #focusNextItem() {
    for (let i = 0; i < this.#$items.length; i++) {
      const nextIndex = (this.#currentActiveDescendantIndex + 1 + i) % this.#$items.length
      const item = this.#$items[nextIndex]

      if (isProgressStepperItemActive(item)) {
        setProgressStepperItemActiveDescendant(item, true)
        this.#isGoingToFocusItem = true
        item.focus()

        if (this.#currentActiveDescendantIndex >= 0) {
          setProgressStepperItemActiveDescendant(this.#$items[this.#currentActiveDescendantIndex], false)
        }

        this.#currentActiveDescendantIndex = nextIndex

        break
      }
    }
  }

  #focusPrevItem() {
    for (let i = 0; i < this.#$items.length; i++) {
      const nextIndex = (this.#currentActiveDescendantIndex - i - 1 + this.#$items.length) % this.#$items.length
      const item = this.#$items[nextIndex]

      if (isProgressStepperItemActive(item)) {
        setProgressStepperItemActiveDescendant(item, true)
        this.#isGoingToFocusItem = true
        item.focus()

        if (this.#currentActiveDescendantIndex >= 0) {
          setProgressStepperItemActiveDescendant(this.#$items[this.#currentActiveDescendantIndex], false)
        }

        this.#currentActiveDescendantIndex = nextIndex

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

    this.#resetActiveDescendant()
  }

  #getCheckedItemIndex(): number {
    for (let i = 0; i < this.#$items.length; i++) {
      if (isProgressStepperItemChecked(this.#$items[i])) {
        return i
      }
    }

    return -1
  }

  #getFirstActiveItemIndex(): number {
    for (let i = 0; i < this.#$items.length; i++) {
      if (isProgressStepperItemActive(this.#$items[i])) {
        return i
      }
    }

    return -1
  }

  #resetActiveDescendant() {
    // Remove active-descendant
    if (this.#currentActiveDescendantIndex >= 0) {
      setProgressStepperItemActiveDescendant(this.#$items[this.#currentActiveDescendantIndex], false)
    }

    this.#currentActiveDescendantIndex = this.#getCheckedItemIndex()

    if (this.#currentActiveDescendantIndex >= 0) {
      setProgressStepperItemActiveDescendant(this.#$items[this.#currentActiveDescendantIndex], true)

      return
    }

    this.#currentActiveDescendantIndex = this.#getFirstActiveItemIndex()

    if (this.#currentActiveDescendantIndex >= 0) {
      setProgressStepperItemActiveDescendant(this.#$items[this.#currentActiveDescendantIndex], true)
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

  #onOptionBlur = () => {
    if (this.#isGoingToFocusItem) {
      this.#isGoingToFocusItem = false

      return
    }

    this.#resetActiveDescendant()
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }
}

defineCustomElement('sinch-progress-stepper', ProgressStepper)

declare global {
  interface NectaryComponentMap {
    'sinch-progress-stepper': TSinchProgressStepper,
  }

  interface HTMLElementTagNameMap {
    'sinch-progress-stepper': NectaryComponentVanilla<'sinch-progress-stepper'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-progress-stepper': NectaryComponentReact<'sinch-progress-stepper'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-progress-stepper': NectaryComponentReact<'sinch-progress-stepper'>,
    }
  }
}
