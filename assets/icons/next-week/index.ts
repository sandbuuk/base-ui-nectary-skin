import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNextWeek = createIconClass(templateHTML)
defineCustomElement('sinch-icon-next-week', IconNextWeek)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-next-week': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-next-week': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-next-week': TSinchIconReact,
    }
  }
}
