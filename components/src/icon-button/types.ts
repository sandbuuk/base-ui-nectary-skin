import type { TRect, TSinchElementReact } from '../types'
import type { TSinchSizeEx } from '../utils/size'

export type TSinchIconButtonType = 'primary' | 'secondary' | 'tertiary'

export type TSinchIconButtonElement = HTMLElement & {
  /** Type, `tertiary` by default */
  type: TSinchIconButtonType,
  /** Size, `m` by default */
  size: TSinchSizeEx,
  /** Disabled */
  disabled: boolean,
  readonly tooltipRect: TRect,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Type, `tertiary` by default */
  setAttribute(name: 'type', value: string): void,
  /** Size, `m` by default */
  setAttribute(name: 'size', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchIconButtonReact = TSinchElementReact<TSinchIconButtonElement> & {
  /** Type, `tertiary` by default */
  type?: TSinchIconButtonType,
  /** Size, `m` by default */
  size?: TSinchSizeEx,
  /** Disabled */
  disabled?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Click event handler */
  'on-click'?: (e: CustomEvent<void>) => void,
  /** Focus event handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur event handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
  /** Tooltip Show Event */
  'on-tooltip-show'?: (e: CustomEvent<void>) => void,
  /** Tooltip Hide Event */
  'on-tooltip-hide'?: (e: CustomEvent<void>) => void,
}
