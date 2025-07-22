import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewList = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-list', IconViewList)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-list': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-list': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-list': TSinchIconReact,
    }
  }
}
