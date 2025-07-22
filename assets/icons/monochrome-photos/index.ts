import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMonochromePhotos = createIconClass(templateHTML)
defineCustomElement('sinch-icon-monochrome-photos', IconMonochromePhotos)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-monochrome-photos': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-monochrome-photos': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-monochrome-photos': TSinchIconReact,
    }
  }
}
