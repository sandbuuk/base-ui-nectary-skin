import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLegendToggle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-legend-toggle', IconLegendToggle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-legend-toggle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-legend-toggle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-legend-toggle': TSinchIconReact,
    }
  }
}
