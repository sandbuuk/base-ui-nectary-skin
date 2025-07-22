import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconConstruction = createIconClass(templateHTML)
defineCustomElement('sinch-icon-construction', IconConstruction)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-construction': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-construction': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-construction': TSinchIconReact,
    }
  }
}
