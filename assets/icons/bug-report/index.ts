import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBugReport = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bug-report', IconBugReport)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bug-report': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bug-report': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bug-report': TSinchIconReact,
    }
  }
}
