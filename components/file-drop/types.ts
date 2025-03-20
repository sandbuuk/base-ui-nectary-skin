import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchFileDropInvalidType = 'accept' | 'multiple' | 'size'

export type TSinchFileDropProps = {
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
}

export type TSinchFileDropEvents = {
  /** Change value handler */
  '-change': (e: CustomEvent<File[]>) => void,
  /** Invalid handler */
  '-invalid': (e: CustomEvent<TSinchFileDropInvalidType>) => void,
}

export type TSinchFileDropStyle = {
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
}

export type TSinchFileDrop = {
  props: TSinchFileDropProps,
  events: TSinchFileDropEvents,
  style: TSinchFileDropStyle,
}

export type TSinchFileDropElement = NectaryComponentVanillaByType<TSinchFileDrop>
export type TSinchFileDropReact = NectaryComponentReactByType<TSinchFileDrop>
