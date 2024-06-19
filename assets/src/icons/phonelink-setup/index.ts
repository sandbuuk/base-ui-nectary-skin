import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-phonelink-setup', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-phonelink-setup': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-phonelink-setup': TSinchIconElement,
  }
}
