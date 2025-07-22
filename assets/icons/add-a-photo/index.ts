import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddAPhoto = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-a-photo', IconAddAPhoto)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-a-photo': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-a-photo': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-a-photo': TSinchIconReact,
    }
  }
}
