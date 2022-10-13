export type TContextName = 'visibility' | 'keydown'

export type TContextKeyboard = {
  code: string,
  preventDefault: () => void,
}

export type TContextVisibility = boolean

export class Context {
  #$root: Element
  #listeners = new Set<Element>()
  #name: TContextName
  #isSubscribed = false
  constructor($element: Element, name: TContextName) {
    this.#$root = $element
    this.#name = name
  }

  get elements(): Iterable<Element> {
    return this.#listeners
  }

  subscribe() {
    if (this.#isSubscribed) {
      return
    }

    this.#$root.addEventListener(`-context-connect-${this.#name}`, this.#onConnect as any)
    this.#$root.addEventListener(`-context-disconnect-${this.#name}`, this.#onDisconnect as any)
    this.#isSubscribed = true
  }

  unsubscribe() {
    this.#listeners.clear()
    this.#$root.removeEventListener(`-context-connect-${this.#name}`, this.#onConnect as any)
    this.#$root.removeEventListener(`-context-disconnect-${this.#name}`, this.#onDisconnect as any)
    this.#isSubscribed = false
  }

  #onConnect = (e: CustomEvent<Element>) => {
    e.stopPropagation()
    this.#listeners.add(e.detail)
  }

  #onDisconnect = (e: CustomEvent<Element>) => {
    e.stopPropagation()
    this.#listeners.delete(e.detail)
  }
}

export const dispatchContextConnectEvent = (el: Element, name: TContextName) => {
  // Safari calls connectedCallback for light-dom elements before elements embedded in shadow-dom
  requestAnimationFrame(() => {
    el.dispatchEvent(
      new CustomEvent(`-context-connect-${name}`, { bubbles: true, composed: true, detail: el })
    )
  })
}

export const dispatchContextDisconnectEvent = (el: Element, name: TContextName) => {
  el.dispatchEvent(
    new CustomEvent(`-context-disconnect-${name}`, { bubbles: true, composed: true, detail: el })
  )
}
