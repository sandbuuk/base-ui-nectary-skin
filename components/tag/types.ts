import type { TSinchElementReact } from '../types'

export type TSinchTagElement = HTMLElement & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color: string | null,
  /** Small */
  small: boolean,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Color, gray by default */
  setAttribute(name: 'color', value: string): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchTagReact = TSinchElementReact<TSinchTagElement> & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color?: string,
  /** Small */
  small?: boolean,
} & {
  style?: {
    // Sizes - Container
    '--sinch-comp-tag-size-container-m'?: string,
    '--sinch-comp-tag-size-container-s'?: string,

    // Sizes - Icon
    '--sinch-comp-tag-size-icon-m'?: string,
    '--sinch-comp-tag-size-icon-s'?: string,

    // Shape
    '--sinch-comp-tag-shape-radius'?: string,

    // Font Sizes
    '--sinch-comp-tag-font-size-m-label'?: string,
    '--sinch-comp-tag-font-size-s-label'?: string,

    // Colors - Default
    '--sinch-comp-tag-color-default-background'?: string,
    '--sinch-comp-tag-color-default-foreground'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-global-color-icon'?: string,
    '--sinch-global-size-icon'?: string,
  },
}
