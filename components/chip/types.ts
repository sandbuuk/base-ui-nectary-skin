import type { TSinchChipColor } from './colors'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type { TSinchChipColor }

export type TSinchChipProps = {
  /** Text */
  text: string,
  /** Color, gray by default */
  color?: TSinchChipColor,
  /** Small */
  small?: boolean,
}

export type TSinchChipEvents = {
  /** Click event handler */
  '-click'?: (e: CustomEvent<void>) => void,
  /** Focus event handler */
  '-focus'?: (e: CustomEvent<void>) => void,
  /** Blur event handler */
  '-blur'?: (e: CustomEvent<void>) => void,
}

export type TSinchChipStyle = {
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
}

export type TSinchChip = {
  props: TSinchChipProps,
  events: TSinchChipEvents,
  style: TSinchChipStyle,
}

export type TSinchChipElement = NectaryComponentVanillaByType<TSinchChip>
export type TSinchChipReact = NectaryComponentReactByType<TSinchChip>
