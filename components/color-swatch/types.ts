import type { TSinchElementReact } from '../types'
import type { TSinchColorName } from '../utils/colors'

export type TSinchColorSwatchElement = HTMLElement & {
  /** Color name */
  name: TSinchColorName,
  /** Color name */
  setAttribute(name: 'name', value: TSinchColorName): void,
}

export type TSinchColorSwatchReact = TSinchElementReact<TSinchColorSwatchElement> & {
  /** Color name */
  name: TSinchColorName,
}
