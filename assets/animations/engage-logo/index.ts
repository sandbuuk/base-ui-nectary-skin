import { defineCustomElement } from '../../utils'
import { createAnimationClass } from '../create-animation-class'
import animationData from './lottie.json'
import type { TSinchAnimationElement, TSinchAnimationReact } from '../types'

defineCustomElement('sinch-animation-engage-logo', createAnimationClass(animationData))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-animation-engage-logo': TSinchAnimationReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-animation-engage-logo': TSinchAnimationElement,
  }
}
