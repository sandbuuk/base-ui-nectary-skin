import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCropFree = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop-free', IconCropFree)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop-free': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-free': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop-free': TSinchIconReact,
    }
  }
}
