import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPieChart = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pie-chart', IconPieChart)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pie-chart': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pie-chart': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pie-chart': TSinchIconReact,
    }
  }
}
