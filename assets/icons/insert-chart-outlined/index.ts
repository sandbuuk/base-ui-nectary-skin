import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInsertChartOutlined = createIconClass(templateHTML)
defineCustomElement('sinch-icon-insert-chart-outlined', IconInsertChartOutlined)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-insert-chart-outlined': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-insert-chart-outlined': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-insert-chart-outlined': TSinchIconReact,
    }
  }
}
