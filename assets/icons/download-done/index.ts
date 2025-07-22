import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDownloadDone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-download-done', IconDownloadDone)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-download-done': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-download-done': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-download-done': TSinchIconReact,
    }
  }
}
