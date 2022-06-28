import type { TSinchDropdownTextOptionElement } from '.'

export const isDropdownTextOptionElement = (element: EventTarget | Element | null): element is TSinchDropdownTextOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-DROPDOWN-TEXT-OPTION'
}
