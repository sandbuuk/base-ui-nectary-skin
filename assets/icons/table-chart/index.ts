import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTableChart = createIconClass(templateHTML)
defineCustomElement('sinch-icon-table-chart', IconTableChart)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-table-chart': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-table-chart': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-table-chart': TSinchIconReact,
    }
  }
}
