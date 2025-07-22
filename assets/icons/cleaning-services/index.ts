import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCleaningServices = createIconClass(templateHTML)
defineCustomElement('sinch-icon-cleaning-services', IconCleaningServices)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-cleaning-services': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cleaning-services': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-cleaning-services': TSinchIconReact,
    }
  }
}
