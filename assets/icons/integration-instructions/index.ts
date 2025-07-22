import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconIntegrationInstructions = createIconClass(templateHTML)
defineCustomElement('sinch-icon-integration-instructions', IconIntegrationInstructions)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-integration-instructions': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-integration-instructions': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-integration-instructions': TSinchIconReact,
    }
  }
}
