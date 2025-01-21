import type { TSinchElementReact } from '../types'

export type TSinchSegmentedIconControlOptionElement = HTMLElement & {
  value: string,
  disabled: boolean,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSegmentedIconControlOptionReact = TSinchElementReact<TSinchSegmentedIconControlOptionElement> & {
  value: string,
  disabled?: boolean,
  'aria-label': string,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
} & {
  style?: {
    // Shape
    '--sinch-comp-segmented-control-shape-radius'?: string,

    // Colors - Default State
    '--sinch-comp-segmented-control-color-default-icon-initial'?: string,
    '--sinch-comp-segmented-control-color-default-border-initial'?: string,
    '--sinch-comp-segmented-control-color-default-background-initial'?: string,
    '--sinch-comp-segmented-control-color-default-background-hover'?: string,
    '--sinch-comp-segmented-control-color-default-outline-focus'?: string,

    // Colors - Checked State
    '--sinch-comp-segmented-control-color-checked-icon-initial'?: string,
    '--sinch-comp-segmented-control-color-checked-border-initial'?: string,
    '--sinch-comp-segmented-control-color-checked-background-initial'?: string,

    // Colors - Disabled State
    '--sinch-comp-segmented-control-color-disabled-icon-initial'?: string,
    '--sinch-comp-segmented-control-color-disabled-border-initial'?: string,
    '--sinch-comp-segmented-control-color-disabled-background-initial'?: string,

    // Size
    '--sinch-comp-segmented-control-size-icon'?: string,
  },
}
