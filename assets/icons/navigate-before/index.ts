import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-navigate-before', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-navigate-before': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-navigate-before': TSinchIconElement,
  }
}
