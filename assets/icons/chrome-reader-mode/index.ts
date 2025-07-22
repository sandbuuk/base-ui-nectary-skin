import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconChromeReaderMode = createIconClass(templateHTML)
defineCustomElement('sinch-icon-chrome-reader-mode', IconChromeReaderMode)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-chrome-reader-mode': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-chrome-reader-mode': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-chrome-reader-mode': TSinchIconReact,
    }
  }
}
