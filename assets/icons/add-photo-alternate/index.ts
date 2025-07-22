import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddPhotoAlternate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-photo-alternate', IconAddPhotoAlternate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-photo-alternate': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-photo-alternate': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-photo-alternate': TSinchIconReact,
    }
  }
}
