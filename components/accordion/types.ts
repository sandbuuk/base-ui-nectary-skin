import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchAccordionProps = {
  /** Value */
  value: string,
  multiple?: boolean,
}

export type TSinchAccordionEvents = {
  /** Change value handler */
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchAccordion = {
  props: TSinchAccordionProps,
  events: TSinchAccordionEvents,
}

export type TSinchAccordionElement = NectaryComponentVanillaByType<TSinchAccordion>
export type TSinchAccordionReact = NectaryComponentReactByType<TSinchAccordion>
