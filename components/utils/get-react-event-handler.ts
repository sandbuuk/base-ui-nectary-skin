export const getReactEventHandler = ($element: HTMLElement, handlerName: string): ((arg?: any) => void) | null => {
  // https://github.com/facebook/react/issues/7901
  for (const key in $element) {
    if (key.startsWith('__reactProps$')) {
      // @ts-ignore
      return $element[key][handlerName]
    }
  }

  return null
}
