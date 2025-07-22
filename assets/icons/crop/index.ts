import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCrop = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop', IconCrop)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop': TSinchIconReact,
    }
  }
}
