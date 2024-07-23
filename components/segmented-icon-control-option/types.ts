import type { TSinchElementReact } from '../types'

export type TSinchSegmentedIconControlOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSegmentedIconControlOptionReact = TSinchElementReact<TSinchSegmentedIconControlOptionElement> & {
  value: string,
  disabled?: boolean,
  'aria-label': string,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
}
