import type { TSinchElementReact } from '../types'
import type { spinnerTypes } from './utils'

export type TSinchSpinnerType = typeof spinnerTypes[number]

export type TSinchSpinnerElement = HTMLElement & {
  type: TSinchSpinnerType,
  setAttribute(name: 'type', value: TSinchSpinnerType): void,
}

export type TSinchSpinnerReact = TSinchElementReact<TSinchSpinnerElement> & {
  type?: TSinchSpinnerType,
  static?: boolean,
}
