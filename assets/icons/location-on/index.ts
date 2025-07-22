import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocationOn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-location-on', IconLocationOn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-location-on': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-location-on': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-location-on': TSinchIconReact,
    }
  }
}
