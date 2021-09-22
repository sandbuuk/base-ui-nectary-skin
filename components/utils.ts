export type TEventHandler = (arg?: any) => void

export const getEventHandler = (element: HTMLElement, handlerName: string): TEventHandler | null => {
  if (Reflect.has(element, handlerName)) {
    // @ts-expect-error
    return element[handlerName]
  }

  // https://github.com/facebook/react/issues/7901
  for (const key in element) {
    if (key.startsWith('__reactProps$')) {
      // @ts-expect-error
      return element[key][handlerName]
    }
  }

  return null
}

export const defineCustomElement = (name: string, constructor: CustomElementConstructor): void => {
  if (customElements.get(name) == null) {
    customElements.define(name, constructor)
  }
}
