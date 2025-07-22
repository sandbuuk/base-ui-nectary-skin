import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReportProblem = createIconClass(templateHTML)
defineCustomElement('sinch-icon-report-problem', IconReportProblem)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-report-problem': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-report-problem': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-report-problem': TSinchIconReact,
    }
  }
}
