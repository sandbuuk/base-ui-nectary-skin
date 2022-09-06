import type { TRect, TSinchElementReact } from '../types'

export type TSinchFileDropInvalidType = 'accept' | 'multiple' | 'size'

export type TSinchFileDropElement = HTMLElement & {
  multiple: boolean,
  accept: string | null,
  size: number | null,
  /** Disabled state */
  disabled: boolean,
  invalid: boolean,
  placeholder: string,
  readonly buttonRect: TRect,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<File[]>) => void): void,
  addEventListener(type: '-invalid', listener: (e: CustomEvent<TSinchFileDropInvalidType>) => void): void,
  /** Allows to choose multiple files */
  setAttribute(name: 'multiple', value: ''): void,
  /** [A unique file type specifier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) */
  setAttribute(name: 'accept', value: string): void,
  setAttribute(name: 'size', value: string): void,
  /** Placeholder */
  setAttribute(name: 'placeholder', value: string): void,
  /** Invalid state */
  setAttribute(name: 'invalid', value: ''): void,
}

export type TSinchFileDropReact = TSinchElementReact<TSinchFileDropElement> & {
  multiple?: boolean,
  accept?: string,
  size?: number,
  /** Disabled state */
  disabled?: boolean,
  invalid?: boolean,
  placeholder: string,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<File[]>) => void,
  'on-invalid'?: (e: CustomEvent<TSinchFileDropInvalidType>) => void,
}
