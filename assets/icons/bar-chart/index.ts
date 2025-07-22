import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBarChart = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bar-chart', IconBarChart)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bar-chart': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bar-chart': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bar-chart': TSinchIconReact,
    }
  }
}
