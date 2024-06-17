import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-snippet-folder', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-snippet-folder': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-snippet-folder': TSinchIconElement,
  }
}
