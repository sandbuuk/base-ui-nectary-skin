import type { TSinchElementReact } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchSpinnerElement = HTMLElement & {
  /** Spinner size */
  size: TSinchSize,
  /** Spinner size */
  setAttribute(name: 'size', value: TSinchSize): void,
}

export type TSinchSpinnerReact = TSinchElementReact<TSinchSpinnerElement> & {
  /** Spinner size */
  size?: TSinchSize,
}
