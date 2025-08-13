import { defineCustomElement } from '../../utils'
import { createAnimationClass } from '../create-animation-class'
import animationData from './lottie.json'
import type { TSinchAnimationElement, TSinchAnimationReact, TSinchAnimationProps } from '../types'

export * from '../types'

export const AnimationSinchLogo = createAnimationClass(animationData)
defineCustomElement('sinch-animation-sinch-logo', AnimationSinchLogo)

declare global {
  interface NectaryComponentMap {
    'sinch-animation-sinch-logo': {
      props: TSinchAnimationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-animation-sinch-logo': TSinchAnimationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-animation-sinch-logo': TSinchAnimationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-animation-sinch-logo': TSinchAnimationReact,
    }
  }
}
