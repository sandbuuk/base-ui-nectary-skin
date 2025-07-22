import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconApps = createIconClass(templateHTML)
defineCustomElement('sinch-icon-apps', IconApps)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-apps': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-apps': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-apps': TSinchIconReact,
    }
  }
}
