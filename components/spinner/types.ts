import type { TSinchElementReact } from '../types'

export type TSinchSpinnerType = 'large' | 'medium' | 'small'

export type TSinchSpinnerElement = HTMLElement & {
  type: TSinchSpinnerType,
  setAttribute(name: 'type', value: TSinchSpinnerType): void,
}

export type TSinchSpinnerReact = TSinchElementReact<TSinchSpinnerElement> & {
  type?: TSinchSpinnerType,
  static?: boolean,
}
