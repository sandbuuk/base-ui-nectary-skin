import type { TSinchSegmentedControlOptionElement } from '.'

export const isSegmentedControlOptionElement = (element: EventTarget | Element | null): element is TSinchSegmentedControlOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-SEGMENTED-CONTROL-OPTION'
}
