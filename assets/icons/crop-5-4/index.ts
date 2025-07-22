import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCrop54 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop-5-4', IconCrop54)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop-5-4': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-5-4': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop-5-4': TSinchIconReact,
    }
  }
}
