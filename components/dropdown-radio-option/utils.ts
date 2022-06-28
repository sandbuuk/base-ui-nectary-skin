import type { TSinchDropdownRadioOptionElement } from '.'

export const isDropdownRadioOptionElement = (element: EventTarget | Element | null): element is TSinchDropdownRadioOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-DROPDOWN-RADIO-OPTION'
}
