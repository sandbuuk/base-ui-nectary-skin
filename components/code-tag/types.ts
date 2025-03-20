import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchCodeTagProps = {
  /** Text content of hyperlink */
  text: string,
}

export type TSinchCodeTagStyle = {
  // Colors - Default State
  '--sinch-comp-code-tag-color-default-text-initial'?: string,
  '--sinch-comp-code-tag-color-default-border-initial'?: string,
  '--sinch-comp-code-tag-color-default-background-initial'?: string,

  // Fonts
  '--sinch-comp-code-tag-font-text'?: string,

  // Shapes
  '--sinch-comp-code-tag-shape-radius'?: string,

  // Global Properties
  '--sinch-global-text-white-space'?: string,
}

export type TSinchCodeTag = {
  props: TSinchCodeTagProps,
  style: TSinchCodeTagStyle,
}

export type TSinchCodeTagElement = NectaryComponentVanillaByType<TSinchCodeTag>
export type TSinchCodeTagReact = NectaryComponentReactByType<TSinchCodeTag>
