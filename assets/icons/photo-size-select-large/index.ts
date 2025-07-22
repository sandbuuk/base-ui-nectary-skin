import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhotoSizeSelectLarge = createIconClass(templateHTML)
defineCustomElement('sinch-icon-photo-size-select-large', IconPhotoSizeSelectLarge)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-photo-size-select-large': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-photo-size-select-large': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-photo-size-select-large': TSinchIconReact,
    }
  }
}
