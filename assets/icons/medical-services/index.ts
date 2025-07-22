import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMedicalServices = createIconClass(templateHTML)
defineCustomElement('sinch-icon-medical-services', IconMedicalServices)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-medical-services': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-medical-services': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-medical-services': TSinchIconReact,
    }
  }
}
