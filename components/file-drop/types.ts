import type { TSinchElementReact } from '../types'

export type TSinchFileDropInvalidType = 'accept' | 'multiple' | 'size'

export type TSinchFileDropElement = HTMLElement & {
  /** Allows to choose multiple files */
  multiple: boolean,
  /** [A unique file type specifier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) */
  accept: string | null,
  /** Max file size in bytes */
  size: number | null,
  /** Disabled state */
  disabled: boolean,
  /** Invalid state */
  invalid: boolean,
  /** Placeholder */
  placeholder: string,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<File[]>) => void): void,
  /** Invalid event */
  addEventListener(type: '-invalid', listener: (e: CustomEvent<TSinchFileDropInvalidType>) => void): void,
  /** Allows to choose multiple files */
  setAttribute(name: 'multiple', value: ''): void,
  /** [A unique file type specifier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) */
  setAttribute(name: 'accept', value: string): void,
  /** Max file size in bytes */
  setAttribute(name: 'size', value: string): void,
  /** Placeholder */
  setAttribute(name: 'placeholder', value: string): void,
  /** Invalid state */
  setAttribute(name: 'invalid', value: ''): void,
  /** Disabled state */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchFileDropReact = TSinchElementReact<TSinchFileDropElement> & {
  /** Allows to choose multiple files */
  multiple?: boolean,
  /** [A unique file type specifier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) */
  accept?: string,
  /** Max file size in bytes */
  size?: number,
  /** Disabled state */
  disabled?: boolean,
  /** Invalid state */
  invalid?: boolean,
  /** Placeholder */
  placeholder: string,
  /** Change value handler */
  'on-change': (e: CustomEvent<File[]>) => void,
  /** Invalid handler */
  'on-invalid': (e: CustomEvent<TSinchFileDropInvalidType>) => void,
} & {
  style?: {
    // Shape
    '--sinch-comp-file-drop-shape-radius'?: string,

    // Fonts
    '--sinch-comp-file-drop-font-placeholder'?: string,

    // Colors - Default State
    '--sinch-comp-file-drop-color-default-background-initial'?: string,
    '--sinch-comp-file-drop-color-default-background-active'?: string,
    '--sinch-comp-file-drop-color-default-border-initial'?: string,
    '--sinch-comp-file-drop-color-default-border-active'?: string,
    '--sinch-comp-file-drop-color-default-placeholder-initial'?: string,
    '--sinch-comp-file-drop-color-default-placeholder-active'?: string,

    // Colors - Invalid State
    '--sinch-comp-file-drop-color-invalid-background-initial'?: string,
    '--sinch-comp-file-drop-color-invalid-background-active'?: string,
    '--sinch-comp-file-drop-color-invalid-border-initial'?: string,
    '--sinch-comp-file-drop-color-invalid-border-active'?: string,
    '--sinch-comp-file-drop-color-invalid-placeholder-active'?: string,

    // Colors - Disabled State
    '--sinch-comp-file-drop-color-disabled-background-initial'?: string,
    '--sinch-comp-file-drop-color-disabled-border-initial'?: string,
    '--sinch-comp-file-drop-color-disabled-placeholder-initial'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-comp-text-font'?: string,
  },
}
