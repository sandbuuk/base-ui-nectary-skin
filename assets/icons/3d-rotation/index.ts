import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const Icon3dRotation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-3d-rotation', Icon3dRotation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-3d-rotation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-3d-rotation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-3d-rotation': TSinchIconReact,
    }
  }
}
