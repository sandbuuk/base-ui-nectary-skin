import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalActivity = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-activity', IconLocalActivity)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-activity': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-activity': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-activity': TSinchIconReact,
    }
  }
}
