import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTextRotationAngledown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-text-rotation-angledown', IconTextRotationAngledown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-text-rotation-angledown': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-rotation-angledown': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-text-rotation-angledown': TSinchIconReact,
    }
  }
}
