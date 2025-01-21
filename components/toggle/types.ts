import type { TSinchElementReact } from '../types'

export type TSinchToggleElement = HTMLElement & {
  checked: boolean,
  small: boolean,
  labeled: boolean,
  disabled: boolean,
  text: string | null,
  addEventListener(type: '-change', listener: (e: CustomEvent<boolean>) => void): void,
  setAttribute(name: 'checked', value: ''): void,
  setAttribute(name: 'small', value: ''): void,
  setAttribute(name: 'labeled', value: ''): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchToggleReact = TSinchElementReact<TSinchToggleElement> & {
  checked?: boolean,
  small?: boolean,
  labeled?: boolean,
  disabled?: boolean,
  text?: string,
  'aria-label': string,
  'on-change'?: (e: CustomEvent<boolean>) => void,
} & {
  style?: {
    // Size Variants
    '--sinch-local-size'?: string,

    // Default State Colors
    '--sinch-comp-toggle-color-default-background-initial'?: string,
    '--sinch-comp-toggle-color-default-knob-background-initial'?: string,
    '--sinch-comp-toggle-color-default-text-inside-initial'?: string,
    '--sinch-comp-toggle-color-default-outline-focus'?: string,
    '--sinch-comp-toggle-color-default-label-initial'?: string,

    // Checked State Colors
    '--sinch-comp-toggle-color-checked-background-initial'?: string,

    // Disabled State Colors
    '--sinch-comp-toggle-color-disabled-background-initial'?: string,
    '--sinch-comp-toggle-color-disabled-label-initial'?: string,

    // Checked Disabled State Colors
    '--sinch-comp-toggle-color-checked-disabled-background-initial'?: string,

    // Shadow Properties
    '--sinch-comp-toggle-shadow-knob-default'?: string,
    '--sinch-comp-toggle-shadow-knob-disabled'?: string,

    // Font Properties
    '--sinch-comp-toggle-font-size-m-inside-text'?: string,
    '--sinch-comp-toggle-font-size-m-label'?: string,
    '--sinch-comp-toggle-font-size-s-label'?: string,
  },
}
