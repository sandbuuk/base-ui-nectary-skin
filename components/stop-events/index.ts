import { defineCustomElement, getCsvSet } from '../utils'

defineCustomElement('sinch-stop-events', class extends HTMLElement {
  constructor() {
    super()
    this.style.display = 'contents'
  }

  connectedCallback() {
    const events = getCsvSet(this.getAttribute('events')!)

    for (const event of events) {
      this.addEventListener(event, this.#stopEvent)
    }
  }

  disconnectedCallback() {
    const events = getCsvSet(this.getAttribute('events')!)

    for (const event of events) {
      this.removeEventListener(event, this.#stopEvent)
    }
  }

  #stopEvent = (e: Event) => {
    e.stopPropagation()
  }
})
