import type { TSinchElementReact } from '../types'

export type TSinchAlertButtonElement = HTMLElement & {
  text: string,
  focus(): void,
  blur(): void,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchAlertButtonReact = TSinchElementReact<TSinchAlertButtonElement> & {
  text: string,
}
