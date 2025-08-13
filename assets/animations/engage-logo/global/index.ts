import { defineCustomElement } from '../../../utils/element'
import type { TSinchAnimationElement, TSinchAnimationReact, TSinchAnimationProps } from '../../types'

export * from '../../types'
defineCustomElement('sinch-animation-engage-logo')
declare global {
  interface NectaryComponentMap {
    'sinch-animation-engage-logo': {
      props: TSinchAnimationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-animation-engage-logo': TSinchAnimationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-animation-engage-logo': TSinchAnimationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-animation-engage-logo': TSinchAnimationReact,
    }
  }
}
