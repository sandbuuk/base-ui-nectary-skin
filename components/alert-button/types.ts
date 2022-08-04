import type { TSinchElementReact } from '../types'

export type TSinchAlertButtonElement = HTMLElement & {
  text: string,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchAlertButtonReact = TSinchElementReact<TSinchAlertButtonElement> & {
  text: string,
}
