import type { TSinchElementReact } from '../types'

export type TSinchSelectMenuElement = HTMLElement & {
  /** Selected value, CSV when multiple */
  value: string,
  /** How many rows to show and scroll the rest */
  rows: number | null,
  /** Allows multiple selection */
  multiple: boolean,
  /** Enforce the search bar appearing, by default it appears above a certain number of options  */
  searchable: boolean,
  /** Text for search bar's placeholder */
  'search-placeholder': string,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Change value event */
  addEventListener(type: '-search-change', listener: (e: CustomEvent<string>) => void): void,
  /** Selected value, CSV when multiple */
  setAttribute(name: 'value', value: string): void,
  /** How many rows to show and scroll the rest */
  setAttribute(name: 'rows', value: string): void,
  /** Allows multiple selection */
  setAttribute(name: 'multiple', value: ''): void,
}

export type TSinchSelectMenuReact = TSinchElementReact<TSinchSelectMenuElement> & {
  /** Selected value, CSV when multiple */
  value: string,
  /** How many rows to show and scroll the rest */
  rows?: number,
  /** Allows multiple selection */
  multiple?: boolean,
  /** Enforce the search bar appearing, by default it appears above a certain number of options  */
  searchable?: boolean,
  /** Text for search bar's placeholder */
  'search-placeholder'?: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Change value handler */
  'on-search-change'?: (e: CustomEvent<string>) => void,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
}
