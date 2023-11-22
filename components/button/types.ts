import type { TSinchElementReact } from '../types'
import type { TSinchSizeEx } from '../utils/size'

export type TSinchButtonType =
  | 'primary'
  | 'secondary'
  /** @deprecated */
  | 'tertiary'
  | 'subtle-primary'
  | 'subtle-secondary'
  | 'cta-primary'
  | 'cta-secondary'
  | 'destructive'

export type TSinchButtonElement = HTMLElement & {
  /** Button Type */
  type: TSinchButtonType,
  /** Size, `m` by default */
  size: TSinchSizeEx,
  /** Text content */
  text: string,
  /** Disabled */
  disabled: boolean,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Type, `primary` by default */
  setAttribute(attr: 'type', value: TSinchButtonType): void,
  /** Size, `m` by default */
  setAttribute(attr: 'size', value: TSinchSizeEx): void,
  /** Text content */
  setAttribute(attr: 'text', value: string): void,
  /** Disabled */
  setAttribute(attr: 'disabled', value: ''): void,
}

export type TSinchButtonReact = TSinchElementReact<TSinchButtonElement> & {
  /** Button Type */
  type?: TSinchButtonType,
  /** Size, `m` by default */
  size?: TSinchSizeEx,
  /** Text content */
  text?: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
  /** Click event handler */
  'on-click'?: (e: CustomEvent<void>) => void,
  /** Focus event handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur event handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
}
