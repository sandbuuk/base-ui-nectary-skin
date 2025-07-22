import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalLaundryService = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-laundry-service', IconLocalLaundryService)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-laundry-service': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-laundry-service': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-laundry-service': TSinchIconReact,
    }
  }
}
