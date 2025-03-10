import type { TSinchButtonElement, TSinchButtonReact } from '../button/types'
import type { TSinchElementReact } from '../types'

export type { TSinchButtonReact }

export type TSinchButtonGroupItemElement = HTMLElement & {
  text: TSinchButtonElement['text'],
  disabled: TSinchButtonElement['disabled'],
  toggled: TSinchButtonElement['toggled'],
  addEventListener: TSinchButtonElement['addEventListener'],
  setAttribute: TSinchButtonElement['setAttribute'],
}

export type TSinchButtonGroupItemReact = TSinchElementReact<TSinchButtonGroupItemElement> & {
  text?: TSinchButtonReact['text'],
  disabled?: TSinchButtonReact['disabled'],
  toggled?: TSinchButtonReact['toggled'],
  'on-blur'?: TSinchButtonReact['on-blur'],
  'on-click'?: TSinchButtonReact['on-click'],
  'on-focus'?: TSinchButtonReact['on-focus'],
  'aria-label': TSinchButtonReact['aria-label'],
} & {
  style?: {
    // Shape Radii - Different Sizes
    '--sinch-comp-button-shape-radius-size-xs'?: string,
    '--sinch-comp-button-shape-radius-size-s'?: string,
    '--sinch-comp-button-shape-radius-size-m'?: string,
    '--sinch-comp-button-shape-radius-size-l'?: string,

    // Button Borders
    '--sinch-button-border'?: string,
    '--sinch-button-border-top'?: string,
    '--sinch-button-border-bottom'?: string,
    '--sinch-button-border-left'?: string,
    '--sinch-button-border-right'?: string,

    // Shape Radius Controls
    '--sinch-button-shape-radius-base'?: string,
    '--sinch-button-shape-radius-top-right'?: string,
    '--sinch-button-shape-radius-top-left'?: string,
    '--sinch-button-shape-radius-bottom-right'?: string,
    '--sinch-button-shape-radius-bottom-left'?: string,
    '--sinch-button-set-size-shape-radius'?: string,

    // Local Variables
    '--sinch-local-divider-color'?: string,

    // Inherited Button Text Colors (for divider)
    '--sinch-comp-button-color-primary-default-text-initial'?: string,
    '--sinch-comp-button-color-secondary-default-text-initial'?: string,
    '--sinch-comp-button-color-subtle-primary-default-text-initial'?: string,
    '--sinch-comp-button-color-subtle-secondary-default-text-initial'?: string,
    '--sinch-comp-button-color-cta-primary-default-text-initial'?: string,
    '--sinch-comp-button-color-cta-secondary-default-text-initial'?: string,
    '--sinch-comp-button-color-danger-default-text-initial'?: string,
  },
}
