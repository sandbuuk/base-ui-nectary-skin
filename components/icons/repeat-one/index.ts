import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-repeat-one', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-repeat-one': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-repeat-one': TSinchIconElement,
  }
}
