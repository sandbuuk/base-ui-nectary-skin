import { defineCustomElement } from '../../utils'
import { createAnimationClass } from '../create-animation-class'
import animationData from './lottie.json'
import type { TSinchAnimationElement, TSinchAnimationReact, TSinchAnimationProps } from '../types'

export * from '../types'

export const AnimationEngageLogo = createAnimationClass(animationData)
defineCustomElement('sinch-animation-engage-logo', AnimationEngageLogo)

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
