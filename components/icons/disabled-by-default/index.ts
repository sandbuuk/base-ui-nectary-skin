import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-disabled-by-default', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-disabled-by-default': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-disabled-by-default': TSinchIconElement,
  }
}
