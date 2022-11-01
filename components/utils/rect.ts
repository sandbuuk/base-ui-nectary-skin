import { getFirstSlotElement } from './slot'
import type { TRect } from '../types'

export const getRect = (el: Element): TRect => {
  const { x, y, width, height } = el.getBoundingClientRect()

  return { x, y, width, height }
}

export const rectOverlap = (targetRect: TRect, contentRect: TRect): boolean => {
  return targetRect.x < (contentRect.x + contentRect.width) &&
         (targetRect.x + targetRect.width) > contentRect.x &&
         targetRect.y < (contentRect.y + contentRect.height) &&
         (targetRect.y + targetRect.height) > contentRect.y
}

// const NULL_RECT: TRect = {
//   x: 0,
//   y: 0,
//   width: 0,
//   height: 0,
// }

export const getTargetRect = (slot: HTMLSlotElement): TRect | null => {
  const item = getFirstSlotElement(slot, true)

  if (item === null) {
    return null
  }

  if (Reflect.has(item, 'footprintRect')) {
    return (item as any).footprintRect as TRect
  }

  return getRect(item)
}
