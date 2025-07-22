import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRestoreFromTrash = createIconClass(templateHTML)
defineCustomElement('sinch-icon-restore-from-trash', IconRestoreFromTrash)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-restore-from-trash': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-restore-from-trash': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-restore-from-trash': TSinchIconReact,
    }
  }
}
