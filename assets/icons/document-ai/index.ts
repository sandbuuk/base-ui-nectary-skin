
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-document-ai', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-document-ai': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-document-ai': TSinchIconElement,
  }
}
