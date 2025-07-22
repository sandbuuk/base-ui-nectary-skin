import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFitnessCenter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fitness-center', IconFitnessCenter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fitness-center': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fitness-center': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fitness-center': TSinchIconReact,
    }
  }
}
