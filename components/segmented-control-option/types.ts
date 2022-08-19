import type { TSinchElementReact } from '../types'

export type TSinchSegmentedControlOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  text: string,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSegmentedControlOptionReact = TSinchElementReact<TSinchSegmentedControlOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
}
