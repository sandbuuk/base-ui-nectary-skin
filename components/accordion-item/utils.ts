import type { TSinchAccordionItemElement } from '.'

export const isAccordionItemElement = (element: EventTarget | Element | null): element is TSinchAccordionItemElement => {
  return element instanceof Element && element.tagName === 'SINCH-ACCORDION-ITEM'
}
