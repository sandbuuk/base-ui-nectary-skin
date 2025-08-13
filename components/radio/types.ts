import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchRadioProps = {
  /** Identification for uncontrolled form submissions */
  name?: string,
  /** Value */
  value?: string,
  /** Invalid state */
  invalid?: boolean,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
}

export type TSinchRadioEvents = {
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchRadioStyle = {
  '--sinch-comp-radio-direction'?: 'row' | 'column',
  '--sinch-comp-radio-gap'?: number | string,
}

export type TSinchRadio = {
  props: TSinchRadioProps,
  events: TSinchRadioEvents,
  style: TSinchRadioStyle,
}

export type TSinchRadioElement = NectaryComponentVanillaByType<TSinchRadio>
export type TSinchRadioReact = NectaryComponentReactByType<TSinchRadio>

declare global {
  interface NectaryComponentMap {
    'sinch-radio': TSinchRadio,
  }

  interface HTMLElementTagNameMap {
    'sinch-radio': NectaryComponentVanilla<'sinch-radio'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-radio': NectaryComponentReact<'sinch-radio'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-radio': NectaryComponentReact<'sinch-radio'>,
    }
  }
}
