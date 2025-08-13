import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

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

declare global {
  interface NectaryComponentMap {
    'sinch-accordion': TSinchAccordion,
  }

  interface HTMLElementTagNameMap {
    'sinch-accordion': NectaryComponentVanilla<'sinch-accordion'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-accordion': NectaryComponentReact<'sinch-accordion'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-accordion': NectaryComponentReact<'sinch-accordion'>,
    }
  }
}
