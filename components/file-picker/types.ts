import type { TSinchElementReact } from '../types'

export type TSinchFilePickerInvalidType = 'size'

export type TSinchFilePickerElement = HTMLElement & {
  /** Allows to choose multiple files */
  multiple: boolean,
  /** [A unique file type specifier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) */
  accept: string | null,
  /** Max file size in bytes */
  size: number | null,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<File[]>) => void): void,
  /** Invalid event */
  addEventListener(type: '-invalid', listener: (e: CustomEvent<TSinchFilePickerInvalidType>) => void): void,
  /** Allows to choose multiple files */
  setAttribute(name: 'multiple', value: ''): void,
  /** [A unique file type specifier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) */
  setAttribute(name: 'accept', value: string): void,
  /** Max file size in bytes */
  setAttribute(name: 'size', value: string): void,
}

export type TSinchFilePickerReact = TSinchElementReact<TSinchFilePickerElement> & {
  /** Allows to choose multiple files */
  multiple?: boolean,
  /** [A unique file type specifier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) */
  accept?: string,
  /** Max file size in bytes */
  size?: number,
  /** Change value handler */
  'on-change': (e: CustomEvent<File[]>) => void,
  /** Invalid handler */
  'on-invalid'?: (e: CustomEvent<TSinchFilePickerInvalidType>) => void,
}
