import type { TSinchElementReact } from '../types'

export type TSinchSearchOptionElement = HTMLElement & {
  text: string,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchSearchOptionReact = TSinchElementReact<TSinchSearchOptionElement> & {
  text: string,
  'aria-label': string,
}
