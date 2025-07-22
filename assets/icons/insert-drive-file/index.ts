import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInsertDriveFile = createIconClass(templateHTML)
defineCustomElement('sinch-icon-insert-drive-file', IconInsertDriveFile)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-insert-drive-file': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-insert-drive-file': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-insert-drive-file': TSinchIconReact,
    }
  }
}
