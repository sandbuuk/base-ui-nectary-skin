import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

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
