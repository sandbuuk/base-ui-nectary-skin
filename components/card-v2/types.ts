import type { TSinchElementReact } from '../types'

export type TSinchCardV2Element = HTMLElement & {
  /** Disabled */
  disabled: boolean,
  /** Selected */
  selected: boolean,
  /** Clickable
   * @default true if a click event is provided.
   */
  clickable: boolean,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Selected */
  setAttribute(name: 'selected', value: ''): void,
  /** Clickable
   * @default true if a click event is provided.
   */
  setAttribute(name: 'clickable', value: ''): void,
}

export type TSinchCardV2React = TSinchElementReact<TSinchCardV2Element> & {
  /** Disabled */
  disabled?: boolean,
  /** Selected */
  selected?: boolean,
  /** Clickable
   * @default true if a click event is provided.
   */
  clickable?: boolean,
  /** Click even handler */
  'on-click'?: (e: CustomEvent<void>) => void,
} & {
  style?: {
    // Shape
    '--sinch-comp-card-v2-shape-radius'?: string,

    // Shadows
    '--sinch-comp-card-v2-shadow-initial'?: string,
    '--sinch-comp-card-v2-shadow-hover'?: string,
    '--sinch-comp-card-v2-shadow-disabled'?: string,
    '--sinch-comp-card-v2-shadow-active'?: string,

    // Fonts
    '--sinch-comp-card-v2-font-title'?: string,
    '--sinch-comp-card-v2-font-description'?: string,

    // Colors - Default State
    '--sinch-comp-card-v2-color-default-border-initial'?: string,
    '--sinch-comp-card-v2-color-default-border-hover'?: string,
    '--sinch-comp-card-v2-color-default-border-disabled'?: string,
    '--sinch-comp-card-v2-color-default-border-active'?: string,
    '--sinch-comp-card-v2-color-default-background-initial'?: string,
    '--sinch-comp-card-v2-color-default-background-hover'?: string,
    '--sinch-comp-card-v2-color-default-background-disabled'?: string,
    '--sinch-comp-card-v2-color-default-background-active'?: string,
    '--sinch-comp-card-v2-color-default-description-initial'?: string,
    '--sinch-comp-card-v2-color-default-description-disabled'?: string,

    // Colors - Selected State
    '--sinch-comp-card-v2-color-selected-border-initial'?: string,
    '--sinch-comp-card-v2-color-selected-border-hover'?: string,
    '--sinch-comp-card-v2-color-selected-border-disabled'?: string,
    '--sinch-comp-card-v2-color-selected-border-active'?: string,
    '--sinch-comp-card-v2-color-selected-background-initial'?: string,
    '--sinch-comp-card-v2-color-selected-background-hover'?: string,
    '--sinch-comp-card-v2-color-selected-background-disabled'?: string,
    '--sinch-comp-card-v2-color-selected-background-active'?: string,
    '--sinch-comp-card-v2-color-selected-description-initial'?: string,
    '--sinch-comp-card-v2-color-selected-description-disabled'?: string,
  },
}
