import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-construction', createIconClass(templateHTML))

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
    interface IntrinsicElements {
      'sinch-icon-construction': TSinchIconReact,
    }
  }
}
