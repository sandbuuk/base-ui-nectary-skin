import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTextRotationAngleup = createIconClass(templateHTML)
defineCustomElement('sinch-icon-text-rotation-angleup', IconTextRotationAngleup)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-text-rotation-angleup': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-rotation-angleup': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-text-rotation-angleup': TSinchIconReact,
    }
  }
}
