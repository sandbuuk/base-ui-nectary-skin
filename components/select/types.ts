import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchSelectElement = HTMLElement & {
  /** Value that matches one of the options `value` */
  value: string,
  /** Label */
  label: string,
  /** Text that appears when it has no value set */
  placeholder: string | null,
  /** Optional text */
  optionalText: string | null,
  /** Additional text */
  additionalText: string | null,
  /** Invalid text, controls the overall invalid state */
  invalidText: string | null,
  /** Disabled */
  disabled: boolean,
  /** Number of visible at the same time options in the list */
  maxVisibleItems: number | null,
  readonly dropdownRect: TRect,
  /** Change value event */
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Value that matches one of the options `value` */
  setAttribute(name: 'value', value: string): void,
  /** Label */
  setAttribute(name: 'label', value: string): void,
  /** Text that appears when it has no value set */
  setAttribute(name: 'placeholder', value: string): void,
  /** Optional text */
  setAttribute(name: 'optionaltext', value: string): void,
  /** Additional text */
  setAttribute(name: 'additionaltext', value: string): void,
  /** Invalid text, controls the overall invalid state */
  setAttribute(name: 'invalidtext', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Number of visible at the same time options in the list */
  setAttribute(name: 'maxvisibleitems', value: string): void,
}

export type TSinchSelectReact = TSinchElementReact<TSinchSelectElement> & {
  /** Value that matches one of the options `value` */
  value: string,
  /** Label */
  label: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Text that appears when it has no value set */
  placeholder?: string,
  /** Optional text */
  optionalText?: string,
  /** Additional text */
  additionalText?: string,
  /** Invalid text, controls the overall invalid state */
  invalidText?: string,
  /** Disabled */
  disabled?: boolean,
  /** Number of visible at the same time options in the list */
  maxVisibleItems?: number,
  /** Change value handler */
  onChange?: (e: SyntheticEvent<TSinchSelectElement, CustomEvent<string>>) => void,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
}
