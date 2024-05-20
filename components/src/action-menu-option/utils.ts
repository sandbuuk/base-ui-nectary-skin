import type { TSinchActionMenuOptionElement } from './types'

export const isSinchActionMenuOption = (el: EventTarget | null): el is TSinchActionMenuOptionElement => {
  return el instanceof Element && el.tagName === 'SINCH-ACTION-MENU-OPTION'
}
