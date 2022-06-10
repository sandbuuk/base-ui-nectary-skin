import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-expand-less', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-expand-less': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-expand-less': TSinchIconElement,
  }
}
