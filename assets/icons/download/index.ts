import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDownload = createIconClass(templateHTML)
defineCustomElement('sinch-icon-download', IconDownload)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-download': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-download': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-download': TSinchIconReact,
    }
  }
}
