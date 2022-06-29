import type { TSinchCardButtonElement } from '.'

export const isSinchCardButtonElement = (el: Element): el is TSinchCardButtonElement => {
  return el.tagName === 'SINCH-CARD-BUTTON'
}
