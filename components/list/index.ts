import {
  defineCustomElement,
  NectaryElement,
} from '../utils'
import templateHTML from './template.html?raw'

export * from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

export class List extends NectaryElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.setAttribute('role', 'list')
  }
}

defineCustomElement('sinch-list', List)
