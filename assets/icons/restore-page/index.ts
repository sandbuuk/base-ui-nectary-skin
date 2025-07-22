import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRestorePage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-restore-page', IconRestorePage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-restore-page': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-restore-page': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-restore-page': TSinchIconReact,
    }
  }
}
