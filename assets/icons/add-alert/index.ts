import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddAlert = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-alert', IconAddAlert)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-alert': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-alert': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-alert': TSinchIconReact,
    }
  }
}
