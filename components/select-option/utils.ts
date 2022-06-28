import type { TSinchDropdownTextOptionElement } from '../dropdown-text-option'

export const isSelectOptionElement = (element: EventTarget | Element | null): element is TSinchDropdownTextOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-SELECT-OPTION'
}
