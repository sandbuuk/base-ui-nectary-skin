import type { TSinchButtonProps } from '../button/types'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchButtonGroupProps = {
  size?: TSinchButtonProps['size'],
  type?: TSinchButtonProps['type'],
  'aria-label': TSinchButtonProps['aria-label'],
}

export type TSinchButtonGroup = {
  props: TSinchButtonGroupProps,
}

export type TSinchButtonGroupElement = NectaryComponentVanillaByType<TSinchButtonGroup>
export type TSinchButtonGroupReact = NectaryComponentReactByType<TSinchButtonGroup>

declare global {
  interface NectaryComponentMap {
    'sinch-button-group': TSinchButtonGroup,
  }

  interface HTMLElementTagNameMap {
    'sinch-button-group': NectaryComponentVanilla<'sinch-button-group'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-button-group': NectaryComponentReact<'sinch-button-group'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-button-group': NectaryComponentReact<'sinch-button-group'>,
    }
  }
}
