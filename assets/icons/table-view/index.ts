import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTableView = createIconClass(templateHTML)
defineCustomElement('sinch-icon-table-view', IconTableView)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-table-view': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-table-view': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-table-view': TSinchIconReact,
    }
  }
}
