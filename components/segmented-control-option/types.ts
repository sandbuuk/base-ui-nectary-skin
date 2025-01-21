import type { TSinchElementReact } from '../types'

export type TSinchSegmentedControlOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  text: string,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSegmentedControlOptionReact = TSinchElementReact<TSinchSegmentedControlOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
} & {
  style?: {
    // Shape
    '--sinch-comp-segmented-control-shape-radius'?: string,

    // Colors - Default State
    '--sinch-comp-segmented-control-color-default-text-initial'?: string,
    '--sinch-comp-segmented-control-color-default-icon-initial'?: string,
    '--sinch-comp-segmented-control-color-default-border-initial'?: string,
    '--sinch-comp-segmented-control-color-default-background-initial'?: string,
    '--sinch-comp-segmented-control-color-default-background-hover'?: string,
    '--sinch-comp-segmented-control-color-default-outline-focus'?: string,

    // Colors - Checked State
    '--sinch-comp-segmented-control-color-checked-text-initial'?: string,
    '--sinch-comp-segmented-control-color-checked-icon-initial'?: string,
    '--sinch-comp-segmented-control-color-checked-border-initial'?: string,
    '--sinch-comp-segmented-control-color-checked-background-initial'?: string,

    // Colors - Disabled State
    '--sinch-comp-segmented-control-color-disabled-text-initial'?: string,
    '--sinch-comp-segmented-control-color-disabled-icon-initial'?: string,
    '--sinch-comp-segmented-control-color-disabled-border-initial'?: string,
    '--sinch-comp-segmented-control-color-disabled-background-initial'?: string,

    // Font
    '--sinch-comp-segmented-control-font-label'?: string,

    // Size
    '--sinch-comp-segmented-control-size-icon'?: string,
  },
}
