import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchFileInputElement = HTMLElement & {
  /** Value that matches one of the options `value` */
  value: string,
  /** Label */
  label: string,
  /** Text that appears when it has no value set */
  placeholder: string | null,
  /** Disabled */
  disabled: boolean,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Value that matches one of the options `value` */
  setAttribute(name: 'value', value: string): void,
  /** Label */
  setAttribute(name: 'label', value: string): void,
  /** Text that appears when it has no value set */
  setAttribute(name: 'placeholder', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchFileInputReact = TSinchElementReact<TSinchFileInputElement> & {
  /** Value that matches one of the options `value` */
  value: string,
  /** Label */
  label: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Text that appears when it has no value set */
  placeholder?: string,
  /** Disabled */
  disabled?: boolean,
  /** Change value handler */
  onChange?: (e: SyntheticEvent<TSinchFileInputElement, CustomEvent<string>>) => void,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
  /** Focus handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
}
