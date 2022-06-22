import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-archive', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-archive': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-archive': TSinchIconElement,
  }
}
