import { defineCustomElement, NectaryElement } from '../utils'
import templateHTML from './template.html?raw'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class SkeletonItem extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

defineCustomElement('sinch-skeleton-item', SkeletonItem)
