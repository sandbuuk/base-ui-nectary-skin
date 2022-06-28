import type { TSinchDropdownCheckboxOptionElement } from '.'

export const isDropdownCheckboxOptionElement = (element: EventTarget | Element | null): element is TSinchDropdownCheckboxOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-DROPDOWN-CHECKBOX-OPTION'
}
