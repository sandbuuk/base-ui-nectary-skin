import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPestControl = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pest-control', IconPestControl)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pest-control': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pest-control': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pest-control': TSinchIconReact,
    }
  }
}
