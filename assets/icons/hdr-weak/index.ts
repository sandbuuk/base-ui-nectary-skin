import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-hdr-weak', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-hdr-weak': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-hdr-weak': TSinchIconElement,
  }
}
