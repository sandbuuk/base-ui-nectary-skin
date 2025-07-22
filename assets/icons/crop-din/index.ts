import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCropDin = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop-din', IconCropDin)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop-din': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-din': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop-din': TSinchIconReact,
    }
  }
}
