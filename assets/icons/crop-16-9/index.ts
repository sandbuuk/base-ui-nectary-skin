import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCrop169 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop-16-9', IconCrop169)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop-16-9': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-16-9': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop-16-9': TSinchIconReact,
    }
  }
}
