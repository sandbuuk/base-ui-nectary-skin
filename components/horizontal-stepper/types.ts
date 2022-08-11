import type { TSinchElementReact } from '../types'

export type TSinchHorizontalStepperElement = HTMLElement & {
  index: string,
  setAttribute(name: 'index', value: string): void,
}

export type TSinchHorizontalStepperReact = TSinchElementReact<TSinchHorizontalStepperElement> & {
  index: string,
  'aria-label': string,
}
