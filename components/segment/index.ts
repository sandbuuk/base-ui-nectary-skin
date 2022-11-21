import '../title'
import { getTitleLevelFromType } from '../title/utils'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getLiteralAttribute,
  getRect,
  isAttrTrue,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
  updateLiteralAttribute,
} from '../utils'
import templateHTML from './template.html'
import { assertSize, sizeValues } from './utils'
import type { TSinchTitleElement } from '../title/types'
import type { TRect } from '../types'
import type { TSinchSegmentElement, TSinchSegmentReact, TSinchSegmentSize } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-segment', class extends NectaryElement {
  #$caption: TSinchTitleElement
  #$previewSlot: HTMLSlotElement
  #$previewWrapper: HTMLElement
  #$infoSlot: HTMLSlotElement
  #$infoWrapper: HTMLElement
  #$collapseSlot: HTMLSlotElement
  #$collapseWrapper: HTMLElement
  #$actionSlot: HTMLSlotElement
  #$actionWrapper: HTMLElement

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$caption = shadowRoot.querySelector('#caption')!
    this.#$previewSlot = shadowRoot.querySelector('slot[name="preview"]')!
    this.#$infoSlot = shadowRoot.querySelector('slot[name="info"]')!
    this.#$collapseSlot = shadowRoot.querySelector('slot[name="collapse"]')!
    this.#$actionSlot = shadowRoot.querySelector('slot[name="action"]')!
    this.#$previewWrapper = shadowRoot.querySelector('#preview')!
    this.#$infoWrapper = shadowRoot.querySelector('#info')!
    this.#$collapseWrapper = shadowRoot.querySelector('#collapse')!
    this.#$actionWrapper = shadowRoot.querySelector('#action')!
  }

  connectedCallback() {
    this.#$previewSlot.addEventListener('slotchange', this.#onPreviewSlotChange)
    this.#$infoSlot.addEventListener('slotchange', this.#onInfoSlotChange)
    this.#$collapseSlot.addEventListener('slotchange', this.#onCollapseSlotChange)
    this.#$actionSlot.addEventListener('slotchange', this.#onActionSlotChange)

    this.#onPreviewSlotChange()
    this.#onInfoSlotChange()
    this.#onCollapseSlotChange()
    this.#onActionSlotChange()
  }

  disconnectedCallback() {
    this.#$previewSlot.removeEventListener('slotchange', this.#onPreviewSlotChange)
    this.#$infoSlot.removeEventListener('slotchange', this.#onInfoSlotChange)
    this.#$collapseSlot.removeEventListener('slotchange', this.#onCollapseSlotChange)
    this.#$actionSlot.removeEventListener('slotchange', this.#onActionSlotChange)
  }

  static get observedAttributes() {
    return ['caption', 'collapsed', 'size']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'caption': {
        updateAttribute(this.#$caption, 'text', newVal)

        break
      }

      case 'collapsed': {
        updateBooleanAttribute(this, 'collapsed', isAttrTrue(newVal))

        break
      }

      case 'size': {
        updateAttribute(this.#$caption, 'type', newVal)
        updateAttribute(this.#$caption, 'level', getTitleLevelFromType(newVal))
        if (process.env.NODE_ENV !== 'production') {
          assertSize(newVal, 'sinch-segment')
        }


        break
      }
    }
  }

  set caption(caption: string) {
    updateAttribute(this, 'caption', caption)
  }

  get caption(): string {
    return getAttribute(this, 'caption', '')
  }

  set collapsed(isChecked: boolean) {
    updateBooleanAttribute(this, 'collapsed', isChecked)
  }

  get collapsed() {
    return getBooleanAttribute(this, 'collapsed')
  }

  get size() {
    return getLiteralAttribute(this, sizeValues, 'size', 'm')
  }

  set size(value: TSinchSegmentSize) {
    updateLiteralAttribute(this, sizeValues, 'size', value)
  }

  get collapseButtonRect(): TRect | null {
    const $collapseButton = this.#$collapseSlot.assignedElements()[0]

    return $collapseButton != null ? getRect($collapseButton) : null
  }

  #onPreviewSlotChange = () => {
    setClass(this.#$previewWrapper, 'empty', this.#$previewSlot.assignedElements().length === 0)
  }

  #onInfoSlotChange = () => {
    setClass(this.#$infoWrapper, 'empty', this.#$infoSlot.assignedElements().length === 0)
  }

  #onCollapseSlotChange = () => {
    setClass(this.#$collapseWrapper, 'empty', this.#$collapseSlot.assignedElements().length === 0)
  }

  #onActionSlotChange = () => {
    setClass(this.#$actionWrapper, 'empty', this.#$actionSlot.assignedElements().length === 0)
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-segment': TSinchSegmentReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-segment': TSinchSegmentElement,
  }
}
