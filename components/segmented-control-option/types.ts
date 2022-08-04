import type { TSinchElementReact } from '../types'

export type TSinchSegmentedControlOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  text: string,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSegmentedControlOptionReact = TSinchElementReact<TSinchSegmentedControlOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}
