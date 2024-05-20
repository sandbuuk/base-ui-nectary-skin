export const getChipColorBg = (id: string): string => {
  return `var(--sinch-comp-chip-color-${id}-default-background-initial)`
}

export const getChipColorFg = (id: string): string => {
  return `var(--sinch-comp-chip-color-${id}-default-foreground-initial)`
}
