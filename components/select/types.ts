import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchSelectElement = HTMLElement & {
  /** Value that matches one of the options `value` */
  value: string,
  /** Text that appears when it has no value set */
  placeholder: string | null,
  /** Invalid state */
  invalid: boolean,
  /** Disabled */
  disabled: boolean,
  /** Number of visible at the same time options in the list */
  maxVisibleItems: number | null,
  readonly dropdownRect: TRect,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Value that matches one of the options `value` */
  setAttribute(name: 'value', value: string): void,
  /** Text that appears when it has no value set */
  setAttribute(name: 'placeholder', value: string): void,
  /** Invalid state */
  setAttribute(name: 'invalid', value: ''): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Number of visible at the same time options in the list */
  setAttribute(name: 'maxvisibleitems', value: string): void,
}

export type TSinchSelectReact = TSinchElementReact<TSinchSelectElement> & {
  /** Value that matches one of the options `value` */
  value: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Text that appears when it has no value set */
  placeholder?: string,
  /** Invalid state */
  invalid?: boolean,
  /** Disabled */
  disabled?: boolean,
  /** Number of visible at the same time options in the list */
  maxVisibleItems?: number,
  /** @deprecated Change value handler */
  onChange?: (e: SyntheticEvent<TSinchSelectElement, CustomEvent<string>>) => void,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
  /** Focus handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
}
