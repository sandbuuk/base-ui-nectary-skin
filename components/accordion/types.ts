import type { TSinchElementReact } from '../types'

export type TSinchAccordionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Allows to expand multiple items simultanously */
  multiple: boolean,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Allows to expand multiple items simultanously */
  setAttribute(name: 'multiple', value: ''): void,
}

export type TSinchAccordionReact = TSinchElementReact<TSinchAccordionElement> & {
  /** Value */
  value: string,
  multiple?: boolean,
  /** Allows to expand multiple items simultanously */
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
}
