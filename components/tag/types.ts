import type { TSinchElementReact } from '../types'

export type TSinchTagElement = HTMLElement & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color: string | null,
  /** Small */
  small: boolean,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Color, gray by default */
  setAttribute(name: 'color', value: string): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchTagReact = TSinchElementReact<TSinchTagElement> & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color?: string,
  /** Small */
  small?: boolean,
}
