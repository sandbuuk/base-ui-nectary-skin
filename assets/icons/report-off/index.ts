import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReportOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-report-off', IconReportOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-report-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-report-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-report-off': TSinchIconReact,
    }
  }
}
