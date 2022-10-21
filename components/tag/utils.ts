export const getTagColorBg = (id: string): string => {
  return `var(--sinch-tag-color-${id}-bg)`
}

export const getTagColorFg = (id: string): string => {
  return `var(--sinch-tag-color-${id}-fg)`
}

export const assertTagColor = (root: Element, id: string | null): void => {
  if (id === null || window.getComputedStyle(root).getPropertyValue(`--sinch-tag-color-${id}-bg`).length === 0) {
    throw new Error(`Invalid sinch-tag color name: ${id}`)
  }
}
