import {
  defineCustomElement,
  getAttribute,
  getRect,
  updateAttribute,
} from '../utils'
import templateHTML from './template.html'
import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

const template = document.createElement('template')

template.innerHTML = templateHTML

const getReactEventHandler = ($element: HTMLElement, handlerName: string): ((arg?: any) => void) | null => {
  // https://github.com/facebook/react/issues/7901
  for (const key in $element) {
    if (key.startsWith('__reactProps$')) {
      // @ts-ignore
      return $element[key][handlerName]
    }
  }

  return null
}

defineCustomElement('sinch-dialog', class extends HTMLElement {
  #$main: HTMLElement
  #$closeButton: HTMLButtonElement
  #$backDrop: HTMLElement
  #$title: HTMLTitleElement

  #$prevActiveElement: HTMLElement | null = null
  constructor() {
    super()

    const shadowRoot = this.attachShadow({
      mode: 'closed',
      delegatesFocus: true,
    })

    shadowRoot.appendChild(template.content.cloneNode(true))
    this.#$main = shadowRoot.querySelector('#main')!
    this.#$closeButton = shadowRoot.querySelector('#close')!
    this.#$backDrop = shadowRoot.querySelector('#backdrop')!
    this.#$title = shadowRoot.querySelector('#title')!
  }

  static get observedAttributes() {
    return ['title']
  }

  attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
    switch (name) {
      case 'title': {
        this.#$title.textContent = newVal

        break
      }
    }
  }

  set title(title: string) {
    updateAttribute(this, 'title', title)
  }

  get title(): string {
    return getAttribute(this, 'title', '')
  }

  connectedCallback() {
    this.setAttribute('role', 'dialog')
    this.#$prevActiveElement = document.activeElement as HTMLElement
    this.#$closeButton.addEventListener('click', this.#onCloseByMouse)
    this.#$backDrop.addEventListener('click', this.#onCloseByMouse)
    this.addEventListener('keydown', this.#onCloseByEsc)
    this.addEventListener('close', this.#onCloseReactHandler)
    document.addEventListener('focusin', this.#focusIn)
  }

  disconnectedCallback() {
    this.#$prevActiveElement = null
    this.#$closeButton.removeEventListener('click', this.#onCloseByMouse)
    this.#$backDrop.removeEventListener('click', this.#onCloseByMouse)
    this.removeEventListener('keydown', this.#onCloseByEsc)
    this.removeEventListener('close', this.#onCloseReactHandler)
    document.removeEventListener('focusin', this.#focusIn)
  }

  #focusIn = (e: Event) => {
    if (e.target === this) {
      return
    }

    if (!this.contains(e.target as Node)) {
      this.#$closeButton.focus()
    }
  }

  #onCloseByMouse = (e: MouseEvent) => {
    e.stopPropagation()
    this.#onClose()
  }

  #onCloseByEsc = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape': {
        e.preventDefault()
        e.stopPropagation()
        this.#onClose()

        break
      }
    }
  }

  #onClose = () => {
    this.#$prevActiveElement?.focus()

    this.dispatchEvent(
      new CustomEvent(
        'close',
        { bubbles: true }
      )
    )
  }

  #onCloseReactHandler = () => {
    getReactEventHandler(this, 'onClose')?.()
  }

  get dialogRect() {
    return getRect(this.#$main)
  }

  get closeButtonRect() {
    return getRect(this.#$closeButton)
  }
})

type TSinchDialogElement = HTMLElement & {
  title: string,
  readonly dialogRect: TRect,
  readonly closeButtonRect: TRect,
}

type TSinchDialogReact = TSinchElementReact<TSinchDialogElement> & {
  title: string,
  'aria-label': string,
  onClose: (event: SyntheticEvent<TSinchDialogElement, CustomEvent<void>>) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-dialog': TSinchDialogReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-dialog': TSinchDialogElement,
  }
}
