import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconShowChart = createIconClass(templateHTML)
defineCustomElement('sinch-icon-show-chart', IconShowChart)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-show-chart': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-show-chart': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-show-chart': TSinchIconReact,
    }
  }
}
