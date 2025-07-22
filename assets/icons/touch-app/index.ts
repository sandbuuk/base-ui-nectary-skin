import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTouchApp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-touch-app', IconTouchApp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-touch-app': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-touch-app': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-touch-app': TSinchIconReact,
    }
  }
}
