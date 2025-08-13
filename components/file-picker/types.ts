import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchFilePickerInvalidType = 'size'

export type TSinchFilePickerProps = {
  /** Allows to choose multiple files */
  multiple?: boolean,
  /** [A unique file type specifier](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) */
  accept?: string,
  /** Max file size in bytes */
  size?: number,
}

export type TSinchFilePickerEvents = {
  /** Change value handler */
  '-change': (e: CustomEvent<File[]>) => void,
  /** Invalid handler */
  '-invalid': (e: CustomEvent<TSinchFilePickerInvalidType>) => void,
}

export type TSinchFilePicker = {
  props: TSinchFilePickerProps,
  events: TSinchFilePickerEvents,
}

export type TSinchFilePickerElement = NectaryComponentVanillaByType<TSinchFilePicker>
export type TSinchFilePickerReact = NectaryComponentReactByType<TSinchFilePicker>

declare global {
  interface NectaryComponentMap {
    'sinch-file-picker': TSinchFilePicker,
  }

  interface HTMLElementTagNameMap {
    'sinch-file-picker': NectaryComponentVanilla<'sinch-file-picker'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-file-picker': NectaryComponentReact<'sinch-file-picker'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-file-picker': NectaryComponentReact<'sinch-file-picker'>,
    }
  }
}
