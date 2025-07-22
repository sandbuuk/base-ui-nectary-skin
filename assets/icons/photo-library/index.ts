import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhotoLibrary = createIconClass(templateHTML)
defineCustomElement('sinch-icon-photo-library', IconPhotoLibrary)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-photo-library': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-photo-library': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-photo-library': TSinchIconReact,
    }
  }
}
