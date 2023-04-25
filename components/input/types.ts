import type { TRect, TSinchElementReact } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchInputType = 'text' | 'password'

export type TSinchInputElement = HTMLElement & {
  /** Text field type, `text` by default */
  type: TSinchInputType,
  /** Value */
  value: string,
  /** Text that appears in the text field when it has no value set */
  placeholder: string | null,
  /** The HTML autocomplete attribute */
  autocomplete: string,
  /** Invalid state */
  invalid: boolean,
  /** Disabled */
  disabled: boolean,
  /** Size, `m` by default */
  size: TSinchSize,
  selectionStart: number | null,
  selectionEnd: number | null,
  selectionDirection: 'forward' | 'backward' | 'none' | null,
  readonly clearButtonRect: TRect,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Text field type, `text` by default */
  setAttribute(name: 'type', value: TSinchInputType): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Text that appears in the text field when it has no value set */
  setAttribute(name: 'placeholder', value: string): void,
  /** The HTML autocomplete attribute */
  setAttribute(name: 'autocomplete', value: string): void,
  /** Invalid state */
  setAttribute(name: 'invalid', value: ''): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Size, `m` by default */
  setAttribute(name: 'size', value: TSinchSize): void,
}

export type TSinchInputReact = TSinchElementReact<TSinchInputElement> & {
  /** Controlled value, doesn't change on its own and requres an onChange-value state loop */
  value: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Text field type, `text` by default */
  type?: TSinchInputType,
  /** The HTML autocomplete attribute */
  autocomplete?: string,
  /** Text that appears in the text field when it has no value set */
  placeholder?: string,
  /** Invalid state */
  invalid?: boolean,
  /** Disabled */
  disabled?: boolean,
  /** Size, `m` by default */
  size?: TSinchSize,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
  /** Focus handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
}
