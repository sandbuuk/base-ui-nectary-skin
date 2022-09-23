import type { TSinchElementReact } from '../types'
import type { TSinchColorName } from '../utils/colors'

export type TSinchTagElement = HTMLElement & {
  color: TSinchColorName | null,
  text: string,
  small: boolean,
  setAttribute(name: 'color', value: TSinchColorName): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchTagReact = TSinchElementReact<TSinchTagElement> & {
  color?: TSinchColorName,
  text: string,
  small?: boolean,
}
