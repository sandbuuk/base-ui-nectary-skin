import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconScreenRotation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-screen-rotation', IconScreenRotation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-screen-rotation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-screen-rotation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-screen-rotation': TSinchIconReact,
    }
  }
}
