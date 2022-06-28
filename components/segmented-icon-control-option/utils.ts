import type { TSinchSegmentedIconControlOptionElement } from '.'

export const isSegmentedIconControlOptionElement = (element: EventTarget | Element | null): element is TSinchSegmentedIconControlOptionElement => {
  return element instanceof Element && element.tagName === 'SINCH-SEGMENTED-ICON-CONTROL-OPTION'
}
