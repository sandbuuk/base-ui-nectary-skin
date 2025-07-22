import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExitToApp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-exit-to-app', IconExitToApp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-exit-to-app': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-exit-to-app': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-exit-to-app': TSinchIconReact,
    }
  }
}
