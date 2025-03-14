import '../title'
import '../text'
import {
  cloneNode,
  defineCustomElement,
  getLiteralAttribute,
  getRect,
  NectaryElement,
  shouldReduceMotion,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { originValues } from './utils'
import type {
  TSinchToastManagerElement,
  TSinchToastManagerOrigin,
  TSinchToastManagerReact,
} from './types'
import type { TRect } from '../types'

const DURATION_ADD = 250
const DURATION_REMOVE = 250
const ITEMS_GAP = 16
const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-toast-manager', class extends NectaryElement {
  #$slot: HTMLSlotElement
  #$list: HTMLElement
  #map: WeakMap<Element, Element> = new WeakMap()
  #shouldReduceMotion: boolean
  #animations = new Set<Animation>()
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$slot = shadowRoot.querySelector('slot')!
    this.#$list = shadowRoot.querySelector('#list')!
    this.#shouldReduceMotion = shouldReduceMotion()
  }

  connectedCallback() {
    this.#$slot.addEventListener('slotchange', this.#onSlotChange)
  }

  disconnectedCallback() {
    this.#$slot.removeEventListener('slotchange', this.#onSlotChange)
    this.#clear()
  }

  get origin(): TSinchToastManagerOrigin {
    return getLiteralAttribute(this, originValues, 'origin', 'bottom-right')
  }

  set origin(value: TSinchToastManagerOrigin) {
    updateLiteralAttribute(this, originValues, 'origin', value)
  }

  get containerRect(): TRect {
    return getRect(this.#$list)
  }

  nthActionRect(nth: number): TRect | null {
    const item = this.#$list.children[nth]?.querySelector('[slot=action]')

    return item != null ? getRect(item) : null
  }

  nthCloseRect(nth: number): TRect | null {
    const item = this.#$list.children[nth]?.querySelector('[slot=close]')

    return item != null ? getRect(item) : null
  }

  #onAnimateAdd(item: HTMLElement, index: number, height: number) {
    const duration = this.#shouldReduceMotion ? 0 : DURATION_ADD

    const addAnim = item.animate({
      height: ['0', `${height + ITEMS_GAP}px`],
      opacity: [0, 1],
    },
    {
      delay: index * duration,
      duration,
      iterations: 1,
      fill: 'forwards',
    })

    this.#storeAnimation(addAnim)
  }

  #onAnimateRemove(item: HTMLElement, index: number) {
    const rect = item.getBoundingClientRect()
    const duration = this.#shouldReduceMotion ? 0 : DURATION_REMOVE
    const indexInQueue = item.hasAttribute('data-delete-now') ? 0 : index

    const heightAnim = item.animate({
      height: [`${rect.height}px`, '0'],
    },
    {
      delay: duration + indexInQueue * duration,
      duration,
      iterations: 1,
      fill: 'forwards',
    })

    const opacityAnim = item.animate({
      opacity: [1, 0],
    },
    {
      delay: indexInQueue * duration,
      duration,
      iterations: 1,
      fill: 'forwards',
    })

    item.setAttribute('data-deleting', '')

    this.#storeAnimation(heightAnim, () => item.remove())
    this.#storeAnimation(opacityAnim)
  }

  #onSlotChange = () => {
    /* Remove items */
    const slotItems = this.#$slot.assignedElements()
    const listItems = Array.from(this.#$list.children) as HTMLElement[]

    let removeIndex = 0

    for (const item of listItems) {
      if (item.hasAttribute('data-deleting')) {
        ++removeIndex
        continue
      }

      const orig = this.#map.get(item)

      if (orig != null && slotItems.includes(orig)) {
        continue
      }

      this.#map.delete(item)

      if (orig != null) {
        this.#map.delete(orig)
      }

      this.#unsubscribeChildren(item)
      this.#onAnimateRemove(item, removeIndex)
      ++removeIndex
    }

    /* Add items */
    let addIndex = 0

    for (const item of slotItems) {
      if (this.#map.has(item)) {
        continue
      }

      const cloned = cloneNode(item, true)
      const rect = item.getBoundingClientRect()
      const wrapper = document.createElement('div')

      wrapper.className = 'item-wrapper'
      wrapper.appendChild(cloned)

      this.#$list.appendChild(wrapper)
      this.#map.set(item, wrapper)
      this.#map.set(wrapper, item)

      this.#subscribeChildren(cloned)
      this.#onAnimateAdd(wrapper, addIndex, rect.height)

      addIndex++
    }
  }

  #storeAnimation(anim: Animation, cb?: () => void) {
    const onAnimEnd = () => {
      this.#animations.delete(anim)

      cb?.()

      anim.removeEventListener('finish', onAnimEnd)
      anim.removeEventListener('remove', onAnimEnd)
      anim.removeEventListener('cancel', onAnimEnd)
    }

    anim.addEventListener('finish', onAnimEnd)
    anim.addEventListener('remove', onAnimEnd)
    anim.addEventListener('cancel', onAnimEnd)

    this.#animations.add(anim)
  }

  #clear() {
    const listItems = Array.from(this.#$list.children) as HTMLElement[]

    for (const item of listItems) {
      this.#map.delete(item)
      this.#unsubscribeChildren(item)
      item.remove()
    }

    for (const anim of this.#animations) {
      anim.cancel()
    }
  }

  #subscribeChildren(item: Element) {
    item.querySelector('[slot=close]')?.addEventListener('-click', this.#onCloneCloseClick)
    item.querySelector('[slot=action]')?.addEventListener('-click', this.#onCloneActionClick)
  }

  #unsubscribeChildren(item: Element) {
    item.querySelector('[slot=close]')?.removeEventListener('-click', this.#onCloneCloseClick)
    item.querySelector('[slot=action]')?.removeEventListener('-click', this.#onCloneActionClick)
  }

  #onCloneCloseClick = (e: Event) => {
    const item = (e.target as HTMLElement).parentElement?.parentElement

    if (item != null) {
      item.setAttribute('data-delete-now', '')
      this.#map.get(item)?.querySelector('[slot=close]')?.dispatchEvent(new CustomEvent('-click'))
    }
  }

  #onCloneActionClick = (e: Event) => {
    const item = (e.target as HTMLElement).parentElement?.parentElement

    if (item != null) {
      this.#map.get(item)?.querySelector('[slot=action]')?.dispatchEvent(new CustomEvent('-click'))
    }
  }
})

declare global {
  interface HTMLElementTagNameMap {
    'sinch-toast-manager': TSinchToastManagerElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-toast-manager': TSinchToastManagerReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-toast-manager': TSinchToastManagerReact,
    }
  }
}
