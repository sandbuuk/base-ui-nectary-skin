import { defineCustomElement } from '../../utils'
import { createAnimationClass } from '../create-animation-class'
import animationData from './lottie.json'
import type { TSinchAnimationElement, TSinchAnimationReact } from '../types'

defineCustomElement('sinch-animation-engage-logo', createAnimationClass(animationData))

declare global {
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
    interface IntrinsicElements {
      'sinch-animation-engage-logo': TSinchAnimationReact,
    }
  }
}
