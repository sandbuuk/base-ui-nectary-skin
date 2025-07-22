import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReportOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-report-outline', IconReportOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-report-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-report-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-report-outline': TSinchIconReact,
    }
  }
}
