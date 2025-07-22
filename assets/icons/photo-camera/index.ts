import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPhotoCamera = createIconClass(templateHTML)
defineCustomElement('sinch-icon-photo-camera', IconPhotoCamera)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-photo-camera': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-photo-camera': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-photo-camera': TSinchIconReact,
    }
  }
}
