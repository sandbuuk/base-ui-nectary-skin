import type { TSinchElementReact } from '../types'

export type TSinchCardButtonElement = HTMLElement & {
  text: string,
  disabled: boolean,
  focus(): void,
  blur(): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchCardButtonReact = TSinchElementReact<TSinchCardButtonElement> & {
  text: string,
  'aria-label': string,
  disabled?: boolean,
}
