import type { TSinchElementReact } from '../types'

export type TSinchIconButtonElement = HTMLElement & {
  disabled: boolean,
  small: boolean,
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchIconButtonReact = TSinchElementReact<TSinchIconButtonElement> & {
  'aria-label': string,
  disabled?: boolean,
  small?: boolean,
  'on-click'?: (e: CustomEvent<void>) => void,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
}
