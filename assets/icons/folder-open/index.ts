import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFolderOpen = createIconClass(templateHTML)
defineCustomElement('sinch-icon-folder-open', IconFolderOpen)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-folder-open': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-folder-open': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-folder-open': TSinchIconReact,
    }
  }
}
