import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCropRotate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop-rotate', IconCropRotate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop-rotate': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-rotate': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop-rotate': TSinchIconReact,
    }
  }
}
