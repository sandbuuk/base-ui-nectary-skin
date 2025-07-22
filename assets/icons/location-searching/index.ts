import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocationSearching = createIconClass(templateHTML)
defineCustomElement('sinch-icon-location-searching', IconLocationSearching)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-location-searching': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-location-searching': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-location-searching': TSinchIconReact,
    }
  }
}
