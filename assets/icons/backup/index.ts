import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBackup = createIconClass(templateHTML)
defineCustomElement('sinch-icon-backup', IconBackup)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-backup': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-backup': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-backup': TSinchIconReact,
    }
  }
}
