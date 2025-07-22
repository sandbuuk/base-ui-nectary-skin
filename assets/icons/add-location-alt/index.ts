import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddLocationAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-location-alt', IconAddLocationAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-location-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-location-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-location-alt': TSinchIconReact,
    }
  }
}
