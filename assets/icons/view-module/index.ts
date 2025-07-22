import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewModule = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-module', IconViewModule)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-module': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-module': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-module': TSinchIconReact,
    }
  }
}
