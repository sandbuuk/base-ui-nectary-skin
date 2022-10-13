import type { TRect, TSinchElementReact } from '../types'

export type TSinchIconButtonElement = HTMLElement & {
  /** Disabled */
  disabled: boolean,
  /** Small */
  small: boolean,
  readonly tooltipRect: TRect,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchIconButtonReact = TSinchElementReact<TSinchIconButtonElement> & {
  /** Disabled */
  disabled?: boolean,
  /** Small */
  small?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Click event handler */
  'on-click'?: (e: CustomEvent<void>) => void,
  /** Focus event handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur event handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
}
