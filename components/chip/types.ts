import type { TSinchElementReact } from '../types'
import type { TSinchColorName } from '../utils/colors'

export type TSinchChipElement = HTMLElement & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color: TSinchColorName | null,
  /** Small */
  small: boolean,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Color, gray by default */
  setAttribute(name: 'color', value: TSinchColorName): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchChipReact = TSinchElementReact<TSinchChipElement> & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color?: TSinchColorName,
  /** Small */
  small?: boolean,
  /** Click event handler */
  'on-click'?: (e: CustomEvent<void>) => void,
  /** Focus event handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur event handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
  /** Label that is used for a11y` */
  'aria-label': string,
}
