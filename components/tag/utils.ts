export const getTagColorBg = (id: string): string => {
  return `var(--sinch-comp-tag-color-${id}-background)`
}

export const getTagColorFg = (id: string): string => {
  return `var(--sinch-comp-tag-color-${id}-foreground)`
}
