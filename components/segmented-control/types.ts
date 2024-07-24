import type { TSinchElementReact } from '../types'

export type TSinchSegmentedControlElement = HTMLElement & {
  value: string,
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
}

export type TSinchSegmentedControlReact = TSinchElementReact<TSinchSegmentedControlElement> & {
  value: string,
  'aria-label': string,
  'on-change'?: (e: CustomEvent<string>) => void,
}
