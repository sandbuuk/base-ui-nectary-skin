export const getOptionValue = ($element: Element): string | null => {
  let $el = $element

  while (!$el.hasAttribute('data-value')) {
    const parent = $el.parentElement

    if (parent === null) {
      return null
    }

    $el = parent
  }

  return $el.getAttribute('data-value')!
}
