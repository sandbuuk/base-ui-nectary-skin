import type { TSinchElementReact } from '../types'

export type TSinchIconButtonElement = HTMLElement & {
  disabled: boolean,
  small: boolean,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchIconButtonReact = TSinchElementReact<TSinchIconButtonElement> & {
  'aria-label': string,
  disabled?: boolean,
  small?: boolean,
}
