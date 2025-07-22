import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCrop32 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop-3-2', IconCrop32)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop-3-2': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-3-2': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop-3-2': TSinchIconReact,
    }
  }
}
