import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAssignmentTurnedIn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-assignment-turned-in', IconAssignmentTurnedIn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-assignment-turned-in': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assignment-turned-in': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-assignment-turned-in': TSinchIconReact,
    }
  }
}
