import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSlideshow = createIconClass(templateHTML)
defineCustomElement('sinch-icon-slideshow', IconSlideshow)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-slideshow': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-slideshow': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-slideshow': TSinchIconReact,
    }
  }
}
