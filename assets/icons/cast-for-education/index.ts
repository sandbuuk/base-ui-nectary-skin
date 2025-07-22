import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCastForEducation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cast-for-education', IconCastForEducation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cast-for-education': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cast-for-education': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cast-for-education': TSinchIconReact,
    }
  }
}
