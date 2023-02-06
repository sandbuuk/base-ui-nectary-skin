export const getTagColorBg = (id: string): string => {
  return `var(--sinch-comp-tag-color-${id}-background)`
}

export const getTagColorFg = (id: string): string => {
  return `var(--sinch-comp-tag-color-${id}-foreground)`
}

export const assertTagColor = (root: Element, id: string | null): void => {
  if (id === null || window.getComputedStyle(root).getPropertyValue(`--sinch-comp-tag-color-${id}-background`).length === 0) {
    throw new Error(`Invalid sinch-tag color name: ${id}`)
  }
}
