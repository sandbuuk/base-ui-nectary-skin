import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchSelectMenuElement = HTMLElement & {
  multiple: boolean,
  value: string,
  rows: number | null,
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'multiple', value: ''): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'rows', value: string): void,
}

export type TSinchSelectMenuReact = TSinchElementReact<TSinchSelectMenuElement> & {
  multiple?: boolean,
  value: string,
  rows?: number,
  'aria-label': string,
  /** @deprecated */
  onChange?: (e: SyntheticEvent<TSinchSelectMenuElement, CustomEvent<string>>) => void,
  'on-change'?: (e: CustomEvent<string>) => void,
}
