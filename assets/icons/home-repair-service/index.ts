import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHomeRepairService = createIconClass(templateHTML)
defineCustomElement('sinch-icon-home-repair-service', IconHomeRepairService)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-home-repair-service': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-home-repair-service': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-home-repair-service': TSinchIconReact,
    }
  }
}
