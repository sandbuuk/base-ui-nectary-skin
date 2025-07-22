import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPieChartOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pie-chart-outline', IconPieChartOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pie-chart-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pie-chart-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pie-chart-outline': TSinchIconReact,
    }
  }
}
