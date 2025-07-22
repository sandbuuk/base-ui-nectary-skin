import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSingleBed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-single-bed', IconSingleBed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-single-bed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-single-bed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-single-bed': TSinchIconReact,
    }
  }
}
