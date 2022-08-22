import type { TSinchElementReact } from '../types'

export type TSinchVerticalStepperElement = HTMLElement & {
  index: string,
  setAttribute(name: 'index', value: string): void,
}

export type TSinchVerticalStepperReact = TSinchElementReact<TSinchVerticalStepperElement> & {
  index: string,
  'aria-label': string,
}
