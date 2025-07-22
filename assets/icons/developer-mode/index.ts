import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDeveloperMode = createIconClass(templateHTML)
defineCustomElement('sinch-icon-developer-mode', IconDeveloperMode)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-developer-mode': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-developer-mode': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-developer-mode': TSinchIconReact,
    }
  }
}
