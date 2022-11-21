import type { TSinchElementReact } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchSpinnerElement = HTMLElement & {
  size: TSinchSize,
  setAttribute(name: 'size', value: TSinchSize): void,
}

export type TSinchSpinnerReact = TSinchElementReact<TSinchSpinnerElement> & {
  size?: TSinchSize,
}
