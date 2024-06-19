import { defineCustomElement } from '../../utils'
import { createAnimationClass } from '../create-animation-class'
import animationData from './lottie.json'
import type { TSinchAnimationElement, TSinchAnimationReact } from '../types'

defineCustomElement('sinch-animation-sinch-logo', createAnimationClass(animationData))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-animation-sinch-logo': TSinchAnimationReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-animation-sinch-logo': TSinchAnimationElement,
  }
}
