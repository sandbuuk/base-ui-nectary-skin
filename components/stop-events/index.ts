import { defineCustomElement, unpackCsv } from '../utils'

export class StopEvents extends HTMLElement {
  #controller: AbortController | null = null
  constructor() {
    super()
    this.style.display = 'contents'
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller
    const events = unpackCsv(this.getAttribute('events')!)

    for (const event of events) {
      this.addEventListener(event, this.#stopEvent, { signal })
    }
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#controller = null
  }

  #stopEvent = (e: Event) => {
    e.stopPropagation()
  }
}

defineCustomElement('sinch-stop-events', StopEvents)
