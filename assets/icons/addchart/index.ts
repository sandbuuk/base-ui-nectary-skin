import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddchart = createIconClass(templateHTML)
defineCustomElement('sinch-icon-addchart', IconAddchart)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-addchart': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-addchart': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-addchart': TSinchIconReact,
    }
  }
}
