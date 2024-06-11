export const isTargetEqual = (e: Event, $elem: HTMLElement): boolean => {
  return e.target === $elem || (e as any).originalTarget === $elem
}

export const getTargetByAttribute = (e: Event, attr: string): HTMLElement | null => {
  if ((e.target as HTMLElement).hasAttribute(attr)) {
    return (e.target as HTMLElement)
  }

  if (((e as any).originalTarget as HTMLElement | undefined)?.hasAttribute(attr) === true) {
    return (e as any).originalTarget as HTMLElement
  }

  return null
}

export const getTargetAttribute = (e: Event, attr: string): string | null => {
  return (e.target as Element).getAttribute(attr) ?? (e as any).originalTarget?.getAttribute(attr) ?? null
}

export const getTargetIndexInParent = (e: Event, parent: Element): number => {
  const indexOf = Array.prototype.indexOf.call(parent.children, e.target)

  if (indexOf >= 0) {
    return indexOf
  }

  const origTgt = (e as any).originalTarget as Element | undefined

  if (origTgt != null) {
    return Array.prototype.indexOf.call(parent.children, origTgt)
  }

  return -1
}
