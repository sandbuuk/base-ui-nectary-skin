import type { TSinchCardLinkElement } from '.'

export const isSinchCardLinkElement = (el: Element): el is TSinchCardLinkElement => {
  return el.tagName === 'SINCH-CARD-LINK'
}
