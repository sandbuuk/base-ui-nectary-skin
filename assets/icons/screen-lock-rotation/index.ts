import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconScreenLockRotation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-screen-lock-rotation', IconScreenLockRotation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-screen-lock-rotation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-screen-lock-rotation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-screen-lock-rotation': TSinchIconReact,
    }
  }
}
