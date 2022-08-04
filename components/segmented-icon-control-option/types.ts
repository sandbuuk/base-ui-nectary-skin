import type { TSinchElementReact } from '../types'

export type TSinchSegmentedIconControlOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSegmentedIconControlOptionReact = TSinchElementReact<TSinchSegmentedIconControlOptionElement> & {
  value: string,
  disabled?: boolean,
  'aria-label': string,
}
