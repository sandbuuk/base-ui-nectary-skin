import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFolderShared = createIconClass(templateHTML)
defineCustomElement('sinch-icon-folder-shared', IconFolderShared)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-folder-shared': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-folder-shared': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-folder-shared': TSinchIconReact,
    }
  }
}
