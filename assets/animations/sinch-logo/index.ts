import { defineCustomElement } from '../../utils'
import { createAnimationClass } from '../create-animation-class'
import animationData from './lottie.json'
import type { TSinchAnimationElement, TSinchAnimationReact, TSinchAnimationProps } from '../types'

defineCustomElement('sinch-animation-sinch-logo', createAnimationClass(animationData))

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
    interface IntrinsicElements {
      'sinch-animation-sinch-logo': TSinchAnimationReact,
    }
  }
}
