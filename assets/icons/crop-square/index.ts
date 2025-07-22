import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCropSquare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop-square', IconCropSquare)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop-square': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-square': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop-square': TSinchIconReact,
    }
  }
}
