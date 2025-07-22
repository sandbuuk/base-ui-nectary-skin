import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAspectRatio = createIconClass(templateHTML)
defineCustomElement('sinch-icon-aspect-ratio', IconAspectRatio)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-aspect-ratio': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-aspect-ratio': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-aspect-ratio': TSinchIconReact,
    }
  }
}
