import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewCarousel = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-carousel', IconViewCarousel)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-carousel': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-carousel': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-carousel': TSinchIconReact,
    }
  }
}
