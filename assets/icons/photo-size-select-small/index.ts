import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhotoSizeSelectSmall = createIconClass(templateHTML)
defineCustomElement('sinch-icon-photo-size-select-small', IconPhotoSizeSelectSmall)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-photo-size-select-small': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-photo-size-select-small': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-photo-size-select-small': TSinchIconReact,
    }
  }
}
