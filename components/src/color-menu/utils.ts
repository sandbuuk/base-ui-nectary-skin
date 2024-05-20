export const getParentOption = ($element: Element): Element | null => {
  let $el = $element

  while (!$el.hasAttribute('data-value')) {
    const parent = $el.parentElement

    if (parent === null) {
      return null
    }

    $el = parent
  }

  return $el
}
