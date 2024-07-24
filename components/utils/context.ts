export type TContextName = 'visibility' | 'keydown' | 'size'

export type TContextKeydown = {
  code: string,
  preventDefault: () => void,
}

export type TContextVisibility = boolean

export type TContextSize = string

type TContextDataType = {
  visibility: TContextVisibility,
  keydown: TContextKeydown,
  size: TContextSize,
}

const contextNameToEventMap: Record<TContextName, string> = {
  keydown: '-keydown',
  visibility: '-visibility',
  size: '-size',
}

const shouldPersistContextValue: Record<TContextName, boolean> = {
  keydown: false,
  visibility: true,
  size: true,
}

export class Context<T extends TContextName> {
  #$root: Element
  #listeners = new Set<Element>()
  #name: T
  #isListening = false
  #lastContextValue: TContextDataType[T] | null = null

  constructor($element: Element, name: T) {
    this.#$root = $element
    this.#name = name
  }

  listen(signal: AbortSignal) {
    if (this.#isListening) {
      return
    }

    this.#$root.addEventListener(`-context-connect-${this.#name}`, this.#onListenerConnect as any, { signal })
    this.#$root.addEventListener(`-context-disconnect-${this.#name}`, this.#onListenerDisconnect as any, { signal })
    this.#isListening = true

    signal.addEventListener('abort', () => {
      this.#listeners.clear()
      this.#isListening = false
      this.#lastContextValue = null
    }, { once: true })
  }

  dispatch(contextValue: TContextDataType[T]) {
    for (const el of this.#listeners) {
      el.dispatchEvent(
        new CustomEvent(contextNameToEventMap[this.#name], { detail: contextValue })
      )
    }

    if (shouldPersistContextValue[this.#name]) {
      this.#lastContextValue = contextValue
    }
  }

  #onListenerConnect = (e: CustomEvent<Element>) => {
    e.stopPropagation()
    this.#listeners.add(e.detail)

    if (this.#lastContextValue !== null) {
      e.detail.dispatchEvent(
        new CustomEvent(contextNameToEventMap[this.#name], { detail: this.#lastContextValue })
      )
    }
  }

  #onListenerDisconnect = (e: CustomEvent<Element>) => {
    e.stopPropagation()
    this.#listeners.delete(e.detail)
  }
}

export const subscribeContext = <T extends TContextName>($el: Element, name: T, cb: (e: CustomEvent<TContextDataType[T]>) => void, signal: AbortSignal) => {
  // Safari calls connectedCallback for light-dom elements before elements embedded in shadow-dom
  requestAnimationFrame(() => {
    // Connect listener
    $el.dispatchEvent(
      new CustomEvent(`-context-connect-${name}`, { bubbles: true, composed: true, detail: $el })
    )
  })

  // Listen to context events
  $el.addEventListener(contextNameToEventMap[name], cb as any, { signal })

  signal.addEventListener('abort', () => {
    // Disconnect listener
    $el.dispatchEvent(
      new CustomEvent(`-context-disconnect-${name}`, { bubbles: true, composed: true, detail: $el })
    )
  }, { once: true })
}
