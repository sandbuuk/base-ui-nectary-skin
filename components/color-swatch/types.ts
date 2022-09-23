import type { TSinchElementReact } from '../types'
import type { TSinchColorName } from '../utils/colors'

export type TSinchColorSwatchElement = HTMLElement & {
  name: TSinchColorName,
  setAttribute(name: 'name', value: TSinchColorName): void,
}

export type TSinchColorSwatchReact = TSinchElementReact<TSinchColorSwatchElement> & {
  name: TSinchColorName,
}
