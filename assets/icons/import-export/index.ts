import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconImportExport = createIconClass(templateHTML)
defineCustomElement('sinch-icon-import-export', IconImportExport)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-import-export': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-import-export': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-import-export': TSinchIconReact,
    }
  }
}
