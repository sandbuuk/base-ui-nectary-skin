import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFontDownload = createIconClass(templateHTML)
defineCustomElement('sinch-icon-font-download', IconFontDownload)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-font-download': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-font-download': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-font-download': TSinchIconReact,
    }
  }
}
