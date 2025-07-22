import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBuildCircle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-build-circle', IconBuildCircle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-build-circle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-build-circle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-build-circle': TSinchIconReact,
    }
  }
}
