import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWbCloudy = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wb-cloudy', IconWbCloudy)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wb-cloudy': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wb-cloudy': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wb-cloudy': TSinchIconReact,
    }
  }
}
