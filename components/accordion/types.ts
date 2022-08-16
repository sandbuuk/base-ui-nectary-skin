import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchAccordionElement = HTMLElement & {
  value: string,
  multiple: boolean,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'multiple', value: ''): void,
}

export type TSinchAccordionReact = TSinchElementReact<TSinchAccordionElement> & {
  multiple?: boolean,
  value: string,
  onChange?: (e: SyntheticEvent<TSinchAccordionElement, CustomEvent<string>>) => void,
  'on-change'?: (e: CustomEvent<string>) => void,
}
