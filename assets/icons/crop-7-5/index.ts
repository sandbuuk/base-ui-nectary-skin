import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCrop75 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop-7-5', IconCrop75)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop-7-5': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-7-5': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop-7-5': TSinchIconReact,
    }
  }
}
