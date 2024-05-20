import type { TSinchElementReact } from '../types'

export type TSinchSegmentedIconControlElement = HTMLElement & {
  value: string,
  multiple: boolean,
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'multiple', value: ''): void,
}

export type TSinchSegmentedIconControlReact = TSinchElementReact<TSinchSegmentedIconControlElement> & {
  value: string,
  multiple?: boolean,
  'aria-label': string,
  'on-change'?: (e: CustomEvent<string>) => void,
}
