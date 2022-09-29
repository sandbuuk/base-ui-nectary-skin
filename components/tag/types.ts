import type { TSinchElementReact } from '../types'
import type { TSinchColorName } from '../utils/colors'

export type TSinchTagElement = HTMLElement & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color: TSinchColorName | null,
  /** Small */
  small: boolean,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Color, gray by default */
  setAttribute(name: 'color', value: TSinchColorName): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchTagReact = TSinchElementReact<TSinchTagElement> & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color?: TSinchColorName,
  /** Small */
  small?: boolean,
}
