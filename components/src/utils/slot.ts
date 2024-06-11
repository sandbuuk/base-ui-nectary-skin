import type { NectaryElement } from './element'

const isSlotElement = (el: Element): el is HTMLSlotElement => {
  return el.tagName === 'SLOT'
}

export const getFirstSlotElement = (root: HTMLSlotElement, isDeep = false): HTMLElement | null => {
  const el = (root.assignedElements() as HTMLElement[])[0]

  if (el == null) {
    return null
  }

  if (isDeep && isSlotElement(el)) {
    return getFirstSlotElement(el, isDeep)
  }

  return el
}

const getChildren = (root: Element): Element[] => {
  if (isSlotElement(root)) {
    return root.assignedElements()
  }

  return Array.from(root.children)
}

const isFocusable = (el: Element): el is NectaryElement => {
  return (el as NectaryElement).focusable === true
}

export const getFirstFocusableElement = (root: Element): NectaryElement | null => {
  for (const child of getChildren(root)) {
    if (isFocusable(child)) {
      return child
    }

    const resultEl = getFirstFocusableElement(child)

    if (resultEl !== null) {
      return resultEl
    }
  }

  return null
}

export const isElementFocused = ($el: Element | null): boolean => {
  return $el !== null && $el === ($el.getRootNode() as Document).activeElement
}
