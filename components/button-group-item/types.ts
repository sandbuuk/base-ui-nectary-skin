import type { TSinchButtonEvents, TSinchButtonProps } from '../button/types'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchButtonGroupItemProps = {
  text?: TSinchButtonProps['text'],
  disabled?: TSinchButtonProps['disabled'],
  toggled?: TSinchButtonProps['toggled'],
}

export type TSinchButtonGroupItemEvents = {
  '-blur'?: TSinchButtonEvents['-blur'],
  '-click'?: TSinchButtonEvents['-click'],
  '-focus'?: TSinchButtonEvents['-focus'],
}

export type TSinchButtonGroupItemStyle = {
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
}

export type TSinchButtonGroupItem = {
  props: TSinchButtonGroupItemProps,
  events: TSinchButtonGroupItemEvents,
  style: TSinchButtonGroupItemStyle,
}

export type TSinchButtonGroupItemElement = NectaryComponentVanillaByType<TSinchButtonGroupItem>
export type TSinchButtonGroupItemReact = NectaryComponentReactByType<TSinchButtonGroupItem>

declare global {
  interface NectaryComponentMap {
    'sinch-button-group-item': TSinchButtonGroupItem,
  }

  interface HTMLElementTagNameMap {
    'sinch-button-group-item': NectaryComponentVanilla<'sinch-button-group-item'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-group-item': NectaryComponentReact<'sinch-button-group-item'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-button-group-item': NectaryComponentReact<'sinch-button-group-item'>,
    }
  }
}
