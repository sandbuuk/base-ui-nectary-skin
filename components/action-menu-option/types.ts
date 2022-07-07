import type { TSinchElementReact } from '../types'

export type TSinchActionMenuOptionElement = HTMLElement & {
  text: string,
  disabled: boolean,
  focus(): void,
  blur(): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchActionMenuOptionReact = TSinchElementReact<TSinchActionMenuOptionElement> & {
  text: string,
  disabled?: boolean,
  'aria-label': string,
}
