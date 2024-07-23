import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-integration-instructions', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-integration-instructions': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-integration-instructions': TSinchIconElement,
  }
}
