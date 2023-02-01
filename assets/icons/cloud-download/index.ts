import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-cloud-download', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cloud-download': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-cloud-download': TSinchIconElement,
  }
}
