import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSmartButton = createIconClass(templateHTML)
defineCustomElement('sinch-icon-smart-button', IconSmartButton)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-smart-button': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smart-button': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-smart-button': TSinchIconReact,
    }
  }
}
