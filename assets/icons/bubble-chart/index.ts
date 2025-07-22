import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBubbleChart = createIconClass(templateHTML)
defineCustomElement('sinch-icon-bubble-chart', IconBubbleChart)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-bubble-chart': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-bubble-chart': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-bubble-chart': TSinchIconReact,
    }
  }
}
