import { defineCustomElement, unpackCsv } from '../utils'

defineCustomElement('sinch-stop-events', class extends HTMLElement {
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
  }

  #stopEvent = (e: Event) => {
    e.stopPropagation()
  }
})
