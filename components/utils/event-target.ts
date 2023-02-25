export const isTargetEqual = (e: Event, $elem: HTMLElement): boolean => {
  return e.target === $elem || (e as any).originalTarget === $elem
}

export const getTargetAttribute = (e: Event, attr: string): string | null => {
  return (e.target as HTMLElement).getAttribute(attr) ?? (e as any).originalTarget?.getAttribute(attr) ?? null
}
