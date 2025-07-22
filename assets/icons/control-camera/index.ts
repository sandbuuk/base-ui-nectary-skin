import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconControlCamera = createIconClass(templateHTML)
defineCustomElement('sinch-icon-control-camera', IconControlCamera)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-control-camera': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-control-camera': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-control-camera': TSinchIconReact,
    }
  }
}
