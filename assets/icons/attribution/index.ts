import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAttribution = createIconClass(templateHTML)
defineCustomElement('sinch-icon-attribution', IconAttribution)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-attribution': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-attribution': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-attribution': TSinchIconReact,
    }
  }
}
