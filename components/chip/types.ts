import type { TSinchElementReact } from '../types'

export type TSinchChipElement = HTMLElement & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color: string | null,
  /** Small */
  small: boolean,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Color, gray by default */
  setAttribute(name: 'color', value: string): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
}

export type TSinchChipReact = TSinchElementReact<TSinchChipElement> & {
  /** Text */
  text: string,
  /** Color, gray by default */
  color?: string,
  /** Small */
  small?: boolean,
  /** Click event handler */
  'on-click'?: (e: CustomEvent<void>) => void,
  /** Focus event handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur event handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
  /** Label that is used for a11y` */
  'aria-label': string,
} & {
  style?: {
    // Sizes
    '--sinch-comp-chip-size-container-m'?: string,
    '--sinch-comp-chip-size-container-s'?: string,
    '--sinch-comp-chip-size-icon-m'?: string,
    '--sinch-comp-chip-size-icon-s'?: string,

    // Fonts
    '--sinch-comp-chip-font-size-m-label'?: string,
    '--sinch-comp-chip-font-size-s-label'?: string,

    // Colors - Neutral State
    '--sinch-comp-chip-color-neutral-default-background-initial'?: string,
    '--sinch-comp-chip-color-neutral-default-foreground-initial'?: string,
    '--sinch-comp-chip-color-outiline-focus'?: string,

    // Shapes
    '--sinch-comp-chip-shape-radius'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-global-color-icon'?: string,
    '--sinch-global-size-icon'?: string,
    '--sinch-comp-text-font'?: string,
  },
}
