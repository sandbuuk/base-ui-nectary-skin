import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-skip-previous', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-skip-previous': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-skip-previous': TSinchIconElement,
  }
}
